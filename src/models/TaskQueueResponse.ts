/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.22
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { TaskPayload } from './TaskPayload';
import {
    TaskPayloadFromJSON,
    TaskPayloadFromJSONTyped,
    TaskPayloadToJSON,
} from './TaskPayload';
import type { TaskQueueResponseMeta } from './TaskQueueResponseMeta';
import {
    TaskQueueResponseMetaFromJSON,
    TaskQueueResponseMetaFromJSONTyped,
    TaskQueueResponseMetaToJSON,
} from './TaskQueueResponseMeta';

/**
 * 
 * @export
 * @interface TaskQueueResponse
 */
export interface TaskQueueResponse {
    /**
     * 
     * @type {Array<TaskPayload>}
     * @memberof TaskQueueResponse
     */
    tasks: Array<TaskPayload>;
    /**
     * 
     * @type {TaskQueueResponseMeta}
     * @memberof TaskQueueResponse
     */
    tasksMeta: TaskQueueResponseMeta;
    /**
     * 
     * @type {string}
     * @memberof TaskQueueResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskQueueResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the TaskQueueResponse interface.
 */
export function instanceOfTaskQueueResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "tasks" in value;
    isInstance = isInstance && "tasksMeta" in value;

    return isInstance;
}

export function TaskQueueResponseFromJSON(json: any): TaskQueueResponse {
    return TaskQueueResponseFromJSONTyped(json, false);
}

export function TaskQueueResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskQueueResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tasks': ((json['tasks'] as Array<any>).map(TaskPayloadFromJSON)),
        'tasksMeta': TaskQueueResponseMetaFromJSON(json['tasksMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function TaskQueueResponseToJSON(value?: TaskQueueResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tasks': ((value.tasks as Array<any>).map(TaskPayloadToJSON)),
        'tasksMeta': TaskQueueResponseMetaToJSON(value.tasksMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

