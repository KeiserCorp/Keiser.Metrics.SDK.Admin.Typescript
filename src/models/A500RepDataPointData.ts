/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.20
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
 * @interface A500RepDataPointData
 */
export interface A500RepDataPointData {
    /**
     * 
     * @type {number}
     * @memberof A500RepDataPointData
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof A500RepDataPointData
     */
    side: A500RepDataPointDataSideEnum;
    /**
     * 
     * @type {number}
     * @memberof A500RepDataPointData
     */
    count: number;
    /**
     * 
     * @type {number}
     * @memberof A500RepDataPointData
     */
    work: number;
    /**
     * 
     * @type {Date}
     * @memberof A500RepDataPointData
     */
    completedAt: Date;
    /**
     * 
     * @type {number}
     * @memberof A500RepDataPointData
     */
    reactionTime: number;
    /**
     * 
     * @type {number}
     * @memberof A500RepDataPointData
     */
    peakPower: number;
    /**
     * 
     * @type {number}
     * @memberof A500RepDataPointData
     */
    averagePower: number;
    /**
     * 
     * @type {number}
     * @memberof A500RepDataPointData
     */
    peakVelocity: number;
    /**
     * 
     * @type {number}
     * @memberof A500RepDataPointData
     */
    averageVelocity: number;
    /**
     * 
     * @type {number}
     * @memberof A500RepDataPointData
     */
    rangeOfMotion: number;
    /**
     * 
     * @type {number}
     * @memberof A500RepDataPointData
     */
    setPointForce: number;
    /**
     * 
     * @type {string}
     * @memberof A500RepDataPointData
     */
    forceUnit: A500RepDataPointDataForceUnitEnum;
    /**
     * 
     * @type {number}
     * @memberof A500RepDataPointData
     */
    startSinceEpoch: number;
    /**
     * 
     * @type {number}
     * @memberof A500RepDataPointData
     */
    endSinceEpoch: number;
    /**
     * 
     * @type {number}
     * @memberof A500RepDataPointData
     */
    addedMass: number;
    /**
     * 
     * @type {number}
     * @memberof A500RepDataPointData
     */
    addedForce: number;
    /**
     * 
     * @type {number}
     * @memberof A500RepDataPointData
     */
    peakTorque?: number;
    /**
     * 
     * @type {number}
     * @memberof A500RepDataPointData
     */
    averageTorque?: number;
    /**
     * 
     * @type {number}
     * @memberof A500RepDataPointData
     */
    peakForce?: number;
    /**
     * 
     * @type {number}
     * @memberof A500RepDataPointData
     */
    averageForce?: number;
}


/**
 * @export
 */
export const A500RepDataPointDataSideEnum = {
    Left: 'left',
    Right: 'right'
} as const;
export type A500RepDataPointDataSideEnum = typeof A500RepDataPointDataSideEnum[keyof typeof A500RepDataPointDataSideEnum];

/**
 * @export
 */
export const A500RepDataPointDataForceUnitEnum = {
    Lb: 'lb',
    Kg: 'kg',
    Ne: 'ne',
    Er: 'er'
} as const;
export type A500RepDataPointDataForceUnitEnum = typeof A500RepDataPointDataForceUnitEnum[keyof typeof A500RepDataPointDataForceUnitEnum];


/**
 * Check if a given object implements the A500RepDataPointData interface.
 */
export function instanceOfA500RepDataPointData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "side" in value;
    isInstance = isInstance && "count" in value;
    isInstance = isInstance && "work" in value;
    isInstance = isInstance && "completedAt" in value;
    isInstance = isInstance && "reactionTime" in value;
    isInstance = isInstance && "peakPower" in value;
    isInstance = isInstance && "averagePower" in value;
    isInstance = isInstance && "peakVelocity" in value;
    isInstance = isInstance && "averageVelocity" in value;
    isInstance = isInstance && "rangeOfMotion" in value;
    isInstance = isInstance && "setPointForce" in value;
    isInstance = isInstance && "forceUnit" in value;
    isInstance = isInstance && "startSinceEpoch" in value;
    isInstance = isInstance && "endSinceEpoch" in value;
    isInstance = isInstance && "addedMass" in value;
    isInstance = isInstance && "addedForce" in value;

    return isInstance;
}

export function A500RepDataPointDataFromJSON(json: any): A500RepDataPointData {
    return A500RepDataPointDataFromJSONTyped(json, false);
}

export function A500RepDataPointDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): A500RepDataPointData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'side': json['side'],
        'count': json['count'],
        'work': json['work'],
        'completedAt': (new Date(json['completedAt'])),
        'reactionTime': json['reactionTime'],
        'peakPower': json['peakPower'],
        'averagePower': json['averagePower'],
        'peakVelocity': json['peakVelocity'],
        'averageVelocity': json['averageVelocity'],
        'rangeOfMotion': json['rangeOfMotion'],
        'setPointForce': json['setPointForce'],
        'forceUnit': json['forceUnit'],
        'startSinceEpoch': json['startSinceEpoch'],
        'endSinceEpoch': json['endSinceEpoch'],
        'addedMass': json['addedMass'],
        'addedForce': json['addedForce'],
        'peakTorque': !exists(json, 'peakTorque') ? undefined : json['peakTorque'],
        'averageTorque': !exists(json, 'averageTorque') ? undefined : json['averageTorque'],
        'peakForce': !exists(json, 'peakForce') ? undefined : json['peakForce'],
        'averageForce': !exists(json, 'averageForce') ? undefined : json['averageForce'],
    };
}

export function A500RepDataPointDataToJSON(value?: A500RepDataPointData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'side': value.side,
        'count': value.count,
        'work': value.work,
        'completedAt': (value.completedAt.toISOString()),
        'reactionTime': value.reactionTime,
        'peakPower': value.peakPower,
        'averagePower': value.averagePower,
        'peakVelocity': value.peakVelocity,
        'averageVelocity': value.averageVelocity,
        'rangeOfMotion': value.rangeOfMotion,
        'setPointForce': value.setPointForce,
        'forceUnit': value.forceUnit,
        'startSinceEpoch': value.startSinceEpoch,
        'endSinceEpoch': value.endSinceEpoch,
        'addedMass': value.addedMass,
        'addedForce': value.addedForce,
        'peakTorque': value.peakTorque,
        'averageTorque': value.averageTorque,
        'peakForce': value.peakForce,
        'averageForce': value.averageForce,
    };
}

