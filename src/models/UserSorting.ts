/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.12
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
export const UserSorting = {
    Id: 'id',
    Name: 'name',
    CreatedAt: 'createdAt'
} as const;
export type UserSorting = typeof UserSorting[keyof typeof UserSorting];


export function UserSortingFromJSON(json: any): UserSorting {
    return UserSortingFromJSONTyped(json, false);
}

export function UserSortingFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserSorting {
    return json as UserSorting;
}

export function UserSortingToJSON(value?: UserSorting | null): any {
    return value as any;
}

