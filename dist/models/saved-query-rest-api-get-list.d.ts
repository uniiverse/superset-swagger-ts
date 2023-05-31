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
import { SavedQueryRestApiGetListDatabase } from './saved-query-rest-api-get-list-database';
import { SavedQueryRestApiGetListUser } from './saved-query-rest-api-get-list-user';
/**
 *
 * @export
 * @interface SavedQueryRestApiGetList
 */
export interface SavedQueryRestApiGetList {
    /**
     *
     * @type {any}
     * @memberof SavedQueryRestApiGetList
     */
    changedOnDeltaHumanized?: any;
    /**
     *
     * @type {SavedQueryRestApiGetListUser}
     * @memberof SavedQueryRestApiGetList
     */
    createdBy?: SavedQueryRestApiGetListUser;
    /**
     *
     * @type {Date}
     * @memberof SavedQueryRestApiGetList
     */
    createdOn?: Date | null;
    /**
     *
     * @type {SavedQueryRestApiGetListDatabase}
     * @memberof SavedQueryRestApiGetList
     */
    database?: SavedQueryRestApiGetListDatabase;
    /**
     *
     * @type {number}
     * @memberof SavedQueryRestApiGetList
     */
    dbId?: number | null;
    /**
     *
     * @type {string}
     * @memberof SavedQueryRestApiGetList
     */
    description?: string | null;
    /**
     *
     * @type {any}
     * @memberof SavedQueryRestApiGetList
     */
    extra?: any;
    /**
     *
     * @type {number}
     * @memberof SavedQueryRestApiGetList
     */
    id?: number;
    /**
     *
     * @type {string}
     * @memberof SavedQueryRestApiGetList
     */
    label?: string | null;
    /**
     *
     * @type {any}
     * @memberof SavedQueryRestApiGetList
     */
    lastRunDeltaHumanized?: any;
    /**
     *
     * @type {number}
     * @memberof SavedQueryRestApiGetList
     */
    rows?: number | null;
    /**
     *
     * @type {string}
     * @memberof SavedQueryRestApiGetList
     */
    schema?: string | null;
    /**
     *
     * @type {string}
     * @memberof SavedQueryRestApiGetList
     */
    sql?: string | null;
    /**
     *
     * @type {any}
     * @memberof SavedQueryRestApiGetList
     */
    sqlTables?: any;
}
