/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.4
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
 * @interface StatData
 */
export interface StatData {
    /**
     * 
     * @type {number}
     * @memberof StatData
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof StatData
     */
    createdAt: string;
    /**
     * 
     * @type {number}
     * @memberof StatData
     */
    users: number;
    /**
     * 
     * @type {number}
     * @memberof StatData
     */
    msApps: number;
    /**
     * 
     * @type {number}
     * @memberof StatData
     */
    sessions: number;
    /**
     * 
     * @type {number}
     * @memberof StatData
     */
    oauths: number;
    /**
     * 
     * @type {number}
     * @memberof StatData
     */
    facebook: number;
    /**
     * 
     * @type {number}
     * @memberof StatData
     */
    google: number;
    /**
     * 
     * @type {number}
     * @memberof StatData
     */
    apple: number;
    /**
     * 
     * @type {number}
     * @memberof StatData
     */
    trainingpeaks: number;
    /**
     * 
     * @type {number}
     * @memberof StatData
     */
    strava: number;
    /**
     * 
     * @type {number}
     * @memberof StatData
     */
    inbody: number;
}

/**
 * Check if a given object implements the StatData interface.
 */
export function instanceOfStatData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "users" in value;
    isInstance = isInstance && "msApps" in value;
    isInstance = isInstance && "sessions" in value;
    isInstance = isInstance && "oauths" in value;
    isInstance = isInstance && "facebook" in value;
    isInstance = isInstance && "google" in value;
    isInstance = isInstance && "apple" in value;
    isInstance = isInstance && "trainingpeaks" in value;
    isInstance = isInstance && "strava" in value;
    isInstance = isInstance && "inbody" in value;

    return isInstance;
}

export function StatDataFromJSON(json: any): StatData {
    return StatDataFromJSONTyped(json, false);
}

export function StatDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): StatData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': json['createdAt'],
        'users': json['users'],
        'msApps': json['msApps'],
        'sessions': json['sessions'],
        'oauths': json['oauths'],
        'facebook': json['facebook'],
        'google': json['google'],
        'apple': json['apple'],
        'trainingpeaks': json['trainingpeaks'],
        'strava': json['strava'],
        'inbody': json['inbody'],
    };
}

export function StatDataToJSON(value?: StatData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'createdAt': value.createdAt,
        'users': value.users,
        'msApps': value.msApps,
        'sessions': value.sessions,
        'oauths': value.oauths,
        'facebook': value.facebook,
        'google': value.google,
        'apple': value.apple,
        'trainingpeaks': value.trainingpeaks,
        'strava': value.strava,
        'inbody': value.inbody,
    };
}

