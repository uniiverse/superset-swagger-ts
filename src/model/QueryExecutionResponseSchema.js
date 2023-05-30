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
import {QueryResult} from './QueryResult';

/**
 * The QueryExecutionResponseSchema model module.
 * @module model/QueryExecutionResponseSchema
 * @version v1
 */
export class QueryExecutionResponseSchema {
  /**
   * Constructs a new <code>QueryExecutionResponseSchema</code>.
   * @alias module:model/QueryExecutionResponseSchema
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>QueryExecutionResponseSchema</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/QueryExecutionResponseSchema} obj Optional instance to populate.
   * @return {module:model/QueryExecutionResponseSchema} The populated <code>QueryExecutionResponseSchema</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new QueryExecutionResponseSchema();
      if (data.hasOwnProperty('columns'))
        obj.columns = ApiClient.convertToType(data['columns'], [Object]);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [Object]);
      if (data.hasOwnProperty('expanded_columns'))
        obj.expandedColumns = ApiClient.convertToType(data['expanded_columns'], [Object]);
      if (data.hasOwnProperty('query'))
        obj.query = QueryResult.constructFromObject(data['query']);
      if (data.hasOwnProperty('query_id'))
        obj.queryId = ApiClient.convertToType(data['query_id'], 'Number');
      if (data.hasOwnProperty('selected_columns'))
        obj.selectedColumns = ApiClient.convertToType(data['selected_columns'], [Object]);
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Array.<Object>} columns
 */
QueryExecutionResponseSchema.prototype.columns = undefined;

/**
 * @member {Array.<Object>} data
 */
QueryExecutionResponseSchema.prototype.data = undefined;

/**
 * @member {Array.<Object>} expandedColumns
 */
QueryExecutionResponseSchema.prototype.expandedColumns = undefined;

/**
 * @member {module:model/QueryResult} query
 */
QueryExecutionResponseSchema.prototype.query = undefined;

/**
 * @member {Number} queryId
 */
QueryExecutionResponseSchema.prototype.queryId = undefined;

/**
 * @member {Array.<Object>} selectedColumns
 */
QueryExecutionResponseSchema.prototype.selectedColumns = undefined;

/**
 * @member {String} status
 */
QueryExecutionResponseSchema.prototype.status = undefined;
