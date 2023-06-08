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
import { User } from './user';
/**
 *
 * @export
 * @interface TaggedObjectEntityResponseSchema
 */
export interface TaggedObjectEntityResponseSchema {
    /**
     *
     * @type {Date}
     * @memberof TaggedObjectEntityResponseSchema
     */
    changedOn?: Date;
    /**
     *
     * @type {User}
     * @memberof TaggedObjectEntityResponseSchema
     */
    createdBy?: User;
    /**
     *
     * @type {string}
     * @memberof TaggedObjectEntityResponseSchema
     */
    creator?: string;
    /**
     *
     * @type {number}
     * @memberof TaggedObjectEntityResponseSchema
     */
    id?: number;
    /**
     *
     * @type {string}
     * @memberof TaggedObjectEntityResponseSchema
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof TaggedObjectEntityResponseSchema
     */
    type?: string;
    /**
     *
     * @type {string}
     * @memberof TaggedObjectEntityResponseSchema
     */
    url?: string;
}