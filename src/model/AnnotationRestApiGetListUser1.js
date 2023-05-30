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
 * The AnnotationRestApiGetListUser1 model module.
 * @module model/AnnotationRestApiGetListUser1
 * @version v1
 */
export class AnnotationRestApiGetListUser1 {
  /**
   * Constructs a new <code>AnnotationRestApiGetListUser1</code>.
   * @alias module:model/AnnotationRestApiGetListUser1
   * @class
   * @param firstName {String} 
   */
  constructor(firstName) {
    this.firstName = firstName;
  }

  /**
   * Constructs a <code>AnnotationRestApiGetListUser1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AnnotationRestApiGetListUser1} obj Optional instance to populate.
   * @return {module:model/AnnotationRestApiGetListUser1} The populated <code>AnnotationRestApiGetListUser1</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AnnotationRestApiGetListUser1();
      if (data.hasOwnProperty('first_name'))
        obj.firstName = ApiClient.convertToType(data['first_name'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} firstName
 */
AnnotationRestApiGetListUser1.prototype.firstName = undefined;

/**
 * @member {Number} id
 */
AnnotationRestApiGetListUser1.prototype.id = undefined;
