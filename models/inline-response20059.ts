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
import { InlineResponse2001DescriptionColumns } from './inline-response2001-description-columns';
import { InlineResponse2001LabelColumns } from './inline-response2001-label-columns';
import { TagRestApiGet } from './tag-rest-api-get';
/**
 * 
 * @export
 * @interface InlineResponse20059
 */
export interface InlineResponse20059 {
    /**
     * 
     * @type {InlineResponse2001DescriptionColumns}
     * @memberof InlineResponse20059
     */
    descriptionColumns?: InlineResponse2001DescriptionColumns;
    /**
     * The item id
     * @type {string}
     * @memberof InlineResponse20059
     */
    id?: string;
    /**
     * 
     * @type {InlineResponse2001LabelColumns}
     * @memberof InlineResponse20059
     */
    labelColumns?: InlineResponse2001LabelColumns;
    /**
     * 
     * @type {TagRestApiGet}
     * @memberof InlineResponse20059
     */
    result?: TagRestApiGet;
    /**
     * A list of columns
     * @type {Array<string>}
     * @memberof InlineResponse20059
     */
    showColumns?: Array<string>;
    /**
     * A title to render. Will be translated by babel
     * @type {string}
     * @memberof InlineResponse20059
     */
    showTitle?: string;
}
