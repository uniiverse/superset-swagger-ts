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
import { TagRestApiGetListUser } from './tag-rest-api-get-list-user';
import { TagRestApiGetListUser1 } from './tag-rest-api-get-list-user1';
/**
 *
 * @export
 * @interface TagRestApiGetList
 */
export interface TagRestApiGetList {
    /**
     *
     * @type {TagRestApiGetListUser1}
     * @memberof TagRestApiGetList
     */
    changedBy?: TagRestApiGetListUser1;
    /**
     *
     * @type {any}
     * @memberof TagRestApiGetList
     */
    changedOnDeltaHumanized?: any;
    /**
     *
     * @type {TagRestApiGetListUser}
     * @memberof TagRestApiGetList
     */
    createdBy?: TagRestApiGetListUser;
    /**
     *
     * @type {number}
     * @memberof TagRestApiGetList
     */
    id?: number;
    /**
     *
     * @type {string}
     * @memberof TagRestApiGetList
     */
    name?: string | null;
    /**
     *
     * @type {any}
     * @memberof TagRestApiGetList
     */
    type?: any;
}
