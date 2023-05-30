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
 * The AdvancedDataTypeConvertSchema model module.
 * @module model/AdvancedDataTypeConvertSchema
 * @version v1
 */
export class AdvancedDataTypeConvertSchema {
  /**
   * Constructs a new <code>AdvancedDataTypeConvertSchema</code>.
   * @alias module:model/AdvancedDataTypeConvertSchema
   * @class
   * @param type {String} 
   * @param values {Array.<Object>} 
   */
  constructor(type, values) {
    this.type = type;
    this.values = values;
  }

  /**
   * Constructs a <code>AdvancedDataTypeConvertSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdvancedDataTypeConvertSchema} obj Optional instance to populate.
   * @return {module:model/AdvancedDataTypeConvertSchema} The populated <code>AdvancedDataTypeConvertSchema</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AdvancedDataTypeConvertSchema();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('values'))
        obj.values = ApiClient.convertToType(data['values'], [Object]);
    }
    return obj;
  }
}

/**
 * @member {String} type
 * @default 'port'
 */
AdvancedDataTypeConvertSchema.prototype.type = 'port';

/**
 * @member {Array.<Object>} values
 */
AdvancedDataTypeConvertSchema.prototype.values = undefined;
