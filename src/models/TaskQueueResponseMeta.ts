/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.33
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
 * @interface TaskQueueResponseMeta
 */
export interface TaskQueueResponseMeta {
    /**
     * 
     * @type {string}
     * @memberof TaskQueueResponseMeta
     */
    queue: string;
    /**
     * 
     * @type {string}
     * @memberof TaskQueueResponseMeta
     */
    sort: TaskQueueResponseMetaSortEnum;
    /**
     * 
     * @type {boolean}
     * @memberof TaskQueueResponseMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof TaskQueueResponseMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof TaskQueueResponseMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof TaskQueueResponseMeta
     */
    totalCount?: number;
}


/**
 * @export
 */
export const TaskQueueResponseMetaSortEnum = {
    ImportHomeRunnerWorkKeiserMetricsApiKeiserMetricsApiSrcLibSdkEnumConstantsTaskSorting: 'import(/home/runner/work/Keiser.Metrics.API/Keiser.Metrics.API/src/lib/SdkEnumConstants).TaskSorting'
} as const;
export type TaskQueueResponseMetaSortEnum = typeof TaskQueueResponseMetaSortEnum[keyof typeof TaskQueueResponseMetaSortEnum];


/**
 * Check if a given object implements the TaskQueueResponseMeta interface.
 */
export function instanceOfTaskQueueResponseMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "queue" in value;
    isInstance = isInstance && "sort" in value;

    return isInstance;
}

export function TaskQueueResponseMetaFromJSON(json: any): TaskQueueResponseMeta {
    return TaskQueueResponseMetaFromJSONTyped(json, false);
}

export function TaskQueueResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskQueueResponseMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'queue': json['queue'],
        'sort': json['sort'],
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function TaskQueueResponseMetaToJSON(value?: TaskQueueResponseMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'queue': value.queue,
        'sort': value.sort,
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

