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
 * @interface DatasetRestApiGetSqlMetric
 */
export interface DatasetRestApiGetSqlMetric {
    /**
     * 
     * @type {Date}
     * @memberof DatasetRestApiGetSqlMetric
     */
    changedOn?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof DatasetRestApiGetSqlMetric
     */
    createdOn?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof DatasetRestApiGetSqlMetric
     */
    d3format?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DatasetRestApiGetSqlMetric
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DatasetRestApiGetSqlMetric
     */
    expression: string;
    /**
     * 
     * @type {string}
     * @memberof DatasetRestApiGetSqlMetric
     */
    extra?: string | null;
    /**
     * 
     * @type {number}
     * @memberof DatasetRestApiGetSqlMetric
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof DatasetRestApiGetSqlMetric
     */
    metricName: string;
    /**
     * 
     * @type {string}
     * @memberof DatasetRestApiGetSqlMetric
     */
    metricType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DatasetRestApiGetSqlMetric
     */
    verboseName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DatasetRestApiGetSqlMetric
     */
    warningText?: string | null;
}
