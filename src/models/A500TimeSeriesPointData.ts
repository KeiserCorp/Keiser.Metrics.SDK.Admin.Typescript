/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.14
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
 * @interface A500TimeSeriesPointData
 */
export interface A500TimeSeriesPointData {
    /**
     * 
     * @type {number}
     * @memberof A500TimeSeriesPointData
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof A500TimeSeriesPointData
     */
    timeSinceEpoch: number;
    /**
     * 
     * @type {number}
     * @memberof A500TimeSeriesPointData
     */
    leftPosition: number;
    /**
     * 
     * @type {number}
     * @memberof A500TimeSeriesPointData
     */
    leftPower: number;
    /**
     * 
     * @type {number}
     * @memberof A500TimeSeriesPointData
     */
    leftVelocity: number;
    /**
     * 
     * @type {number}
     * @memberof A500TimeSeriesPointData
     */
    leftAcceleration: number;
    /**
     * 
     * @type {number}
     * @memberof A500TimeSeriesPointData
     */
    leftForceOfMassAcceleration: number;
    /**
     * 
     * @type {number}
     * @memberof A500TimeSeriesPointData
     */
    leftMechanicalWeight: number;
    /**
     * 
     * @type {number}
     * @memberof A500TimeSeriesPointData
     */
    leftRawPower: number;
    /**
     * 
     * @type {number}
     * @memberof A500TimeSeriesPointData
     */
    rightPosition: number;
    /**
     * 
     * @type {number}
     * @memberof A500TimeSeriesPointData
     */
    rightPower: number;
    /**
     * 
     * @type {number}
     * @memberof A500TimeSeriesPointData
     */
    rightVelocity: number;
    /**
     * 
     * @type {number}
     * @memberof A500TimeSeriesPointData
     */
    rightAcceleration: number;
    /**
     * 
     * @type {number}
     * @memberof A500TimeSeriesPointData
     */
    rightForceOfMassAcceleration: number;
    /**
     * 
     * @type {number}
     * @memberof A500TimeSeriesPointData
     */
    rightMechanicalWeight: number;
    /**
     * 
     * @type {number}
     * @memberof A500TimeSeriesPointData
     */
    rightRawPower: number;
    /**
     * 
     * @type {number}
     * @memberof A500TimeSeriesPointData
     */
    leftTorque?: number;
    /**
     * 
     * @type {number}
     * @memberof A500TimeSeriesPointData
     */
    rightTorque?: number;
    /**
     * 
     * @type {number}
     * @memberof A500TimeSeriesPointData
     */
    leftForce?: number;
    /**
     * 
     * @type {number}
     * @memberof A500TimeSeriesPointData
     */
    rightForce?: number;
}

/**
 * Check if a given object implements the A500TimeSeriesPointData interface.
 */
export function instanceOfA500TimeSeriesPointData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "timeSinceEpoch" in value;
    isInstance = isInstance && "leftPosition" in value;
    isInstance = isInstance && "leftPower" in value;
    isInstance = isInstance && "leftVelocity" in value;
    isInstance = isInstance && "leftAcceleration" in value;
    isInstance = isInstance && "leftForceOfMassAcceleration" in value;
    isInstance = isInstance && "leftMechanicalWeight" in value;
    isInstance = isInstance && "leftRawPower" in value;
    isInstance = isInstance && "rightPosition" in value;
    isInstance = isInstance && "rightPower" in value;
    isInstance = isInstance && "rightVelocity" in value;
    isInstance = isInstance && "rightAcceleration" in value;
    isInstance = isInstance && "rightForceOfMassAcceleration" in value;
    isInstance = isInstance && "rightMechanicalWeight" in value;
    isInstance = isInstance && "rightRawPower" in value;

    return isInstance;
}

export function A500TimeSeriesPointDataFromJSON(json: any): A500TimeSeriesPointData {
    return A500TimeSeriesPointDataFromJSONTyped(json, false);
}

export function A500TimeSeriesPointDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): A500TimeSeriesPointData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'timeSinceEpoch': json['timeSinceEpoch'],
        'leftPosition': json['leftPosition'],
        'leftPower': json['leftPower'],
        'leftVelocity': json['leftVelocity'],
        'leftAcceleration': json['leftAcceleration'],
        'leftForceOfMassAcceleration': json['leftForceOfMassAcceleration'],
        'leftMechanicalWeight': json['leftMechanicalWeight'],
        'leftRawPower': json['leftRawPower'],
        'rightPosition': json['rightPosition'],
        'rightPower': json['rightPower'],
        'rightVelocity': json['rightVelocity'],
        'rightAcceleration': json['rightAcceleration'],
        'rightForceOfMassAcceleration': json['rightForceOfMassAcceleration'],
        'rightMechanicalWeight': json['rightMechanicalWeight'],
        'rightRawPower': json['rightRawPower'],
        'leftTorque': !exists(json, 'leftTorque') ? undefined : json['leftTorque'],
        'rightTorque': !exists(json, 'rightTorque') ? undefined : json['rightTorque'],
        'leftForce': !exists(json, 'leftForce') ? undefined : json['leftForce'],
        'rightForce': !exists(json, 'rightForce') ? undefined : json['rightForce'],
    };
}

export function A500TimeSeriesPointDataToJSON(value?: A500TimeSeriesPointData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'timeSinceEpoch': value.timeSinceEpoch,
        'leftPosition': value.leftPosition,
        'leftPower': value.leftPower,
        'leftVelocity': value.leftVelocity,
        'leftAcceleration': value.leftAcceleration,
        'leftForceOfMassAcceleration': value.leftForceOfMassAcceleration,
        'leftMechanicalWeight': value.leftMechanicalWeight,
        'leftRawPower': value.leftRawPower,
        'rightPosition': value.rightPosition,
        'rightPower': value.rightPower,
        'rightVelocity': value.rightVelocity,
        'rightAcceleration': value.rightAcceleration,
        'rightForceOfMassAcceleration': value.rightForceOfMassAcceleration,
        'rightMechanicalWeight': value.rightMechanicalWeight,
        'rightRawPower': value.rightRawPower,
        'leftTorque': value.leftTorque,
        'rightTorque': value.rightTorque,
        'leftForce': value.leftForce,
        'rightForce': value.rightForce,
    };
}

