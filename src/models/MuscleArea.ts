/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.23
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
export const MuscleArea = {
    LowerBody: 'lowerBody',
    UpperBody: 'upperBody',
    Core: 'core'
} as const;
export type MuscleArea = typeof MuscleArea[keyof typeof MuscleArea];


export function MuscleAreaFromJSON(json: any): MuscleArea {
    return MuscleAreaFromJSONTyped(json, false);
}

export function MuscleAreaFromJSONTyped(json: any, ignoreDiscriminator: boolean): MuscleArea {
    return json as MuscleArea;
}

export function MuscleAreaToJSON(value?: MuscleArea | null): any {
    return value as any;
}

