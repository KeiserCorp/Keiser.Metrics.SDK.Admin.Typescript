/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.31
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
export const GlobalAccessControlSorting = {
    Id: 'id',
    Name: 'name'
} as const;
export type GlobalAccessControlSorting = typeof GlobalAccessControlSorting[keyof typeof GlobalAccessControlSorting];


export function GlobalAccessControlSortingFromJSON(json: any): GlobalAccessControlSorting {
    return GlobalAccessControlSortingFromJSONTyped(json, false);
}

export function GlobalAccessControlSortingFromJSONTyped(json: any, ignoreDiscriminator: boolean): GlobalAccessControlSorting {
    return json as GlobalAccessControlSorting;
}

export function GlobalAccessControlSortingToJSON(value?: GlobalAccessControlSorting | null): any {
    return value as any;
}

