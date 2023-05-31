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
import { DatasetRelatedChart } from './dataset-related-chart';
/**
 *
 * @export
 * @interface DatasetRelatedCharts
 */
export interface DatasetRelatedCharts {
    /**
     * Chart count
     * @type {number}
     * @memberof DatasetRelatedCharts
     */
    count?: number;
    /**
     * A list of dashboards
     * @type {Array<DatasetRelatedChart>}
     * @memberof DatasetRelatedCharts
     */
    result?: Array<DatasetRelatedChart>;
}
