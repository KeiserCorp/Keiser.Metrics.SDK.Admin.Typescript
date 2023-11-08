## @keiser/metrics-sdk-admin@5.0.2

## Project
This SDK facilitates communication between a client system (_ie: phone app, website, server_) and [Keiser Metrics](https://metrics.keiser.com). The SDK is written in [TypeScript](https://www.typescriptlang.org) and supports both [browser](https://caniuse.com/#feat=es6) and [NodeJS](https://nodejs.org) platforms.


### Installation

Navigate to the folder of your consuming project and install with [npm](https://www.npmjs.com/):

```
npm install @keiser/metrics-sdk-admin@5.0.2 --save
```


## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript

import { MetricsAdminApi } from '@keiser/metrics-sdk-admin';

var api = new MetricsAdminApi()

let body:MetricsAdminApiAdminLoginRequest = {
  // string
  email: email_example,
  // string
  password: password_example,
  // boolean (optional)
  refreshable: true,
  // string (optional)
  token: token_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.adminLogin(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}

```

## Documentation for API Endpoints

All URIs are relative to *https://metrics-api.keiser.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adminLogin**](MetricsAdminApi.md#adminLogin) | **POST** /admin/login | Login admin user using email, password, and 2FA token
[**authExchangeFulfillment**](MetricsAdminApi.md#authExchangeFulfillment) | **POST** /auth/exchange/fulfillment | Exchanges an authorization token for access and refresh tokens
[**facilityLicenseCreate**](MetricsAdminApi.md#facilityLicenseCreate) | **POST** /facility/license | Create a facility license
[**facilityLicenseDelete**](MetricsAdminApi.md#facilityLicenseDelete) | **DELETE** /facility/license/{id} | Delete a facility license
[**facilityLicenseList**](MetricsAdminApi.md#facilityLicenseList) | **GET** /facility/license | List facility licenses
[**globalAccessControlCreate**](MetricsAdminApi.md#globalAccessControlCreate) | **POST** /global-access-control | Create a user\&#39;s global access control rights
[**globalAccessControlDelete**](MetricsAdminApi.md#globalAccessControlDelete) | **DELETE** /global-access-control/{userId} | Delete a user\&#39;s global access control
[**globalAccessControlList**](MetricsAdminApi.md#globalAccessControlList) | **GET** /global-access-control | List global access control for users
[**globalAccessControlRecreateSecret**](MetricsAdminApi.md#globalAccessControlRecreateSecret) | **POST** /global-access-control/recreate-secret | Recreate a user\&#39;s authenticator secret
[**globalAccessControlShow**](MetricsAdminApi.md#globalAccessControlShow) | **GET** /global-access-control/{userId} | Show a global access control
[**globalAccessControlUpdate**](MetricsAdminApi.md#globalAccessControlUpdate) | **PUT** /global-access-control | Update a user global access control rights
[**resqueCacheCreate**](MetricsAdminApi.md#resqueCacheCreate) | **POST** /resque/cache | Create cached object
[**resqueCacheDelete**](MetricsAdminApi.md#resqueCacheDelete) | **DELETE** /resque/cache/{key} | Delete cached object
[**resqueCacheList**](MetricsAdminApi.md#resqueCacheList) | **GET** /resque/cache | List cached objects
[**resqueCacheShow**](MetricsAdminApi.md#resqueCacheShow) | **GET** /resque/cache/{key} | Show cache object
[**resqueCacheUpdate**](MetricsAdminApi.md#resqueCacheUpdate) | **PUT** /resque/cache/{key} | Update cached object
[**resqueDetails**](MetricsAdminApi.md#resqueDetails) | **GET** /resque/details | Show wholistic details about resque system
[**resqueTaskDeleteAllFailed**](MetricsAdminApi.md#resqueTaskDeleteAllFailed) | **DELETE** /resque/task/delete-all-failed | Delete all failed task
[**resqueTaskDeleteFailed**](MetricsAdminApi.md#resqueTaskDeleteFailed) | **DELETE** /resque/task/delete-failed | Delete a failed task
[**resqueTaskDeleteTask**](MetricsAdminApi.md#resqueTaskDeleteTask) | **DELETE** /resque/task/delete-task | Delete a task from the queue
[**resqueTaskFailures**](MetricsAdminApi.md#resqueTaskFailures) | **GET** /resque/task/failures | Lists failed tasks
[**resqueTaskQueue**](MetricsAdminApi.md#resqueTaskQueue) | **GET** /resque/task/queue | Lists enqueued tasks
[**resqueTaskRetryAllFailed**](MetricsAdminApi.md#resqueTaskRetryAllFailed) | **POST** /resque/task/retry-all-failed | Remove and retry all failed task
[**resqueTaskRetryFailed**](MetricsAdminApi.md#resqueTaskRetryFailed) | **POST** /resque/task/retry-failed | Remove and retry a failed task
[**resqueWorkerList**](MetricsAdminApi.md#resqueWorkerList) | **GET** /resque/worker | List resque workers
[**statsList**](MetricsAdminApi.md#statsList) | **GET** /stats | Shows stats queries
[**userDelete**](MetricsAdminApi.md#userDelete) | **DELETE** /user | Delete a user
[**userList**](MetricsAdminApi.md#userList) | **GET** /user/list | List users
[**userMerge**](MetricsAdminApi.md#userMerge) | **PUT** /user/merge | Merge two user together
[**userShow**](MetricsAdminApi.md#userShow) | **GET** /user | Show a user


## Documentation for Models

 - [A500DataSetData](A500DataSetData.md)
 - [A500MachineStateData](A500MachineStateData.md)
 - [A500RepDataPointData](A500RepDataPointData.md)
 - [A500TestResultData](A500TestResultData.md)
 - [A500TimeSeriesPointData](A500TimeSeriesPointData.md)
 - [AcceptedTermsVersionData](AcceptedTermsVersionData.md)
 - [BodyCompositionMeasurementData](BodyCompositionMeasurementData.md)
 - [CacheKeysResponse](CacheKeysResponse.md)
 - [CacheObject](CacheObject.md)
 - [CacheObjectResponse](CacheObjectResponse.md)
 - [CardioExerciseData](CardioExerciseData.md)
 - [CardioExerciseVariantData](CardioExerciseVariantData.md)
 - [CardioMachineData](CardioMachineData.md)
 - [EmailAddressData](EmailAddressData.md)
 - [ExerciseAliasData](ExerciseAliasData.md)
 - [ExerciseOrdinalSetAssignmentData](ExerciseOrdinalSetAssignmentData.md)
 - [ExerciseOrdinalSetData](ExerciseOrdinalSetData.md)
 - [FacilityConfigurationData](FacilityConfigurationData.md)
 - [FacilityData](FacilityData.md)
 - [FacilityLicenseData](FacilityLicenseData.md)
 - [FacilityLicenseListResponse](FacilityLicenseListResponse.md)
 - [FacilityLicenseListResponseMeta](FacilityLicenseListResponseMeta.md)
 - [FacilityLicenseResponse](FacilityLicenseResponse.md)
 - [FacilityLicenseSorting](FacilityLicenseSorting.md)
 - [FacilityProfileData](FacilityProfileData.md)
 - [FacilityRelationshipData](FacilityRelationshipData.md)
 - [FacilitySessionUserData](FacilitySessionUserData.md)
 - [FacilityStrengthMachineConfigurationData](FacilityStrengthMachineConfigurationData.md)
 - [FacilityStrengthMachineData](FacilityStrengthMachineData.md)
 - [FingerprintData](FingerprintData.md)
 - [GlobalAccessControlCreationResponse](GlobalAccessControlCreationResponse.md)
 - [GlobalAccessControlData](GlobalAccessControlData.md)
 - [GlobalAccessControlListResponse](GlobalAccessControlListResponse.md)
 - [GlobalAccessControlListResponseMeta](GlobalAccessControlListResponseMeta.md)
 - [GlobalAccessControlResponse](GlobalAccessControlResponse.md)
 - [GlobalAccessControlSecretData](GlobalAccessControlSecretData.md)
 - [GlobalAccessControlSecretResponse](GlobalAccessControlSecretResponse.md)
 - [GlobalAccessControlSorting](GlobalAccessControlSorting.md)
 - [HeartRateDataPointData](HeartRateDataPointData.md)
 - [HeartRateDataSetData](HeartRateDataSetData.md)
 - [HeartRateDataSetSessionData](HeartRateDataSetSessionData.md)
 - [HeightMeasurementData](HeightMeasurementData.md)
 - [High](High.md)
 - [Low](Low.md)
 - [MSeriesDataPointData](MSeriesDataPointData.md)
 - [MSeriesDataSetData](MSeriesDataSetData.md)
 - [MSeriesDataSetSegmentData](MSeriesDataSetSegmentData.md)
 - [MSeriesFtpMeasurementData](MSeriesFtpMeasurementData.md)
 - [MuscleArea](MuscleArea.md)
 - [MuscleData](MuscleData.md)
 - [MuscleGroup](MuscleGroup.md)
 - [MuscleIdentifier](MuscleIdentifier.md)
 - [OAuthServiceData](OAuthServiceData.md)
 - [PrimaryEmailAddressData](PrimaryEmailAddressData.md)
 - [ProfileData](ProfileData.md)
 - [Queue](Queue.md)
 - [ResqueDetailsData](ResqueDetailsData.md)
 - [ResqueDetailsResponse](ResqueDetailsResponse.md)
 - [SessionData](SessionData.md)
 - [SessionPlanActivitySetData](SessionPlanActivitySetData.md)
 - [SessionPlanCardioSetData](SessionPlanCardioSetData.md)
 - [SessionPlanData](SessionPlanData.md)
 - [SessionPlanSequenceAssignmentData](SessionPlanSequenceAssignmentData.md)
 - [SessionPlanSequenceData](SessionPlanSequenceData.md)
 - [SessionPlanSequenceInstanceData](SessionPlanSequenceInstanceData.md)
 - [SessionPlanSetData](SessionPlanSetData.md)
 - [SessionPlanSetInstanceData](SessionPlanSetInstanceData.md)
 - [SessionPlanStrengthSetData](SessionPlanStrengthSetData.md)
 - [SessionPlanStretchSetData](SessionPlanStretchSetData.md)
 - [StatData](StatData.md)
 - [StatListResponse](StatListResponse.md)
 - [StatListResponseMeta](StatListResponseMeta.md)
 - [StatSorting](StatSorting.md)
 - [StrengthExerciseData](StrengthExerciseData.md)
 - [StrengthExerciseVariantData](StrengthExerciseVariantData.md)
 - [StrengthMachineData](StrengthMachineData.md)
 - [StrengthMachineDataSetData](StrengthMachineDataSetData.md)
 - [StrengthMachineDataSetTestData](StrengthMachineDataSetTestData.md)
 - [StrengthMachineDataSetTestSubsetData](StrengthMachineDataSetTestSubsetData.md)
 - [StrengthMachineModelData](StrengthMachineModelData.md)
 - [StretchExerciseData](StretchExerciseData.md)
 - [StretchExerciseVariantData](StretchExerciseVariantData.md)
 - [TaskFailedResponse](TaskFailedResponse.md)
 - [TaskFailure](TaskFailure.md)
 - [TaskPayload](TaskPayload.md)
 - [TaskQueueResponse](TaskQueueResponse.md)
 - [TaskQueueResponseMeta](TaskQueueResponseMeta.md)
 - [TaskQueues](TaskQueues.md)
 - [TaskStats](TaskStats.md)
 - [UserData](UserData.md)
 - [UserListResponse](UserListResponse.md)
 - [UserListResponseMeta](UserListResponseMeta.md)
 - [UserResponse](UserResponse.md)
 - [UserSorting](UserSorting.md)
 - [WeightMeasurementData](WeightMeasurementData.md)
 - [WorkersResponse](WorkersResponse.md)


## Documentation for Authorization


Authentication schemes defined for the API:
### bearerAuth

- **Type**: Bearer authentication (JWT)



## Copyright and License
Copyright © 2020 [Keiser Corporation](http://keiser.com/).

The Keiser Metrics SDK source code and distributed package are made available through the [MIT license](LICENSE.md).

Using any of the APIs made available through the Keiser Metrics SDK to communicate with [Keiser Metrics](https://metrics.keiser.com) make you subject to the following agreements. Please read all documents in their entirety as they govern your use of the APIs and Keiser Metrics servers.
- [API Agreement](https://dev.keiser.com/api-agreement/)
- [Brand Guidelines for Developers](https://dev.keiser.com/brand-guidelines/)