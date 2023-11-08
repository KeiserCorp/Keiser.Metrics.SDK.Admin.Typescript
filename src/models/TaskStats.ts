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
/**
 * 
 * @export
 * @interface TaskStats
 */
export interface TaskStats {
    /**
     * 
     * @type {string}
     * @memberof TaskStats
     */
    failed?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskStats
     */
    processed?: string;
}

/**
 * Check if a given object implements the TaskStats interface.
 */
export function instanceOfTaskStats(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TaskStatsFromJSON(json: any): TaskStats {
    return TaskStatsFromJSONTyped(json, false);
}

export function TaskStatsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskStats {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'failed': !exists(json, 'failed') ? undefined : json['failed'],
        'processed': !exists(json, 'processed') ? undefined : json['processed'],
    };
}

export function TaskStatsToJSON(value?: TaskStats | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'failed': value.failed,
        'processed': value.processed,
    };
}

