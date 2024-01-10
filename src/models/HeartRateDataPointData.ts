/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.20
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
 * @interface HeartRateDataPointData
 */
export interface HeartRateDataPointData {
    /**
     * 
     * @type {Date}
     * @memberof HeartRateDataPointData
     */
    takenAt: Date;
    /**
     * 
     * @type {number}
     * @memberof HeartRateDataPointData
     */
    heartRate: number;
    /**
     * 
     * @type {number}
     * @memberof HeartRateDataPointData
     */
    heartRateDataSetId?: number;
    /**
     * 
     * @type {number}
     * @memberof HeartRateDataPointData
     */
    id?: number;
}

/**
 * Check if a given object implements the HeartRateDataPointData interface.
 */
export function instanceOfHeartRateDataPointData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "takenAt" in value;
    isInstance = isInstance && "heartRate" in value;

    return isInstance;
}

export function HeartRateDataPointDataFromJSON(json: any): HeartRateDataPointData {
    return HeartRateDataPointDataFromJSONTyped(json, false);
}

export function HeartRateDataPointDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): HeartRateDataPointData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'takenAt': (new Date(json['takenAt'])),
        'heartRate': json['heartRate'],
        'heartRateDataSetId': !exists(json, 'heartRateDataSetId') ? undefined : json['heartRateDataSetId'],
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function HeartRateDataPointDataToJSON(value?: HeartRateDataPointData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'takenAt': (value.takenAt.toISOString()),
        'heartRate': value.heartRate,
        'heartRateDataSetId': value.heartRateDataSetId,
        'id': value.id,
    };
}

