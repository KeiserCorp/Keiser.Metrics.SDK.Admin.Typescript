/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.13
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { StatSorting } from './StatSorting';
import {
    StatSortingFromJSON,
    StatSortingFromJSONTyped,
    StatSortingToJSON,
} from './StatSorting';

/**
 * 
 * @export
 * @interface StatListResponseMeta
 */
export interface StatListResponseMeta {
    /**
     * 
     * @type {string}
     * @memberof StatListResponseMeta
     */
    from?: string;
    /**
     * 
     * @type {string}
     * @memberof StatListResponseMeta
     */
    to?: string;
    /**
     * 
     * @type {StatSorting}
     * @memberof StatListResponseMeta
     */
    sort: StatSorting;
    /**
     * 
     * @type {boolean}
     * @memberof StatListResponseMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof StatListResponseMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof StatListResponseMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof StatListResponseMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the StatListResponseMeta interface.
 */
export function instanceOfStatListResponseMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sort" in value;

    return isInstance;
}

export function StatListResponseMetaFromJSON(json: any): StatListResponseMeta {
    return StatListResponseMetaFromJSONTyped(json, false);
}

export function StatListResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): StatListResponseMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'from': !exists(json, 'from') ? undefined : json['from'],
        'to': !exists(json, 'to') ? undefined : json['to'],
        'sort': StatSortingFromJSON(json['sort']),
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function StatListResponseMetaToJSON(value?: StatListResponseMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'from': value.from,
        'to': value.to,
        'sort': StatSortingToJSON(value.sort),
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

