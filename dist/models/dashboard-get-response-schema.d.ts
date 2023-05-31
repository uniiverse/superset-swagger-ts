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
import { Roles } from './roles';
import { Tag } from './tag';
import { User } from './user';
/**
 *
 * @export
 * @interface DashboardGetResponseSchema
 */
export interface DashboardGetResponseSchema {
    /**
     * Details of the certification
     * @type {string}
     * @memberof DashboardGetResponseSchema
     */
    certificationDetails?: string;
    /**
     * Person or group that has certified this dashboard
     * @type {string}
     * @memberof DashboardGetResponseSchema
     */
    certifiedBy?: string;
    /**
     *
     * @type {User}
     * @memberof DashboardGetResponseSchema
     */
    changedBy?: User;
    /**
     *
     * @type {string}
     * @memberof DashboardGetResponseSchema
     */
    changedByName?: string;
    /**
     *
     * @type {string}
     * @memberof DashboardGetResponseSchema
     */
    changedByUrl?: string;
    /**
     *
     * @type {Date}
     * @memberof DashboardGetResponseSchema
     */
    changedOn?: Date;
    /**
     *
     * @type {string}
     * @memberof DashboardGetResponseSchema
     */
    changedOnDeltaHumanized?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof DashboardGetResponseSchema
     */
    charts?: Array<string>;
    /**
     * Override CSS for the dashboard.
     * @type {string}
     * @memberof DashboardGetResponseSchema
     */
    css?: string;
    /**
     * A title for the dashboard.
     * @type {string}
     * @memberof DashboardGetResponseSchema
     */
    dashboardTitle?: string;
    /**
     *
     * @type {number}
     * @memberof DashboardGetResponseSchema
     */
    id?: number;
    /**
     *
     * @type {boolean}
     * @memberof DashboardGetResponseSchema
     */
    isManagedExternally?: boolean | null;
    /**
     * This JSON object is generated dynamically when clicking the save or overwrite button in the dashboard view. It is exposed here for reference and for power users who may want to alter  specific parameters.
     * @type {string}
     * @memberof DashboardGetResponseSchema
     */
    jsonMetadata?: string;
    /**
     *
     * @type {Array<User>}
     * @memberof DashboardGetResponseSchema
     */
    owners?: Array<User>;
    /**
     * This json object describes the positioning of the widgets in the dashboard. It is dynamically generated when adjusting the widgets size and positions by using drag & drop in the dashboard view
     * @type {string}
     * @memberof DashboardGetResponseSchema
     */
    positionJson?: string;
    /**
     *
     * @type {boolean}
     * @memberof DashboardGetResponseSchema
     */
    published?: boolean;
    /**
     *
     * @type {Array<Roles>}
     * @memberof DashboardGetResponseSchema
     */
    roles?: Array<Roles>;
    /**
     *
     * @type {string}
     * @memberof DashboardGetResponseSchema
     */
    slug?: string;
    /**
     *
     * @type {Array<Tag>}
     * @memberof DashboardGetResponseSchema
     */
    tags?: Array<Tag>;
    /**
     *
     * @type {string}
     * @memberof DashboardGetResponseSchema
     */
    thumbnailUrl?: string;
    /**
     *
     * @type {string}
     * @memberof DashboardGetResponseSchema
     */
    url?: string;
}
