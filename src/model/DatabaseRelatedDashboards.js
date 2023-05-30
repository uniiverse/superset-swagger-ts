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
import {DatabaseRelatedDashboard} from './DatabaseRelatedDashboard';

/**
 * The DatabaseRelatedDashboards model module.
 * @module model/DatabaseRelatedDashboards
 * @version v1
 */
export class DatabaseRelatedDashboards {
  /**
   * Constructs a new <code>DatabaseRelatedDashboards</code>.
   * @alias module:model/DatabaseRelatedDashboards
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DatabaseRelatedDashboards</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DatabaseRelatedDashboards} obj Optional instance to populate.
   * @return {module:model/DatabaseRelatedDashboards} The populated <code>DatabaseRelatedDashboards</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DatabaseRelatedDashboards();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
      if (data.hasOwnProperty('result'))
        obj.result = ApiClient.convertToType(data['result'], [DatabaseRelatedDashboard]);
    }
    return obj;
  }
}

/**
 * Dashboard count
 * @member {Number} count
 */
DatabaseRelatedDashboards.prototype.count = undefined;

/**
 * A list of dashboards
 * @member {Array.<module:model/DatabaseRelatedDashboard>} result
 */
DatabaseRelatedDashboards.prototype.result = undefined;
