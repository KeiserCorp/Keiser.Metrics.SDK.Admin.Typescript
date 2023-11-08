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
/**
 * 
 * @export
 * @interface StrengthMachineModelData
 */
export interface StrengthMachineModelData {
    /**
     * 
     * @type {string}
     * @memberof StrengthMachineModelData
     */
    model: string;
}

/**
 * Check if a given object implements the StrengthMachineModelData interface.
 */
export function instanceOfStrengthMachineModelData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "model" in value;

    return isInstance;
}

export function StrengthMachineModelDataFromJSON(json: any): StrengthMachineModelData {
    return StrengthMachineModelDataFromJSONTyped(json, false);
}

export function StrengthMachineModelDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): StrengthMachineModelData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'model': json['model'],
    };
}

export function StrengthMachineModelDataToJSON(value?: StrengthMachineModelData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'model': value.model,
    };
}

