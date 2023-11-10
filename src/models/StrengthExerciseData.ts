/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ExerciseAliasData } from './ExerciseAliasData';
import {
    ExerciseAliasDataFromJSON,
    ExerciseAliasDataFromJSONTyped,
    ExerciseAliasDataToJSON,
} from './ExerciseAliasData';
import type { MuscleData } from './MuscleData';
import {
    MuscleDataFromJSON,
    MuscleDataFromJSONTyped,
    MuscleDataToJSON,
} from './MuscleData';
import type { StrengthExerciseVariantData } from './StrengthExerciseVariantData';
import {
    StrengthExerciseVariantDataFromJSON,
    StrengthExerciseVariantDataFromJSONTyped,
    StrengthExerciseVariantDataToJSON,
} from './StrengthExerciseVariantData';
import type { StrengthMachineData } from './StrengthMachineData';
import {
    StrengthMachineDataFromJSON,
    StrengthMachineDataFromJSONTyped,
    StrengthMachineDataToJSON,
} from './StrengthMachineData';

/**
 * 
 * @export
 * @interface StrengthExerciseData
 */
export interface StrengthExerciseData {
    /**
     * 
     * @type {number}
     * @memberof StrengthExerciseData
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof StrengthExerciseData
     */
    category: StrengthExerciseDataCategoryEnum;
    /**
     * 
     * @type {string}
     * @memberof StrengthExerciseData
     */
    movement?: StrengthExerciseDataMovementEnum;
    /**
     * 
     * @type {string}
     * @memberof StrengthExerciseData
     */
    humanMovement: StrengthExerciseDataHumanMovementEnum;
    /**
     * 
     * @type {string}
     * @memberof StrengthExerciseData
     */
    plane: StrengthExerciseDataPlaneEnum;
    /**
     * 
     * @type {ExerciseAliasData}
     * @memberof StrengthExerciseData
     */
    defaultExerciseAlias?: ExerciseAliasData;
    /**
     * 
     * @type {Array<ExerciseAliasData>}
     * @memberof StrengthExerciseData
     */
    exerciseAliases?: Array<ExerciseAliasData>;
    /**
     * 
     * @type {Array<StrengthExerciseVariantData>}
     * @memberof StrengthExerciseData
     */
    strengthExerciseVariants?: Array<StrengthExerciseVariantData>;
    /**
     * 
     * @type {Array<MuscleData>}
     * @memberof StrengthExerciseData
     */
    strengthExerciseMuscles?: Array<MuscleData>;
    /**
     * 
     * @type {Array<StrengthMachineData>}
     * @memberof StrengthExerciseData
     */
    strengthMachines?: Array<StrengthMachineData>;
}


/**
 * @export
 */
export const StrengthExerciseDataCategoryEnum = {
    LowerBody: 'lowerBody',
    UpperBody: 'upperBody',
    Core: 'core',
    Explosive: 'explosive',
    Complex: 'complex'
} as const;
export type StrengthExerciseDataCategoryEnum = typeof StrengthExerciseDataCategoryEnum[keyof typeof StrengthExerciseDataCategoryEnum];

/**
 * @export
 */
export const StrengthExerciseDataMovementEnum = {
    Isolation: 'isolation',
    Compound: 'compound'
} as const;
export type StrengthExerciseDataMovementEnum = typeof StrengthExerciseDataMovementEnum[keyof typeof StrengthExerciseDataMovementEnum];

/**
 * @export
 */
export const StrengthExerciseDataHumanMovementEnum = {
    Unilateral: 'unilateral',
    Bilateral: 'bilateral'
} as const;
export type StrengthExerciseDataHumanMovementEnum = typeof StrengthExerciseDataHumanMovementEnum[keyof typeof StrengthExerciseDataHumanMovementEnum];

/**
 * @export
 */
export const StrengthExerciseDataPlaneEnum = {
    Sagittal: 'sagittal',
    Frontal: 'frontal',
    Transverse: 'transverse'
} as const;
export type StrengthExerciseDataPlaneEnum = typeof StrengthExerciseDataPlaneEnum[keyof typeof StrengthExerciseDataPlaneEnum];


/**
 * Check if a given object implements the StrengthExerciseData interface.
 */
export function instanceOfStrengthExerciseData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "category" in value;
    isInstance = isInstance && "humanMovement" in value;
    isInstance = isInstance && "plane" in value;

    return isInstance;
}

export function StrengthExerciseDataFromJSON(json: any): StrengthExerciseData {
    return StrengthExerciseDataFromJSONTyped(json, false);
}

export function StrengthExerciseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): StrengthExerciseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'category': json['category'],
        'movement': !exists(json, 'movement') ? undefined : json['movement'],
        'humanMovement': json['humanMovement'],
        'plane': json['plane'],
        'defaultExerciseAlias': !exists(json, 'defaultExerciseAlias') ? undefined : ExerciseAliasDataFromJSON(json['defaultExerciseAlias']),
        'exerciseAliases': !exists(json, 'exerciseAliases') ? undefined : ((json['exerciseAliases'] as Array<any>).map(ExerciseAliasDataFromJSON)),
        'strengthExerciseVariants': !exists(json, 'strengthExerciseVariants') ? undefined : ((json['strengthExerciseVariants'] as Array<any>).map(StrengthExerciseVariantDataFromJSON)),
        'strengthExerciseMuscles': !exists(json, 'strengthExerciseMuscles') ? undefined : ((json['strengthExerciseMuscles'] as Array<any>).map(MuscleDataFromJSON)),
        'strengthMachines': !exists(json, 'strengthMachines') ? undefined : ((json['strengthMachines'] as Array<any>).map(StrengthMachineDataFromJSON)),
    };
}

export function StrengthExerciseDataToJSON(value?: StrengthExerciseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'category': value.category,
        'movement': value.movement,
        'humanMovement': value.humanMovement,
        'plane': value.plane,
        'defaultExerciseAlias': ExerciseAliasDataToJSON(value.defaultExerciseAlias),
        'exerciseAliases': value.exerciseAliases === undefined ? undefined : ((value.exerciseAliases as Array<any>).map(ExerciseAliasDataToJSON)),
        'strengthExerciseVariants': value.strengthExerciseVariants === undefined ? undefined : ((value.strengthExerciseVariants as Array<any>).map(StrengthExerciseVariantDataToJSON)),
        'strengthExerciseMuscles': value.strengthExerciseMuscles === undefined ? undefined : ((value.strengthExerciseMuscles as Array<any>).map(MuscleDataToJSON)),
        'strengthMachines': value.strengthMachines === undefined ? undefined : ((value.strengthMachines as Array<any>).map(StrengthMachineDataToJSON)),
    };
}

