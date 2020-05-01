import fs from 'fs';
import { ICollection, IView, IViewResponse, Logger } from '.';
import moment from 'moment';

export class View implements IView {

  /**
   * Method to get JSON from collection
   *
   * @param collection ICollection
   * @return object
   */
  public json = (collection: ICollection): IViewResponse => {
    return {
      data: collection.getData(),
      meta: {
        page: collection.currentPage(),
        pages: collection.getPages(),
        total: collection.getTotal(),
        date: +moment().utc().format('X')
      }
    };
  }

  /**
   * Method to get HTML
   *
   * @param layout string
   * @param params object
   * @throws File not found
   * @return string
   */
  public html = (layout: string, params?: object): string => {
    const {
      VIEW_INDEX
    } = process.env;

    const file = `${VIEW_INDEX}/${layout}.html`;
    Logger.get().debug(`Load view file from "${file}"`);
    if (fs.existsSync(file)) {
      let data = fs.readFileSync(file).toString();
      data = this.applyParams(data, params || []);
      return data;
    }
    Logger.get().error(`View "${layout}" not found on file "${file}"`);
    throw new Error(`View "${layout}" not found`);
  }

  /**
   * Method to apply parameters into view
   *
   * @param data string
   * @param params any
   * @return string
   */
  private applyParams = (data: string, params?: object): string => {
    for (const i in params) {
      if (typeof params[i] === 'string') {
        data = data.replace(`\$\[${i}\]`, params[i]);
      }
    }
    return data;
  }
}