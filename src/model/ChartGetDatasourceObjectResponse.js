/*
 * Superset
 * Superset
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.44
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';
import {ChartGetDatasourceObjectDataResponse} from './ChartGetDatasourceObjectDataResponse';

/**
 * The ChartGetDatasourceObjectResponse model module.
 * @module model/ChartGetDatasourceObjectResponse
 * @version v1
 */
export class ChartGetDatasourceObjectResponse {
  /**
   * Constructs a new <code>ChartGetDatasourceObjectResponse</code>.
   * @alias module:model/ChartGetDatasourceObjectResponse
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ChartGetDatasourceObjectResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChartGetDatasourceObjectResponse} obj Optional instance to populate.
   * @return {module:model/ChartGetDatasourceObjectResponse} The populated <code>ChartGetDatasourceObjectResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ChartGetDatasourceObjectResponse();
      if (data.hasOwnProperty('label'))
        obj.label = ApiClient.convertToType(data['label'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ChartGetDatasourceObjectDataResponse.constructFromObject(data['value']);
    }
    return obj;
  }
}

/**
 * The name of the datasource
 * @member {String} label
 */
ChartGetDatasourceObjectResponse.prototype.label = undefined;

/**
 * @member {module:model/ChartGetDatasourceObjectDataResponse} value
 */
ChartGetDatasourceObjectResponse.prototype.value = undefined;
