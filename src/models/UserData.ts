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

import { exists, mapValues } from '../runtime';
import type { AcceptedTermsVersionData } from './AcceptedTermsVersionData';
import {
    AcceptedTermsVersionDataFromJSON,
    AcceptedTermsVersionDataFromJSONTyped,
    AcceptedTermsVersionDataToJSON,
} from './AcceptedTermsVersionData';
import type { EmailAddressData } from './EmailAddressData';
import {
    EmailAddressDataFromJSON,
    EmailAddressDataFromJSONTyped,
    EmailAddressDataToJSON,
} from './EmailAddressData';
import type { FacilityRelationshipData } from './FacilityRelationshipData';
import {
    FacilityRelationshipDataFromJSON,
    FacilityRelationshipDataFromJSONTyped,
    FacilityRelationshipDataToJSON,
} from './FacilityRelationshipData';
import type { HeightMeasurementData } from './HeightMeasurementData';
import {
    HeightMeasurementDataFromJSON,
    HeightMeasurementDataFromJSONTyped,
    HeightMeasurementDataToJSON,
} from './HeightMeasurementData';
import type { OAuthServiceData } from './OAuthServiceData';
import {
    OAuthServiceDataFromJSON,
    OAuthServiceDataFromJSONTyped,
    OAuthServiceDataToJSON,
} from './OAuthServiceData';
import type { PrimaryEmailAddressData } from './PrimaryEmailAddressData';
import {
    PrimaryEmailAddressDataFromJSON,
    PrimaryEmailAddressDataFromJSONTyped,
    PrimaryEmailAddressDataToJSON,
} from './PrimaryEmailAddressData';
import type { ProfileData } from './ProfileData';
import {
    ProfileDataFromJSON,
    ProfileDataFromJSONTyped,
    ProfileDataToJSON,
} from './ProfileData';
import type { SessionData } from './SessionData';
import {
    SessionDataFromJSON,
    SessionDataFromJSONTyped,
    SessionDataToJSON,
} from './SessionData';
import type { WeightMeasurementData } from './WeightMeasurementData';
import {
    WeightMeasurementDataFromJSON,
    WeightMeasurementDataFromJSONTyped,
    WeightMeasurementDataToJSON,
} from './WeightMeasurementData';

/**
 * 
 * @export
 * @interface UserData
 */
export interface UserData {
    /**
     * 
     * @type {number}
     * @memberof UserData
     */
    id: number;
    /**
     * 
     * @type {Array<EmailAddressData>}
     * @memberof UserData
     */
    emailAddresses?: Array<EmailAddressData>;
    /**
     * 
     * @type {PrimaryEmailAddressData}
     * @memberof UserData
     */
    primaryEmailAddress?: PrimaryEmailAddressData;
    /**
     * 
     * @type {boolean}
     * @memberof UserData
     */
    basicCredential?: boolean;
    /**
     * 
     * @type {Array<OAuthServiceData>}
     * @memberof UserData
     */
    oauthServices?: Array<OAuthServiceData>;
    /**
     * 
     * @type {ProfileData}
     * @memberof UserData
     */
    profile?: ProfileData;
    /**
     * 
     * @type {AcceptedTermsVersionData}
     * @memberof UserData
     */
    acceptedTermsVersion?: AcceptedTermsVersionData;
    /**
     * 
     * @type {Array<WeightMeasurementData>}
     * @memberof UserData
     */
    weightMeasurements?: Array<WeightMeasurementData>;
    /**
     * 
     * @type {WeightMeasurementData}
     * @memberof UserData
     */
    weightMeasurement?: WeightMeasurementData;
    /**
     * 
     * @type {Array<HeightMeasurementData>}
     * @memberof UserData
     */
    heightMeasurements?: Array<HeightMeasurementData>;
    /**
     * 
     * @type {HeightMeasurementData}
     * @memberof UserData
     */
    heightMeasurement?: HeightMeasurementData;
    /**
     * 
     * @type {Array<FacilityRelationshipData>}
     * @memberof UserData
     */
    facilityRelationships?: Array<FacilityRelationshipData>;
    /**
     * 
     * @type {Array<SessionData>}
     * @memberof UserData
     */
    sessions?: Array<SessionData>;
}

/**
 * Check if a given object implements the UserData interface.
 */
export function instanceOfUserData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function UserDataFromJSON(json: any): UserData {
    return UserDataFromJSONTyped(json, false);
}

export function UserDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'emailAddresses': !exists(json, 'emailAddresses') ? undefined : ((json['emailAddresses'] as Array<any>).map(EmailAddressDataFromJSON)),
        'primaryEmailAddress': !exists(json, 'primaryEmailAddress') ? undefined : PrimaryEmailAddressDataFromJSON(json['primaryEmailAddress']),
        'basicCredential': !exists(json, 'basicCredential') ? undefined : json['basicCredential'],
        'oauthServices': !exists(json, 'oauthServices') ? undefined : ((json['oauthServices'] as Array<any>).map(OAuthServiceDataFromJSON)),
        'profile': !exists(json, 'profile') ? undefined : ProfileDataFromJSON(json['profile']),
        'acceptedTermsVersion': !exists(json, 'acceptedTermsVersion') ? undefined : AcceptedTermsVersionDataFromJSON(json['acceptedTermsVersion']),
        'weightMeasurements': !exists(json, 'weightMeasurements') ? undefined : ((json['weightMeasurements'] as Array<any>).map(WeightMeasurementDataFromJSON)),
        'weightMeasurement': !exists(json, 'weightMeasurement') ? undefined : WeightMeasurementDataFromJSON(json['weightMeasurement']),
        'heightMeasurements': !exists(json, 'heightMeasurements') ? undefined : ((json['heightMeasurements'] as Array<any>).map(HeightMeasurementDataFromJSON)),
        'heightMeasurement': !exists(json, 'heightMeasurement') ? undefined : HeightMeasurementDataFromJSON(json['heightMeasurement']),
        'facilityRelationships': !exists(json, 'facilityRelationships') ? undefined : ((json['facilityRelationships'] as Array<any>).map(FacilityRelationshipDataFromJSON)),
        'sessions': !exists(json, 'sessions') ? undefined : ((json['sessions'] as Array<any>).map(SessionDataFromJSON)),
    };
}

export function UserDataToJSON(value?: UserData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'emailAddresses': value.emailAddresses === undefined ? undefined : ((value.emailAddresses as Array<any>).map(EmailAddressDataToJSON)),
        'primaryEmailAddress': PrimaryEmailAddressDataToJSON(value.primaryEmailAddress),
        'basicCredential': value.basicCredential,
        'oauthServices': value.oauthServices === undefined ? undefined : ((value.oauthServices as Array<any>).map(OAuthServiceDataToJSON)),
        'profile': ProfileDataToJSON(value.profile),
        'acceptedTermsVersion': AcceptedTermsVersionDataToJSON(value.acceptedTermsVersion),
        'weightMeasurements': value.weightMeasurements === undefined ? undefined : ((value.weightMeasurements as Array<any>).map(WeightMeasurementDataToJSON)),
        'weightMeasurement': WeightMeasurementDataToJSON(value.weightMeasurement),
        'heightMeasurements': value.heightMeasurements === undefined ? undefined : ((value.heightMeasurements as Array<any>).map(HeightMeasurementDataToJSON)),
        'heightMeasurement': HeightMeasurementDataToJSON(value.heightMeasurement),
        'facilityRelationships': value.facilityRelationships === undefined ? undefined : ((value.facilityRelationships as Array<any>).map(FacilityRelationshipDataToJSON)),
        'sessions': value.sessions === undefined ? undefined : ((value.sessions as Array<any>).map(SessionDataToJSON)),
    };
}

