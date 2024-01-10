/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.21
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BodyCompositionMeasurementData } from './BodyCompositionMeasurementData';
import {
    BodyCompositionMeasurementDataFromJSON,
    BodyCompositionMeasurementDataFromJSONTyped,
    BodyCompositionMeasurementDataToJSON,
} from './BodyCompositionMeasurementData';

/**
 * 
 * @export
 * @interface WeightMeasurementData
 */
export interface WeightMeasurementData {
    /**
     * 
     * @type {number}
     * @memberof WeightMeasurementData
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof WeightMeasurementData
     */
    userId: number;
    /**
     * 
     * @type {string}
     * @memberof WeightMeasurementData
     */
    source: string;
    /**
     * 
     * @type {Date}
     * @memberof WeightMeasurementData
     */
    takenAt: Date;
    /**
     * 
     * @type {number}
     * @memberof WeightMeasurementData
     */
    metricWeight: number;
    /**
     * 
     * @type {number}
     * @memberof WeightMeasurementData
     */
    bodyFatPercentage?: number;
    /**
     * 
     * @type {BodyCompositionMeasurementData}
     * @memberof WeightMeasurementData
     */
    bodyCompositionMeasurement?: BodyCompositionMeasurementData;
}

/**
 * Check if a given object implements the WeightMeasurementData interface.
 */
export function instanceOfWeightMeasurementData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "userId" in value;
    isInstance = isInstance && "source" in value;
    isInstance = isInstance && "takenAt" in value;
    isInstance = isInstance && "metricWeight" in value;

    return isInstance;
}

export function WeightMeasurementDataFromJSON(json: any): WeightMeasurementData {
    return WeightMeasurementDataFromJSONTyped(json, false);
}

export function WeightMeasurementDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): WeightMeasurementData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'userId': json['userId'],
        'source': json['source'],
        'takenAt': (new Date(json['takenAt'])),
        'metricWeight': json['metricWeight'],
        'bodyFatPercentage': !exists(json, 'bodyFatPercentage') ? undefined : json['bodyFatPercentage'],
        'bodyCompositionMeasurement': !exists(json, 'bodyCompositionMeasurement') ? undefined : BodyCompositionMeasurementDataFromJSON(json['bodyCompositionMeasurement']),
    };
}

export function WeightMeasurementDataToJSON(value?: WeightMeasurementData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'userId': value.userId,
        'source': value.source,
        'takenAt': (value.takenAt.toISOString()),
        'metricWeight': value.metricWeight,
        'bodyFatPercentage': value.bodyFatPercentage,
        'bodyCompositionMeasurement': BodyCompositionMeasurementDataToJSON(value.bodyCompositionMeasurement),
    };
}

