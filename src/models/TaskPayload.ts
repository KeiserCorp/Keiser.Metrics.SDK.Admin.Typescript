/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.19
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

/**
 * 
 * @export
 * @interface TaskPayload
 */
export interface TaskPayload {
    /**
     * 
     * @type {Array<string>}
     * @memberof TaskPayload
     */
    args: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof TaskPayload
     */
    _class: string;
    /**
     * 
     * @type {Queue}
     * @memberof TaskPayload
     */
    queue: Queue;
}

/**
 * Check if a given object implements the TaskPayload interface.
 */
export function instanceOfTaskPayload(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "args" in value;
    isInstance = isInstance && "_class" in value;
    isInstance = isInstance && "queue" in value;

    return isInstance;
}

export function TaskPayloadFromJSON(json: any): TaskPayload {
    return TaskPayloadFromJSONTyped(json, false);
}

export function TaskPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskPayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'args': json['args'],
        '_class': json['class'],
        'queue': QueueFromJSON(json['queue']),
    };
}

export function TaskPayloadToJSON(value?: TaskPayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'args': value.args,
        'class': value._class,
        'queue': QueueToJSON(value.queue),
    };
}

