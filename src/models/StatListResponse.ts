/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.35
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { StatData } from './StatData';
import {
    StatDataFromJSON,
    StatDataFromJSONTyped,
    StatDataToJSON,
} from './StatData';
import type { StatListResponseMeta } from './StatListResponseMeta';
import {
    StatListResponseMetaFromJSON,
    StatListResponseMetaFromJSONTyped,
    StatListResponseMetaToJSON,
} from './StatListResponseMeta';

/**
 * 
 * @export
 * @interface StatListResponse
 */
export interface StatListResponse {
    /**
     * 
     * @type {Array<StatData>}
     * @memberof StatListResponse
     */
    stats: Array<StatData>;
    /**
     * 
     * @type {StatListResponseMeta}
     * @memberof StatListResponse
     */
    statsMeta: StatListResponseMeta;
    /**
     * 
     * @type {string}
     * @memberof StatListResponse
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof StatListResponse
     */
    refreshToken?: string;
}

/**
 * Check if a given object implements the StatListResponse interface.
 */
export function instanceOfStatListResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "stats" in value;
    isInstance = isInstance && "statsMeta" in value;

    return isInstance;
}

export function StatListResponseFromJSON(json: any): StatListResponse {
    return StatListResponseFromJSONTyped(json, false);
}

export function StatListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StatListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'stats': ((json['stats'] as Array<any>).map(StatDataFromJSON)),
        'statsMeta': StatListResponseMetaFromJSON(json['statsMeta']),
        'accessToken': !exists(json, 'accessToken') ? undefined : json['accessToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
    };
}

export function StatListResponseToJSON(value?: StatListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'stats': ((value.stats as Array<any>).map(StatDataToJSON)),
        'statsMeta': StatListResponseMetaToJSON(value.statsMeta),
        'accessToken': value.accessToken,
        'refreshToken': value.refreshToken,
    };
}

