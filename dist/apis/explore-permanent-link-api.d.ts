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
import { ExplorePermalinkPostSchema } from '../models';
import { InlineResponse20017 } from '../models';
import { InlineResponse2017 } from '../models';
/**
 * ExplorePermanentLinkApi - axios parameter creator
 * @export
 */
export declare const ExplorePermanentLinkApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Retrives chart state associated with a permanent link.
     * @param {string} key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ExplorePermalinkKeyGet: (key: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Stores a new permanent link.
     * @param {ExplorePermalinkPostSchema} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ExplorePermalinkPost: (body: ExplorePermalinkPostSchema, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * ExplorePermanentLinkApi - functional programming interface
 * @export
 */
export declare const ExplorePermanentLinkApiFp: (configuration?: Configuration) => {
    /**
     * Retrives chart state associated with a permanent link.
     * @param {string} key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ExplorePermalinkKeyGet(key: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20017>>>;
    /**
     * Stores a new permanent link.
     * @param {ExplorePermalinkPostSchema} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ExplorePermalinkPost(body: ExplorePermalinkPostSchema, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse2017>>>;
};
/**
 * ExplorePermanentLinkApi - factory interface
 * @export
 */
export declare const ExplorePermanentLinkApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Retrives chart state associated with a permanent link.
     * @param {string} key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ExplorePermalinkKeyGet(key: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20017>>;
    /**
     * Stores a new permanent link.
     * @param {ExplorePermalinkPostSchema} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    apiV1ExplorePermalinkPost(body: ExplorePermalinkPostSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse2017>>;
};
/**
 * ExplorePermanentLinkApi - object-oriented interface
 * @export
 * @class ExplorePermanentLinkApi
 * @extends {BaseAPI}
 */
export declare class ExplorePermanentLinkApi extends BaseAPI {
    /**
     * Retrives chart state associated with a permanent link.
     * @param {string} key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExplorePermanentLinkApi
     */
    apiV1ExplorePermalinkKeyGet(key: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20017>>;
    /**
     * Stores a new permanent link.
     * @param {ExplorePermalinkPostSchema} body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExplorePermanentLinkApi
     */
    apiV1ExplorePermalinkPost(body: ExplorePermalinkPostSchema, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse2017>>;
}
