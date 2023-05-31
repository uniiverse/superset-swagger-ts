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
import { InlineResponse20023 } from '../models';
import { InlineResponse400 } from '../models';
/**
 * EmbeddedDashboardApi - axios parameter creator
 * @export
 */
export const EmbeddedDashboardApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get a report schedule log
         * @param {string} uuid The embedded configuration uuid
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1EmbeddedDashboardUuidGet: async (uuid: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'uuid' is not null or undefined
            if (uuid === null || uuid === undefined) {
                throw new RequiredError('uuid','Required parameter uuid was null or undefined when calling apiV1EmbeddedDashboardUuidGet.');
            }
            const localVarPath = `/api/v1/embedded_dashboard/{uuid}`
                .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)));
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
    }
};

/**
 * EmbeddedDashboardApi - functional programming interface
 * @export
 */
export const EmbeddedDashboardApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Get a report schedule log
         * @param {string} uuid The embedded configuration uuid
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1EmbeddedDashboardUuidGet(uuid: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20023>>> {
            const localVarAxiosArgs = await EmbeddedDashboardApiAxiosParamCreator(configuration).apiV1EmbeddedDashboardUuidGet(uuid, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * EmbeddedDashboardApi - factory interface
 * @export
 */
export const EmbeddedDashboardApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Get a report schedule log
         * @param {string} uuid The embedded configuration uuid
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1EmbeddedDashboardUuidGet(uuid: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20023>> {
            return EmbeddedDashboardApiFp(configuration).apiV1EmbeddedDashboardUuidGet(uuid, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * EmbeddedDashboardApi - object-oriented interface
 * @export
 * @class EmbeddedDashboardApi
 * @extends {BaseAPI}
 */
export class EmbeddedDashboardApi extends BaseAPI {
    /**
     * Get a report schedule log
     * @param {string} uuid The embedded configuration uuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmbeddedDashboardApi
     */
    public async apiV1EmbeddedDashboardUuidGet(uuid: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20023>> {
        return EmbeddedDashboardApiFp(this.configuration).apiV1EmbeddedDashboardUuidGet(uuid, options).then((request) => request(this.axios, this.basePath));
    }
}
