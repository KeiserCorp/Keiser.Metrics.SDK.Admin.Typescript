/* tslint:disable */
/* eslint-disable */
/**
 * metrics-sdk-admin
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 5.0.17
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * 
 * @export
 */
export const Queue = {
    High: 'high',
    Low: 'low'
} as const;
export type Queue = typeof Queue[keyof typeof Queue];


export function QueueFromJSON(json: any): Queue {
    return QueueFromJSONTyped(json, false);
}

export function QueueFromJSONTyped(json: any, ignoreDiscriminator: boolean): Queue {
    return json as Queue;
}

export function QueueToJSON(value?: Queue | null): any {
    return value as any;
}

