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
import type { SessionPlanSequenceAssignmentData } from './SessionPlanSequenceAssignmentData';
import {
    SessionPlanSequenceAssignmentDataFromJSON,
    SessionPlanSequenceAssignmentDataFromJSONTyped,
    SessionPlanSequenceAssignmentDataToJSON,
} from './SessionPlanSequenceAssignmentData';
import type { SessionPlanSequenceInstanceData } from './SessionPlanSequenceInstanceData';
import {
    SessionPlanSequenceInstanceDataFromJSON,
    SessionPlanSequenceInstanceDataFromJSONTyped,
    SessionPlanSequenceInstanceDataToJSON,
} from './SessionPlanSequenceInstanceData';
import type { UserData } from './UserData';
import {
    UserDataFromJSON,
    UserDataFromJSONTyped,
    UserDataToJSON,
} from './UserData';

/**
 * 
 * @export
 * @interface SessionPlanData
 */
export interface SessionPlanData {
    /**
     * 
     * @type {number}
     * @memberof SessionPlanData
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof SessionPlanData
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof SessionPlanData
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof SessionPlanData
     */
    notes: string;
    /**
     * 
     * @type {string}
     * @memberof SessionPlanData
     */
    startAt: string;
    /**
     * 
     * @type {string}
     * @memberof SessionPlanData
     */
    endAt?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SessionPlanData
     */
    active: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SessionPlanData
     */
    repeating: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SessionPlanData
     */
    flexible: boolean;
    /**
     * 
     * @type {number}
     * @memberof SessionPlanData
     */
    scheduleLength: number;
    /**
     * 
     * @type {number}
     * @memberof SessionPlanData
     */
    lastCompletedIndex?: number;
    /**
     * 
     * @type {SessionPlanSequenceInstanceData}
     * @memberof SessionPlanData
     */
    lastCompletedSequence?: SessionPlanSequenceInstanceData;
    /**
     * 
     * @type {UserData}
     * @memberof SessionPlanData
     */
    user?: UserData;
    /**
     * 
     * @type {Array<SessionPlanSequenceAssignmentData>}
     * @memberof SessionPlanData
     */
    sessionPlanSequenceAssignments?: Array<SessionPlanSequenceAssignmentData>;
    /**
     * 
     * @type {Array<SessionPlanSequenceInstanceData>}
     * @memberof SessionPlanData
     */
    sessionPlanSequenceInstances?: Array<SessionPlanSequenceInstanceData>;
}

/**
 * Check if a given object implements the SessionPlanData interface.
 */
export function instanceOfSessionPlanData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "notes" in value;
    isInstance = isInstance && "startAt" in value;
    isInstance = isInstance && "active" in value;
    isInstance = isInstance && "repeating" in value;
    isInstance = isInstance && "flexible" in value;
    isInstance = isInstance && "scheduleLength" in value;

    return isInstance;
}

export function SessionPlanDataFromJSON(json: any): SessionPlanData {
    return SessionPlanDataFromJSONTyped(json, false);
}

export function SessionPlanDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionPlanData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'description': json['description'],
        'notes': json['notes'],
        'startAt': json['startAt'],
        'endAt': !exists(json, 'endAt') ? undefined : json['endAt'],
        'active': json['active'],
        'repeating': json['repeating'],
        'flexible': json['flexible'],
        'scheduleLength': json['scheduleLength'],
        'lastCompletedIndex': !exists(json, 'lastCompletedIndex') ? undefined : json['lastCompletedIndex'],
        'lastCompletedSequence': !exists(json, 'lastCompletedSequence') ? undefined : SessionPlanSequenceInstanceDataFromJSON(json['lastCompletedSequence']),
        'user': !exists(json, 'user') ? undefined : UserDataFromJSON(json['user']),
        'sessionPlanSequenceAssignments': !exists(json, 'sessionPlanSequenceAssignments') ? undefined : ((json['sessionPlanSequenceAssignments'] as Array<any>).map(SessionPlanSequenceAssignmentDataFromJSON)),
        'sessionPlanSequenceInstances': !exists(json, 'sessionPlanSequenceInstances') ? undefined : ((json['sessionPlanSequenceInstances'] as Array<any>).map(SessionPlanSequenceInstanceDataFromJSON)),
    };
}

export function SessionPlanDataToJSON(value?: SessionPlanData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'description': value.description,
        'notes': value.notes,
        'startAt': value.startAt,
        'endAt': value.endAt,
        'active': value.active,
        'repeating': value.repeating,
        'flexible': value.flexible,
        'scheduleLength': value.scheduleLength,
        'lastCompletedIndex': value.lastCompletedIndex,
        'lastCompletedSequence': SessionPlanSequenceInstanceDataToJSON(value.lastCompletedSequence),
        'user': UserDataToJSON(value.user),
        'sessionPlanSequenceAssignments': value.sessionPlanSequenceAssignments === undefined ? undefined : ((value.sessionPlanSequenceAssignments as Array<any>).map(SessionPlanSequenceAssignmentDataToJSON)),
        'sessionPlanSequenceInstances': value.sessionPlanSequenceInstances === undefined ? undefined : ((value.sessionPlanSequenceInstances as Array<any>).map(SessionPlanSequenceInstanceDataToJSON)),
    };
}

