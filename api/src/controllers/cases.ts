import * as express from 'express';
import { ICollectionsCases, ICollectionsDatas, IControllerCases, IApplication, IRoute } from '..';
import { Controller } from '../controller';

export class ControllerCases extends Controller implements IControllerCases {

  /**
   * Method to construct instance of Controller Cases
   *
   * @param _collectionDatas ICollectionsDatas
   * @param _collectionCases ICollectionsCases
   * @param _request express.Request
   * @param _response express.Response
   */
  public constructor(
    private _collectionDatas: ICollectionsDatas,
    private _collectionCases: ICollectionsCases,
    private _request?: express.Request,
    private _response?: express.Response
  ) {
    super();
  }

  /**
   * Method to execute on call this controller
   *
   * @return ICollectionsCases
   */
  public getCollection = (): ICollectionsCases => {
    return this._collectionCases.getByCountry(this._collectionDatas.getOrderByDate());
  }

  /**
   * Method to call on create route
   *
   * @param application IApplication
   * @param context IRoute
   * @return void
   */
  public onCreate = (application: IApplication, context: IRoute): void => {
    context.cache = application.controller<IControllerCases>('cases').getCollection();
  }

  /**
   * Method to call on execute route
   *
   * @param application IApplication
   * @param context IRoute
   * @param request express.Request
   * @return void
   */
  public onExecute = (application: IApplication, context: IRoute, request: express.Request): void => {
    const returnData = [];
    const input: number[] | any = request.query.country;
    if (request.query.country && request.query.country.length > 0) {
      context.cache.getData().map(model => {
        if (input.indexOf(model.countryId.toString()) > -1) {
          returnData.push(model);
        }
      });
      context.response = { ...application.view().json(context.cache), data: returnData};
      context.response.meta.total = returnData.length;
    }
  }
}