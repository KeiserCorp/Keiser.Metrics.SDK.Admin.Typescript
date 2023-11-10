/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.12
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ExerciseOrdinalSetAssignmentData } from './ExerciseOrdinalSetAssignmentData';
import {
    ExerciseOrdinalSetAssignmentDataFromJSON,
    ExerciseOrdinalSetAssignmentDataFromJSONTyped,
    ExerciseOrdinalSetAssignmentDataToJSON,
} from './ExerciseOrdinalSetAssignmentData';

/**
 * 
 * @export
 * @interface ExerciseOrdinalSetData
 */
export interface ExerciseOrdinalSetData {
    /**
     * 
     * @type {number}
     * @memberof ExerciseOrdinalSetData
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof ExerciseOrdinalSetData
     */
    code: string;
    /**
     * 
     * @type {string}
     * @memberof ExerciseOrdinalSetData
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ExerciseOrdinalSetData
     */
    description?: string;
    /**
     * 
     * @type {Array<ExerciseOrdinalSetAssignmentData>}
     * @memberof ExerciseOrdinalSetData
     */
    exerciseOrdinalSetAssignments?: Array<ExerciseOrdinalSetAssignmentData>;
}

/**
 * Check if a given object implements the ExerciseOrdinalSetData interface.
 */
export function instanceOfExerciseOrdinalSetData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "code" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function ExerciseOrdinalSetDataFromJSON(json: any): ExerciseOrdinalSetData {
    return ExerciseOrdinalSetDataFromJSONTyped(json, false);
}

export function ExerciseOrdinalSetDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExerciseOrdinalSetData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'code': json['code'],
        'name': json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'exerciseOrdinalSetAssignments': !exists(json, 'exerciseOrdinalSetAssignments') ? undefined : ((json['exerciseOrdinalSetAssignments'] as Array<any>).map(ExerciseOrdinalSetAssignmentDataFromJSON)),
    };
}

export function ExerciseOrdinalSetDataToJSON(value?: ExerciseOrdinalSetData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'code': value.code,
        'name': value.name,
        'description': value.description,
        'exerciseOrdinalSetAssignments': value.exerciseOrdinalSetAssignments === undefined ? undefined : ((value.exerciseOrdinalSetAssignments as Array<any>).map(ExerciseOrdinalSetAssignmentDataToJSON)),
    };
}

