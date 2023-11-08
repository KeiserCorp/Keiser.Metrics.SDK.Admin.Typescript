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
import type { A500MachineStateData } from './A500MachineStateData';
import {
    A500MachineStateDataFromJSON,
    A500MachineStateDataFromJSONTyped,
    A500MachineStateDataToJSON,
} from './A500MachineStateData';
import type { StrengthMachineData } from './StrengthMachineData';
import {
    StrengthMachineDataFromJSON,
    StrengthMachineDataFromJSONTyped,
    StrengthMachineDataToJSON,
} from './StrengthMachineData';

/**
 * 
 * @export
 * @interface FacilityStrengthMachineData
 */
export interface FacilityStrengthMachineData {
    /**
     * 
     * @type {number}
     * @memberof FacilityStrengthMachineData
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof FacilityStrengthMachineData
     */
    updatedAt: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityStrengthMachineData
     */
    model: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityStrengthMachineData
     */
    version: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityStrengthMachineData
     */
    softwareVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityStrengthMachineData
     */
    mainBoardSerial?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityStrengthMachineData
     */
    location?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityStrengthMachineData
     */
    displayUUID?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityStrengthMachineData
     */
    leftCylinderSerial?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityStrengthMachineData
     */
    rightCylinderSerial?: string;
    /**
     * 
     * @type {StrengthMachineData}
     * @memberof FacilityStrengthMachineData
     */
    strengthMachine?: StrengthMachineData;
    /**
     * 
     * @type {A500MachineStateData}
     * @memberof FacilityStrengthMachineData
     */
    a500MachineState?: A500MachineStateData;
}

/**
 * Check if a given object implements the FacilityStrengthMachineData interface.
 */
export function instanceOfFacilityStrengthMachineData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "updatedAt" in value;
    isInstance = isInstance && "model" in value;
    isInstance = isInstance && "version" in value;

    return isInstance;
}

export function FacilityStrengthMachineDataFromJSON(json: any): FacilityStrengthMachineData {
    return FacilityStrengthMachineDataFromJSONTyped(json, false);
}

export function FacilityStrengthMachineDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityStrengthMachineData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'updatedAt': json['updatedAt'],
        'model': json['model'],
        'version': json['version'],
        'softwareVersion': !exists(json, 'softwareVersion') ? undefined : json['softwareVersion'],
        'mainBoardSerial': !exists(json, 'mainBoardSerial') ? undefined : json['mainBoardSerial'],
        'location': !exists(json, 'location') ? undefined : json['location'],
        'displayUUID': !exists(json, 'displayUUID') ? undefined : json['displayUUID'],
        'leftCylinderSerial': !exists(json, 'leftCylinderSerial') ? undefined : json['leftCylinderSerial'],
        'rightCylinderSerial': !exists(json, 'rightCylinderSerial') ? undefined : json['rightCylinderSerial'],
        'strengthMachine': !exists(json, 'strengthMachine') ? undefined : StrengthMachineDataFromJSON(json['strengthMachine']),
        'a500MachineState': !exists(json, 'a500MachineState') ? undefined : A500MachineStateDataFromJSON(json['a500MachineState']),
    };
}

export function FacilityStrengthMachineDataToJSON(value?: FacilityStrengthMachineData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'updatedAt': value.updatedAt,
        'model': value.model,
        'version': value.version,
        'softwareVersion': value.softwareVersion,
        'mainBoardSerial': value.mainBoardSerial,
        'location': value.location,
        'displayUUID': value.displayUUID,
        'leftCylinderSerial': value.leftCylinderSerial,
        'rightCylinderSerial': value.rightCylinderSerial,
        'strengthMachine': StrengthMachineDataToJSON(value.strengthMachine),
        'a500MachineState': A500MachineStateDataToJSON(value.a500MachineState),
    };
}

