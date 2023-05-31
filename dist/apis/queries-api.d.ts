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
import { DistincResponseSchema } from '../models';
import { GetDeleteIdsSchema } from '../models';
import { GetExportIdsSchema } from '../models';
import { GetInfoSchema } from '../models';
import { GetItemSchema } from '../models';
import { GetListSchema } from '../models';
import { GetRelatedSchema } from '../models';
import { InlineResponse2002 } from '../models';
import { InlineResponse20042 } from '../models';
import { InlineResponse20043 } from '../models';
import { InlineResponse20044 } from '../models';
import { InlineResponse20045 } from '../models';
import { InlineResponse20051 } from '../models';
import { InlineResponse20052 } from '../models';
import { InlineResponse20053 } from '../models';
import { InlineResponse20114 } from '../models';
import { InlineResponse400 } from '../models';
import { QueriesGetUpdatedSinceSchema } from '../models';
import { RelatedResponseSchema } from '../models';
import { SavedQueryRestApiPost } from '../models';
import { SavedQueryRestApiPut } from '../models';
import { StopQuerySchema } from '../models';
/**
 * QueriesApi - axios parameter creator
 * @export
 */
export declare const QueriesApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @param {string} columnName
     * @param {GetRelatedSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1QueryDistinctColumnNameGet: (columnName: string, q?: GetRelatedSchema, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Get a list of queries, use Rison or JSON query parameters for filtering, sorting, pagination and  for selecting specific columns and metadata.
     * @param {GetListSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1QueryGet: (q?: GetListSchema, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Get query detail information.
     * @param {number} pk
     * @param {GetItemSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1QueryPkGet: (pk: number, q?: GetItemSchema, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @param {string} columnName
     * @param {GetRelatedSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1QueryRelatedColumnNameGet: (columnName: string, q?: GetRelatedSchema, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Manually stop a query with client_id
     * @param {StopQuerySchema} body Stop query schema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1QueryStopPost: (body: StopQuerySchema, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get a list of queries that changed after last_updated_ms
     * @param {QueriesGetUpdatedSinceSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1QueryUpdatedSinceGet: (q?: QueriesGetUpdatedSinceSchema, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Deletes multiple saved queries in a bulk operation.
     * @param {GetDeleteIdsSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1SavedQueryDelete: (q?: GetDeleteIdsSchema, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @param {string} columnName
     * @param {GetRelatedSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1SavedQueryDistinctColumnNameGet: (columnName: string, q?: GetRelatedSchema, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Exports multiple saved queries and downloads them as YAML files
     * @param {GetExportIdsSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1SavedQueryExportGet: (q?: GetExportIdsSchema, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Get a list of saved queries, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.
     * @param {GetListSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1SavedQueryGet: (q?: GetListSchema, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @param {Blob} formData
     * @param {boolean} overwrite
     * @param {string} passwords
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1SavedQueryImportPostForm: (formData: Blob, overwrite: boolean, passwords: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Get metadata information about this API resource
     * @param {GetInfoSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1SavedQueryInfoGet: (q?: GetInfoSchema, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Delete saved query
     * @param {number} pk
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1SavedQueryPkDelete: (pk: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Get a saved query
     * @param {number} pk
     * @param {GetItemSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1SavedQueryPkGet: (pk: number, q?: GetItemSchema, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Update a saved query
     * @param {SavedQueryRestApiPut} body Model schema
     * @param {number} pk
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1SavedQueryPkPut: (body: SavedQueryRestApiPut, pk: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Create a saved query
     * @param {SavedQueryRestApiPost} body Model schema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1SavedQueryPost: (body: SavedQueryRestApiPost, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @param {string} columnName
     * @param {GetRelatedSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1SavedQueryRelatedColumnNameGet: (columnName: string, q?: GetRelatedSchema, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * QueriesApi - functional programming interface
 * @export
 */
export declare const QueriesApiFp: (configuration?: Configuration) => {
    /**
     *
     * @param {string} columnName
     * @param {GetRelatedSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1QueryDistinctColumnNameGet(columnName: string, q?: GetRelatedSchema, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<DistincResponseSchema>>>;
    /**
     * Get a list of queries, use Rison or JSON query parameters for filtering, sorting, pagination and  for selecting specific columns and metadata.
     * @param {GetListSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1QueryGet(q?: GetListSchema, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20042>>>;
    /**
     * Get query detail information.
     * @param {number} pk
     * @param {GetItemSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1QueryPkGet(pk: number, q?: GetItemSchema, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20045>>>;
    /**
     *
     * @param {string} columnName
     * @param {GetRelatedSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1QueryRelatedColumnNameGet(columnName: string, q?: GetRelatedSchema, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<RelatedResponseSchema>>>;
    /**
     *
     * @summary Manually stop a query with client_id
     * @param {StopQuerySchema} body Stop query schema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1QueryStopPost(body: StopQuerySchema, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20043>>>;
    /**
     *
     * @summary Get a list of queries that changed after last_updated_ms
     * @param {QueriesGetUpdatedSinceSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1QueryUpdatedSinceGet(q?: QueriesGetUpdatedSinceSchema, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20044>>>;
    /**
     * Deletes multiple saved queries in a bulk operation.
     * @param {GetDeleteIdsSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1SavedQueryDelete(q?: GetDeleteIdsSchema, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse400>>>;
    /**
     *
     * @param {string} columnName
     * @param {GetRelatedSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1SavedQueryDistinctColumnNameGet(columnName: string, q?: GetRelatedSchema, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<DistincResponseSchema>>>;
    /**
     * Exports multiple saved queries and downloads them as YAML files
     * @param {GetExportIdsSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1SavedQueryExportGet(q?: GetExportIdsSchema, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Blob>>>;
    /**
     * Get a list of saved queries, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.
     * @param {GetListSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1SavedQueryGet(q?: GetListSchema, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20051>>>;
    /**
     *
     * @param {Blob} formData
     * @param {boolean} overwrite
     * @param {string} passwords
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1SavedQueryImportPostForm(formData: Blob, overwrite: boolean, passwords: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse400>>>;
    /**
     * Get metadata information about this API resource
     * @param {GetInfoSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1SavedQueryInfoGet(q?: GetInfoSchema, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse2002>>>;
    /**
     * Delete saved query
     * @param {number} pk
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1SavedQueryPkDelete(pk: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse400>>>;
    /**
     * Get a saved query
     * @param {number} pk
     * @param {GetItemSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1SavedQueryPkGet(pk: number, q?: GetItemSchema, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20052>>>;
    /**
     * Update a saved query
     * @param {SavedQueryRestApiPut} body Model schema
     * @param {number} pk
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1SavedQueryPkPut(body: SavedQueryRestApiPut, pk: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20053>>>;
    /**
     * Create a saved query
     * @param {SavedQueryRestApiPost} body Model schema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1SavedQueryPost(body: SavedQueryRestApiPost, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20114>>>;
    /**
     *
     * @param {string} columnName
     * @param {GetRelatedSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1SavedQueryRelatedColumnNameGet(columnName: string, q?: GetRelatedSchema, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<RelatedResponseSchema>>>;
};
/**
 * QueriesApi - factory interface
 * @export
 */
export declare const QueriesApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @param {string} columnName
     * @param {GetRelatedSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1QueryDistinctColumnNameGet(columnName: string, q?: GetRelatedSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<DistincResponseSchema>>;
    /**
     * Get a list of queries, use Rison or JSON query parameters for filtering, sorting, pagination and  for selecting specific columns and metadata.
     * @param {GetListSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1QueryGet(q?: GetListSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20042>>;
    /**
     * Get query detail information.
     * @param {number} pk
     * @param {GetItemSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1QueryPkGet(pk: number, q?: GetItemSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20045>>;
    /**
     *
     * @param {string} columnName
     * @param {GetRelatedSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1QueryRelatedColumnNameGet(columnName: string, q?: GetRelatedSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<RelatedResponseSchema>>;
    /**
     *
     * @summary Manually stop a query with client_id
     * @param {StopQuerySchema} body Stop query schema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1QueryStopPost(body: StopQuerySchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20043>>;
    /**
     *
     * @summary Get a list of queries that changed after last_updated_ms
     * @param {QueriesGetUpdatedSinceSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1QueryUpdatedSinceGet(q?: QueriesGetUpdatedSinceSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20044>>;
    /**
     * Deletes multiple saved queries in a bulk operation.
     * @param {GetDeleteIdsSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1SavedQueryDelete(q?: GetDeleteIdsSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse400>>;
    /**
     *
     * @param {string} columnName
     * @param {GetRelatedSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1SavedQueryDistinctColumnNameGet(columnName: string, q?: GetRelatedSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<DistincResponseSchema>>;
    /**
     * Exports multiple saved queries and downloads them as YAML files
     * @param {GetExportIdsSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1SavedQueryExportGet(q?: GetExportIdsSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<Blob>>;
    /**
     * Get a list of saved queries, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.
     * @param {GetListSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1SavedQueryGet(q?: GetListSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20051>>;
    /**
     *
     * @param {Blob} formData
     * @param {boolean} overwrite
     * @param {string} passwords
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1SavedQueryImportPostForm(formData: Blob, overwrite: boolean, passwords: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse400>>;
    /**
     * Get metadata information about this API resource
     * @param {GetInfoSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1SavedQueryInfoGet(q?: GetInfoSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse2002>>;
    /**
     * Delete saved query
     * @param {number} pk
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1SavedQueryPkDelete(pk: number, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse400>>;
    /**
     * Get a saved query
     * @param {number} pk
     * @param {GetItemSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1SavedQueryPkGet(pk: number, q?: GetItemSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20052>>;
    /**
     * Update a saved query
     * @param {SavedQueryRestApiPut} body Model schema
     * @param {number} pk
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1SavedQueryPkPut(body: SavedQueryRestApiPut, pk: number, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20053>>;
    /**
     * Create a saved query
     * @param {SavedQueryRestApiPost} body Model schema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1SavedQueryPost(body: SavedQueryRestApiPost, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20114>>;
    /**
     *
     * @param {string} columnName
     * @param {GetRelatedSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1SavedQueryRelatedColumnNameGet(columnName: string, q?: GetRelatedSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<RelatedResponseSchema>>;
};
/**
 * QueriesApi - object-oriented interface
 * @export
 * @class QueriesApi
 * @extends {BaseAPI}
 */
export declare class QueriesApi extends BaseAPI {
    /**
     *
     * @param {string} columnName
     * @param {GetRelatedSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QueriesApi
     */
    apiV1QueryDistinctColumnNameGet(columnName: string, q?: GetRelatedSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<DistincResponseSchema>>;
    /**
     * Get a list of queries, use Rison or JSON query parameters for filtering, sorting, pagination and  for selecting specific columns and metadata.
     * @param {GetListSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QueriesApi
     */
    apiV1QueryGet(q?: GetListSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20042>>;
    /**
     * Get query detail information.
     * @param {number} pk
     * @param {GetItemSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QueriesApi
     */
    apiV1QueryPkGet(pk: number, q?: GetItemSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20045>>;
    /**
     *
     * @param {string} columnName
     * @param {GetRelatedSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QueriesApi
     */
    apiV1QueryRelatedColumnNameGet(columnName: string, q?: GetRelatedSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<RelatedResponseSchema>>;
    /**
     *
     * @summary Manually stop a query with client_id
     * @param {StopQuerySchema} body Stop query schema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QueriesApi
     */
    apiV1QueryStopPost(body: StopQuerySchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20043>>;
    /**
     *
     * @summary Get a list of queries that changed after last_updated_ms
     * @param {QueriesGetUpdatedSinceSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QueriesApi
     */
    apiV1QueryUpdatedSinceGet(q?: QueriesGetUpdatedSinceSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20044>>;
    /**
     * Deletes multiple saved queries in a bulk operation.
     * @param {GetDeleteIdsSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QueriesApi
     */
    apiV1SavedQueryDelete(q?: GetDeleteIdsSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse400>>;
    /**
     *
     * @param {string} columnName
     * @param {GetRelatedSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QueriesApi
     */
    apiV1SavedQueryDistinctColumnNameGet(columnName: string, q?: GetRelatedSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<DistincResponseSchema>>;
    /**
     * Exports multiple saved queries and downloads them as YAML files
     * @param {GetExportIdsSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QueriesApi
     */
    apiV1SavedQueryExportGet(q?: GetExportIdsSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<Blob>>;
    /**
     * Get a list of saved queries, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.
     * @param {GetListSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QueriesApi
     */
    apiV1SavedQueryGet(q?: GetListSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20051>>;
    /**
     *
     * @param {Blob} formData
     * @param {boolean} overwrite
     * @param {string} passwords
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QueriesApi
     */
    apiV1SavedQueryImportPostForm(formData: Blob, overwrite: boolean, passwords: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse400>>;
    /**
     * Get metadata information about this API resource
     * @param {GetInfoSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QueriesApi
     */
    apiV1SavedQueryInfoGet(q?: GetInfoSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse2002>>;
    /**
     * Delete saved query
     * @param {number} pk
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QueriesApi
     */
    apiV1SavedQueryPkDelete(pk: number, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse400>>;
    /**
     * Get a saved query
     * @param {number} pk
     * @param {GetItemSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QueriesApi
     */
    apiV1SavedQueryPkGet(pk: number, q?: GetItemSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20052>>;
    /**
     * Update a saved query
     * @param {SavedQueryRestApiPut} body Model schema
     * @param {number} pk
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QueriesApi
     */
    apiV1SavedQueryPkPut(body: SavedQueryRestApiPut, pk: number, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20053>>;
    /**
     * Create a saved query
     * @param {SavedQueryRestApiPost} body Model schema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QueriesApi
     */
    apiV1SavedQueryPost(body: SavedQueryRestApiPost, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20114>>;
    /**
     *
     * @param {string} columnName
     * @param {GetRelatedSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QueriesApi
     */
    apiV1SavedQueryRelatedColumnNameGet(columnName: string, q?: GetRelatedSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<RelatedResponseSchema>>;
}
