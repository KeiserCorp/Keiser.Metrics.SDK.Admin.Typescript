/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.31
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

/**
 * 
 * @export
 * @interface GlobalAccessControlResponse
 */
export interface GlobalAccessControlResponse {
    /**
     * 
     * @type {GlobalAccessControlData}
     * @memberof GlobalAccessControlResponse
     */
    globalAccessControl: GlobalAccessControlData;
    /**
     * 
     * @type {string}
     * @memberof GlobalAccessControlResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof GlobalAccessControlResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the GlobalAccessControlResponse interface.
 */
export function instanceOfGlobalAccessControlResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "globalAccessControl" in value;

    return isInstance;
}

export function GlobalAccessControlResponseFromJSON(json: any): GlobalAccessControlResponse {
    return GlobalAccessControlResponseFromJSONTyped(json, false);
}

export function GlobalAccessControlResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GlobalAccessControlResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'globalAccessControl': GlobalAccessControlDataFromJSON(json['globalAccessControl']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function GlobalAccessControlResponseToJSON(value?: GlobalAccessControlResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'globalAccessControl': GlobalAccessControlDataToJSON(value.globalAccessControl),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

