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
import type { FacilityData } from './FacilityData';
import {
    FacilityDataFromJSON,
    FacilityDataFromJSONTyped,
    FacilityDataToJSON,
} from './FacilityData';

/**
 * 
 * @export
 * @interface FacilityLicenseData
 */
export interface FacilityLicenseData {
    /**
     * 
     * @type {number}
     * @memberof FacilityLicenseData
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof FacilityLicenseData
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityLicenseData
     */
    accountId?: string;
    /**
     * 
     * @type {number}
     * @memberof FacilityLicenseData
     */
    term: number;
    /**
     * 
     * @type {string}
     * @memberof FacilityLicenseData
     */
    type: FacilityLicenseDataTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof FacilityLicenseData
     */
    facilityId?: number;
    /**
     * 
     * @type {Date}
     * @memberof FacilityLicenseData
     */
    effectiveDate?: Date;
    /**
     * 
     * @type {FacilityData}
     * @memberof FacilityLicenseData
     */
    facility?: FacilityData;
}


/**
 * @export
 */
export const FacilityLicenseDataTypeEnum = {
    Normal: 'normal',
    Test: 'test',
    Demo: 'demo'
} as const;
export type FacilityLicenseDataTypeEnum = typeof FacilityLicenseDataTypeEnum[keyof typeof FacilityLicenseDataTypeEnum];


/**
 * Check if a given object implements the FacilityLicenseData interface.
 */
export function instanceOfFacilityLicenseData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "key" in value;
    isInstance = isInstance && "term" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function FacilityLicenseDataFromJSON(json: any): FacilityLicenseData {
    return FacilityLicenseDataFromJSONTyped(json, false);
}

export function FacilityLicenseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityLicenseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'key': json['key'],
        'accountId': !exists(json, 'accountId') ? undefined : json['accountId'],
        'term': json['term'],
        'type': json['type'],
        'facilityId': !exists(json, 'facilityId') ? undefined : json['facilityId'],
        'effectiveDate': !exists(json, 'effectiveDate') ? undefined : (new Date(json['effectiveDate'])),
        'facility': !exists(json, 'facility') ? undefined : FacilityDataFromJSON(json['facility']),
    };
}

export function FacilityLicenseDataToJSON(value?: FacilityLicenseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'key': value.key,
        'accountId': value.accountId,
        'term': value.term,
        'type': value.type,
        'facilityId': value.facilityId,
        'effectiveDate': value.effectiveDate === undefined ? undefined : (value.effectiveDate.toISOString()),
        'facility': FacilityDataToJSON(value.facility),
    };
}

