/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.30
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { GlobalAccessControlData } from './GlobalAccessControlData';
import {
    GlobalAccessControlDataFromJSON,
    GlobalAccessControlDataFromJSONTyped,
    GlobalAccessControlDataToJSON,
} from './GlobalAccessControlData';
import type { GlobalAccessControlListResponseMeta } from './GlobalAccessControlListResponseMeta';
import {
    GlobalAccessControlListResponseMetaFromJSON,
    GlobalAccessControlListResponseMetaFromJSONTyped,
    GlobalAccessControlListResponseMetaToJSON,
} from './GlobalAccessControlListResponseMeta';

/**
 * 
 * @export
 * @interface GlobalAccessControlListResponse
 */
export interface GlobalAccessControlListResponse {
    /**
     * 
     * @type {Array<GlobalAccessControlData>}
     * @memberof GlobalAccessControlListResponse
     */
    globalAccessControls: Array<GlobalAccessControlData>;
    /**
     * 
     * @type {GlobalAccessControlListResponseMeta}
     * @memberof GlobalAccessControlListResponse
     */
    globalAccessControlsMeta: GlobalAccessControlListResponseMeta;
    /**
     * 
     * @type {string}
     * @memberof GlobalAccessControlListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof GlobalAccessControlListResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the GlobalAccessControlListResponse interface.
 */
export function instanceOfGlobalAccessControlListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "globalAccessControls" in value;
    isInstance = isInstance && "globalAccessControlsMeta" in value;

    return isInstance;
}

export function GlobalAccessControlListResponseFromJSON(json: any): GlobalAccessControlListResponse {
    return GlobalAccessControlListResponseFromJSONTyped(json, false);
}

export function GlobalAccessControlListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GlobalAccessControlListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'globalAccessControls': ((json['globalAccessControls'] as Array<any>).map(GlobalAccessControlDataFromJSON)),
        'globalAccessControlsMeta': GlobalAccessControlListResponseMetaFromJSON(json['globalAccessControlsMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function GlobalAccessControlListResponseToJSON(value?: GlobalAccessControlListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'globalAccessControls': ((value.globalAccessControls as Array<any>).map(GlobalAccessControlDataToJSON)),
        'globalAccessControlsMeta': GlobalAccessControlListResponseMetaToJSON(value.globalAccessControlsMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

