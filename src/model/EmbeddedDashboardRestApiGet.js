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

/**
 * The EmbeddedDashboardRestApiGet model module.
 * @module model/EmbeddedDashboardRestApiGet
 * @version v1
 */
export class EmbeddedDashboardRestApiGet {
  /**
   * Constructs a new <code>EmbeddedDashboardRestApiGet</code>.
   * @alias module:model/EmbeddedDashboardRestApiGet
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>EmbeddedDashboardRestApiGet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmbeddedDashboardRestApiGet} obj Optional instance to populate.
   * @return {module:model/EmbeddedDashboardRestApiGet} The populated <code>EmbeddedDashboardRestApiGet</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EmbeddedDashboardRestApiGet();
      if (data.hasOwnProperty('uuid'))
        obj.uuid = ApiClient.convertToType(data['uuid'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} uuid
 */
EmbeddedDashboardRestApiGet.prototype.uuid = undefined;
