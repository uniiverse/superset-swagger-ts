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
import { DashboardRestApiGetList } from './dashboard-rest-api-get-list';
import { InlineResponse2001DescriptionColumns } from './inline-response2001-description-columns';
import { InlineResponse2001LabelColumns } from './inline-response2001-label-columns';
/**
 * 
 * @export
 * @interface InlineResponse20016
 */
export interface InlineResponse20016 {
    /**
     * The total record count on the backend
     * @type {number}
     * @memberof InlineResponse20016
     */
    count?: number;
    /**
     * 
     * @type {InlineResponse2001DescriptionColumns}
     * @memberof InlineResponse20016
     */
    descriptionColumns?: InlineResponse2001DescriptionColumns;
    /**
     * A list of item ids, useful when you don't know the column id
     * @type {Array<string>}
     * @memberof InlineResponse20016
     */
    ids?: Array<string>;
    /**
     * 
     * @type {InlineResponse2001LabelColumns}
     * @memberof InlineResponse20016
     */
    labelColumns?: InlineResponse2001LabelColumns;
    /**
     * A list of columns
     * @type {Array<string>}
     * @memberof InlineResponse20016
     */
    listColumns?: Array<string>;
    /**
     * A title to render. Will be translated by babel
     * @type {string}
     * @memberof InlineResponse20016
     */
    listTitle?: string;
    /**
     * A list of allowed columns to sort
     * @type {Array<string>}
     * @memberof InlineResponse20016
     */
    orderColumns?: Array<string>;
    /**
     * The result from the get list query
     * @type {Array<DashboardRestApiGetList>}
     * @memberof InlineResponse20016
     */
    result?: Array<DashboardRestApiGetList>;
}
