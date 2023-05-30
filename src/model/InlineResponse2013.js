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
import {CssTemplateRestApiPost} from './CssTemplateRestApiPost';

/**
 * The InlineResponse2013 model module.
 * @module model/InlineResponse2013
 * @version v1
 */
export class InlineResponse2013 {
  /**
   * Constructs a new <code>InlineResponse2013</code>.
   * @alias module:model/InlineResponse2013
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse2013</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2013} obj Optional instance to populate.
   * @return {module:model/InlineResponse2013} The populated <code>InlineResponse2013</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse2013();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('result'))
        obj.result = CssTemplateRestApiPost.constructFromObject(data['result']);
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
InlineResponse2013.prototype.id = undefined;

/**
 * @member {module:model/CssTemplateRestApiPost} result
 */
InlineResponse2013.prototype.result = undefined;
