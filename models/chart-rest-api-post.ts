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
 * @interface ChartRestApiPost
 */
export interface ChartRestApiPost {
    /**
     * Duration (in seconds) of the caching timeout for this chart. Note this defaults to the datasource/table timeout if undefined.
     * @type {number}
     * @memberof ChartRestApiPost
     */
    cacheTimeout?: number | null;
    /**
     * Details of the certification
     * @type {string}
     * @memberof ChartRestApiPost
     */
    certificationDetails?: string | null;
    /**
     * Person or group that has certified this chart
     * @type {string}
     * @memberof ChartRestApiPost
     */
    certifiedBy?: string | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof ChartRestApiPost
     */
    dashboards?: Array<number>;
    /**
     * The id of the dataset/datasource this new chart will use. A complete datasource identification needs `datasouce_id` and `datasource_type`.
     * @type {number}
     * @memberof ChartRestApiPost
     */
    datasourceId: number;
    /**
     * The datasource name.
     * @type {string}
     * @memberof ChartRestApiPost
     */
    datasourceName?: string | null;
    /**
     * The type of dataset/datasource identified on `datasource_id`.
     * @type {string}
     * @memberof ChartRestApiPost
     */
    datasourceType: ChartRestApiPostDatasourceTypeEnum;
    /**
     * A description of the chart propose.
     * @type {string}
     * @memberof ChartRestApiPost
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ChartRestApiPost
     */
    externalUrl?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof ChartRestApiPost
     */
    isManagedExternally?: boolean | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof ChartRestApiPost
     */
    owners?: Array<number>;
    /**
     * Parameters are generated dynamically when clicking the save or overwrite button in the explore view. This JSON object for power users who may want to alter specific parameters.
     * @type {string}
     * @memberof ChartRestApiPost
     */
    params?: string | null;
    /**
     * The query context represents the queries that need to run in order to generate the data the visualization, and in what format the data should be returned.
     * @type {string}
     * @memberof ChartRestApiPost
     */
    queryContext?: string | null;
    /**
     * The query context generation represents whether the query_contextis user generated or not so that it does not update user modfiedstate.
     * @type {boolean}
     * @memberof ChartRestApiPost
     */
    queryContextGeneration?: boolean | null;
    /**
     * The name of the chart.
     * @type {string}
     * @memberof ChartRestApiPost
     */
    sliceName: string;
    /**
     * The type of chart visualization used.
     * @type {string}
     * @memberof ChartRestApiPost
     */
    vizType?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum ChartRestApiPostDatasourceTypeEnum {
    SlTable = 'sl_table',
    Table = 'table',
    Dataset = 'dataset',
    Query = 'query',
    SavedQuery = 'saved_query',
    View = 'view'
}
