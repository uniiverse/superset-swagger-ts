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
 * @interface ReportExecutionLogRestApiGetList
 */
export interface ReportExecutionLogRestApiGetList {
    /**
     * 
     * @type {Date}
     * @memberof ReportExecutionLogRestApiGetList
     */
    endDttm?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof ReportExecutionLogRestApiGetList
     */
    errorMessage?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ReportExecutionLogRestApiGetList
     */
    id?: number;
    /**
     * 
     * @type {Date}
     * @memberof ReportExecutionLogRestApiGetList
     */
    scheduledDttm: Date;
    /**
     * 
     * @type {Date}
     * @memberof ReportExecutionLogRestApiGetList
     */
    startDttm?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof ReportExecutionLogRestApiGetList
     */
    state: string;
    /**
     * 
     * @type {string}
     * @memberof ReportExecutionLogRestApiGetList
     */
    uuid?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ReportExecutionLogRestApiGetList
     */
    value?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ReportExecutionLogRestApiGetList
     */
    valueRowJson?: string | null;
}