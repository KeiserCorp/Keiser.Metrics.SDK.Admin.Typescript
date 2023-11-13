/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.13
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FacilityData } from './FacilityData';
import {
    FacilityDataFromJSON,
    FacilityDataFromJSONTyped,
    FacilityDataToJSON,
} from './FacilityData';
import type { FacilitySessionUserData } from './FacilitySessionUserData';
import {
    FacilitySessionUserDataFromJSON,
    FacilitySessionUserDataFromJSONTyped,
    FacilitySessionUserDataToJSON,
} from './FacilitySessionUserData';
import type { FingerprintData } from './FingerprintData';
import {
    FingerprintDataFromJSON,
    FingerprintDataFromJSONTyped,
    FingerprintDataToJSON,
} from './FingerprintData';

/**
 * 
 * @export
 * @interface FacilityRelationshipData
 */
export interface FacilityRelationshipData {
    /**
     * 
     * @type {number}
     * @memberof FacilityRelationshipData
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof FacilityRelationshipData
     */
    userId: number;
    /**
     * 
     * @type {number}
     * @memberof FacilityRelationshipData
     */
    facilityId: number;
    /**
     * 
     * @type {boolean}
     * @memberof FacilityRelationshipData
     */
    member: boolean;
    /**
     * 
     * @type {string}
     * @memberof FacilityRelationshipData
     */
    memberIdentifier?: string;
    /**
     * 
     * @type {boolean}
     * @memberof FacilityRelationshipData
     */
    hasSecretSet: boolean;
    /**
     * 
     * @type {string}
     * @memberof FacilityRelationshipData
     */
    employeeRole?: FacilityRelationshipDataEmployeeRoleEnum;
    /**
     * 
     * @type {FacilityData}
     * @memberof FacilityRelationshipData
     */
    facility?: FacilityData;
    /**
     * 
     * @type {FacilitySessionUserData}
     * @memberof FacilityRelationshipData
     */
    user?: FacilitySessionUserData;
    /**
     * 
     * @type {FingerprintData}
     * @memberof FacilityRelationshipData
     */
    fingerprint?: FingerprintData;
}


/**
 * @export
 */
export const FacilityRelationshipDataEmployeeRoleEnum = {
    Admin: 'admin',
    CustomerSupport: 'customerSupport',
    Trainer: 'trainer',
    FrontDesk: 'frontDesk',
    Maintenance: 'maintenance'
} as const;
export type FacilityRelationshipDataEmployeeRoleEnum = typeof FacilityRelationshipDataEmployeeRoleEnum[keyof typeof FacilityRelationshipDataEmployeeRoleEnum];


/**
 * Check if a given object implements the FacilityRelationshipData interface.
 */
export function instanceOfFacilityRelationshipData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "userId" in value;
    isInstance = isInstance && "facilityId" in value;
    isInstance = isInstance && "member" in value;
    isInstance = isInstance && "hasSecretSet" in value;

    return isInstance;
}

export function FacilityRelationshipDataFromJSON(json: any): FacilityRelationshipData {
    return FacilityRelationshipDataFromJSONTyped(json, false);
}

export function FacilityRelationshipDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityRelationshipData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'userId': json['userId'],
        'facilityId': json['facilityId'],
        'member': json['member'],
        'memberIdentifier': !exists(json, 'memberIdentifier') ? undefined : json['memberIdentifier'],
        'hasSecretSet': json['hasSecretSet'],
        'employeeRole': !exists(json, 'employeeRole') ? undefined : json['employeeRole'],
        'facility': !exists(json, 'facility') ? undefined : FacilityDataFromJSON(json['facility']),
        'user': !exists(json, 'user') ? undefined : FacilitySessionUserDataFromJSON(json['user']),
        'fingerprint': !exists(json, 'fingerprint') ? undefined : FingerprintDataFromJSON(json['fingerprint']),
    };
}

export function FacilityRelationshipDataToJSON(value?: FacilityRelationshipData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'userId': value.userId,
        'facilityId': value.facilityId,
        'member': value.member,
        'memberIdentifier': value.memberIdentifier,
        'hasSecretSet': value.hasSecretSet,
        'employeeRole': value.employeeRole,
        'facility': FacilityDataToJSON(value.facility),
        'user': FacilitySessionUserDataToJSON(value.user),
        'fingerprint': FingerprintDataToJSON(value.fingerprint),
    };
}

