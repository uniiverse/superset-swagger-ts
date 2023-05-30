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
import {User1} from './User1';

/**
 * The EmbeddedDashboardResponseSchema model module.
 * @module model/EmbeddedDashboardResponseSchema
 * @version v1
 */
export class EmbeddedDashboardResponseSchema {
  /**
   * Constructs a new <code>EmbeddedDashboardResponseSchema</code>.
   * @alias module:model/EmbeddedDashboardResponseSchema
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>EmbeddedDashboardResponseSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmbeddedDashboardResponseSchema} obj Optional instance to populate.
   * @return {module:model/EmbeddedDashboardResponseSchema} The populated <code>EmbeddedDashboardResponseSchema</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EmbeddedDashboardResponseSchema();
      if (data.hasOwnProperty('allowed_domains'))
        obj.allowedDomains = ApiClient.convertToType(data['allowed_domains'], ['String']);
      if (data.hasOwnProperty('changed_by'))
        obj.changedBy = User1.constructFromObject(data['changed_by']);
      if (data.hasOwnProperty('changed_on'))
        obj.changedOn = ApiClient.convertToType(data['changed_on'], 'Date');
      if (data.hasOwnProperty('dashboard_id'))
        obj.dashboardId = ApiClient.convertToType(data['dashboard_id'], 'String');
      if (data.hasOwnProperty('uuid'))
        obj.uuid = ApiClient.convertToType(data['uuid'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Array.<String>} allowedDomains
 */
EmbeddedDashboardResponseSchema.prototype.allowedDomains = undefined;

/**
 * @member {module:model/User1} changedBy
 */
EmbeddedDashboardResponseSchema.prototype.changedBy = undefined;

/**
 * @member {Date} changedOn
 */
EmbeddedDashboardResponseSchema.prototype.changedOn = undefined;

/**
 * @member {String} dashboardId
 */
EmbeddedDashboardResponseSchema.prototype.dashboardId = undefined;

/**
 * @member {String} uuid
 */
EmbeddedDashboardResponseSchema.prototype.uuid = undefined;
