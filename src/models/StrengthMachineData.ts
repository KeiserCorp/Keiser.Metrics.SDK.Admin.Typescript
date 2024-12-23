/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.35
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { StrengthExerciseData } from './StrengthExerciseData';
import {
    StrengthExerciseDataFromJSON,
    StrengthExerciseDataFromJSONTyped,
    StrengthExerciseDataToJSON,
} from './StrengthExerciseData';
import type { StrengthMachineModelData } from './StrengthMachineModelData';
import {
    StrengthMachineModelDataFromJSON,
    StrengthMachineModelDataFromJSONTyped,
    StrengthMachineModelDataToJSON,
} from './StrengthMachineModelData';

/**
 * 
 * @export
 * @interface StrengthMachineData
 */
export interface StrengthMachineData {
    /**
     * 
     * @type {number}
     * @memberof StrengthMachineData
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof StrengthMachineData
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof StrengthMachineData
     */
    line: StrengthMachineDataLineEnum;
    /**
     * 
     * @type {string}
     * @memberof StrengthMachineData
     */
    variant?: string;
    /**
     * 
     * @type {boolean}
     * @memberof StrengthMachineData
     */
    dualSided: boolean;
    /**
     * 
     * @type {number}
     * @memberof StrengthMachineData
     */
    defaultStrengthExerciseId?: number;
    /**
     * 
     * @type {StrengthExerciseData}
     * @memberof StrengthMachineData
     */
    defaultStrengthExercise?: StrengthExerciseData;
    /**
     * 
     * @type {Array<StrengthMachineModelData>}
     * @memberof StrengthMachineData
     */
    models?: Array<StrengthMachineModelData>;
}


/**
 * @export
 */
export const StrengthMachineDataLineEnum = {
    A250: 'a250',
    A300: 'a300',
    A350: 'a350',
    Infinity: 'infinity',
    PowerRack: 'powerRack',
    A400: 'a400',
    A500: 'a500'
} as const;
export type StrengthMachineDataLineEnum = typeof StrengthMachineDataLineEnum[keyof typeof StrengthMachineDataLineEnum];


/**
 * Check if a given object implements the StrengthMachineData interface.
 */
export function instanceOfStrengthMachineData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "line" in value;
    isInstance = isInstance && "dualSided" in value;

    return isInstance;
}

export function StrengthMachineDataFromJSON(json: any): StrengthMachineData {
    return StrengthMachineDataFromJSONTyped(json, false);
}

export function StrengthMachineDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): StrengthMachineData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'line': json['line'],
        'variant': !exists(json, 'variant') ? undefined : json['variant'],
        'dualSided': json['dualSided'],
        'defaultStrengthExerciseId': !exists(json, 'defaultStrengthExerciseId') ? undefined : json['defaultStrengthExerciseId'],
        'defaultStrengthExercise': !exists(json, 'defaultStrengthExercise') ? undefined : StrengthExerciseDataFromJSON(json['defaultStrengthExercise']),
        'models': !exists(json, 'models') ? undefined : ((json['models'] as Array<any>).map(StrengthMachineModelDataFromJSON)),
    };
}

export function StrengthMachineDataToJSON(value?: StrengthMachineData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'line': value.line,
        'variant': value.variant,
        'dualSided': value.dualSided,
        'defaultStrengthExerciseId': value.defaultStrengthExerciseId,
        'defaultStrengthExercise': StrengthExerciseDataToJSON(value.defaultStrengthExercise),
        'models': value.models === undefined ? undefined : ((value.models as Array<any>).map(StrengthMachineModelDataToJSON)),
    };
}

