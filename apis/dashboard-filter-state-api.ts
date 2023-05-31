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
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { InlineResponse20025 } from '../models';
import { InlineResponse20026 } from '../models';
import { InlineResponse2016 } from '../models';
import { InlineResponse400 } from '../models';
import { TemporaryCachePostSchema } from '../models';
import { TemporaryCachePutSchema } from '../models';
/**
 * DashboardFilterStateApi - axios parameter creator
 * @export
 */
export const DashboardFilterStateApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Deletes a value.
         * @param {number} pk 
         * @param {string} key The value key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1DashboardPkFilterStateKeyDelete: async (pk: number, key: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'pk' is not null or undefined
            if (pk === null || pk === undefined) {
                throw new RequiredError('pk','Required parameter pk was null or undefined when calling apiV1DashboardPkFilterStateKeyDelete.');
            }
            // verify required parameter 'key' is not null or undefined
            if (key === null || key === undefined) {
                throw new RequiredError('key','Required parameter key was null or undefined when calling apiV1DashboardPkFilterStateKeyDelete.');
            }
            const localVarPath = `/api/v1/dashboard/{pk}/filter_state/{key}`
                .replace(`{${"pk"}}`, encodeURIComponent(String(pk)))
                .replace(`{${"key"}}`, encodeURIComponent(String(key)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwt required

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrives a value.
         * @param {number} pk 
         * @param {string} key 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1DashboardPkFilterStateKeyGet: async (pk: number, key: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'pk' is not null or undefined
            if (pk === null || pk === undefined) {
                throw new RequiredError('pk','Required parameter pk was null or undefined when calling apiV1DashboardPkFilterStateKeyGet.');
            }
            // verify required parameter 'key' is not null or undefined
            if (key === null || key === undefined) {
                throw new RequiredError('key','Required parameter key was null or undefined when calling apiV1DashboardPkFilterStateKeyGet.');
            }
            const localVarPath = `/api/v1/dashboard/{pk}/filter_state/{key}`
                .replace(`{${"pk"}}`, encodeURIComponent(String(pk)))
                .replace(`{${"key"}}`, encodeURIComponent(String(key)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwt required

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates an existing value.
         * @param {TemporaryCachePutSchema} body 
         * @param {number} pk 
         * @param {string} key 
         * @param {number} [tabId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1DashboardPkFilterStateKeyPut: async (body: TemporaryCachePutSchema, pk: number, key: string, tabId?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling apiV1DashboardPkFilterStateKeyPut.');
            }
            // verify required parameter 'pk' is not null or undefined
            if (pk === null || pk === undefined) {
                throw new RequiredError('pk','Required parameter pk was null or undefined when calling apiV1DashboardPkFilterStateKeyPut.');
            }
            // verify required parameter 'key' is not null or undefined
            if (key === null || key === undefined) {
                throw new RequiredError('key','Required parameter key was null or undefined when calling apiV1DashboardPkFilterStateKeyPut.');
            }
            const localVarPath = `/api/v1/dashboard/{pk}/filter_state/{key}`
                .replace(`{${"pk"}}`, encodeURIComponent(String(pk)))
                .replace(`{${"key"}}`, encodeURIComponent(String(key)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwt required

            if (tabId !== undefined) {
                localVarQueryParameter['tab_id'] = tabId;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Stores a new value.
         * @param {TemporaryCachePostSchema} body 
         * @param {number} pk 
         * @param {number} [tabId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1DashboardPkFilterStatePost: async (body: TemporaryCachePostSchema, pk: number, tabId?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling apiV1DashboardPkFilterStatePost.');
            }
            // verify required parameter 'pk' is not null or undefined
            if (pk === null || pk === undefined) {
                throw new RequiredError('pk','Required parameter pk was null or undefined when calling apiV1DashboardPkFilterStatePost.');
            }
            const localVarPath = `/api/v1/dashboard/{pk}/filter_state`
                .replace(`{${"pk"}}`, encodeURIComponent(String(pk)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwt required

            if (tabId !== undefined) {
                localVarQueryParameter['tab_id'] = tabId;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DashboardFilterStateApi - functional programming interface
 * @export
 */
export const DashboardFilterStateApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Deletes a value.
         * @param {number} pk 
         * @param {string} key The value key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1DashboardPkFilterStateKeyDelete(pk: number, key: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20026>>> {
            const localVarAxiosArgs = await DashboardFilterStateApiAxiosParamCreator(configuration).apiV1DashboardPkFilterStateKeyDelete(pk, key, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retrives a value.
         * @param {number} pk 
         * @param {string} key 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1DashboardPkFilterStateKeyGet(pk: number, key: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20025>>> {
            const localVarAxiosArgs = await DashboardFilterStateApiAxiosParamCreator(configuration).apiV1DashboardPkFilterStateKeyGet(pk, key, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Updates an existing value.
         * @param {TemporaryCachePutSchema} body 
         * @param {number} pk 
         * @param {string} key 
         * @param {number} [tabId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1DashboardPkFilterStateKeyPut(body: TemporaryCachePutSchema, pk: number, key: string, tabId?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse2016>>> {
            const localVarAxiosArgs = await DashboardFilterStateApiAxiosParamCreator(configuration).apiV1DashboardPkFilterStateKeyPut(body, pk, key, tabId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Stores a new value.
         * @param {TemporaryCachePostSchema} body 
         * @param {number} pk 
         * @param {number} [tabId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1DashboardPkFilterStatePost(body: TemporaryCachePostSchema, pk: number, tabId?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse2016>>> {
            const localVarAxiosArgs = await DashboardFilterStateApiAxiosParamCreator(configuration).apiV1DashboardPkFilterStatePost(body, pk, tabId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * DashboardFilterStateApi - factory interface
 * @export
 */
export const DashboardFilterStateApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Deletes a value.
         * @param {number} pk 
         * @param {string} key The value key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1DashboardPkFilterStateKeyDelete(pk: number, key: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20026>> {
            return DashboardFilterStateApiFp(configuration).apiV1DashboardPkFilterStateKeyDelete(pk, key, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrives a value.
         * @param {number} pk 
         * @param {string} key 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1DashboardPkFilterStateKeyGet(pk: number, key: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20025>> {
            return DashboardFilterStateApiFp(configuration).apiV1DashboardPkFilterStateKeyGet(pk, key, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates an existing value.
         * @param {TemporaryCachePutSchema} body 
         * @param {number} pk 
         * @param {string} key 
         * @param {number} [tabId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1DashboardPkFilterStateKeyPut(body: TemporaryCachePutSchema, pk: number, key: string, tabId?: number, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse2016>> {
            return DashboardFilterStateApiFp(configuration).apiV1DashboardPkFilterStateKeyPut(body, pk, key, tabId, options).then((request) => request(axios, basePath));
        },
        /**
         * Stores a new value.
         * @param {TemporaryCachePostSchema} body 
         * @param {number} pk 
         * @param {number} [tabId] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1DashboardPkFilterStatePost(body: TemporaryCachePostSchema, pk: number, tabId?: number, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse2016>> {
            return DashboardFilterStateApiFp(configuration).apiV1DashboardPkFilterStatePost(body, pk, tabId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DashboardFilterStateApi - object-oriented interface
 * @export
 * @class DashboardFilterStateApi
 * @extends {BaseAPI}
 */
export class DashboardFilterStateApi extends BaseAPI {
    /**
     * Deletes a value.
     * @param {number} pk 
     * @param {string} key The value key.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DashboardFilterStateApi
     */
    public async apiV1DashboardPkFilterStateKeyDelete(pk: number, key: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20026>> {
        return DashboardFilterStateApiFp(this.configuration).apiV1DashboardPkFilterStateKeyDelete(pk, key, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Retrives a value.
     * @param {number} pk 
     * @param {string} key 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DashboardFilterStateApi
     */
    public async apiV1DashboardPkFilterStateKeyGet(pk: number, key: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20025>> {
        return DashboardFilterStateApiFp(this.configuration).apiV1DashboardPkFilterStateKeyGet(pk, key, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Updates an existing value.
     * @param {TemporaryCachePutSchema} body 
     * @param {number} pk 
     * @param {string} key 
     * @param {number} [tabId] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DashboardFilterStateApi
     */
    public async apiV1DashboardPkFilterStateKeyPut(body: TemporaryCachePutSchema, pk: number, key: string, tabId?: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse2016>> {
        return DashboardFilterStateApiFp(this.configuration).apiV1DashboardPkFilterStateKeyPut(body, pk, key, tabId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Stores a new value.
     * @param {TemporaryCachePostSchema} body 
     * @param {number} pk 
     * @param {number} [tabId] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DashboardFilterStateApi
     */
    public async apiV1DashboardPkFilterStatePost(body: TemporaryCachePostSchema, pk: number, tabId?: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse2016>> {
        return DashboardFilterStateApiFp(this.configuration).apiV1DashboardPkFilterStatePost(body, pk, tabId, options).then((request) => request(this.axios, this.basePath));
    }
}
