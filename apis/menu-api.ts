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
import { InlineResponse20041 } from '../models';
import { InlineResponse400 } from '../models';
/**
 * MenuApi - axios parameter creator
 * @export
 */
export const MenuApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get the menu data structure. Returns a forest like structure with the menu the user has access to
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1MenuGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/menu/`;
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
 * MenuApi - functional programming interface
 * @export
 */
export const MenuApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Get the menu data structure. Returns a forest like structure with the menu the user has access to
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1MenuGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20041>>> {
            const localVarAxiosArgs = await MenuApiAxiosParamCreator(configuration).apiV1MenuGet(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * MenuApi - factory interface
 * @export
 */
export const MenuApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Get the menu data structure. Returns a forest like structure with the menu the user has access to
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1MenuGet(options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20041>> {
            return MenuApiFp(configuration).apiV1MenuGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MenuApi - object-oriented interface
 * @export
 * @class MenuApi
 * @extends {BaseAPI}
 */
export class MenuApi extends BaseAPI {
    /**
     * Get the menu data structure. Returns a forest like structure with the menu the user has access to
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MenuApi
     */
    public async apiV1MenuGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20041>> {
        return MenuApiFp(this.configuration).apiV1MenuGet(options).then((request) => request(this.axios, this.basePath));
    }
}
