import { ICollection } from '../../interfaces';
import { IModelRegexResponse, IModelCountry } from '../..';

export interface ICollectionsDatas extends ICollection {

  /**
   * Method to get data
   *
   * @return ICollectionsDatas
   */
  getOrderByDate(): ICollectionsDatas;

  /**
   * Method to create datas by regex response
   *
   * @param modelCountry IModelCountry
   * @param modelWorldOMeters IModelRegexResponse
   * @return ICollectionsDatas
   */
  createFromIntegration(modelCountry: IModelCountry, modelWorldOMeters: IModelRegexResponse): ICollectionsDatas;
}

export interface ICollectionIntegrationResult {
  total: number;
  success: number;
  error: number;
  duplicate: number;
}