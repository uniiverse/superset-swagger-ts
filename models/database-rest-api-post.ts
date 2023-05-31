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
import { DatabaseSSHTunnel } from './database-sshtunnel';
/**
 * 
 * @export
 * @interface DatabaseRestApiPost
 */
export interface DatabaseRestApiPost {
    /**
     * Allow CREATE TABLE AS option in SQL Lab
     * @type {boolean}
     * @memberof DatabaseRestApiPost
     */
    allowCtas?: boolean;
    /**
     * Allow CREATE VIEW AS option in SQL Lab
     * @type {boolean}
     * @memberof DatabaseRestApiPost
     */
    allowCvas?: boolean;
    /**
     * Allow users to run non-SELECT statements (UPDATE, DELETE, CREATE, ...) in SQL Lab
     * @type {boolean}
     * @memberof DatabaseRestApiPost
     */
    allowDml?: boolean;
    /**
     * Allow to upload CSV file data into this databaseIf selected, please set the schemas allowed for csv upload in Extra.
     * @type {boolean}
     * @memberof DatabaseRestApiPost
     */
    allowFileUpload?: boolean;
    /**
     * Operate the database in asynchronous mode, meaning that the queries are executed on remote workers as opposed to on the web server itself. This assumes that you have a Celery worker setup as well as a results backend. Refer to the installation docs for more information.
     * @type {boolean}
     * @memberof DatabaseRestApiPost
     */
    allowRunAsync?: boolean;
    /**
     * Duration (in seconds) of the caching timeout for charts of this database. A timeout of 0 indicates that the cache never expires. Note this defaults to the global timeout if undefined.
     * @type {number}
     * @memberof DatabaseRestApiPost
     */
    cacheTimeout?: number | null;
    /**
     * Configuration_method is used on the frontend to inform the backend whether to explode parameters or to provide only a sqlalchemy_uri.
     * @type {any}
     * @memberof DatabaseRestApiPost
     */
    configurationMethod?: any;
    /**
     * A database name to identify this connection.
     * @type {string}
     * @memberof DatabaseRestApiPost
     */
    databaseName: string;
    /**
     * SQLAlchemy driver to use
     * @type {string}
     * @memberof DatabaseRestApiPost
     */
    driver?: string | null;
    /**
     * SQLAlchemy engine to use
     * @type {string}
     * @memberof DatabaseRestApiPost
     */
    engine?: string | null;
    /**
     * Expose this database to SQLLab
     * @type {boolean}
     * @memberof DatabaseRestApiPost
     */
    exposeInSqllab?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DatabaseRestApiPost
     */
    externalUrl?: string | null;
    /**
     * <p>JSON string containing extra configuration elements.<br>1. The <code>engine_params</code> object gets unpacked into the <a href=\"https://docs.sqlalchemy.org/en/latest/core/engines.html#sqlalchemy.create_engine\">sqlalchemy.create_engine</a> call, while the <code>metadata_params</code> gets unpacked into the <a href=\"https://docs.sqlalchemy.org/en/rel_1_0/core/metadata.html#sqlalchemy.schema.MetaData\">sqlalchemy.MetaData</a> call.<br>2. The <code>metadata_cache_timeout</code> is a cache timeout setting in seconds for metadata fetch of this database. Specify it as <strong>\"metadata_cache_timeout\": {\"schema_cache_timeout\": 600, \"table_cache_timeout\": 600}</strong>. If unset, cache will not be enabled for the functionality. A timeout of 0 indicates that the cache never expires.<br>3. The <code>schemas_allowed_for_file_upload</code> is a comma separated list of schemas that CSVs are allowed to upload to. Specify it as <strong>\"schemas_allowed_for_file_upload\": [\"public\", \"csv_upload\"]</strong>. If database flavor does not support schema or any schema is allowed to be accessed, just leave the list empty<br>4. The <code>version</code> field is a string specifying the this db's version. This should be used with Presto DBs so that the syntax is correct<br>5. The <code>allows_virtual_table_explore</code> field is a boolean specifying whether or not the Explore button in SQL Lab results is shown.<br>6. The <code>disable_data_preview</code> field is a boolean specifying whether or not data preview queries will be run when fetching table metadata in SQL Lab.</p>
     * @type {string}
     * @memberof DatabaseRestApiPost
     */
    extra?: string;
    /**
     * When allowing CREATE TABLE AS option in SQL Lab, this option forces the table to be created in this schema
     * @type {string}
     * @memberof DatabaseRestApiPost
     */
    forceCtasSchema?: string | null;
    /**
     * If Presto, all the queries in SQL Lab are going to be executed as the currently logged on user who must have permission to run them.<br/>If Hive and hive.server2.enable.doAs is enabled, will run the queries as service account, but impersonate the currently logged on user via hive.server2.proxy.user property.
     * @type {boolean}
     * @memberof DatabaseRestApiPost
     */
    impersonateUser?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DatabaseRestApiPost
     */
    isManagedExternally?: boolean | null;
    /**
     * <p>JSON string containing additional connection configuration.<br>This is used to provide connection information for systems like Hive, Presto, and BigQuery, which do not conform to the username:password syntax normally used by SQLAlchemy.</p>
     * @type {string}
     * @memberof DatabaseRestApiPost
     */
    maskedEncryptedExtra?: string | null;
    /**
     * DB-specific parameters for configuration
     * @type {{ [key: string]: any; }}
     * @memberof DatabaseRestApiPost
     */
    parameters?: { [key: string]: any; };
    /**
     * <p>Optional CA_BUNDLE contents to validate HTTPS requests. Only available on certain database engines.</p>
     * @type {string}
     * @memberof DatabaseRestApiPost
     */
    serverCert?: string | null;
    /**
     * <p>Refer to the <a href=\"https://docs.sqlalchemy.org/en/rel_1_2/core/engines.html#database-urls\">SqlAlchemy docs</a> for more information on how to structure your URI.</p>
     * @type {string}
     * @memberof DatabaseRestApiPost
     */
    sqlalchemyUri?: string;
    /**
     * 
     * @type {DatabaseSSHTunnel}
     * @memberof DatabaseRestApiPost
     */
    sshTunnel?: DatabaseSSHTunnel | null;
    /**
     * 
     * @type {string}
     * @memberof DatabaseRestApiPost
     */
    uuid?: string;
}
