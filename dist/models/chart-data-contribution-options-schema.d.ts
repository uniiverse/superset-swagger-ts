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
 * @interface ChartDataContributionOptionsSchema
 */
export interface ChartDataContributionOptionsSchema {
    /**
     * Should cell values be calculated across the row or column.
     * @type {string}
     * @memberof ChartDataContributionOptionsSchema
     */
    orientation: ChartDataContributionOptionsSchemaOrientationEnum;
}
/**
    * @export
    * @enum {string}
    */
export declare enum ChartDataContributionOptionsSchemaOrientationEnum {
    Row = "row",
    Column = "column"
}
