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
import { DatasetRestApiGetDatabase } from './dataset-rest-api-get-database';
import { DatasetRestApiGetSqlMetric } from './dataset-rest-api-get-sql-metric';
import { DatasetRestApiGetTableColumn } from './dataset-rest-api-get-table-column';
import { DatasetRestApiGetUser } from './dataset-rest-api-get-user';
import { DatasetRestApiGetUser1 } from './dataset-rest-api-get-user1';
import { DatasetRestApiGetUser2 } from './dataset-rest-api-get-user2';
/**
 * 
 * @export
 * @interface DatasetRestApiGet
 */
export interface DatasetRestApiGet {
    /**
     * 
     * @type {number}
     * @memberof DatasetRestApiGet
     */
    cacheTimeout?: number | null;
    /**
     * 
     * @type {DatasetRestApiGetUser2}
     * @memberof DatasetRestApiGet
     */
    changedBy?: DatasetRestApiGetUser2;
    /**
     * 
     * @type {Date}
     * @memberof DatasetRestApiGet
     */
    changedOn?: Date | null;
    /**
     * 
     * @type {any}
     * @memberof DatasetRestApiGet
     */
    changedOnHumanized?: any;
    /**
     * 
     * @type {DatasetRestApiGetTableColumn}
     * @memberof DatasetRestApiGet
     */
    columns: DatasetRestApiGetTableColumn;
    /**
     * 
     * @type {DatasetRestApiGetUser}
     * @memberof DatasetRestApiGet
     */
    createdBy?: DatasetRestApiGetUser;
    /**
     * 
     * @type {Date}
     * @memberof DatasetRestApiGet
     */
    createdOn?: Date | null;
    /**
     * 
     * @type {any}
     * @memberof DatasetRestApiGet
     */
    createdOnHumanized?: any;
    /**
     * 
     * @type {DatasetRestApiGetDatabase}
     * @memberof DatasetRestApiGet
     */
    database: DatasetRestApiGetDatabase;
    /**
     * 
     * @type {any}
     * @memberof DatasetRestApiGet
     */
    datasourceType?: any;
    /**
     * 
     * @type {string}
     * @memberof DatasetRestApiGet
     */
    defaultEndpoint?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DatasetRestApiGet
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DatasetRestApiGet
     */
    extra?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DatasetRestApiGet
     */
    fetchValuesPredicate?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof DatasetRestApiGet
     */
    filterSelectEnabled?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof DatasetRestApiGet
     */
    id?: number;
    /**
     * 
     * @type {boolean}
     * @memberof DatasetRestApiGet
     */
    isManagedExternally?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DatasetRestApiGet
     */
    isSqllabView?: boolean | null;
    /**
     * 
     * @type {any}
     * @memberof DatasetRestApiGet
     */
    kind?: any;
    /**
     * 
     * @type {string}
     * @memberof DatasetRestApiGet
     */
    mainDttmCol?: string | null;
    /**
     * 
     * @type {DatasetRestApiGetSqlMetric}
     * @memberof DatasetRestApiGet
     */
    metrics: DatasetRestApiGetSqlMetric;
    /**
     * 
     * @type {number}
     * @memberof DatasetRestApiGet
     */
    offset?: number | null;
    /**
     * 
     * @type {DatasetRestApiGetUser1}
     * @memberof DatasetRestApiGet
     */
    owners?: DatasetRestApiGetUser1;
    /**
     * 
     * @type {string}
     * @memberof DatasetRestApiGet
     */
    schema?: string | null;
    /**
     * 
     * @type {any}
     * @memberof DatasetRestApiGet
     */
    selectStar?: any;
    /**
     * 
     * @type {string}
     * @memberof DatasetRestApiGet
     */
    sql?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DatasetRestApiGet
     */
    tableName: string;
    /**
     * 
     * @type {string}
     * @memberof DatasetRestApiGet
     */
    templateParams?: string | null;
    /**
     * 
     * @type {any}
     * @memberof DatasetRestApiGet
     */
    url?: any;
}