/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { GlobalAccessControlSecretData } from './GlobalAccessControlSecretData';
import {
    GlobalAccessControlSecretDataFromJSON,
    GlobalAccessControlSecretDataFromJSONTyped,
    GlobalAccessControlSecretDataToJSON,
} from './GlobalAccessControlSecretData';

/**
 * 
 * @export
 * @interface GlobalAccessControlSecretResponse
 */
export interface GlobalAccessControlSecretResponse {
    /**
     * 
     * @type {GlobalAccessControlSecretData}
     * @memberof GlobalAccessControlSecretResponse
     */
    globalAccessControlSecret: GlobalAccessControlSecretData;
    /**
     * 
     * @type {string}
     * @memberof GlobalAccessControlSecretResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof GlobalAccessControlSecretResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the GlobalAccessControlSecretResponse interface.
 */
export function instanceOfGlobalAccessControlSecretResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "globalAccessControlSecret" in value;

    return isInstance;
}

export function GlobalAccessControlSecretResponseFromJSON(json: any): GlobalAccessControlSecretResponse {
    return GlobalAccessControlSecretResponseFromJSONTyped(json, false);
}

export function GlobalAccessControlSecretResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GlobalAccessControlSecretResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'globalAccessControlSecret': GlobalAccessControlSecretDataFromJSON(json['globalAccessControlSecret']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function GlobalAccessControlSecretResponseToJSON(value?: GlobalAccessControlSecretResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'globalAccessControlSecret': GlobalAccessControlSecretDataToJSON(value.globalAccessControlSecret),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

