/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.17
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
 * @interface CacheObject
 */
export interface CacheObject {
    /**
     * 
     * @type {number}
     * @memberof CacheObject
     */
    createdAt: number;
    /**
     * 
     * @type {number}
     * @memberof CacheObject
     */
    expireTimestamp: number;
    /**
     * 
     * @type {number}
     * @memberof CacheObject
     */
    lastReadAt: number;
    /**
     * 
     * @type {string}
     * @memberof CacheObject
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof CacheObject
     */
    value: string;
}

/**
 * Check if a given object implements the CacheObject interface.
 */
export function instanceOfCacheObject(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "expireTimestamp" in value;
    isInstance = isInstance && "lastReadAt" in value;
    isInstance = isInstance && "key" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function CacheObjectFromJSON(json: any): CacheObject {
    return CacheObjectFromJSONTyped(json, false);
}

export function CacheObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): CacheObject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdAt': json['createdAt'],
        'expireTimestamp': json['expireTimestamp'],
        'lastReadAt': json['lastReadAt'],
        'key': json['key'],
        'value': json['value'],
    };
}

export function CacheObjectToJSON(value?: CacheObject | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'createdAt': value.createdAt,
        'expireTimestamp': value.expireTimestamp,
        'lastReadAt': value.lastReadAt,
        'key': value.key,
        'value': value.value,
    };
}

