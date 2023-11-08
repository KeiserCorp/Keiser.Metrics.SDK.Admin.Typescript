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


/**
 * 
 * @export
 */
export const MuscleGroup = {
    Abs: 'abs',
    Back: 'back',
    Biceps: 'biceps',
    Calves: 'calves',
    Chest: 'chest',
    Forearms: 'forearms',
    Glutes: 'glutes',
    Hamstrings: 'hamstrings',
    HipFlexors: 'hipFlexors',
    Neck: 'neck',
    Shoulders: 'shoulders',
    Triceps: 'triceps',
    UpperBack: 'upperBack',
    Thighs: 'thighs'
} as const;
export type MuscleGroup = typeof MuscleGroup[keyof typeof MuscleGroup];


export function MuscleGroupFromJSON(json: any): MuscleGroup {
    return MuscleGroupFromJSONTyped(json, false);
}

export function MuscleGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): MuscleGroup {
    return json as MuscleGroup;
}

export function MuscleGroupToJSON(value?: MuscleGroup | null): any {
    return value as any;
}
