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
import {AnnotationLayerRestApiPost} from './AnnotationLayerRestApiPost';

/**
 * The InlineResponse201 model module.
 * @module model/InlineResponse201
 * @version v1
 */
export class InlineResponse201 {
  /**
   * Constructs a new <code>InlineResponse201</code>.
   * @alias module:model/InlineResponse201
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse201</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse201} obj Optional instance to populate.
   * @return {module:model/InlineResponse201} The populated <code>InlineResponse201</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse201();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('result'))
        obj.result = AnnotationLayerRestApiPost.constructFromObject(data['result']);
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
InlineResponse201.prototype.id = undefined;

/**
 * @member {module:model/AnnotationLayerRestApiPost} result
 */
InlineResponse201.prototype.result = undefined;
