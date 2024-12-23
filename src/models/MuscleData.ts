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
import type { MuscleArea } from './MuscleArea';
import {
    MuscleAreaFromJSON,
    MuscleAreaFromJSONTyped,
    MuscleAreaToJSON,
} from './MuscleArea';
import type { MuscleGroup } from './MuscleGroup';
import {
    MuscleGroupFromJSON,
    MuscleGroupFromJSONTyped,
    MuscleGroupToJSON,
} from './MuscleGroup';
import type { MuscleIdentifier } from './MuscleIdentifier';
import {
    MuscleIdentifierFromJSON,
    MuscleIdentifierFromJSONTyped,
    MuscleIdentifierToJSON,
} from './MuscleIdentifier';

/**
 * 
 * @export
 * @interface MuscleData
 */
export interface MuscleData {
    /**
     * 
     * @type {number}
     * @memberof MuscleData
     */
    id: number;
    /**
     * 
     * @type {MuscleIdentifier}
     * @memberof MuscleData
     */
    muscle: MuscleIdentifier;
    /**
     * 
     * @type {MuscleGroup}
     * @memberof MuscleData
     */
    group?: MuscleGroup;
    /**
     * 
     * @type {MuscleArea}
     * @memberof MuscleData
     */
    area?: MuscleArea;
    /**
     * 
     * @type {string}
     * @memberof MuscleData
     */
    targetLevel: MuscleDataTargetLevelEnum;
}


/**
 * @export
 */
export const MuscleDataTargetLevelEnum = {
    Primary: 'primary',
    Secondary: 'secondary',
    Stabilizer: 'stabilizer'
} as const;
export type MuscleDataTargetLevelEnum = typeof MuscleDataTargetLevelEnum[keyof typeof MuscleDataTargetLevelEnum];


/**
 * Check if a given object implements the MuscleData interface.
 */
export function instanceOfMuscleData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "muscle" in value;
    isInstance = isInstance && "targetLevel" in value;

    return isInstance;
}

export function MuscleDataFromJSON(json: any): MuscleData {
    return MuscleDataFromJSONTyped(json, false);
}

export function MuscleDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): MuscleData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'muscle': MuscleIdentifierFromJSON(json['muscle']),
        'group': !exists(json, 'group') ? undefined : MuscleGroupFromJSON(json['group']),
        'area': !exists(json, 'area') ? undefined : MuscleAreaFromJSON(json['area']),
        'targetLevel': json['targetLevel'],
    };
}

export function MuscleDataToJSON(value?: MuscleData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'muscle': MuscleIdentifierToJSON(value.muscle),
        'group': MuscleGroupToJSON(value.group),
        'area': MuscleAreaToJSON(value.area),
        'targetLevel': value.targetLevel,
    };
}

