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
import { DatasetDuplicateSchema } from '../models';
import { DatasetRelatedObjectsResponse } from '../models';
import { DatasetRestApiPost } from '../models';
import { DatasetRestApiPut } from '../models';
import { DistincResponseSchema } from '../models';
import { GetDeleteIdsSchema } from '../models';
import { GetExportIdsSchema } from '../models';
import { GetInfoSchema } from '../models';
import { GetItemSchema } from '../models';
import { GetListSchema } from '../models';
import { GetOrCreateDatasetSchema } from '../models';
import { GetRelatedSchema } from '../models';
import { InlineResponse2002 } from '../models';
import { InlineResponse20032 } from '../models';
import { InlineResponse20033 } from '../models';
import { InlineResponse20034 } from '../models';
import { InlineResponse20035 } from '../models';
import { InlineResponse20110 } from '../models';
import { InlineResponse2019 } from '../models';
import { InlineResponse400 } from '../models';
import { RelatedResponseSchema } from '../models';
/**
 * DatasetsApi - axios parameter creator
 * @export
 */
export declare const DatasetsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Deletes multiple Datasets in a bulk operation.
     * @param {GetDeleteIdsSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetDelete: (q?: GetDeleteIdsSchema, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @param {string} columnName
     * @param {GetRelatedSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetDistinctColumnNameGet: (columnName: string, q?: GetRelatedSchema, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Duplicates a Dataset
     * @param {DatasetDuplicateSchema} body Dataset schema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetDuplicatePost: (body: DatasetDuplicateSchema, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Exports multiple datasets and downloads them as YAML files
     * @param {GetExportIdsSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetExportGet: (q?: GetExportIdsSchema, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Get a list of models
     * @param {GetListSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetGet: (q?: GetListSchema, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Retrieve a table by name, or create it if it does not exist
     * @param {GetOrCreateDatasetSchema} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetGetOrCreatePost: (body: GetOrCreateDatasetSchema, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @param {Blob} formData
     * @param {boolean} overwrite
     * @param {string} passwords
     * @param {boolean} syncColumns
     * @param {boolean} syncMetrics
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetImportPostForm: (formData: Blob, overwrite: boolean, passwords: string, syncColumns: boolean, syncMetrics: boolean, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Get metadata information about this API resource
     * @param {GetInfoSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetInfoGet: (q?: GetInfoSchema, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Delete a Dataset column
     * @param {number} pk The dataset pk for this column
     * @param {number} columnId The column id for this dataset
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetPkColumnColumnIdDelete: (pk: number, columnId: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Deletes a Dataset
     * @param {number} pk
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetPkDelete: (pk: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Get an item model
     * @param {number} pk
     * @param {GetItemSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetPkGet: (pk: number, q?: GetItemSchema, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Delete a Dataset metric
     * @param {number} pk The dataset pk for this column
     * @param {number} metricId The metric id for this dataset
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetPkMetricMetricIdDelete: (pk: number, metricId: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Changes a Dataset
     * @param {DatasetRestApiPut} body Dataset schema
     * @param {number} pk
     * @param {boolean} [overrideColumns]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetPkPut: (body: DatasetRestApiPut, pk: number, overrideColumns?: boolean, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Refreshes and updates columns of a dataset
     * @param {number} pk
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetPkRefreshPut: (pk: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Get charts and dashboards count associated to a dataset
     * @param {number} pk
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetPkRelatedObjectsGet: (pk: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Create a new Dataset
     * @param {DatasetRestApiPost} body Dataset schema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetPost: (body: DatasetRestApiPost, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @param {string} columnName
     * @param {GetRelatedSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetRelatedColumnNameGet: (columnName: string, q?: GetRelatedSchema, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * DatasetsApi - functional programming interface
 * @export
 */
export declare const DatasetsApiFp: (configuration?: Configuration) => {
    /**
     * Deletes multiple Datasets in a bulk operation.
     * @param {GetDeleteIdsSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetDelete(q?: GetDeleteIdsSchema, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse400>>>;
    /**
     *
     * @param {string} columnName
     * @param {GetRelatedSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetDistinctColumnNameGet(columnName: string, q?: GetRelatedSchema, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<DistincResponseSchema>>>;
    /**
     * Duplicates a Dataset
     * @param {DatasetDuplicateSchema} body Dataset schema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetDuplicatePost(body: DatasetDuplicateSchema, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20110>>>;
    /**
     * Exports multiple datasets and downloads them as YAML files
     * @param {GetExportIdsSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetExportGet(q?: GetExportIdsSchema, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<string>>>;
    /**
     * Get a list of models
     * @param {GetListSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetGet(q?: GetListSchema, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20032>>>;
    /**
     *
     * @summary Retrieve a table by name, or create it if it does not exist
     * @param {GetOrCreateDatasetSchema} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetGetOrCreatePost(body: GetOrCreateDatasetSchema, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20033>>>;
    /**
     *
     * @param {Blob} formData
     * @param {boolean} overwrite
     * @param {string} passwords
     * @param {boolean} syncColumns
     * @param {boolean} syncMetrics
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetImportPostForm(formData: Blob, overwrite: boolean, passwords: string, syncColumns: boolean, syncMetrics: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse400>>>;
    /**
     * Get metadata information about this API resource
     * @param {GetInfoSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetInfoGet(q?: GetInfoSchema, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse2002>>>;
    /**
     * Delete a Dataset column
     * @param {number} pk The dataset pk for this column
     * @param {number} columnId The column id for this dataset
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetPkColumnColumnIdDelete(pk: number, columnId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse400>>>;
    /**
     * Deletes a Dataset
     * @param {number} pk
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetPkDelete(pk: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse400>>>;
    /**
     * Get an item model
     * @param {number} pk
     * @param {GetItemSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetPkGet(pk: number, q?: GetItemSchema, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20034>>>;
    /**
     * Delete a Dataset metric
     * @param {number} pk The dataset pk for this column
     * @param {number} metricId The metric id for this dataset
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetPkMetricMetricIdDelete(pk: number, metricId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse400>>>;
    /**
     * Changes a Dataset
     * @param {DatasetRestApiPut} body Dataset schema
     * @param {number} pk
     * @param {boolean} [overrideColumns]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetPkPut(body: DatasetRestApiPut, pk: number, overrideColumns?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20035>>>;
    /**
     * Refreshes and updates columns of a dataset
     * @param {number} pk
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetPkRefreshPut(pk: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse400>>>;
    /**
     * Get charts and dashboards count associated to a dataset
     * @param {number} pk
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetPkRelatedObjectsGet(pk: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<DatasetRelatedObjectsResponse>>>;
    /**
     * Create a new Dataset
     * @param {DatasetRestApiPost} body Dataset schema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetPost(body: DatasetRestApiPost, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse2019>>>;
    /**
     *
     * @param {string} columnName
     * @param {GetRelatedSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetRelatedColumnNameGet(columnName: string, q?: GetRelatedSchema, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<RelatedResponseSchema>>>;
};
/**
 * DatasetsApi - factory interface
 * @export
 */
export declare const DatasetsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Deletes multiple Datasets in a bulk operation.
     * @param {GetDeleteIdsSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetDelete(q?: GetDeleteIdsSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse400>>;
    /**
     *
     * @param {string} columnName
     * @param {GetRelatedSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetDistinctColumnNameGet(columnName: string, q?: GetRelatedSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<DistincResponseSchema>>;
    /**
     * Duplicates a Dataset
     * @param {DatasetDuplicateSchema} body Dataset schema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetDuplicatePost(body: DatasetDuplicateSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20110>>;
    /**
     * Exports multiple datasets and downloads them as YAML files
     * @param {GetExportIdsSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetExportGet(q?: GetExportIdsSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<string>>;
    /**
     * Get a list of models
     * @param {GetListSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetGet(q?: GetListSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20032>>;
    /**
     *
     * @summary Retrieve a table by name, or create it if it does not exist
     * @param {GetOrCreateDatasetSchema} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetGetOrCreatePost(body: GetOrCreateDatasetSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20033>>;
    /**
     *
     * @param {Blob} formData
     * @param {boolean} overwrite
     * @param {string} passwords
     * @param {boolean} syncColumns
     * @param {boolean} syncMetrics
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetImportPostForm(formData: Blob, overwrite: boolean, passwords: string, syncColumns: boolean, syncMetrics: boolean, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse400>>;
    /**
     * Get metadata information about this API resource
     * @param {GetInfoSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetInfoGet(q?: GetInfoSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse2002>>;
    /**
     * Delete a Dataset column
     * @param {number} pk The dataset pk for this column
     * @param {number} columnId The column id for this dataset
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetPkColumnColumnIdDelete(pk: number, columnId: number, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse400>>;
    /**
     * Deletes a Dataset
     * @param {number} pk
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetPkDelete(pk: number, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse400>>;
    /**
     * Get an item model
     * @param {number} pk
     * @param {GetItemSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetPkGet(pk: number, q?: GetItemSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20034>>;
    /**
     * Delete a Dataset metric
     * @param {number} pk The dataset pk for this column
     * @param {number} metricId The metric id for this dataset
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetPkMetricMetricIdDelete(pk: number, metricId: number, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse400>>;
    /**
     * Changes a Dataset
     * @param {DatasetRestApiPut} body Dataset schema
     * @param {number} pk
     * @param {boolean} [overrideColumns]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetPkPut(body: DatasetRestApiPut, pk: number, overrideColumns?: boolean, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20035>>;
    /**
     * Refreshes and updates columns of a dataset
     * @param {number} pk
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetPkRefreshPut(pk: number, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse400>>;
    /**
     * Get charts and dashboards count associated to a dataset
     * @param {number} pk
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetPkRelatedObjectsGet(pk: number, options?: AxiosRequestConfig): Promise<AxiosResponse<DatasetRelatedObjectsResponse>>;
    /**
     * Create a new Dataset
     * @param {DatasetRestApiPost} body Dataset schema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetPost(body: DatasetRestApiPost, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse2019>>;
    /**
     *
     * @param {string} columnName
     * @param {GetRelatedSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1DatasetRelatedColumnNameGet(columnName: string, q?: GetRelatedSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<RelatedResponseSchema>>;
};
/**
 * DatasetsApi - object-oriented interface
 * @export
 * @class DatasetsApi
 * @extends {BaseAPI}
 */
export declare class DatasetsApi extends BaseAPI {
    /**
     * Deletes multiple Datasets in a bulk operation.
     * @param {GetDeleteIdsSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DatasetsApi
     */
    apiV1DatasetDelete(q?: GetDeleteIdsSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse400>>;
    /**
     *
     * @param {string} columnName
     * @param {GetRelatedSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DatasetsApi
     */
    apiV1DatasetDistinctColumnNameGet(columnName: string, q?: GetRelatedSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<DistincResponseSchema>>;
    /**
     * Duplicates a Dataset
     * @param {DatasetDuplicateSchema} body Dataset schema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DatasetsApi
     */
    apiV1DatasetDuplicatePost(body: DatasetDuplicateSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20110>>;
    /**
     * Exports multiple datasets and downloads them as YAML files
     * @param {GetExportIdsSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DatasetsApi
     */
    apiV1DatasetExportGet(q?: GetExportIdsSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<string>>;
    /**
     * Get a list of models
     * @param {GetListSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DatasetsApi
     */
    apiV1DatasetGet(q?: GetListSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20032>>;
    /**
     *
     * @summary Retrieve a table by name, or create it if it does not exist
     * @param {GetOrCreateDatasetSchema} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DatasetsApi
     */
    apiV1DatasetGetOrCreatePost(body: GetOrCreateDatasetSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20033>>;
    /**
     *
     * @param {Blob} formData
     * @param {boolean} overwrite
     * @param {string} passwords
     * @param {boolean} syncColumns
     * @param {boolean} syncMetrics
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DatasetsApi
     */
    apiV1DatasetImportPostForm(formData: Blob, overwrite: boolean, passwords: string, syncColumns: boolean, syncMetrics: boolean, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse400>>;
    /**
     * Get metadata information about this API resource
     * @param {GetInfoSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DatasetsApi
     */
    apiV1DatasetInfoGet(q?: GetInfoSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse2002>>;
    /**
     * Delete a Dataset column
     * @param {number} pk The dataset pk for this column
     * @param {number} columnId The column id for this dataset
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DatasetsApi
     */
    apiV1DatasetPkColumnColumnIdDelete(pk: number, columnId: number, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse400>>;
    /**
     * Deletes a Dataset
     * @param {number} pk
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DatasetsApi
     */
    apiV1DatasetPkDelete(pk: number, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse400>>;
    /**
     * Get an item model
     * @param {number} pk
     * @param {GetItemSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DatasetsApi
     */
    apiV1DatasetPkGet(pk: number, q?: GetItemSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20034>>;
    /**
     * Delete a Dataset metric
     * @param {number} pk The dataset pk for this column
     * @param {number} metricId The metric id for this dataset
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DatasetsApi
     */
    apiV1DatasetPkMetricMetricIdDelete(pk: number, metricId: number, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse400>>;
    /**
     * Changes a Dataset
     * @param {DatasetRestApiPut} body Dataset schema
     * @param {number} pk
     * @param {boolean} [overrideColumns]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DatasetsApi
     */
    apiV1DatasetPkPut(body: DatasetRestApiPut, pk: number, overrideColumns?: boolean, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20035>>;
    /**
     * Refreshes and updates columns of a dataset
     * @param {number} pk
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DatasetsApi
     */
    apiV1DatasetPkRefreshPut(pk: number, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse400>>;
    /**
     * Get charts and dashboards count associated to a dataset
     * @param {number} pk
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DatasetsApi
     */
    apiV1DatasetPkRelatedObjectsGet(pk: number, options?: AxiosRequestConfig): Promise<AxiosResponse<DatasetRelatedObjectsResponse>>;
    /**
     * Create a new Dataset
     * @param {DatasetRestApiPost} body Dataset schema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DatasetsApi
     */
    apiV1DatasetPost(body: DatasetRestApiPost, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse2019>>;
    /**
     *
     * @param {string} columnName
     * @param {GetRelatedSchema} [q]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DatasetsApi
     */
    apiV1DatasetRelatedColumnNameGet(columnName: string, q?: GetRelatedSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<RelatedResponseSchema>>;
}