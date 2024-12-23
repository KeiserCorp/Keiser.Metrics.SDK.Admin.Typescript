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
import type { SessionPlanActivitySetData } from './SessionPlanActivitySetData';
import {
    SessionPlanActivitySetDataFromJSON,
    SessionPlanActivitySetDataFromJSONTyped,
    SessionPlanActivitySetDataToJSON,
} from './SessionPlanActivitySetData';
import type { SessionPlanCardioSetData } from './SessionPlanCardioSetData';
import {
    SessionPlanCardioSetDataFromJSON,
    SessionPlanCardioSetDataFromJSONTyped,
    SessionPlanCardioSetDataToJSON,
} from './SessionPlanCardioSetData';
import type { SessionPlanStrengthSetData } from './SessionPlanStrengthSetData';
import {
    SessionPlanStrengthSetDataFromJSON,
    SessionPlanStrengthSetDataFromJSONTyped,
    SessionPlanStrengthSetDataToJSON,
} from './SessionPlanStrengthSetData';
import type { SessionPlanStretchSetData } from './SessionPlanStretchSetData';
import {
    SessionPlanStretchSetDataFromJSON,
    SessionPlanStretchSetDataFromJSONTyped,
    SessionPlanStretchSetDataToJSON,
} from './SessionPlanStretchSetData';

/**
 * 
 * @export
 * @interface SessionPlanSetInstanceData
 */
export interface SessionPlanSetInstanceData {
    /**
     * 
     * @type {number}
     * @memberof SessionPlanSetInstanceData
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof SessionPlanSetInstanceData
     */
    notes: string;
    /**
     * 
     * @type {boolean}
     * @memberof SessionPlanSetInstanceData
     */
    completed: boolean;
    /**
     * 
     * @type {string}
     * @memberof SessionPlanSetInstanceData
     */
    type?: SessionPlanSetInstanceDataTypeEnum;
    /**
     * 
     * @type {SessionPlanCardioSetData}
     * @memberof SessionPlanSetInstanceData
     */
    sessionPlanCardioSet?: SessionPlanCardioSetData;
    /**
     * 
     * @type {SessionPlanStrengthSetData}
     * @memberof SessionPlanSetInstanceData
     */
    sessionPlanStrengthSet?: SessionPlanStrengthSetData;
    /**
     * 
     * @type {SessionPlanStretchSetData}
     * @memberof SessionPlanSetInstanceData
     */
    sessionPlanStretchSet?: SessionPlanStretchSetData;
    /**
     * 
     * @type {SessionPlanActivitySetData}
     * @memberof SessionPlanSetInstanceData
     */
    sessionPlanAcvivitySet?: SessionPlanActivitySetData;
}


/**
 * @export
 */
export const SessionPlanSetInstanceDataTypeEnum = {
    Strength: 'strength',
    Stretch: 'stretch',
    Cardio: 'cardio',
    Activity: 'activity'
} as const;
export type SessionPlanSetInstanceDataTypeEnum = typeof SessionPlanSetInstanceDataTypeEnum[keyof typeof SessionPlanSetInstanceDataTypeEnum];


/**
 * Check if a given object implements the SessionPlanSetInstanceData interface.
 */
export function instanceOfSessionPlanSetInstanceData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "notes" in value;
    isInstance = isInstance && "completed" in value;

    return isInstance;
}

export function SessionPlanSetInstanceDataFromJSON(json: any): SessionPlanSetInstanceData {
    return SessionPlanSetInstanceDataFromJSONTyped(json, false);
}

export function SessionPlanSetInstanceDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionPlanSetInstanceData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'notes': json['notes'],
        'completed': json['completed'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'sessionPlanCardioSet': !exists(json, 'sessionPlanCardioSet') ? undefined : SessionPlanCardioSetDataFromJSON(json['sessionPlanCardioSet']),
        'sessionPlanStrengthSet': !exists(json, 'sessionPlanStrengthSet') ? undefined : SessionPlanStrengthSetDataFromJSON(json['sessionPlanStrengthSet']),
        'sessionPlanStretchSet': !exists(json, 'sessionPlanStretchSet') ? undefined : SessionPlanStretchSetDataFromJSON(json['sessionPlanStretchSet']),
        'sessionPlanAcvivitySet': !exists(json, 'sessionPlanAcvivitySet') ? undefined : SessionPlanActivitySetDataFromJSON(json['sessionPlanAcvivitySet']),
    };
}

export function SessionPlanSetInstanceDataToJSON(value?: SessionPlanSetInstanceData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'notes': value.notes,
        'completed': value.completed,
        'type': value.type,
        'sessionPlanCardioSet': SessionPlanCardioSetDataToJSON(value.sessionPlanCardioSet),
        'sessionPlanStrengthSet': SessionPlanStrengthSetDataToJSON(value.sessionPlanStrengthSet),
        'sessionPlanStretchSet': SessionPlanStretchSetDataToJSON(value.sessionPlanStretchSet),
        'sessionPlanAcvivitySet': SessionPlanActivitySetDataToJSON(value.sessionPlanAcvivitySet),
    };
}

