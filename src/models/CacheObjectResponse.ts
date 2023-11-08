/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.7
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CacheObject } from './CacheObject';
import {
    CacheObjectFromJSON,
    CacheObjectFromJSONTyped,
    CacheObjectToJSON,
} from './CacheObject';

/**
 * 
 * @export
 * @interface CacheObjectResponse
 */
export interface CacheObjectResponse {
    /**
     * 
     * @type {CacheObject}
     * @memberof CacheObjectResponse
     */
    cacheObject: CacheObject;
    /**
     * 
     * @type {string}
     * @memberof CacheObjectResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof CacheObjectResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the CacheObjectResponse interface.
 */
export function instanceOfCacheObjectResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "cacheObject" in value;

    return isInstance;
}

export function CacheObjectResponseFromJSON(json: any): CacheObjectResponse {
    return CacheObjectResponseFromJSONTyped(json, false);
}

export function CacheObjectResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CacheObjectResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cacheObject': CacheObjectFromJSON(json['cacheObject']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function CacheObjectResponseToJSON(value?: CacheObjectResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cacheObject': CacheObjectToJSON(value.cacheObject),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

