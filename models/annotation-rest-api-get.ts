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
import { AnnotationRestApiGetAnnotationLayer } from './annotation-rest-api-get-annotation-layer';
/**
 * 
 * @export
 * @interface AnnotationRestApiGet
 */
export interface AnnotationRestApiGet {
    /**
     * 
     * @type {Date}
     * @memberof AnnotationRestApiGet
     */
    endDttm?: Date | null;
    /**
     * 
     * @type {number}
     * @memberof AnnotationRestApiGet
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof AnnotationRestApiGet
     */
    jsonMetadata?: string | null;
    /**
     * 
     * @type {AnnotationRestApiGetAnnotationLayer}
     * @memberof AnnotationRestApiGet
     */
    layer: AnnotationRestApiGetAnnotationLayer;
    /**
     * 
     * @type {string}
     * @memberof AnnotationRestApiGet
     */
    longDescr?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AnnotationRestApiGet
     */
    shortDescr?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof AnnotationRestApiGet
     */
    startDttm?: Date | null;
}
