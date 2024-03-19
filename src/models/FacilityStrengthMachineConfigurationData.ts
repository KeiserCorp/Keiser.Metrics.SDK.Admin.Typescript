/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.27
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
 * @interface FacilityStrengthMachineConfigurationData
 */
export interface FacilityStrengthMachineConfigurationData {
    /**
     * 
     * @type {number}
     * @memberof FacilityStrengthMachineConfigurationData
     */
    facilityId: number;
    /**
     * 
     * @type {string}
     * @memberof FacilityStrengthMachineConfigurationData
     */
    appType: FacilityStrengthMachineConfigurationDataAppTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof FacilityStrengthMachineConfigurationData
     */
    timeZone: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityStrengthMachineConfigurationData
     */
    forceUnit: FacilityStrengthMachineConfigurationDataForceUnitEnum;
    /**
     * 
     * @type {string}
     * @memberof FacilityStrengthMachineConfigurationData
     */
    primaryFocus: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityStrengthMachineConfigurationData
     */
    secondaryFocus: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityStrengthMachineConfigurationData
     */
    locale: string;
    /**
     * 
     * @type {FacilityData}
     * @memberof FacilityStrengthMachineConfigurationData
     */
    facility?: FacilityData;
}


/**
 * @export
 */
export const FacilityStrengthMachineConfigurationDataAppTypeEnum = {
    Performance: 'performance',
    Elder: 'elder',
    Medical: 'medical',
    Commercial: 'commercial'
} as const;
export type FacilityStrengthMachineConfigurationDataAppTypeEnum = typeof FacilityStrengthMachineConfigurationDataAppTypeEnum[keyof typeof FacilityStrengthMachineConfigurationDataAppTypeEnum];

/**
 * @export
 */
export const FacilityStrengthMachineConfigurationDataForceUnitEnum = {
    Lb: 'lb',
    Kg: 'kg',
    Ne: 'ne',
    Er: 'er'
} as const;
export type FacilityStrengthMachineConfigurationDataForceUnitEnum = typeof FacilityStrengthMachineConfigurationDataForceUnitEnum[keyof typeof FacilityStrengthMachineConfigurationDataForceUnitEnum];


/**
 * Check if a given object implements the FacilityStrengthMachineConfigurationData interface.
 */
export function instanceOfFacilityStrengthMachineConfigurationData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "facilityId" in value;
    isInstance = isInstance && "appType" in value;
    isInstance = isInstance && "timeZone" in value;
    isInstance = isInstance && "forceUnit" in value;
    isInstance = isInstance && "primaryFocus" in value;
    isInstance = isInstance && "secondaryFocus" in value;
    isInstance = isInstance && "locale" in value;

    return isInstance;
}

export function FacilityStrengthMachineConfigurationDataFromJSON(json: any): FacilityStrengthMachineConfigurationData {
    return FacilityStrengthMachineConfigurationDataFromJSONTyped(json, false);
}

export function FacilityStrengthMachineConfigurationDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityStrengthMachineConfigurationData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'facilityId': json['facilityId'],
        'appType': json['appType'],
        'timeZone': json['timeZone'],
        'forceUnit': json['forceUnit'],
        'primaryFocus': json['primaryFocus'],
        'secondaryFocus': json['secondaryFocus'],
        'locale': json['locale'],
        'facility': !exists(json, 'facility') ? undefined : FacilityDataFromJSON(json['facility']),
    };
}

export function FacilityStrengthMachineConfigurationDataToJSON(value?: FacilityStrengthMachineConfigurationData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'facilityId': value.facilityId,
        'appType': value.appType,
        'timeZone': value.timeZone,
        'forceUnit': value.forceUnit,
        'primaryFocus': value.primaryFocus,
        'secondaryFocus': value.secondaryFocus,
        'locale': value.locale,
        'facility': FacilityDataToJSON(value.facility),
    };
}

