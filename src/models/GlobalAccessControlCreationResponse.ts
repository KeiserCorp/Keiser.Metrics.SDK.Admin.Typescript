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
import type { GlobalAccessControlSecretData } from './GlobalAccessControlSecretData';
import {
    GlobalAccessControlSecretDataFromJSON,
    GlobalAccessControlSecretDataFromJSONTyped,
    GlobalAccessControlSecretDataToJSON,
} from './GlobalAccessControlSecretData';

/**
 * 
 * @export
 * @interface GlobalAccessControlCreationResponse
 */
export interface GlobalAccessControlCreationResponse {
    /**
     * 
     * @type {GlobalAccessControlData}
     * @memberof GlobalAccessControlCreationResponse
     */
    globalAccessControl: GlobalAccessControlData;
    /**
     * 
     * @type {GlobalAccessControlSecretData}
     * @memberof GlobalAccessControlCreationResponse
     */
    globalAccessControlSecret: GlobalAccessControlSecretData;
    /**
     * 
     * @type {string}
     * @memberof GlobalAccessControlCreationResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof GlobalAccessControlCreationResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the GlobalAccessControlCreationResponse interface.
 */
export function instanceOfGlobalAccessControlCreationResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "globalAccessControl" in value;
    isInstance = isInstance && "globalAccessControlSecret" in value;

    return isInstance;
}

export function GlobalAccessControlCreationResponseFromJSON(json: any): GlobalAccessControlCreationResponse {
    return GlobalAccessControlCreationResponseFromJSONTyped(json, false);
}

export function GlobalAccessControlCreationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GlobalAccessControlCreationResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'globalAccessControl': GlobalAccessControlDataFromJSON(json['globalAccessControl']),
        'globalAccessControlSecret': GlobalAccessControlSecretDataFromJSON(json['globalAccessControlSecret']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function GlobalAccessControlCreationResponseToJSON(value?: GlobalAccessControlCreationResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'globalAccessControl': GlobalAccessControlDataToJSON(value.globalAccessControl),
        'globalAccessControlSecret': GlobalAccessControlSecretDataToJSON(value.globalAccessControlSecret),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

