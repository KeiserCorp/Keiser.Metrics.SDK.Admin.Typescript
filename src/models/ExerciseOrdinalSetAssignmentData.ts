/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.24
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CardioExerciseVariantData } from './CardioExerciseVariantData';
import {
    CardioExerciseVariantDataFromJSON,
    CardioExerciseVariantDataFromJSONTyped,
    CardioExerciseVariantDataToJSON,
} from './CardioExerciseVariantData';
import type { ExerciseOrdinalSetData } from './ExerciseOrdinalSetData';
import {
    ExerciseOrdinalSetDataFromJSON,
    ExerciseOrdinalSetDataFromJSONTyped,
    ExerciseOrdinalSetDataToJSON,
} from './ExerciseOrdinalSetData';
import type { StrengthExerciseVariantData } from './StrengthExerciseVariantData';
import {
    StrengthExerciseVariantDataFromJSON,
    StrengthExerciseVariantDataFromJSONTyped,
    StrengthExerciseVariantDataToJSON,
} from './StrengthExerciseVariantData';
import type { StretchExerciseVariantData } from './StretchExerciseVariantData';
import {
    StretchExerciseVariantDataFromJSON,
    StretchExerciseVariantDataFromJSONTyped,
    StretchExerciseVariantDataToJSON,
} from './StretchExerciseVariantData';

/**
 * 
 * @export
 * @interface ExerciseOrdinalSetAssignmentData
 */
export interface ExerciseOrdinalSetAssignmentData {
    /**
     * 
     * @type {number}
     * @memberof ExerciseOrdinalSetAssignmentData
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof ExerciseOrdinalSetAssignmentData
     */
    ordinalIdentifier: string;
    /**
     * 
     * @type {ExerciseOrdinalSetData}
     * @memberof ExerciseOrdinalSetAssignmentData
     */
    exerciseOrdinalSet?: ExerciseOrdinalSetData;
    /**
     * 
     * @type {StrengthExerciseVariantData}
     * @memberof ExerciseOrdinalSetAssignmentData
     */
    strengthExerciseVariant?: StrengthExerciseVariantData;
    /**
     * 
     * @type {CardioExerciseVariantData}
     * @memberof ExerciseOrdinalSetAssignmentData
     */
    cardioExerciseVariant?: CardioExerciseVariantData;
    /**
     * 
     * @type {StretchExerciseVariantData}
     * @memberof ExerciseOrdinalSetAssignmentData
     */
    stretchExerciseVariant?: StretchExerciseVariantData;
}

/**
 * Check if a given object implements the ExerciseOrdinalSetAssignmentData interface.
 */
export function instanceOfExerciseOrdinalSetAssignmentData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "ordinalIdentifier" in value;

    return isInstance;
}

export function ExerciseOrdinalSetAssignmentDataFromJSON(json: any): ExerciseOrdinalSetAssignmentData {
    return ExerciseOrdinalSetAssignmentDataFromJSONTyped(json, false);
}

export function ExerciseOrdinalSetAssignmentDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExerciseOrdinalSetAssignmentData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'ordinalIdentifier': json['ordinalIdentifier'],
        'exerciseOrdinalSet': !exists(json, 'exerciseOrdinalSet') ? undefined : ExerciseOrdinalSetDataFromJSON(json['exerciseOrdinalSet']),
        'strengthExerciseVariant': !exists(json, 'strengthExerciseVariant') ? undefined : StrengthExerciseVariantDataFromJSON(json['strengthExerciseVariant']),
        'cardioExerciseVariant': !exists(json, 'cardioExerciseVariant') ? undefined : CardioExerciseVariantDataFromJSON(json['cardioExerciseVariant']),
        'stretchExerciseVariant': !exists(json, 'stretchExerciseVariant') ? undefined : StretchExerciseVariantDataFromJSON(json['stretchExerciseVariant']),
    };
}

export function ExerciseOrdinalSetAssignmentDataToJSON(value?: ExerciseOrdinalSetAssignmentData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'ordinalIdentifier': value.ordinalIdentifier,
        'exerciseOrdinalSet': ExerciseOrdinalSetDataToJSON(value.exerciseOrdinalSet),
        'strengthExerciseVariant': StrengthExerciseVariantDataToJSON(value.strengthExerciseVariant),
        'cardioExerciseVariant': CardioExerciseVariantDataToJSON(value.cardioExerciseVariant),
        'stretchExerciseVariant': StretchExerciseVariantDataToJSON(value.stretchExerciseVariant),
    };
}

