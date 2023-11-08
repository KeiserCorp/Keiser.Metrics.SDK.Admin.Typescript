/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.3
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
 * @interface GlobalAccessControlSecretData
 */
export interface GlobalAccessControlSecretData {
    /**
     * 
     * @type {string}
     * @memberof GlobalAccessControlSecretData
     */
    secret: string;
    /**
     * 
     * @type {string}
     * @memberof GlobalAccessControlSecretData
     */
    uri: string;
}

/**
 * Check if a given object implements the GlobalAccessControlSecretData interface.
 */
export function instanceOfGlobalAccessControlSecretData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "secret" in value;
    isInstance = isInstance && "uri" in value;

    return isInstance;
}

export function GlobalAccessControlSecretDataFromJSON(json: any): GlobalAccessControlSecretData {
    return GlobalAccessControlSecretDataFromJSONTyped(json, false);
}

export function GlobalAccessControlSecretDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GlobalAccessControlSecretData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'secret': json['secret'],
        'uri': json['uri'],
    };
}

export function GlobalAccessControlSecretDataToJSON(value?: GlobalAccessControlSecretData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'secret': value.secret,
        'uri': value.uri,
    };
}
