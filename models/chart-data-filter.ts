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
 * @interface ChartDataFilter
 */
export interface ChartDataFilter {
    /**
     * The column to filter by. Can be either a string (physical or saved expression) or an object (adhoc column)
     * @type {any}
     * @memberof ChartDataFilter
     */
    col: any;
    /**
     * Optional time grain for temporal filters
     * @type {string}
     * @memberof ChartDataFilter
     */
    grain?: string;
    /**
     * Indicates if the filter has been added by a filter component as opposed to being a part of the original query.
     * @type {boolean}
     * @memberof ChartDataFilter
     */
    isExtra?: boolean;
    /**
     * The comparison operator.
     * @type {string}
     * @memberof ChartDataFilter
     */
    op: ChartDataFilterOpEnum;
    /**
     * The value or values to compare against. Can be a string, integer, decimal, None or list, depending on the operator.
     * @type {any}
     * @memberof ChartDataFilter
     */
    val?: any | null;
}

/**
    * @export
    * @enum {string}
    */
export enum ChartDataFilterOpEnum {
     = '==',
    NotEqual = '!=',
    GreaterThan = '>',
    LessThan = '<',
    GreaterThanOrEqualTo = '>=',
    LessThanOrEqualTo = '<=',
    LIKE = 'LIKE',
    ILIKE = 'ILIKE',
    ISNULL = 'IS NULL',
    ISNOTNULL = 'IS NOT NULL',
    IN = 'IN',
    NOTIN = 'NOT IN',
    REGEX = 'REGEX',
    ISTRUE = 'IS TRUE',
    ISFALSE = 'IS FALSE',
    TEMPORALRANGE = 'TEMPORAL_RANGE'
}

