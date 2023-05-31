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
 * @interface DatabaseTestConnectionSchema
 */
export interface DatabaseTestConnectionSchema {
    /**
     * Configuration_method is used on the frontend to inform the backend whether to explode parameters or to provide only a sqlalchemy_uri.
     * @type {any}
     * @memberof DatabaseTestConnectionSchema
     */
    configurationMethod?: any;
    /**
     * A database name to identify this connection.
     * @type {string}
     * @memberof DatabaseTestConnectionSchema
     */
    databaseName?: string | null;
    /**
     * SQLAlchemy driver to use
     * @type {string}
     * @memberof DatabaseTestConnectionSchema
     */
    driver?: string | null;
    /**
     * SQLAlchemy engine to use
     * @type {string}
     * @memberof DatabaseTestConnectionSchema
     */
    engine?: string | null;
    /**
     * <p>JSON string containing extra configuration elements.<br>1. The <code>engine_params</code> object gets unpacked into the <a href=\"https://docs.sqlalchemy.org/en/latest/core/engines.html#sqlalchemy.create_engine\">sqlalchemy.create_engine</a> call, while the <code>metadata_params</code> gets unpacked into the <a href=\"https://docs.sqlalchemy.org/en/rel_1_0/core/metadata.html#sqlalchemy.schema.MetaData\">sqlalchemy.MetaData</a> call.<br>2. The <code>metadata_cache_timeout</code> is a cache timeout setting in seconds for metadata fetch of this database. Specify it as <strong>\"metadata_cache_timeout\": {\"schema_cache_timeout\": 600, \"table_cache_timeout\": 600}</strong>. If unset, cache will not be enabled for the functionality. A timeout of 0 indicates that the cache never expires.<br>3. The <code>schemas_allowed_for_file_upload</code> is a comma separated list of schemas that CSVs are allowed to upload to. Specify it as <strong>\"schemas_allowed_for_file_upload\": [\"public\", \"csv_upload\"]</strong>. If database flavor does not support schema or any schema is allowed to be accessed, just leave the list empty<br>4. The <code>version</code> field is a string specifying the this db's version. This should be used with Presto DBs so that the syntax is correct<br>5. The <code>allows_virtual_table_explore</code> field is a boolean specifying whether or not the Explore button in SQL Lab results is shown.<br>6. The <code>disable_data_preview</code> field is a boolean specifying whether or not data preview queries will be run when fetching table metadata in SQL Lab.</p>
     * @type {string}
     * @memberof DatabaseTestConnectionSchema
     */
    extra?: string;
    /**
     * If Presto, all the queries in SQL Lab are going to be executed as the currently logged on user who must have permission to run them.<br/>If Hive and hive.server2.enable.doAs is enabled, will run the queries as service account, but impersonate the currently logged on user via hive.server2.proxy.user property.
     * @type {boolean}
     * @memberof DatabaseTestConnectionSchema
     */
    impersonateUser?: boolean;
    /**
     * <p>JSON string containing additional connection configuration.<br>This is used to provide connection information for systems like Hive, Presto, and BigQuery, which do not conform to the username:password syntax normally used by SQLAlchemy.</p>
     * @type {string}
     * @memberof DatabaseTestConnectionSchema
     */
    maskedEncryptedExtra?: string | null;
    /**
     * DB-specific parameters for configuration
     * @type {{ [key: string]: any; }}
     * @memberof DatabaseTestConnectionSchema
     */
    parameters?: {
        [key: string]: any;
    };
    /**
     * <p>Optional CA_BUNDLE contents to validate HTTPS requests. Only available on certain database engines.</p>
     * @type {string}
     * @memberof DatabaseTestConnectionSchema
     */
    serverCert?: string | null;
    /**
     * <p>Refer to the <a href=\"https://docs.sqlalchemy.org/en/rel_1_2/core/engines.html#database-urls\">SqlAlchemy docs</a> for more information on how to structure your URI.</p>
     * @type {string}
     * @memberof DatabaseTestConnectionSchema
     */
    sqlalchemyUri?: string;
    /**
     *
     * @type {DatabaseSSHTunnel}
     * @memberof DatabaseTestConnectionSchema
     */
    sshTunnel?: DatabaseSSHTunnel | null;
}
