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
 * @interface Low
 */
export interface Low {
    /**
     * 
     * @type {number}
     * @memberof Low
     */
    length: number;
}

/**
 * Check if a given object implements the Low interface.
 */
export function instanceOfLow(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "length" in value;

    return isInstance;
}

export function LowFromJSON(json: any): Low {
    return LowFromJSONTyped(json, false);
}

export function LowFromJSONTyped(json: any, ignoreDiscriminator: boolean): Low {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'length': json['length'],
    };
}

export function LowToJSON(value?: Low | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'length': value.length,
    };
}

