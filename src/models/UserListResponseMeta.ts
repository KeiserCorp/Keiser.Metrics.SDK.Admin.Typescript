/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { UserSorting } from './UserSorting';
import {
    UserSortingFromJSON,
    UserSortingFromJSONTyped,
    UserSortingToJSON,
} from './UserSorting';

/**
 * 
 * @export
 * @interface UserListResponseMeta
 */
export interface UserListResponseMeta {
    /**
     * 
     * @type {string}
     * @memberof UserListResponseMeta
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof UserListResponseMeta
     */
    email?: string;
    /**
     * 
     * @type {UserSorting}
     * @memberof UserListResponseMeta
     */
    sort: UserSorting;
    /**
     * 
     * @type {boolean}
     * @memberof UserListResponseMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof UserListResponseMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof UserListResponseMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof UserListResponseMeta
     */
    totalCount?: number;
}

/**
 * Check if a given object implements the UserListResponseMeta interface.
 */
export function instanceOfUserListResponseMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "sort" in value;

    return isInstance;
}

export function UserListResponseMetaFromJSON(json: any): UserListResponseMeta {
    return UserListResponseMetaFromJSONTyped(json, false);
}

export function UserListResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserListResponseMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'sort': UserSortingFromJSON(json['sort']),
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function UserListResponseMetaToJSON(value?: UserListResponseMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'email': value.email,
        'sort': UserSortingToJSON(value.sort),
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

