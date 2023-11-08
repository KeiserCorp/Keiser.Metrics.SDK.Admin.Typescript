/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CardioExerciseData } from './CardioExerciseData';
import {
    CardioExerciseDataFromJSON,
    CardioExerciseDataFromJSONTyped,
    CardioExerciseDataToJSON,
} from './CardioExerciseData';
import type { CardioMachineData } from './CardioMachineData';
import {
    CardioMachineDataFromJSON,
    CardioMachineDataFromJSONTyped,
    CardioMachineDataToJSON,
} from './CardioMachineData';
import type { ExerciseOrdinalSetAssignmentData } from './ExerciseOrdinalSetAssignmentData';
import {
    ExerciseOrdinalSetAssignmentDataFromJSON,
    ExerciseOrdinalSetAssignmentDataFromJSONTyped,
    ExerciseOrdinalSetAssignmentDataToJSON,
} from './ExerciseOrdinalSetAssignmentData';

/**
 * 
 * @export
 * @interface CardioExerciseVariantData
 */
export interface CardioExerciseVariantData {
    /**
     * 
     * @type {number}
     * @memberof CardioExerciseVariantData
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof CardioExerciseVariantData
     */
    variant: CardioExerciseVariantDataVariantEnum;
    /**
     * 
     * @type {string}
     * @memberof CardioExerciseVariantData
     */
    instructionalImage?: string;
    /**
     * 
     * @type {string}
     * @memberof CardioExerciseVariantData
     */
    instructionalVideo?: string;
    /**
     * 
     * @type {CardioExerciseData}
     * @memberof CardioExerciseVariantData
     */
    cardioExercise?: CardioExerciseData;
    /**
     * 
     * @type {CardioMachineData}
     * @memberof CardioExerciseVariantData
     */
    cardioMachine?: CardioMachineData;
    /**
     * 
     * @type {Array<ExerciseOrdinalSetAssignmentData>}
     * @memberof CardioExerciseVariantData
     */
    exerciseOrdinalSetAssignments?: Array<ExerciseOrdinalSetAssignmentData>;
}


/**
 * @export
 */
export const CardioExerciseVariantDataVariantEnum = {
    Normal: 'normal'
} as const;
export type CardioExerciseVariantDataVariantEnum = typeof CardioExerciseVariantDataVariantEnum[keyof typeof CardioExerciseVariantDataVariantEnum];


/**
 * Check if a given object implements the CardioExerciseVariantData interface.
 */
export function instanceOfCardioExerciseVariantData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "variant" in value;

    return isInstance;
}

export function CardioExerciseVariantDataFromJSON(json: any): CardioExerciseVariantData {
    return CardioExerciseVariantDataFromJSONTyped(json, false);
}

export function CardioExerciseVariantDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardioExerciseVariantData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'variant': json['variant'],
        'instructionalImage': !exists(json, 'instructionalImage') ? undefined : json['instructionalImage'],
        'instructionalVideo': !exists(json, 'instructionalVideo') ? undefined : json['instructionalVideo'],
        'cardioExercise': !exists(json, 'cardioExercise') ? undefined : CardioExerciseDataFromJSON(json['cardioExercise']),
        'cardioMachine': !exists(json, 'cardioMachine') ? undefined : CardioMachineDataFromJSON(json['cardioMachine']),
        'exerciseOrdinalSetAssignments': !exists(json, 'exerciseOrdinalSetAssignments') ? undefined : ((json['exerciseOrdinalSetAssignments'] as Array<any>).map(ExerciseOrdinalSetAssignmentDataFromJSON)),
    };
}

export function CardioExerciseVariantDataToJSON(value?: CardioExerciseVariantData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'variant': value.variant,
        'instructionalImage': value.instructionalImage,
        'instructionalVideo': value.instructionalVideo,
        'cardioExercise': CardioExerciseDataToJSON(value.cardioExercise),
        'cardioMachine': CardioMachineDataToJSON(value.cardioMachine),
        'exerciseOrdinalSetAssignments': value.exerciseOrdinalSetAssignments === undefined ? undefined : ((value.exerciseOrdinalSetAssignments as Array<any>).map(ExerciseOrdinalSetAssignmentDataToJSON)),
    };
}
