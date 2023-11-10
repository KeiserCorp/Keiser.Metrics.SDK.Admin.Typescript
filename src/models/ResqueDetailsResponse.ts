/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.11
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ResqueDetailsData } from './ResqueDetailsData';
import {
    ResqueDetailsDataFromJSON,
    ResqueDetailsDataFromJSONTyped,
    ResqueDetailsDataToJSON,
} from './ResqueDetailsData';

/**
 * 
 * @export
 * @interface ResqueDetailsResponse
 */
export interface ResqueDetailsResponse {
    /**
     * 
     * @type {ResqueDetailsData}
     * @memberof ResqueDetailsResponse
     */
    details: ResqueDetailsData;
    /**
     * 
     * @type {string}
     * @memberof ResqueDetailsResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof ResqueDetailsResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the ResqueDetailsResponse interface.
 */
export function instanceOfResqueDetailsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "details" in value;

    return isInstance;
}

export function ResqueDetailsResponseFromJSON(json: any): ResqueDetailsResponse {
    return ResqueDetailsResponseFromJSONTyped(json, false);
}

export function ResqueDetailsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResqueDetailsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'details': ResqueDetailsDataFromJSON(json['details']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function ResqueDetailsResponseToJSON(value?: ResqueDetailsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'details': ResqueDetailsDataToJSON(value.details),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

