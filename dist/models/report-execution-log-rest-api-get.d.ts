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
 * @interface ReportExecutionLogRestApiGet
 */
export interface ReportExecutionLogRestApiGet {
    /**
     *
     * @type {Date}
     * @memberof ReportExecutionLogRestApiGet
     */
    endDttm?: Date | null;
    /**
     *
     * @type {string}
     * @memberof ReportExecutionLogRestApiGet
     */
    errorMessage?: string | null;
    /**
     *
     * @type {number}
     * @memberof ReportExecutionLogRestApiGet
     */
    id?: number;
    /**
     *
     * @type {Date}
     * @memberof ReportExecutionLogRestApiGet
     */
    scheduledDttm: Date;
    /**
     *
     * @type {Date}
     * @memberof ReportExecutionLogRestApiGet
     */
    startDttm?: Date | null;
    /**
     *
     * @type {string}
     * @memberof ReportExecutionLogRestApiGet
     */
    state: string;
    /**
     *
     * @type {string}
     * @memberof ReportExecutionLogRestApiGet
     */
    uuid?: string | null;
    /**
     *
     * @type {number}
     * @memberof ReportExecutionLogRestApiGet
     */
    value?: number | null;
    /**
     *
     * @type {string}
     * @memberof ReportExecutionLogRestApiGet
     */
    valueRowJson?: string | null;
}
