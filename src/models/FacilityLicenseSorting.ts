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


/**
 * 
 * @export
 */
export const FacilityLicenseSorting = {
    Id: 'id',
    Type: 'type',
    Term: 'term',
    EffectiveDate: 'effectiveDate'
} as const;
export type FacilityLicenseSorting = typeof FacilityLicenseSorting[keyof typeof FacilityLicenseSorting];


export function FacilityLicenseSortingFromJSON(json: any): FacilityLicenseSorting {
    return FacilityLicenseSortingFromJSONTyped(json, false);
}

export function FacilityLicenseSortingFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityLicenseSorting {
    return json as FacilityLicenseSorting;
}

export function FacilityLicenseSortingToJSON(value?: FacilityLicenseSorting | null): any {
    return value as any;
}

