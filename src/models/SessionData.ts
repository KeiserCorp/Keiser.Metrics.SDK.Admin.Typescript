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
import type { FacilityData } from './FacilityData';
import {
    FacilityDataFromJSON,
    FacilityDataFromJSONTyped,
    FacilityDataToJSON,
} from './FacilityData';
import type { HeartRateDataSetData } from './HeartRateDataSetData';
import {
    HeartRateDataSetDataFromJSON,
    HeartRateDataSetDataFromJSONTyped,
    HeartRateDataSetDataToJSON,
} from './HeartRateDataSetData';
import type { HeightMeasurementData } from './HeightMeasurementData';
import {
    HeightMeasurementDataFromJSON,
    HeightMeasurementDataFromJSONTyped,
    HeightMeasurementDataToJSON,
} from './HeightMeasurementData';
import type { MSeriesDataSetData } from './MSeriesDataSetData';
import {
    MSeriesDataSetDataFromJSON,
    MSeriesDataSetDataFromJSONTyped,
    MSeriesDataSetDataToJSON,
} from './MSeriesDataSetData';
import type { SessionPlanSequenceInstanceData } from './SessionPlanSequenceInstanceData';
import {
    SessionPlanSequenceInstanceDataFromJSON,
    SessionPlanSequenceInstanceDataFromJSONTyped,
    SessionPlanSequenceInstanceDataToJSON,
} from './SessionPlanSequenceInstanceData';
import type { StrengthMachineDataSetData } from './StrengthMachineDataSetData';
import {
    StrengthMachineDataSetDataFromJSON,
    StrengthMachineDataSetDataFromJSONTyped,
    StrengthMachineDataSetDataToJSON,
} from './StrengthMachineDataSetData';
import type { UserData } from './UserData';
import {
    UserDataFromJSON,
    UserDataFromJSONTyped,
    UserDataToJSON,
} from './UserData';
import type { WeightMeasurementData } from './WeightMeasurementData';
import {
    WeightMeasurementDataFromJSON,
    WeightMeasurementDataFromJSONTyped,
    WeightMeasurementDataToJSON,
} from './WeightMeasurementData';

/**
 * 
 * @export
 * @interface SessionData
 */
export interface SessionData {
    /**
     * 
     * @type {number}
     * @memberof SessionData
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof SessionData
     */
    userId: number;
    /**
     * 
     * @type {string}
     * @memberof SessionData
     */
    echipId?: string;
    /**
     * 
     * @type {string}
     * @memberof SessionData
     */
    hash: string;
    /**
     * 
     * @type {Date}
     * @memberof SessionData
     */
    startedAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof SessionData
     */
    endedAt?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof SessionData
     */
    hasMSeriesDataSets: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SessionData
     */
    hasStrengthMachineDataSets: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SessionData
     */
    hasHeartRateDataSets: boolean;
    /**
     * 
     * @type {UserData}
     * @memberof SessionData
     */
    user?: UserData;
    /**
     * 
     * @type {FacilityData}
     * @memberof SessionData
     */
    facility?: FacilityData;
    /**
     * 
     * @type {SessionPlanSequenceInstanceData}
     * @memberof SessionData
     */
    sessionPlanSequenceInstance?: SessionPlanSequenceInstanceData;
    /**
     * 
     * @type {Array<HeartRateDataSetData>}
     * @memberof SessionData
     */
    heartRateDataSets?: Array<HeartRateDataSetData>;
    /**
     * 
     * @type {Array<MSeriesDataSetData>}
     * @memberof SessionData
     */
    mSeriesDataSets?: Array<MSeriesDataSetData>;
    /**
     * 
     * @type {Array<StrengthMachineDataSetData>}
     * @memberof SessionData
     */
    strengthMachineDataSets?: Array<StrengthMachineDataSetData>;
    /**
     * 
     * @type {HeightMeasurementData}
     * @memberof SessionData
     */
    heightMeasurement?: HeightMeasurementData;
    /**
     * 
     * @type {WeightMeasurementData}
     * @memberof SessionData
     */
    weightMeasurement?: WeightMeasurementData;
}

/**
 * Check if a given object implements the SessionData interface.
 */
export function instanceOfSessionData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "userId" in value;
    isInstance = isInstance && "hash" in value;
    isInstance = isInstance && "startedAt" in value;
    isInstance = isInstance && "hasMSeriesDataSets" in value;
    isInstance = isInstance && "hasStrengthMachineDataSets" in value;
    isInstance = isInstance && "hasHeartRateDataSets" in value;

    return isInstance;
}

export function SessionDataFromJSON(json: any): SessionData {
    return SessionDataFromJSONTyped(json, false);
}

export function SessionDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'userId': json['userId'],
        'echipId': !exists(json, 'echipId') ? undefined : json['echipId'],
        'hash': json['hash'],
        'startedAt': (new Date(json['startedAt'])),
        'endedAt': !exists(json, 'endedAt') ? undefined : (new Date(json['endedAt'])),
        'hasMSeriesDataSets': json['hasMSeriesDataSets'],
        'hasStrengthMachineDataSets': json['hasStrengthMachineDataSets'],
        'hasHeartRateDataSets': json['hasHeartRateDataSets'],
        'user': !exists(json, 'user') ? undefined : UserDataFromJSON(json['user']),
        'facility': !exists(json, 'facility') ? undefined : FacilityDataFromJSON(json['facility']),
        'sessionPlanSequenceInstance': !exists(json, 'sessionPlanSequenceInstance') ? undefined : SessionPlanSequenceInstanceDataFromJSON(json['sessionPlanSequenceInstance']),
        'heartRateDataSets': !exists(json, 'heartRateDataSets') ? undefined : ((json['heartRateDataSets'] as Array<any>).map(HeartRateDataSetDataFromJSON)),
        'mSeriesDataSets': !exists(json, 'mSeriesDataSets') ? undefined : ((json['mSeriesDataSets'] as Array<any>).map(MSeriesDataSetDataFromJSON)),
        'strengthMachineDataSets': !exists(json, 'strengthMachineDataSets') ? undefined : ((json['strengthMachineDataSets'] as Array<any>).map(StrengthMachineDataSetDataFromJSON)),
        'heightMeasurement': !exists(json, 'heightMeasurement') ? undefined : HeightMeasurementDataFromJSON(json['heightMeasurement']),
        'weightMeasurement': !exists(json, 'weightMeasurement') ? undefined : WeightMeasurementDataFromJSON(json['weightMeasurement']),
    };
}

export function SessionDataToJSON(value?: SessionData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'userId': value.userId,
        'echipId': value.echipId,
        'hash': value.hash,
        'startedAt': (value.startedAt.toISOString()),
        'endedAt': value.endedAt === undefined ? undefined : (value.endedAt.toISOString()),
        'hasMSeriesDataSets': value.hasMSeriesDataSets,
        'hasStrengthMachineDataSets': value.hasStrengthMachineDataSets,
        'hasHeartRateDataSets': value.hasHeartRateDataSets,
        'user': UserDataToJSON(value.user),
        'facility': FacilityDataToJSON(value.facility),
        'sessionPlanSequenceInstance': SessionPlanSequenceInstanceDataToJSON(value.sessionPlanSequenceInstance),
        'heartRateDataSets': value.heartRateDataSets === undefined ? undefined : ((value.heartRateDataSets as Array<any>).map(HeartRateDataSetDataToJSON)),
        'mSeriesDataSets': value.mSeriesDataSets === undefined ? undefined : ((value.mSeriesDataSets as Array<any>).map(MSeriesDataSetDataToJSON)),
        'strengthMachineDataSets': value.strengthMachineDataSets === undefined ? undefined : ((value.strengthMachineDataSets as Array<any>).map(StrengthMachineDataSetDataToJSON)),
        'heightMeasurement': HeightMeasurementDataToJSON(value.heightMeasurement),
        'weightMeasurement': WeightMeasurementDataToJSON(value.weightMeasurement),
    };
}

