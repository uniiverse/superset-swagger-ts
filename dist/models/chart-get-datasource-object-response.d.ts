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
import { ChartGetDatasourceObjectDataResponse } from './chart-get-datasource-object-data-response';
/**
 *
 * @export
 * @interface ChartGetDatasourceObjectResponse
 */
export interface ChartGetDatasourceObjectResponse {
    /**
     * The name of the datasource
     * @type {string}
     * @memberof ChartGetDatasourceObjectResponse
     */
    label?: string;
    /**
     *
     * @type {ChartGetDatasourceObjectDataResponse}
     * @memberof ChartGetDatasourceObjectResponse
     */
    value?: ChartGetDatasourceObjectDataResponse;
}
