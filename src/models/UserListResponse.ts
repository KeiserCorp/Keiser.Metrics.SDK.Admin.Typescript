/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.21
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { UserData } from './UserData';
import {
    UserDataFromJSON,
    UserDataFromJSONTyped,
    UserDataToJSON,
} from './UserData';
import type { UserListResponseMeta } from './UserListResponseMeta';
import {
    UserListResponseMetaFromJSON,
    UserListResponseMetaFromJSONTyped,
    UserListResponseMetaToJSON,
} from './UserListResponseMeta';

/**
 * 
 * @export
 * @interface UserListResponse
 */
export interface UserListResponse {
    /**
     * 
     * @type {Array<UserData>}
     * @memberof UserListResponse
     */
    users: Array<UserData>;
    /**
     * 
     * @type {UserListResponseMeta}
     * @memberof UserListResponse
     */
    usersMeta: UserListResponseMeta;
    /**
     * 
     * @type {string}
     * @memberof UserListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof UserListResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the UserListResponse interface.
 */
export function instanceOfUserListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "users" in value;
    isInstance = isInstance && "usersMeta" in value;

    return isInstance;
}

export function UserListResponseFromJSON(json: any): UserListResponse {
    return UserListResponseFromJSONTyped(json, false);
}

export function UserListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'users': ((json['users'] as Array<any>).map(UserDataFromJSON)),
        'usersMeta': UserListResponseMetaFromJSON(json['usersMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function UserListResponseToJSON(value?: UserListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'users': ((value.users as Array<any>).map(UserDataToJSON)),
        'usersMeta': UserListResponseMetaToJSON(value.usersMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

