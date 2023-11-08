/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Queue } from './Queue';
import {
    QueueFromJSON,
    QueueFromJSONTyped,
    QueueToJSON,
} from './Queue';
import type { TaskPayload } from './TaskPayload';
import {
    TaskPayloadFromJSON,
    TaskPayloadFromJSONTyped,
    TaskPayloadToJSON,
} from './TaskPayload';

/**
 * 
 * @export
 * @interface TaskFailure
 */
export interface TaskFailure {
    /**
     * 
     * @type {Array<string>}
     * @memberof TaskFailure
     */
    backtrace: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof TaskFailure
     */
    error: string;
    /**
     * 
     * @type {string}
     * @memberof TaskFailure
     */
    exception: string;
    /**
     * 
     * @type {string}
     * @memberof TaskFailure
     */
    failedAt: string;
    /**
     * 
     * @type {TaskPayload}
     * @memberof TaskFailure
     */
    payload: TaskPayload;
    /**
     * 
     * @type {Queue}
     * @memberof TaskFailure
     */
    queue: Queue;
    /**
     * 
     * @type {string}
     * @memberof TaskFailure
     */
    worker: string;
}

/**
 * Check if a given object implements the TaskFailure interface.
 */
export function instanceOfTaskFailure(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "backtrace" in value;
    isInstance = isInstance && "error" in value;
    isInstance = isInstance && "exception" in value;
    isInstance = isInstance && "failedAt" in value;
    isInstance = isInstance && "payload" in value;
    isInstance = isInstance && "queue" in value;
    isInstance = isInstance && "worker" in value;

    return isInstance;
}

export function TaskFailureFromJSON(json: any): TaskFailure {
    return TaskFailureFromJSONTyped(json, false);
}

export function TaskFailureFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskFailure {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'backtrace': json['backtrace'],
        'error': json['error'],
        'exception': json['exception'],
        'failedAt': json['failed_at'],
        'payload': TaskPayloadFromJSON(json['payload']),
        'queue': QueueFromJSON(json['queue']),
        'worker': json['worker'],
    };
}

export function TaskFailureToJSON(value?: TaskFailure | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'backtrace': value.backtrace,
        'error': value.error,
        'exception': value.exception,
        'failed_at': value.failedAt,
        'payload': TaskPayloadToJSON(value.payload),
        'queue': QueueToJSON(value.queue),
        'worker': value.worker,
    };
}
