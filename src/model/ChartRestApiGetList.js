/*
 * Superset
 * Superset
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.44
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';
import {ChartRestApiGetListDashboard} from './ChartRestApiGetListDashboard';
import {ChartRestApiGetListSqlaTable} from './ChartRestApiGetListSqlaTable';
import {ChartRestApiGetListTag} from './ChartRestApiGetListTag';
import {ChartRestApiGetListUser} from './ChartRestApiGetListUser';
import {ChartRestApiGetListUser1} from './ChartRestApiGetListUser1';
import {ChartRestApiGetListUser2} from './ChartRestApiGetListUser2';
import {ChartRestApiGetListUser3} from './ChartRestApiGetListUser3';

/**
 * The ChartRestApiGetList model module.
 * @module model/ChartRestApiGetList
 * @version v1
 */
export class ChartRestApiGetList {
  /**
   * Constructs a new <code>ChartRestApiGetList</code>.
   * @alias module:model/ChartRestApiGetList
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ChartRestApiGetList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChartRestApiGetList} obj Optional instance to populate.
   * @return {module:model/ChartRestApiGetList} The populated <code>ChartRestApiGetList</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ChartRestApiGetList();
      if (data.hasOwnProperty('cache_timeout'))
        obj.cacheTimeout = ApiClient.convertToType(data['cache_timeout'], 'Number');
      if (data.hasOwnProperty('certification_details'))
        obj.certificationDetails = ApiClient.convertToType(data['certification_details'], 'String');
      if (data.hasOwnProperty('certified_by'))
        obj.certifiedBy = ApiClient.convertToType(data['certified_by'], 'String');
      if (data.hasOwnProperty('changed_by'))
        obj.changedBy = ChartRestApiGetListUser.constructFromObject(data['changed_by']);
      if (data.hasOwnProperty('changed_by_name'))
        obj.changedByName = ApiClient.convertToType(data['changed_by_name'], Object);
      if (data.hasOwnProperty('changed_by_url'))
        obj.changedByUrl = ApiClient.convertToType(data['changed_by_url'], Object);
      if (data.hasOwnProperty('changed_on_delta_humanized'))
        obj.changedOnDeltaHumanized = ApiClient.convertToType(data['changed_on_delta_humanized'], Object);
      if (data.hasOwnProperty('changed_on_dttm'))
        obj.changedOnDttm = ApiClient.convertToType(data['changed_on_dttm'], Object);
      if (data.hasOwnProperty('changed_on_utc'))
        obj.changedOnUtc = ApiClient.convertToType(data['changed_on_utc'], Object);
      if (data.hasOwnProperty('created_by'))
        obj.createdBy = ChartRestApiGetListUser3.constructFromObject(data['created_by']);
      if (data.hasOwnProperty('created_by_name'))
        obj.createdByName = ApiClient.convertToType(data['created_by_name'], Object);
      if (data.hasOwnProperty('created_by_url'))
        obj.createdByUrl = ApiClient.convertToType(data['created_by_url'], Object);
      if (data.hasOwnProperty('created_on_delta_humanized'))
        obj.createdOnDeltaHumanized = ApiClient.convertToType(data['created_on_delta_humanized'], Object);
      if (data.hasOwnProperty('dashboards'))
        obj.dashboards = ChartRestApiGetListDashboard.constructFromObject(data['dashboards']);
      if (data.hasOwnProperty('datasource_id'))
        obj.datasourceId = ApiClient.convertToType(data['datasource_id'], 'Number');
      if (data.hasOwnProperty('datasource_name_text'))
        obj.datasourceNameText = ApiClient.convertToType(data['datasource_name_text'], Object);
      if (data.hasOwnProperty('datasource_type'))
        obj.datasourceType = ApiClient.convertToType(data['datasource_type'], 'String');
      if (data.hasOwnProperty('datasource_url'))
        obj.datasourceUrl = ApiClient.convertToType(data['datasource_url'], Object);
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('description_markeddown'))
        obj.descriptionMarkeddown = ApiClient.convertToType(data['description_markeddown'], Object);
      if (data.hasOwnProperty('edit_url'))
        obj.editUrl = ApiClient.convertToType(data['edit_url'], Object);
      if (data.hasOwnProperty('form_data'))
        obj.formData = ApiClient.convertToType(data['form_data'], Object);
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('is_managed_externally'))
        obj.isManagedExternally = ApiClient.convertToType(data['is_managed_externally'], 'Boolean');
      if (data.hasOwnProperty('last_saved_at'))
        obj.lastSavedAt = ApiClient.convertToType(data['last_saved_at'], 'Date');
      if (data.hasOwnProperty('last_saved_by'))
        obj.lastSavedBy = ChartRestApiGetListUser1.constructFromObject(data['last_saved_by']);
      if (data.hasOwnProperty('owners'))
        obj.owners = ChartRestApiGetListUser2.constructFromObject(data['owners']);
      if (data.hasOwnProperty('params'))
        obj.params = ApiClient.convertToType(data['params'], 'String');
      if (data.hasOwnProperty('slice_name'))
        obj.sliceName = ApiClient.convertToType(data['slice_name'], 'String');
      if (data.hasOwnProperty('slice_url'))
        obj.sliceUrl = ApiClient.convertToType(data['slice_url'], Object);
      if (data.hasOwnProperty('table'))
        obj.table = ChartRestApiGetListSqlaTable.constructFromObject(data['table']);
      if (data.hasOwnProperty('tags'))
        obj.tags = ChartRestApiGetListTag.constructFromObject(data['tags']);
      if (data.hasOwnProperty('thumbnail_url'))
        obj.thumbnailUrl = ApiClient.convertToType(data['thumbnail_url'], Object);
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], Object);
      if (data.hasOwnProperty('viz_type'))
        obj.vizType = ApiClient.convertToType(data['viz_type'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} cacheTimeout
 */
ChartRestApiGetList.prototype.cacheTimeout = undefined;

/**
 * @member {String} certificationDetails
 */
ChartRestApiGetList.prototype.certificationDetails = undefined;

/**
 * @member {String} certifiedBy
 */
ChartRestApiGetList.prototype.certifiedBy = undefined;

/**
 * @member {module:model/ChartRestApiGetListUser} changedBy
 */
ChartRestApiGetList.prototype.changedBy = undefined;

/**
 * @member {Object} changedByName
 */
ChartRestApiGetList.prototype.changedByName = undefined;

/**
 * @member {Object} changedByUrl
 */
ChartRestApiGetList.prototype.changedByUrl = undefined;

/**
 * @member {Object} changedOnDeltaHumanized
 */
ChartRestApiGetList.prototype.changedOnDeltaHumanized = undefined;

/**
 * @member {Object} changedOnDttm
 */
ChartRestApiGetList.prototype.changedOnDttm = undefined;

/**
 * @member {Object} changedOnUtc
 */
ChartRestApiGetList.prototype.changedOnUtc = undefined;

/**
 * @member {module:model/ChartRestApiGetListUser3} createdBy
 */
ChartRestApiGetList.prototype.createdBy = undefined;

/**
 * @member {Object} createdByName
 */
ChartRestApiGetList.prototype.createdByName = undefined;

/**
 * @member {Object} createdByUrl
 */
ChartRestApiGetList.prototype.createdByUrl = undefined;

/**
 * @member {Object} createdOnDeltaHumanized
 */
ChartRestApiGetList.prototype.createdOnDeltaHumanized = undefined;

/**
 * @member {module:model/ChartRestApiGetListDashboard} dashboards
 */
ChartRestApiGetList.prototype.dashboards = undefined;

/**
 * @member {Number} datasourceId
 */
ChartRestApiGetList.prototype.datasourceId = undefined;

/**
 * @member {Object} datasourceNameText
 */
ChartRestApiGetList.prototype.datasourceNameText = undefined;

/**
 * @member {String} datasourceType
 */
ChartRestApiGetList.prototype.datasourceType = undefined;

/**
 * @member {Object} datasourceUrl
 */
ChartRestApiGetList.prototype.datasourceUrl = undefined;

/**
 * @member {String} description
 */
ChartRestApiGetList.prototype.description = undefined;

/**
 * @member {Object} descriptionMarkeddown
 */
ChartRestApiGetList.prototype.descriptionMarkeddown = undefined;

/**
 * @member {Object} editUrl
 */
ChartRestApiGetList.prototype.editUrl = undefined;

/**
 * @member {Object} formData
 */
ChartRestApiGetList.prototype.formData = undefined;

/**
 * @member {Number} id
 */
ChartRestApiGetList.prototype.id = undefined;

/**
 * @member {Boolean} isManagedExternally
 */
ChartRestApiGetList.prototype.isManagedExternally = undefined;

/**
 * @member {Date} lastSavedAt
 */
ChartRestApiGetList.prototype.lastSavedAt = undefined;

/**
 * @member {module:model/ChartRestApiGetListUser1} lastSavedBy
 */
ChartRestApiGetList.prototype.lastSavedBy = undefined;

/**
 * @member {module:model/ChartRestApiGetListUser2} owners
 */
ChartRestApiGetList.prototype.owners = undefined;

/**
 * @member {String} params
 */
ChartRestApiGetList.prototype.params = undefined;

/**
 * @member {String} sliceName
 */
ChartRestApiGetList.prototype.sliceName = undefined;

/**
 * @member {Object} sliceUrl
 */
ChartRestApiGetList.prototype.sliceUrl = undefined;

/**
 * @member {module:model/ChartRestApiGetListSqlaTable} table
 */
ChartRestApiGetList.prototype.table = undefined;

/**
 * @member {module:model/ChartRestApiGetListTag} tags
 */
ChartRestApiGetList.prototype.tags = undefined;

/**
 * @member {Object} thumbnailUrl
 */
ChartRestApiGetList.prototype.thumbnailUrl = undefined;

/**
 * @member {Object} url
 */
ChartRestApiGetList.prototype.url = undefined;

/**
 * @member {String} vizType
 */
ChartRestApiGetList.prototype.vizType = undefined;
