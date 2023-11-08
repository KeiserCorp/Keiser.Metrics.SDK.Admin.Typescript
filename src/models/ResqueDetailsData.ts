/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.8
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { TaskQueues } from './TaskQueues';
import {
    TaskQueuesFromJSON,
    TaskQueuesFromJSONTyped,
    TaskQueuesToJSON,
} from './TaskQueues';
import type { TaskStats } from './TaskStats';
import {
    TaskStatsFromJSON,
    TaskStatsFromJSONTyped,
    TaskStatsToJSON,
} from './TaskStats';

/**
 * 
 * @export
 * @interface ResqueDetailsData
 */
export interface ResqueDetailsData {
    /**
     * 
     * @type {TaskQueues}
     * @memberof ResqueDetailsData
     */
    queues: TaskQueues;
    /**
     * 
     * @type {TaskStats}
     * @memberof ResqueDetailsData
     */
    stats: TaskStats;
    /**
     * 
     * @type {object}
     * @memberof ResqueDetailsData
     */
    workers: object;
}

/**
 * Check if a given object implements the ResqueDetailsData interface.
 */
export function instanceOfResqueDetailsData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "queues" in value;
    isInstance = isInstance && "stats" in value;
    isInstance = isInstance && "workers" in value;

    return isInstance;
}

export function ResqueDetailsDataFromJSON(json: any): ResqueDetailsData {
    return ResqueDetailsDataFromJSONTyped(json, false);
}

export function ResqueDetailsDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResqueDetailsData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'queues': TaskQueuesFromJSON(json['queues']),
        'stats': TaskStatsFromJSON(json['stats']),
        'workers': json['workers'],
    };
}

export function ResqueDetailsDataToJSON(value?: ResqueDetailsData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'queues': TaskQueuesToJSON(value.queues),
        'stats': TaskStatsToJSON(value.stats),
        'workers': value.workers,
    };
}

