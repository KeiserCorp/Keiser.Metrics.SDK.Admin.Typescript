/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.25
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ProfileData
 */
export interface ProfileData {
    /**
     * 
     * @type {number}
     * @memberof ProfileData
     */
    userId: number;
    /**
     * 
     * @type {string}
     * @memberof ProfileData
     */
    updatedAt: string;
    /**
     * 
     * @type {string}
     * @memberof ProfileData
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ProfileData
     */
    birthday?: string;
    /**
     * 
     * @type {string}
     * @memberof ProfileData
     */
    gender?: string;
    /**
     * 
     * @type {string}
     * @memberof ProfileData
     */
    language?: string;
    /**
     * 
     * @type {string}
     * @memberof ProfileData
     */
    units?: string;
}

/**
 * Check if a given object implements the ProfileData interface.
 */
export function instanceOfProfileData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "userId" in value;
    isInstance = isInstance && "updatedAt" in value;

    return isInstance;
}

export function ProfileDataFromJSON(json: any): ProfileData {
    return ProfileDataFromJSONTyped(json, false);
}

export function ProfileDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userId': json['userId'],
        'updatedAt': json['updatedAt'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'birthday': !exists(json, 'birthday') ? undefined : json['birthday'],
        'gender': !exists(json, 'gender') ? undefined : json['gender'],
        'language': !exists(json, 'language') ? undefined : json['language'],
        'units': !exists(json, 'units') ? undefined : json['units'],
    };
}

export function ProfileDataToJSON(value?: ProfileData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userId': value.userId,
        'updatedAt': value.updatedAt,
        'name': value.name,
        'birthday': value.birthday,
        'gender': value.gender,
        'language': value.language,
        'units': value.units,
    };
}

