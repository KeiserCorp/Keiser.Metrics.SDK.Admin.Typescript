/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.9
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { TaskFailure } from './TaskFailure';
import {
    TaskFailureFromJSON,
    TaskFailureFromJSONTyped,
    TaskFailureToJSON,
} from './TaskFailure';
import type { TaskQueueResponseMeta } from './TaskQueueResponseMeta';
import {
    TaskQueueResponseMetaFromJSON,
    TaskQueueResponseMetaFromJSONTyped,
    TaskQueueResponseMetaToJSON,
} from './TaskQueueResponseMeta';

/**
 * 
 * @export
 * @interface TaskFailedResponse
 */
export interface TaskFailedResponse {
    /**
     * 
     * @type {Array<TaskFailure>}
     * @memberof TaskFailedResponse
     */
    tasks: Array<TaskFailure>;
    /**
     * 
     * @type {TaskQueueResponseMeta}
     * @memberof TaskFailedResponse
     */
    tasksMeta: TaskQueueResponseMeta;
    /**
     * 
     * @type {string}
     * @memberof TaskFailedResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskFailedResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the TaskFailedResponse interface.
 */
export function instanceOfTaskFailedResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "tasks" in value;
    isInstance = isInstance && "tasksMeta" in value;

    return isInstance;
}

export function TaskFailedResponseFromJSON(json: any): TaskFailedResponse {
    return TaskFailedResponseFromJSONTyped(json, false);
}

export function TaskFailedResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskFailedResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tasks': ((json['tasks'] as Array<any>).map(TaskFailureFromJSON)),
        'tasksMeta': TaskQueueResponseMetaFromJSON(json['tasksMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function TaskFailedResponseToJSON(value?: TaskFailedResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tasks': ((value.tasks as Array<any>).map(TaskFailureToJSON)),
        'tasksMeta': TaskQueueResponseMetaToJSON(value.tasksMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

