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
 * The InlineResponse20023 model module.
 * @module model/InlineResponse20023
 * @version v1
 */
export class InlineResponse20023 {
  /**
   * Constructs a new <code>InlineResponse20023</code>.
   * @alias module:model/InlineResponse20023
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse20023</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20023} obj Optional instance to populate.
   * @return {module:model/InlineResponse20023} The populated <code>InlineResponse20023</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse20023();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('last_modified_time'))
        obj.lastModifiedTime = ApiClient.convertToType(data['last_modified_time'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
InlineResponse20023.prototype.id = undefined;

/**
 * @member {Number} lastModifiedTime
 */
InlineResponse20023.prototype.lastModifiedTime = undefined;
