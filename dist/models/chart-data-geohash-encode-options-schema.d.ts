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
 * @interface ChartDataGeohashEncodeOptionsSchema
 */
export interface ChartDataGeohashEncodeOptionsSchema {
    /**
     * Name of target column for encoded geohash string
     * @type {string}
     * @memberof ChartDataGeohashEncodeOptionsSchema
     */
    geohash: string;
    /**
     * Name of source latitude column
     * @type {string}
     * @memberof ChartDataGeohashEncodeOptionsSchema
     */
    latitude: string;
    /**
     * Name of source longitude column
     * @type {string}
     * @memberof ChartDataGeohashEncodeOptionsSchema
     */
    longitude: string;
}
