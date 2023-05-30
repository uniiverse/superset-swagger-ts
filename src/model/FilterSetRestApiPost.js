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
 * The FilterSetRestApiPost model module.
 * @module model/FilterSetRestApiPost
 * @version v1
 */
export class FilterSetRestApiPost {
  /**
   * Constructs a new <code>FilterSetRestApiPost</code>.
   * @alias module:model/FilterSetRestApiPost
   * @class
   * @param jsonMetadata {String} 
   * @param name {String} 
   * @param ownerType {module:model/FilterSetRestApiPost.OwnerTypeEnum} 
   */
  constructor(jsonMetadata, name, ownerType) {
    this.jsonMetadata = jsonMetadata;
    this.name = name;
    this.ownerType = ownerType;
  }

  /**
   * Constructs a <code>FilterSetRestApiPost</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FilterSetRestApiPost} obj Optional instance to populate.
   * @return {module:model/FilterSetRestApiPost} The populated <code>FilterSetRestApiPost</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FilterSetRestApiPost();
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('json_metadata'))
        obj.jsonMetadata = ApiClient.convertToType(data['json_metadata'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('owner_id'))
        obj.ownerId = ApiClient.convertToType(data['owner_id'], 'Number');
      if (data.hasOwnProperty('owner_type'))
        obj.ownerType = ApiClient.convertToType(data['owner_type'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} description
 */
FilterSetRestApiPost.prototype.description = undefined;

/**
 * @member {String} jsonMetadata
 */
FilterSetRestApiPost.prototype.jsonMetadata = undefined;

/**
 * @member {String} name
 */
FilterSetRestApiPost.prototype.name = undefined;

/**
 * @member {Number} ownerId
 */
FilterSetRestApiPost.prototype.ownerId = undefined;

/**
 * Allowed values for the <code>ownerType</code> property.
 * @enum {String}
 * @readonly
 */
FilterSetRestApiPost.OwnerTypeEnum = {
  /**
   * value: "User"
   * @const
   */
  user: "User",

  /**
   * value: "Dashboard"
   * @const
   */
  dashboard: "Dashboard"
};
/**
 * @member {module:model/FilterSetRestApiPost.OwnerTypeEnum} ownerType
 */
FilterSetRestApiPost.prototype.ownerType = undefined;
