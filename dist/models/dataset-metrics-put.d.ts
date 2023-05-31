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
 * @interface DatasetMetricsPut
 */
export interface DatasetMetricsPut {
    /**
     *
     * @type {string}
     * @memberof DatasetMetricsPut
     */
    d3format?: string | null;
    /**
     *
     * @type {string}
     * @memberof DatasetMetricsPut
     */
    description?: string | null;
    /**
     *
     * @type {string}
     * @memberof DatasetMetricsPut
     */
    expression: string;
    /**
     *
     * @type {string}
     * @memberof DatasetMetricsPut
     */
    extra?: string | null;
    /**
     *
     * @type {number}
     * @memberof DatasetMetricsPut
     */
    id?: number;
    /**
     *
     * @type {string}
     * @memberof DatasetMetricsPut
     */
    metricName: string;
    /**
     *
     * @type {string}
     * @memberof DatasetMetricsPut
     */
    metricType?: string | null;
    /**
     *
     * @type {string}
     * @memberof DatasetMetricsPut
     */
    uuid?: string | null;
    /**
     *
     * @type {string}
     * @memberof DatasetMetricsPut
     */
    verboseName?: string | null;
    /**
     *
     * @type {string}
     * @memberof DatasetMetricsPut
     */
    warningText?: string | null;
}
