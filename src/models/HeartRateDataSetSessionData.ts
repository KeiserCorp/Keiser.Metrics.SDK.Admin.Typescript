/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.16
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { HeartRateDataPointData } from './HeartRateDataPointData';
import {
    HeartRateDataPointDataFromJSON,
    HeartRateDataPointDataFromJSONTyped,
    HeartRateDataPointDataToJSON,
} from './HeartRateDataPointData';

/**
 * 
 * @export
 * @interface HeartRateDataSetSessionData
 */
export interface HeartRateDataSetSessionData {
    /**
     * 
     * @type {Date}
     * @memberof HeartRateDataSetSessionData
     */
    startedAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof HeartRateDataSetSessionData
     */
    endedAt: Date;
    /**
     * 
     * @type {number}
     * @memberof HeartRateDataSetSessionData
     */
    maxHeartRate: number;
    /**
     * 
     * @type {number}
     * @memberof HeartRateDataSetSessionData
     */
    averageHeartRate: number;
    /**
     * 
     * @type {Array<HeartRateDataPointData>}
     * @memberof HeartRateDataSetSessionData
     */
    graphData?: Array<HeartRateDataPointData>;
}

/**
 * Check if a given object implements the HeartRateDataSetSessionData interface.
 */
export function instanceOfHeartRateDataSetSessionData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "startedAt" in value;
    isInstance = isInstance && "endedAt" in value;
    isInstance = isInstance && "maxHeartRate" in value;
    isInstance = isInstance && "averageHeartRate" in value;

    return isInstance;
}

export function HeartRateDataSetSessionDataFromJSON(json: any): HeartRateDataSetSessionData {
    return HeartRateDataSetSessionDataFromJSONTyped(json, false);
}

export function HeartRateDataSetSessionDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): HeartRateDataSetSessionData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'startedAt': (new Date(json['startedAt'])),
        'endedAt': (new Date(json['endedAt'])),
        'maxHeartRate': json['maxHeartRate'],
        'averageHeartRate': json['averageHeartRate'],
        'graphData': !exists(json, 'graphData') ? undefined : ((json['graphData'] as Array<any>).map(HeartRateDataPointDataFromJSON)),
    };
}

export function HeartRateDataSetSessionDataToJSON(value?: HeartRateDataSetSessionData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'startedAt': (value.startedAt.toISOString()),
        'endedAt': (value.endedAt.toISOString()),
        'maxHeartRate': value.maxHeartRate,
        'averageHeartRate': value.averageHeartRate,
        'graphData': value.graphData === undefined ? undefined : ((value.graphData as Array<any>).map(HeartRateDataPointDataToJSON)),
    };
}

