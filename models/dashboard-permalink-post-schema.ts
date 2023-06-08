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
 * @interface DashboardPermalinkPostSchema
 */
export interface DashboardPermalinkPostSchema {
    /**
     * Current active dashboard tabs
     * @type {Array<string>}
     * @memberof DashboardPermalinkPostSchema
     */
    activeTabs?: Array<string> | null;
    /**
     * Optional anchor link added to url hash
     * @type {string}
     * @memberof DashboardPermalinkPostSchema
     */
    anchor?: string | null;
    /**
     * Data mask used for native filter state
     * @type {any}
     * @memberof DashboardPermalinkPostSchema
     */
    dataMask?: any | null;
    /**
     * URL Parameters
     * @type {Array<any>}
     * @memberof DashboardPermalinkPostSchema
     */
    urlParams?: Array<any> | null;
}