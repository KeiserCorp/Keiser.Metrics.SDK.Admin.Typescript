/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.18
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { GlobalAccessControlSorting } from './GlobalAccessControlSorting';
import {
    GlobalAccessControlSortingFromJSON,
    GlobalAccessControlSortingFromJSONTyped,
    GlobalAccessControlSortingToJSON,
} from './GlobalAccessControlSorting';

/**
 * 
 * @export
 * @interface GlobalAccessControlListResponseMeta
 */
export interface GlobalAccessControlListResponseMeta {
    /**
     * 
     * @type {string}
     * @memberof GlobalAccessControlListResponseMeta
     */
    name?: string;
    /**
     * 
     * @type {GlobalAccessControlSorting}
     * @memberof GlobalAccessControlListResponseMeta
     */
    sort: GlobalAccessControlSorting;
    /**
     * 
     * @type {boolean}
     * @memberof GlobalAccessControlListResponseMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof GlobalAccessControlListResponseMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof GlobalAccessControlListResponseMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof GlobalAccessControlListResponseMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the GlobalAccessControlListResponseMeta interface.
 */
export function instanceOfGlobalAccessControlListResponseMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sort" in value;

    return isInstance;
}

export function GlobalAccessControlListResponseMetaFromJSON(json: any): GlobalAccessControlListResponseMeta {
    return GlobalAccessControlListResponseMetaFromJSONTyped(json, false);
}

export function GlobalAccessControlListResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): GlobalAccessControlListResponseMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'sort': GlobalAccessControlSortingFromJSON(json['sort']),
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function GlobalAccessControlListResponseMetaToJSON(value?: GlobalAccessControlListResponseMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'sort': GlobalAccessControlSortingToJSON(value.sort),
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

