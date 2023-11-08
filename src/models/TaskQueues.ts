/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.7
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { High } from './High';
import {
    HighFromJSON,
    HighFromJSONTyped,
    HighToJSON,
} from './High';
import type { Low } from './Low';
import {
    LowFromJSON,
    LowFromJSONTyped,
    LowToJSON,
} from './Low';

/**
 * 
 * @export
 * @interface TaskQueues
 */
export interface TaskQueues {
    /**
     * 
     * @type {High}
     * @memberof TaskQueues
     */
    high: High;
    /**
     * 
     * @type {Low}
     * @memberof TaskQueues
     */
    low: Low;
}

/**
 * Check if a given object implements the TaskQueues interface.
 */
export function instanceOfTaskQueues(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "high" in value;
    isInstance = isInstance && "low" in value;

    return isInstance;
}

export function TaskQueuesFromJSON(json: any): TaskQueues {
    return TaskQueuesFromJSONTyped(json, false);
}

export function TaskQueuesFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskQueues {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'high': HighFromJSON(json['high']),
        'low': LowFromJSON(json['low']),
    };
}

export function TaskQueuesToJSON(value?: TaskQueues | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'high': HighToJSON(value.high),
        'low': LowToJSON(value.low),
    };
}

