/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.6
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
 * @interface FacilityConfigurationData
 */
export interface FacilityConfigurationData {
    /**
     * 
     * @type {number}
     * @memberof FacilityConfigurationData
     */
    facilityId: number;
    /**
     * 
     * @type {string}
     * @memberof FacilityConfigurationData
     */
    memberIdentificationComposition: FacilityConfigurationDataMemberIdentificationCompositionEnum;
    /**
     * 
     * @type {boolean}
     * @memberof FacilityConfigurationData
     */
    memberIdentificationForceLength: boolean;
    /**
     * 
     * @type {number}
     * @memberof FacilityConfigurationData
     */
    memberIdentificationLength: number;
    /**
     * 
     * @type {string}
     * @memberof FacilityConfigurationData
     */
    memberIdentificationRegex: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityConfigurationData
     */
    memberSecretComposition: FacilityConfigurationDataMemberSecretCompositionEnum;
    /**
     * 
     * @type {boolean}
     * @memberof FacilityConfigurationData
     */
    memberSecretForceLength: boolean;
    /**
     * 
     * @type {number}
     * @memberof FacilityConfigurationData
     */
    memberSecretLength: number;
    /**
     * 
     * @type {string}
     * @memberof FacilityConfigurationData
     */
    memberSecretRegex: string;
    /**
     * 
     * @type {boolean}
     * @memberof FacilityConfigurationData
     */
    memberRequireEmail: boolean;
}


/**
 * @export
 */
export const FacilityConfigurationDataMemberIdentificationCompositionEnum = {
    Numeric: 'numeric',
    Alpha: 'alpha'
} as const;
export type FacilityConfigurationDataMemberIdentificationCompositionEnum = typeof FacilityConfigurationDataMemberIdentificationCompositionEnum[keyof typeof FacilityConfigurationDataMemberIdentificationCompositionEnum];

/**
 * @export
 */
export const FacilityConfigurationDataMemberSecretCompositionEnum = {
    Numeric: 'numeric',
    Alpha: 'alpha'
} as const;
export type FacilityConfigurationDataMemberSecretCompositionEnum = typeof FacilityConfigurationDataMemberSecretCompositionEnum[keyof typeof FacilityConfigurationDataMemberSecretCompositionEnum];


/**
 * Check if a given object implements the FacilityConfigurationData interface.
 */
export function instanceOfFacilityConfigurationData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "facilityId" in value;
    isInstance = isInstance && "memberIdentificationComposition" in value;
    isInstance = isInstance && "memberIdentificationForceLength" in value;
    isInstance = isInstance && "memberIdentificationLength" in value;
    isInstance = isInstance && "memberIdentificationRegex" in value;
    isInstance = isInstance && "memberSecretComposition" in value;
    isInstance = isInstance && "memberSecretForceLength" in value;
    isInstance = isInstance && "memberSecretLength" in value;
    isInstance = isInstance && "memberSecretRegex" in value;
    isInstance = isInstance && "memberRequireEmail" in value;

    return isInstance;
}

export function FacilityConfigurationDataFromJSON(json: any): FacilityConfigurationData {
    return FacilityConfigurationDataFromJSONTyped(json, false);
}

export function FacilityConfigurationDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityConfigurationData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'facilityId': json['facilityId'],
        'memberIdentificationComposition': json['memberIdentificationComposition'],
        'memberIdentificationForceLength': json['memberIdentificationForceLength'],
        'memberIdentificationLength': json['memberIdentificationLength'],
        'memberIdentificationRegex': json['memberIdentificationRegex'],
        'memberSecretComposition': json['memberSecretComposition'],
        'memberSecretForceLength': json['memberSecretForceLength'],
        'memberSecretLength': json['memberSecretLength'],
        'memberSecretRegex': json['memberSecretRegex'],
        'memberRequireEmail': json['memberRequireEmail'],
    };
}

export function FacilityConfigurationDataToJSON(value?: FacilityConfigurationData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'facilityId': value.facilityId,
        'memberIdentificationComposition': value.memberIdentificationComposition,
        'memberIdentificationForceLength': value.memberIdentificationForceLength,
        'memberIdentificationLength': value.memberIdentificationLength,
        'memberIdentificationRegex': value.memberIdentificationRegex,
        'memberSecretComposition': value.memberSecretComposition,
        'memberSecretForceLength': value.memberSecretForceLength,
        'memberSecretLength': value.memberSecretLength,
        'memberSecretRegex': value.memberSecretRegex,
        'memberRequireEmail': value.memberRequireEmail,
    };
}

