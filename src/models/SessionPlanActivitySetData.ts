/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.19
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
 * @interface SessionPlanActivitySetData
 */
export interface SessionPlanActivitySetData {
    /**
     * 
     * @type {string}
     * @memberof SessionPlanActivitySetData
     */
    name: string;
}

/**
 * Check if a given object implements the SessionPlanActivitySetData interface.
 */
export function instanceOfSessionPlanActivitySetData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function SessionPlanActivitySetDataFromJSON(json: any): SessionPlanActivitySetData {
    return SessionPlanActivitySetDataFromJSONTyped(json, false);
}

export function SessionPlanActivitySetDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionPlanActivitySetData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function SessionPlanActivitySetDataToJSON(value?: SessionPlanActivitySetData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}

