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
import { AnnotationLayerRestApiGet } from './annotation-layer-rest-api-get';
import { InlineResponse2001DescriptionColumns } from './inline-response2001-description-columns';
import { InlineResponse2001LabelColumns } from './inline-response2001-label-columns';
/**
 * 
 * @export
 * @interface InlineResponse2003
 */
export interface InlineResponse2003 {
    /**
     * 
     * @type {InlineResponse2001DescriptionColumns}
     * @memberof InlineResponse2003
     */
    descriptionColumns?: InlineResponse2001DescriptionColumns;
    /**
     * The item id
     * @type {string}
     * @memberof InlineResponse2003
     */
    id?: string;
    /**
     * 
     * @type {InlineResponse2001LabelColumns}
     * @memberof InlineResponse2003
     */
    labelColumns?: InlineResponse2001LabelColumns;
    /**
     * 
     * @type {AnnotationLayerRestApiGet}
     * @memberof InlineResponse2003
     */
    result?: AnnotationLayerRestApiGet;
    /**
     * A list of columns
     * @type {Array<string>}
     * @memberof InlineResponse2003
     */
    showColumns?: Array<string>;
    /**
     * A title to render. Will be translated by babel
     * @type {string}
     * @memberof InlineResponse2003
     */
    showTitle?: string;
}
