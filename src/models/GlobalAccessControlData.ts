/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.9
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { UserData } from './UserData';
import {
    UserDataFromJSON,
    UserDataFromJSONTyped,
    UserDataToJSON,
} from './UserData';

/**
 * 
 * @export
 * @interface GlobalAccessControlData
 */
export interface GlobalAccessControlData {
    /**
     * 
     * @type {number}
     * @memberof GlobalAccessControlData
     */
    userId: number;
    /**
     * 
     * @type {string}
     * @memberof GlobalAccessControlData
     */
    userRights?: GlobalAccessControlDataUserRightsEnum;
    /**
     * 
     * @type {string}
     * @memberof GlobalAccessControlData
     */
    exerciseRights?: GlobalAccessControlDataExerciseRightsEnum;
    /**
     * 
     * @type {string}
     * @memberof GlobalAccessControlData
     */
    mSeriesGuidedSessionRights?: GlobalAccessControlDataMSeriesGuidedSessionRightsEnum;
    /**
     * 
     * @type {string}
     * @memberof GlobalAccessControlData
     */
    facilityRights?: GlobalAccessControlDataFacilityRightsEnum;
    /**
     * 
     * @type {string}
     * @memberof GlobalAccessControlData
     */
    licenseRights?: GlobalAccessControlDataLicenseRightsEnum;
    /**
     * 
     * @type {string}
     * @memberof GlobalAccessControlData
     */
    accessControlRights?: GlobalAccessControlDataAccessControlRightsEnum;
    /**
     * 
     * @type {string}
     * @memberof GlobalAccessControlData
     */
    resqueRights?: GlobalAccessControlDataResqueRightsEnum;
    /**
     * 
     * @type {string}
     * @memberof GlobalAccessControlData
     */
    analyticRights?: GlobalAccessControlDataAnalyticRightsEnum;
    /**
     * 
     * @type {UserData}
     * @memberof GlobalAccessControlData
     */
    user?: UserData;
}


/**
 * @export
 */
export const GlobalAccessControlDataUserRightsEnum = {
    View: 'view',
    Edit: 'edit'
} as const;
export type GlobalAccessControlDataUserRightsEnum = typeof GlobalAccessControlDataUserRightsEnum[keyof typeof GlobalAccessControlDataUserRightsEnum];

/**
 * @export
 */
export const GlobalAccessControlDataExerciseRightsEnum = {
    View: 'view'
} as const;
export type GlobalAccessControlDataExerciseRightsEnum = typeof GlobalAccessControlDataExerciseRightsEnum[keyof typeof GlobalAccessControlDataExerciseRightsEnum];

/**
 * @export
 */
export const GlobalAccessControlDataMSeriesGuidedSessionRightsEnum = {
    Access: 'access',
    Publish: 'publish'
} as const;
export type GlobalAccessControlDataMSeriesGuidedSessionRightsEnum = typeof GlobalAccessControlDataMSeriesGuidedSessionRightsEnum[keyof typeof GlobalAccessControlDataMSeriesGuidedSessionRightsEnum];

/**
 * @export
 */
export const GlobalAccessControlDataFacilityRightsEnum = {
    View: 'view',
    Edit: 'edit'
} as const;
export type GlobalAccessControlDataFacilityRightsEnum = typeof GlobalAccessControlDataFacilityRightsEnum[keyof typeof GlobalAccessControlDataFacilityRightsEnum];

/**
 * @export
 */
export const GlobalAccessControlDataLicenseRightsEnum = {
    View: 'view',
    Edit: 'edit'
} as const;
export type GlobalAccessControlDataLicenseRightsEnum = typeof GlobalAccessControlDataLicenseRightsEnum[keyof typeof GlobalAccessControlDataLicenseRightsEnum];

/**
 * @export
 */
export const GlobalAccessControlDataAccessControlRightsEnum = {
    View: 'view',
    Edit: 'edit'
} as const;
export type GlobalAccessControlDataAccessControlRightsEnum = typeof GlobalAccessControlDataAccessControlRightsEnum[keyof typeof GlobalAccessControlDataAccessControlRightsEnum];

/**
 * @export
 */
export const GlobalAccessControlDataResqueRightsEnum = {
    View: 'view',
    Edit: 'edit'
} as const;
export type GlobalAccessControlDataResqueRightsEnum = typeof GlobalAccessControlDataResqueRightsEnum[keyof typeof GlobalAccessControlDataResqueRightsEnum];

/**
 * @export
 */
export const GlobalAccessControlDataAnalyticRightsEnum = {
    View: 'view'
} as const;
export type GlobalAccessControlDataAnalyticRightsEnum = typeof GlobalAccessControlDataAnalyticRightsEnum[keyof typeof GlobalAccessControlDataAnalyticRightsEnum];


/**
 * Check if a given object implements the GlobalAccessControlData interface.
 */
export function instanceOfGlobalAccessControlData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "userId" in value;

    return isInstance;
}

export function GlobalAccessControlDataFromJSON(json: any): GlobalAccessControlData {
    return GlobalAccessControlDataFromJSONTyped(json, false);
}

export function GlobalAccessControlDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GlobalAccessControlData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userId': json['userId'],
        'userRights': !exists(json, 'userRights') ? undefined : json['userRights'],
        'exerciseRights': !exists(json, 'exerciseRights') ? undefined : json['exerciseRights'],
        'mSeriesGuidedSessionRights': !exists(json, 'mSeriesGuidedSessionRights') ? undefined : json['mSeriesGuidedSessionRights'],
        'facilityRights': !exists(json, 'facilityRights') ? undefined : json['facilityRights'],
        'licenseRights': !exists(json, 'licenseRights') ? undefined : json['licenseRights'],
        'accessControlRights': !exists(json, 'accessControlRights') ? undefined : json['accessControlRights'],
        'resqueRights': !exists(json, 'resqueRights') ? undefined : json['resqueRights'],
        'analyticRights': !exists(json, 'analyticRights') ? undefined : json['analyticRights'],
        'user': !exists(json, 'user') ? undefined : UserDataFromJSON(json['user']),
    };
}

export function GlobalAccessControlDataToJSON(value?: GlobalAccessControlData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userId': value.userId,
        'userRights': value.userRights,
        'exerciseRights': value.exerciseRights,
        'mSeriesGuidedSessionRights': value.mSeriesGuidedSessionRights,
        'facilityRights': value.facilityRights,
        'licenseRights': value.licenseRights,
        'accessControlRights': value.accessControlRights,
        'resqueRights': value.resqueRights,
        'analyticRights': value.analyticRights,
        'user': UserDataToJSON(value.user),
    };
}

