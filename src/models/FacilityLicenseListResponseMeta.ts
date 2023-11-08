/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FacilityLicenseSorting } from './FacilityLicenseSorting';
import {
    FacilityLicenseSortingFromJSON,
    FacilityLicenseSortingFromJSONTyped,
    FacilityLicenseSortingToJSON,
} from './FacilityLicenseSorting';

/**
 * 
 * @export
 * @interface FacilityLicenseListResponseMeta
 */
export interface FacilityLicenseListResponseMeta {
    /**
     * 
     * @type {string}
     * @memberof FacilityLicenseListResponseMeta
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityLicenseListResponseMeta
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof FacilityLicenseListResponseMeta
     */
    type: FacilityLicenseListResponseMetaTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof FacilityLicenseListResponseMeta
     */
    accountId: string;
    /**
     * 
     * @type {FacilityLicenseSorting}
     * @memberof FacilityLicenseListResponseMeta
     */
    sort: FacilityLicenseSorting;
    /**
     * 
     * @type {boolean}
     * @memberof FacilityLicenseListResponseMeta
     */
    ascending?: boolean;
    /**
     * 
     * @type {number}
     * @memberof FacilityLicenseListResponseMeta
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof FacilityLicenseListResponseMeta
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof FacilityLicenseListResponseMeta
     */
    totalCount?: number;
}


/**
 * @export
 */
export const FacilityLicenseListResponseMetaTypeEnum = {
    Normal: 'normal',
    Test: 'test',
    Demo: 'demo'
} as const;
export type FacilityLicenseListResponseMetaTypeEnum = typeof FacilityLicenseListResponseMetaTypeEnum[keyof typeof FacilityLicenseListResponseMetaTypeEnum];


/**
 * Check if a given object implements the FacilityLicenseListResponseMeta interface.
 */
export function instanceOfFacilityLicenseListResponseMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "key" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "accountId" in value;
    isInstance = isInstance && "sort" in value;

    return isInstance;
}

export function FacilityLicenseListResponseMetaFromJSON(json: any): FacilityLicenseListResponseMeta {
    return FacilityLicenseListResponseMetaFromJSONTyped(json, false);
}

export function FacilityLicenseListResponseMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityLicenseListResponseMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'key': json['key'],
        'type': json['type'],
        'accountId': json['accountId'],
        'sort': FacilityLicenseSortingFromJSON(json['sort']),
        'ascending': !exists(json, 'ascending') ? undefined : json['ascending'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalCount': !exists(json, 'totalCount') ? undefined : json['totalCount'],
    };
}

export function FacilityLicenseListResponseMetaToJSON(value?: FacilityLicenseListResponseMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'key': value.key,
        'type': value.type,
        'accountId': value.accountId,
        'sort': FacilityLicenseSortingToJSON(value.sort),
        'ascending': value.ascending,
        'limit': value.limit,
        'offset': value.offset,
        'totalCount': value.totalCount,
    };
}

