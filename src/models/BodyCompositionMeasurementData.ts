/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.33
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
 * @interface BodyCompositionMeasurementData
 */
export interface BodyCompositionMeasurementData {
    /**
     * 
     * @type {number}
     * @memberof BodyCompositionMeasurementData
     */
    totalBodyWater: number;
    /**
     * 
     * @type {number}
     * @memberof BodyCompositionMeasurementData
     */
    intracellularWater: number;
    /**
     * 
     * @type {number}
     * @memberof BodyCompositionMeasurementData
     */
    extracellularWater: number;
    /**
     * 
     * @type {number}
     * @memberof BodyCompositionMeasurementData
     */
    extracellularWaterToTotalBodyWaterRatio: number;
    /**
     * 
     * @type {number}
     * @memberof BodyCompositionMeasurementData
     */
    dryLeanMass: number;
    /**
     * 
     * @type {number}
     * @memberof BodyCompositionMeasurementData
     */
    bodyFatMass: number;
    /**
     * 
     * @type {number}
     * @memberof BodyCompositionMeasurementData
     */
    leanBodyMass: number;
    /**
     * 
     * @type {number}
     * @memberof BodyCompositionMeasurementData
     */
    skeletalMuscleMass: number;
    /**
     * 
     * @type {number}
     * @memberof BodyCompositionMeasurementData
     */
    bodyMassIndex: number;
    /**
     * 
     * @type {number}
     * @memberof BodyCompositionMeasurementData
     */
    visceralFatLevel: number;
    /**
     * 
     * @type {number}
     * @memberof BodyCompositionMeasurementData
     */
    basalMetabolicRate: number;
    /**
     * 
     * @type {number}
     * @memberof BodyCompositionMeasurementData
     */
    leanBodyMassOfRightArm: number;
    /**
     * 
     * @type {number}
     * @memberof BodyCompositionMeasurementData
     */
    leanBodyMassPercentageOfRightArm: number;
    /**
     * 
     * @type {number}
     * @memberof BodyCompositionMeasurementData
     */
    leanBodyMassOfLeftArm: number;
    /**
     * 
     * @type {number}
     * @memberof BodyCompositionMeasurementData
     */
    leanBodyMassPercentageOfLeftArm: number;
    /**
     * 
     * @type {number}
     * @memberof BodyCompositionMeasurementData
     */
    leanBodyMassOfTrunk: number;
    /**
     * 
     * @type {number}
     * @memberof BodyCompositionMeasurementData
     */
    leanBodyMassPercentageOfTrunk: number;
    /**
     * 
     * @type {number}
     * @memberof BodyCompositionMeasurementData
     */
    leanBodyMassOfRightLeg: number;
    /**
     * 
     * @type {number}
     * @memberof BodyCompositionMeasurementData
     */
    leanBodyMassPercentageOfRightLeg: number;
    /**
     * 
     * @type {number}
     * @memberof BodyCompositionMeasurementData
     */
    leanBodyMassOfLeftLeg: number;
    /**
     * 
     * @type {number}
     * @memberof BodyCompositionMeasurementData
     */
    leanBodyMassPercentageOfLeftLeg: number;
    /**
     * 
     * @type {number}
     * @memberof BodyCompositionMeasurementData
     */
    bodyFatMassOfRightArm: number;
    /**
     * 
     * @type {number}
     * @memberof BodyCompositionMeasurementData
     */
    bodyFatMassPercentageOfRightArm: number;
    /**
     * 
     * @type {number}
     * @memberof BodyCompositionMeasurementData
     */
    bodyFatMassOfLeftArm: number;
    /**
     * 
     * @type {number}
     * @memberof BodyCompositionMeasurementData
     */
    bodyFatMassPercentageOfLeftArm: number;
    /**
     * 
     * @type {number}
     * @memberof BodyCompositionMeasurementData
     */
    bodyFatMassOfTrunk: number;
    /**
     * 
     * @type {number}
     * @memberof BodyCompositionMeasurementData
     */
    bodyFatMassPercentageOfTrunk: number;
    /**
     * 
     * @type {number}
     * @memberof BodyCompositionMeasurementData
     */
    bodyFatMassOfRightLeg: number;
    /**
     * 
     * @type {number}
     * @memberof BodyCompositionMeasurementData
     */
    bodyFatMassPercentageOfRightLeg: number;
    /**
     * 
     * @type {number}
     * @memberof BodyCompositionMeasurementData
     */
    bodyFatMassOfLeftLeg: number;
    /**
     * 
     * @type {number}
     * @memberof BodyCompositionMeasurementData
     */
    bodyFatMassPercentageOfLeftLeg: number;
}

/**
 * Check if a given object implements the BodyCompositionMeasurementData interface.
 */
export function instanceOfBodyCompositionMeasurementData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "totalBodyWater" in value;
    isInstance = isInstance && "intracellularWater" in value;
    isInstance = isInstance && "extracellularWater" in value;
    isInstance = isInstance && "extracellularWaterToTotalBodyWaterRatio" in value;
    isInstance = isInstance && "dryLeanMass" in value;
    isInstance = isInstance && "bodyFatMass" in value;
    isInstance = isInstance && "leanBodyMass" in value;
    isInstance = isInstance && "skeletalMuscleMass" in value;
    isInstance = isInstance && "bodyMassIndex" in value;
    isInstance = isInstance && "visceralFatLevel" in value;
    isInstance = isInstance && "basalMetabolicRate" in value;
    isInstance = isInstance && "leanBodyMassOfRightArm" in value;
    isInstance = isInstance && "leanBodyMassPercentageOfRightArm" in value;
    isInstance = isInstance && "leanBodyMassOfLeftArm" in value;
    isInstance = isInstance && "leanBodyMassPercentageOfLeftArm" in value;
    isInstance = isInstance && "leanBodyMassOfTrunk" in value;
    isInstance = isInstance && "leanBodyMassPercentageOfTrunk" in value;
    isInstance = isInstance && "leanBodyMassOfRightLeg" in value;
    isInstance = isInstance && "leanBodyMassPercentageOfRightLeg" in value;
    isInstance = isInstance && "leanBodyMassOfLeftLeg" in value;
    isInstance = isInstance && "leanBodyMassPercentageOfLeftLeg" in value;
    isInstance = isInstance && "bodyFatMassOfRightArm" in value;
    isInstance = isInstance && "bodyFatMassPercentageOfRightArm" in value;
    isInstance = isInstance && "bodyFatMassOfLeftArm" in value;
    isInstance = isInstance && "bodyFatMassPercentageOfLeftArm" in value;
    isInstance = isInstance && "bodyFatMassOfTrunk" in value;
    isInstance = isInstance && "bodyFatMassPercentageOfTrunk" in value;
    isInstance = isInstance && "bodyFatMassOfRightLeg" in value;
    isInstance = isInstance && "bodyFatMassPercentageOfRightLeg" in value;
    isInstance = isInstance && "bodyFatMassOfLeftLeg" in value;
    isInstance = isInstance && "bodyFatMassPercentageOfLeftLeg" in value;

    return isInstance;
}

export function BodyCompositionMeasurementDataFromJSON(json: any): BodyCompositionMeasurementData {
    return BodyCompositionMeasurementDataFromJSONTyped(json, false);
}

export function BodyCompositionMeasurementDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): BodyCompositionMeasurementData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'totalBodyWater': json['totalBodyWater'],
        'intracellularWater': json['intracellularWater'],
        'extracellularWater': json['extracellularWater'],
        'extracellularWaterToTotalBodyWaterRatio': json['extracellularWaterToTotalBodyWaterRatio'],
        'dryLeanMass': json['dryLeanMass'],
        'bodyFatMass': json['bodyFatMass'],
        'leanBodyMass': json['leanBodyMass'],
        'skeletalMuscleMass': json['skeletalMuscleMass'],
        'bodyMassIndex': json['bodyMassIndex'],
        'visceralFatLevel': json['visceralFatLevel'],
        'basalMetabolicRate': json['basalMetabolicRate'],
        'leanBodyMassOfRightArm': json['leanBodyMassOfRightArm'],
        'leanBodyMassPercentageOfRightArm': json['leanBodyMassPercentageOfRightArm'],
        'leanBodyMassOfLeftArm': json['leanBodyMassOfLeftArm'],
        'leanBodyMassPercentageOfLeftArm': json['leanBodyMassPercentageOfLeftArm'],
        'leanBodyMassOfTrunk': json['leanBodyMassOfTrunk'],
        'leanBodyMassPercentageOfTrunk': json['leanBodyMassPercentageOfTrunk'],
        'leanBodyMassOfRightLeg': json['leanBodyMassOfRightLeg'],
        'leanBodyMassPercentageOfRightLeg': json['leanBodyMassPercentageOfRightLeg'],
        'leanBodyMassOfLeftLeg': json['leanBodyMassOfLeftLeg'],
        'leanBodyMassPercentageOfLeftLeg': json['leanBodyMassPercentageOfLeftLeg'],
        'bodyFatMassOfRightArm': json['bodyFatMassOfRightArm'],
        'bodyFatMassPercentageOfRightArm': json['bodyFatMassPercentageOfRightArm'],
        'bodyFatMassOfLeftArm': json['bodyFatMassOfLeftArm'],
        'bodyFatMassPercentageOfLeftArm': json['bodyFatMassPercentageOfLeftArm'],
        'bodyFatMassOfTrunk': json['bodyFatMassOfTrunk'],
        'bodyFatMassPercentageOfTrunk': json['bodyFatMassPercentageOfTrunk'],
        'bodyFatMassOfRightLeg': json['bodyFatMassOfRightLeg'],
        'bodyFatMassPercentageOfRightLeg': json['bodyFatMassPercentageOfRightLeg'],
        'bodyFatMassOfLeftLeg': json['bodyFatMassOfLeftLeg'],
        'bodyFatMassPercentageOfLeftLeg': json['bodyFatMassPercentageOfLeftLeg'],
    };
}

export function BodyCompositionMeasurementDataToJSON(value?: BodyCompositionMeasurementData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'totalBodyWater': value.totalBodyWater,
        'intracellularWater': value.intracellularWater,
        'extracellularWater': value.extracellularWater,
        'extracellularWaterToTotalBodyWaterRatio': value.extracellularWaterToTotalBodyWaterRatio,
        'dryLeanMass': value.dryLeanMass,
        'bodyFatMass': value.bodyFatMass,
        'leanBodyMass': value.leanBodyMass,
        'skeletalMuscleMass': value.skeletalMuscleMass,
        'bodyMassIndex': value.bodyMassIndex,
        'visceralFatLevel': value.visceralFatLevel,
        'basalMetabolicRate': value.basalMetabolicRate,
        'leanBodyMassOfRightArm': value.leanBodyMassOfRightArm,
        'leanBodyMassPercentageOfRightArm': value.leanBodyMassPercentageOfRightArm,
        'leanBodyMassOfLeftArm': value.leanBodyMassOfLeftArm,
        'leanBodyMassPercentageOfLeftArm': value.leanBodyMassPercentageOfLeftArm,
        'leanBodyMassOfTrunk': value.leanBodyMassOfTrunk,
        'leanBodyMassPercentageOfTrunk': value.leanBodyMassPercentageOfTrunk,
        'leanBodyMassOfRightLeg': value.leanBodyMassOfRightLeg,
        'leanBodyMassPercentageOfRightLeg': value.leanBodyMassPercentageOfRightLeg,
        'leanBodyMassOfLeftLeg': value.leanBodyMassOfLeftLeg,
        'leanBodyMassPercentageOfLeftLeg': value.leanBodyMassPercentageOfLeftLeg,
        'bodyFatMassOfRightArm': value.bodyFatMassOfRightArm,
        'bodyFatMassPercentageOfRightArm': value.bodyFatMassPercentageOfRightArm,
        'bodyFatMassOfLeftArm': value.bodyFatMassOfLeftArm,
        'bodyFatMassPercentageOfLeftArm': value.bodyFatMassPercentageOfLeftArm,
        'bodyFatMassOfTrunk': value.bodyFatMassOfTrunk,
        'bodyFatMassPercentageOfTrunk': value.bodyFatMassPercentageOfTrunk,
        'bodyFatMassOfRightLeg': value.bodyFatMassOfRightLeg,
        'bodyFatMassPercentageOfRightLeg': value.bodyFatMassPercentageOfRightLeg,
        'bodyFatMassOfLeftLeg': value.bodyFatMassOfLeftLeg,
        'bodyFatMassPercentageOfLeftLeg': value.bodyFatMassPercentageOfLeftLeg,
    };
}

