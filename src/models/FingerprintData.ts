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
import type { FacilityRelationshipData } from './FacilityRelationshipData';
import {
    FacilityRelationshipDataFromJSON,
    FacilityRelationshipDataFromJSONTyped,
    FacilityRelationshipDataToJSON,
} from './FacilityRelationshipData';

/**
 * 
 * @export
 * @interface FingerprintData
 */
export interface FingerprintData {
    /**
     * 
     * @type {number}
     * @memberof FingerprintData
     */
    facilityRelationshipId: number;
    /**
     * 
     * @type {Date}
     * @memberof FingerprintData
     */
    updatedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof FingerprintData
     */
    fingerprintReaderModel: FingerprintDataFingerprintReaderModelEnum;
    /**
     * 
     * @type {string}
     * @memberof FingerprintData
     */
    template: string;
    /**
     * 
     * @type {string}
     * @memberof FingerprintData
     */
    hash: string;
    /**
     * 
     * @type {FacilityRelationshipData}
     * @memberof FingerprintData
     */
    facilityRelationship?: FacilityRelationshipData;
}


/**
 * @export
 */
export const FingerprintDataFingerprintReaderModelEnum = {
    Gt521f5: 'gt521f5'
} as const;
export type FingerprintDataFingerprintReaderModelEnum = typeof FingerprintDataFingerprintReaderModelEnum[keyof typeof FingerprintDataFingerprintReaderModelEnum];


/**
 * Check if a given object implements the FingerprintData interface.
 */
export function instanceOfFingerprintData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "facilityRelationshipId" in value;
    isInstance = isInstance && "updatedAt" in value;
    isInstance = isInstance && "fingerprintReaderModel" in value;
    isInstance = isInstance && "template" in value;
    isInstance = isInstance && "hash" in value;

    return isInstance;
}

export function FingerprintDataFromJSON(json: any): FingerprintData {
    return FingerprintDataFromJSONTyped(json, false);
}

export function FingerprintDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): FingerprintData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'facilityRelationshipId': json['facilityRelationshipId'],
        'updatedAt': (new Date(json['updatedAt'])),
        'fingerprintReaderModel': json['fingerprintReaderModel'],
        'template': json['template'],
        'hash': json['hash'],
        'facilityRelationship': !exists(json, 'facilityRelationship') ? undefined : FacilityRelationshipDataFromJSON(json['facilityRelationship']),
    };
}

export function FingerprintDataToJSON(value?: FingerprintData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'facilityRelationshipId': value.facilityRelationshipId,
        'updatedAt': (value.updatedAt.toISOString()),
        'fingerprintReaderModel': value.fingerprintReaderModel,
        'template': value.template,
        'hash': value.hash,
        'facilityRelationship': FacilityRelationshipDataToJSON(value.facilityRelationship),
    };
}

