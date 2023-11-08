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
/**
 * 
 * @export
 * @interface A500TestResultData
 */
export interface A500TestResultData {
    /**
     * 
     * @type {number}
     * @memberof A500TestResultData
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof A500TestResultData
     */
    averageVelocityLineM: number;
    /**
     * 
     * @type {number}
     * @memberof A500TestResultData
     */
    averageVelocityLineB: number;
    /**
     * 
     * @type {number}
     * @memberof A500TestResultData
     */
    averagePowerParabolaA: number;
    /**
     * 
     * @type {number}
     * @memberof A500TestResultData
     */
    averagePowerParabolaH: number;
    /**
     * 
     * @type {number}
     * @memberof A500TestResultData
     */
    averagePowerParabolaK: number;
    /**
     * 
     * @type {number}
     * @memberof A500TestResultData
     */
    averageSlopeChanges: number;
    /**
     * 
     * @type {number}
     * @memberof A500TestResultData
     */
    peakVelocityLineM: number;
    /**
     * 
     * @type {number}
     * @memberof A500TestResultData
     */
    peakVelocityLineB: number;
    /**
     * 
     * @type {number}
     * @memberof A500TestResultData
     */
    peakPowerParabolaA: number;
    /**
     * 
     * @type {number}
     * @memberof A500TestResultData
     */
    peakPowerParabolaH: number;
    /**
     * 
     * @type {number}
     * @memberof A500TestResultData
     */
    peakPowerParabolaK: number;
    /**
     * 
     * @type {number}
     * @memberof A500TestResultData
     */
    peakSlopeChanges: number;
}

/**
 * Check if a given object implements the A500TestResultData interface.
 */
export function instanceOfA500TestResultData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "averageVelocityLineM" in value;
    isInstance = isInstance && "averageVelocityLineB" in value;
    isInstance = isInstance && "averagePowerParabolaA" in value;
    isInstance = isInstance && "averagePowerParabolaH" in value;
    isInstance = isInstance && "averagePowerParabolaK" in value;
    isInstance = isInstance && "averageSlopeChanges" in value;
    isInstance = isInstance && "peakVelocityLineM" in value;
    isInstance = isInstance && "peakVelocityLineB" in value;
    isInstance = isInstance && "peakPowerParabolaA" in value;
    isInstance = isInstance && "peakPowerParabolaH" in value;
    isInstance = isInstance && "peakPowerParabolaK" in value;
    isInstance = isInstance && "peakSlopeChanges" in value;

    return isInstance;
}

export function A500TestResultDataFromJSON(json: any): A500TestResultData {
    return A500TestResultDataFromJSONTyped(json, false);
}

export function A500TestResultDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): A500TestResultData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'averageVelocityLineM': json['averageVelocityLineM'],
        'averageVelocityLineB': json['averageVelocityLineB'],
        'averagePowerParabolaA': json['averagePowerParabolaA'],
        'averagePowerParabolaH': json['averagePowerParabolaH'],
        'averagePowerParabolaK': json['averagePowerParabolaK'],
        'averageSlopeChanges': json['averageSlopeChanges'],
        'peakVelocityLineM': json['peakVelocityLineM'],
        'peakVelocityLineB': json['peakVelocityLineB'],
        'peakPowerParabolaA': json['peakPowerParabolaA'],
        'peakPowerParabolaH': json['peakPowerParabolaH'],
        'peakPowerParabolaK': json['peakPowerParabolaK'],
        'peakSlopeChanges': json['peakSlopeChanges'],
    };
}

export function A500TestResultDataToJSON(value?: A500TestResultData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'averageVelocityLineM': value.averageVelocityLineM,
        'averageVelocityLineB': value.averageVelocityLineB,
        'averagePowerParabolaA': value.averagePowerParabolaA,
        'averagePowerParabolaH': value.averagePowerParabolaH,
        'averagePowerParabolaK': value.averagePowerParabolaK,
        'averageSlopeChanges': value.averageSlopeChanges,
        'peakVelocityLineM': value.peakVelocityLineM,
        'peakVelocityLineB': value.peakVelocityLineB,
        'peakPowerParabolaA': value.peakPowerParabolaA,
        'peakPowerParabolaH': value.peakPowerParabolaH,
        'peakPowerParabolaK': value.peakPowerParabolaK,
        'peakSlopeChanges': value.peakSlopeChanges,
    };
}

