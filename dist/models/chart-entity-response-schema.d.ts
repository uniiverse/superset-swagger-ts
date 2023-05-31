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
 * @interface ChartEntityResponseSchema
 */
export interface ChartEntityResponseSchema {
    /**
     * Duration (in seconds) of the caching timeout for this chart. Note this defaults to the datasource/table timeout if undefined.
     * @type {number}
     * @memberof ChartEntityResponseSchema
     */
    cacheTimeout?: number;
    /**
     * Details of the certification
     * @type {string}
     * @memberof ChartEntityResponseSchema
     */
    certificationDetails?: string;
    /**
     * Person or group that has certified this chart
     * @type {string}
     * @memberof ChartEntityResponseSchema
     */
    certifiedBy?: string;
    /**
     * The ISO date that the chart was last changed.
     * @type {string}
     * @memberof ChartEntityResponseSchema
     */
    changedOn?: string;
    /**
     * A description of the chart propose.
     * @type {string}
     * @memberof ChartEntityResponseSchema
     */
    description?: string;
    /**
     * Sanitized HTML version of the chart description.
     * @type {string}
     * @memberof ChartEntityResponseSchema
     */
    descriptionMarkeddown?: string;
    /**
     * Form data from the Explore controls used to form the chart's data query.
     * @type {any}
     * @memberof ChartEntityResponseSchema
     */
    formData?: any;
    /**
     * The id of the chart.
     * @type {number}
     * @memberof ChartEntityResponseSchema
     */
    id?: number;
    /**
     * The name of the chart.
     * @type {string}
     * @memberof ChartEntityResponseSchema
     */
    sliceName?: string;
    /**
     * The URL of the chart.
     * @type {string}
     * @memberof ChartEntityResponseSchema
     */
    sliceUrl?: string;
}
