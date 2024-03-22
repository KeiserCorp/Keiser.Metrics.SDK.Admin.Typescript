/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.28
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
 * @interface WorkersResponse
 */
export interface WorkersResponse {
    /**
     * 
     * @type {object}
     * @memberof WorkersResponse
     */
    workers: object;
    /**
     * 
     * @type {string}
     * @memberof WorkersResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkersResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the WorkersResponse interface.
 */
export function instanceOfWorkersResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "workers" in value;

    return isInstance;
}

export function WorkersResponseFromJSON(json: any): WorkersResponse {
    return WorkersResponseFromJSONTyped(json, false);
}

export function WorkersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkersResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'workers': json['workers'],
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function WorkersResponseToJSON(value?: WorkersResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'workers': value.workers,
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

