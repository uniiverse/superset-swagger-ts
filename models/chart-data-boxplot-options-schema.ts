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
 * @interface ChartDataBoxplotOptionsSchema
 */
export interface ChartDataBoxplotOptionsSchema {
    /**
     * 
     * @type {Array<string>}
     * @memberof ChartDataBoxplotOptionsSchema
     */
    groupby?: Array<string> | null;
    /**
     * Aggregate expressions. Metrics can be passed as both references to datasource metrics (strings), or ad-hoc metricswhich are defined only within the query object. See `ChartDataAdhocMetricSchema` for the structure of ad-hoc metrics. When metrics is undefined or null, the query is executed without a groupby. However, when metrics is an array (length >= 0), a groupby clause is added to the query.
     * @type {Array<any>}
     * @memberof ChartDataBoxplotOptionsSchema
     */
    metrics?: Array<any> | null;
    /**
     * Upper and lower percentiles for percentile whisker type.
     * @type {any}
     * @memberof ChartDataBoxplotOptionsSchema
     */
    percentiles?: any;
    /**
     * Whisker type. Any numpy function will work.
     * @type {string}
     * @memberof ChartDataBoxplotOptionsSchema
     */
    whiskerType: ChartDataBoxplotOptionsSchemaWhiskerTypeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum ChartDataBoxplotOptionsSchemaWhiskerTypeEnum {
    Tukey = 'tukey',
    Minmax = 'min/max',
    Percentile = 'percentile'
}

