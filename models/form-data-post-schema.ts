/* tslint:disable */
/* eslint-disable */
/**
 * Superset
 * Superset
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * 
 * @export
 * @interface FormDataPostSchema
 */
export interface FormDataPostSchema {
    /**
     * The chart ID
     * @type {number}
     * @memberof FormDataPostSchema
     */
    chartId?: number;
    /**
     * The datasource ID
     * @type {number}
     * @memberof FormDataPostSchema
     */
    datasourceId: number;
    /**
     * The datasource type
     * @type {string}
     * @memberof FormDataPostSchema
     */
    datasourceType: FormDataPostSchemaDatasourceTypeEnum;
    /**
     * Any type of JSON supported text.
     * @type {string}
     * @memberof FormDataPostSchema
     */
    formData: string;
}

/**
    * @export
    * @enum {string}
    */
export enum FormDataPostSchemaDatasourceTypeEnum {
    SlTable = 'sl_table',
    Table = 'table',
    Dataset = 'dataset',
    Query = 'query',
    SavedQuery = 'saved_query',
    View = 'view'
}

