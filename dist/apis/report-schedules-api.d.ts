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
import { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetDeleteIdsSchema } from '../models';
import { GetInfoSchema } from '../models';
import { GetItemSchema } from '../models';
import { GetListSchema } from '../models';
import { GetRelatedSchema } from '../models';
import { InlineResponse2002 } from '../models';
import { InlineResponse20046 } from '../models';
import { InlineResponse20047 } from '../models';
import { InlineResponse20048 } from '../models';
import { InlineResponse20049 } from '../models';
import { InlineResponse20050 } from '../models';
import { InlineResponse20113 } from '../models';
import { InlineResponse400 } from '../models';
import { RelatedResponseSchema } from '../models';
import { ReportScheduleRestApiPost } from '../models';
import { ReportScheduleRestApiPut } from '../models';
/**
 * ReportSchedulesApi - axios parameter creator
 * @export
 */
export declare const ReportSchedulesApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Deletes multiple report schedules in a bulk operation.
     * @param {GetDeleteIdsSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ReportDelete: (q?: GetDeleteIdsSchema, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Get a list of report schedules, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.
     * @param {GetListSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ReportGet: (q?: GetListSchema, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Get metadata information about this API resource
     * @param {GetInfoSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ReportInfoGet: (q?: GetInfoSchema, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Delete a report schedule
     * @param {number} pk The report schedule pk
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ReportPkDelete: (pk: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Get a report schedule
     * @param {number} pk
     * @param {GetItemSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ReportPkGet: (pk: number, q?: GetItemSchema, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Get a list of report schedule logs, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.
     * @param {number} pk The report schedule id for these logs
     * @param {GetListSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ReportPkLogGet: (pk: number, q?: GetListSchema, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Get a report schedule log
     * @param {number} pk The report schedule pk for log
     * @param {number} logId The log pk
     * @param {GetItemSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ReportPkLogLogIdGet: (pk: number, logId: number, q?: GetItemSchema, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Update a report schedule
     * @param {ReportScheduleRestApiPut} body Report Schedule schema
     * @param {number} pk The Report Schedule pk
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ReportPkPut: (body: ReportScheduleRestApiPut, pk: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Create a report schedule
     * @param {ReportScheduleRestApiPost} body Report Schedule schema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ReportPost: (body: ReportScheduleRestApiPost, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @param {string} columnName
     * @param {GetRelatedSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ReportRelatedColumnNameGet: (columnName: string, q?: GetRelatedSchema, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * ReportSchedulesApi - functional programming interface
 * @export
 */
export declare const ReportSchedulesApiFp: (configuration?: Configuration) => {
    /**
     * Deletes multiple report schedules in a bulk operation.
     * @param {GetDeleteIdsSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ReportDelete(q?: GetDeleteIdsSchema, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse400>>>;
    /**
     * Get a list of report schedules, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.
     * @param {GetListSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ReportGet(q?: GetListSchema, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20046>>>;
    /**
     * Get metadata information about this API resource
     * @param {GetInfoSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ReportInfoGet(q?: GetInfoSchema, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse2002>>>;
    /**
     * Delete a report schedule
     * @param {number} pk The report schedule pk
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ReportPkDelete(pk: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse400>>>;
    /**
     * Get a report schedule
     * @param {number} pk
     * @param {GetItemSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ReportPkGet(pk: number, q?: GetItemSchema, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20047>>>;
    /**
     * Get a list of report schedule logs, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.
     * @param {number} pk The report schedule id for these logs
     * @param {GetListSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ReportPkLogGet(pk: number, q?: GetListSchema, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20049>>>;
    /**
     * Get a report schedule log
     * @param {number} pk The report schedule pk for log
     * @param {number} logId The log pk
     * @param {GetItemSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ReportPkLogLogIdGet(pk: number, logId: number, q?: GetItemSchema, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20050>>>;
    /**
     * Update a report schedule
     * @param {ReportScheduleRestApiPut} body Report Schedule schema
     * @param {number} pk The Report Schedule pk
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ReportPkPut(body: ReportScheduleRestApiPut, pk: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20048>>>;
    /**
     * Create a report schedule
     * @param {ReportScheduleRestApiPost} body Report Schedule schema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ReportPost(body: ReportScheduleRestApiPost, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20113>>>;
    /**
     *
     * @param {string} columnName
     * @param {GetRelatedSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ReportRelatedColumnNameGet(columnName: string, q?: GetRelatedSchema, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<RelatedResponseSchema>>>;
};
/**
 * ReportSchedulesApi - factory interface
 * @export
 */
export declare const ReportSchedulesApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Deletes multiple report schedules in a bulk operation.
     * @param {GetDeleteIdsSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ReportDelete(q?: GetDeleteIdsSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse400>>;
    /**
     * Get a list of report schedules, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.
     * @param {GetListSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ReportGet(q?: GetListSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20046>>;
    /**
     * Get metadata information about this API resource
     * @param {GetInfoSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ReportInfoGet(q?: GetInfoSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse2002>>;
    /**
     * Delete a report schedule
     * @param {number} pk The report schedule pk
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ReportPkDelete(pk: number, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse400>>;
    /**
     * Get a report schedule
     * @param {number} pk
     * @param {GetItemSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ReportPkGet(pk: number, q?: GetItemSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20047>>;
    /**
     * Get a list of report schedule logs, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.
     * @param {number} pk The report schedule id for these logs
     * @param {GetListSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ReportPkLogGet(pk: number, q?: GetListSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20049>>;
    /**
     * Get a report schedule log
     * @param {number} pk The report schedule pk for log
     * @param {number} logId The log pk
     * @param {GetItemSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ReportPkLogLogIdGet(pk: number, logId: number, q?: GetItemSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20050>>;
    /**
     * Update a report schedule
     * @param {ReportScheduleRestApiPut} body Report Schedule schema
     * @param {number} pk The Report Schedule pk
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ReportPkPut(body: ReportScheduleRestApiPut, pk: number, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20048>>;
    /**
     * Create a report schedule
     * @param {ReportScheduleRestApiPost} body Report Schedule schema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ReportPost(body: ReportScheduleRestApiPost, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20113>>;
    /**
     *
     * @param {string} columnName
     * @param {GetRelatedSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ReportRelatedColumnNameGet(columnName: string, q?: GetRelatedSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<RelatedResponseSchema>>;
};
/**
 * ReportSchedulesApi - object-oriented interface
 * @export
 * @class ReportSchedulesApi
 * @extends {BaseAPI}
 */
export declare class ReportSchedulesApi extends BaseAPI {
    /**
     * Deletes multiple report schedules in a bulk operation.
     * @param {GetDeleteIdsSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportSchedulesApi
     */
    apiV1ReportDelete(q?: GetDeleteIdsSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse400>>;
    /**
     * Get a list of report schedules, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.
     * @param {GetListSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportSchedulesApi
     */
    apiV1ReportGet(q?: GetListSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20046>>;
    /**
     * Get metadata information about this API resource
     * @param {GetInfoSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportSchedulesApi
     */
    apiV1ReportInfoGet(q?: GetInfoSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse2002>>;
    /**
     * Delete a report schedule
     * @param {number} pk The report schedule pk
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportSchedulesApi
     */
    apiV1ReportPkDelete(pk: number, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse400>>;
    /**
     * Get a report schedule
     * @param {number} pk
     * @param {GetItemSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportSchedulesApi
     */
    apiV1ReportPkGet(pk: number, q?: GetItemSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20047>>;
    /**
     * Get a list of report schedule logs, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.
     * @param {number} pk The report schedule id for these logs
     * @param {GetListSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportSchedulesApi
     */
    apiV1ReportPkLogGet(pk: number, q?: GetListSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20049>>;
    /**
     * Get a report schedule log
     * @param {number} pk The report schedule pk for log
     * @param {number} logId The log pk
     * @param {GetItemSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportSchedulesApi
     */
    apiV1ReportPkLogLogIdGet(pk: number, logId: number, q?: GetItemSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20050>>;
    /**
     * Update a report schedule
     * @param {ReportScheduleRestApiPut} body Report Schedule schema
     * @param {number} pk The Report Schedule pk
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportSchedulesApi
     */
    apiV1ReportPkPut(body: ReportScheduleRestApiPut, pk: number, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20048>>;
    /**
     * Create a report schedule
     * @param {ReportScheduleRestApiPost} body Report Schedule schema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportSchedulesApi
     */
    apiV1ReportPost(body: ReportScheduleRestApiPost, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20113>>;
    /**
     *
     * @param {string} columnName
     * @param {GetRelatedSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportSchedulesApi
     */
    apiV1ReportRelatedColumnNameGet(columnName: string, q?: GetRelatedSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<RelatedResponseSchema>>;
}
