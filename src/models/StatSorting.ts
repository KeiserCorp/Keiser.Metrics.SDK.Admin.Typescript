/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.15
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
export const StatSorting = {
    Id: 'id',
    CreatedAt: 'createdAt'
} as const;
export type StatSorting = typeof StatSorting[keyof typeof StatSorting];


export function StatSortingFromJSON(json: any): StatSorting {
    return StatSortingFromJSONTyped(json, false);
}

export function StatSortingFromJSONTyped(json: any, ignoreDiscriminator: boolean): StatSorting {
    return json as StatSorting;
}

export function StatSortingToJSON(value?: StatSorting | null): any {
    return value as any;
}

