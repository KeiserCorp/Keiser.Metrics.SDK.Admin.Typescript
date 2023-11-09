/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.9
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CacheKeysResponse
 */
export interface CacheKeysResponse {
    /**
     * 
     * @type {Array<string>}
     * @memberof CacheKeysResponse
     */
    cacheKeys: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof CacheKeysResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof CacheKeysResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the CacheKeysResponse interface.
 */
export function instanceOfCacheKeysResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "cacheKeys" in value;

    return isInstance;
}

export function CacheKeysResponseFromJSON(json: any): CacheKeysResponse {
    return CacheKeysResponseFromJSONTyped(json, false);
}

export function CacheKeysResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CacheKeysResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cacheKeys': json['cacheKeys'],
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function CacheKeysResponseToJSON(value?: CacheKeysResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cacheKeys': value.cacheKeys,
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

