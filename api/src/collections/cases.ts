import { ICollectionsCases, ICollectionsDatas, IModelCase, IModelData } from '..';
import { Collection } from '../collection';

export class CollectionCases extends Collection implements ICollectionsCases {

  /**
   * Data of collection
   * @param IModelCase[]
   */
  protected _data: IModelCase[] = [];

  /**
   * Number of pages
   * @param number
   */
  protected _pages: number = 1;

  /**
   * Total of records
   * @param number
   */
  protected _total: number = 0;

  /**
   * Method to construct instance of Collection Cases
   *
   * @param _factoryModelCase () => IModelCase
   * @return void
   */
  public constructor(
    private _factoryModelCase: () => IModelCase
  ) {
    super();
  }

  /**
   * Method to get cases from data
   *
   * @param collectionDatas ICollectionsDatas
   * @return ICollectionsCases
   */
  public getByCountry = (collectionDatas: ICollectionsDatas): ICollectionsCases => {
    let prevValueCases: number = 0
    let prevValueDeaths: number = 0
    let prevCountryId: number = 0
    const datas = collectionDatas.getData<IModelData>();
    datas.map((data: IModelData, index: number) => {
      if (prevCountryId !== data.countryId) {
        prevValueCases = 0
        prevValueDeaths = 0
        prevCountryId = data.countryId
      }
      // if (prevValueCases > data.cases) {
      //   prevValueCases = 0
      // }
      const newCases = data.cases - prevValueCases
      prevValueCases = data.cases

      // if (prevValueDeaths > data.deaths) {
      //   prevValueDeaths = 0
      // }
      const newDeaths = data.deaths - prevValueDeaths
      prevValueDeaths = data.deaths

      const model = this.getModelByCountryId(data);
      const metricPopMi = +(data.population / 1000000).toFixed(2);
      const metricPopMiCases = +(data.cases / metricPopMi).toFixed(0);
      const metricPopMiCasesNew = +(newCases / metricPopMi).toFixed(0);
      const metricPopMiDeathsNew = +(newDeaths / metricPopMi).toFixed(0);
      const metricPopMiDeaths = +(data.deaths / metricPopMi).toFixed(0);
      const casesPercentage = +((data.cases * 100) / data.population).toFixed(5);
      const deathsPercentage = +((data.deaths * 100) / data.population).toFixed(5);
      model.data.push([data.timestamp, [data.cases, data.deaths, data.active, newCases, newDeaths], [casesPercentage, deathsPercentage, 0, 0, 0], [metricPopMiCases, metricPopMiDeaths, 0, metricPopMiCasesNew, metricPopMiDeathsNew]]);
    });
    this.sortDataByCountry();
    return this;
  }

  /**
   * Method to get model by country id
   *
   * @param data IModelData
   * @return IModelCase
   */
  private getModelByCountryId = (data: IModelData): IModelCase => {
    let model = this._data.find(x => x.countryId === data.countryId);
    if (!model) {
      model = this._factoryModelCase();
      model.load({ ...data, name: data.countryName, countryPopulation: data.population, countryColor: data.color });
      this._data.push(model);
    }
    this._total = this._data.length;
    return model;
  }

  /**
   * Method to sort data by country name
   *
   * @return void
   */
  private sortDataByCountry = (): void => {
    this._data.sort((a: IModelCase, b: IModelCase): number => {
      if (a.countryName < b.countryName) { return -1; }
      if (a.countryName > b.countryName) { return 1; }
      return 0;
    });
  }
}