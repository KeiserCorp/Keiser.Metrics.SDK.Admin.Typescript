## @keiser/metrics-sdk-admin-typescript@5.0.29

## Project
This SDK facilitates communication between a client system (_ie: phone app, website, server_) and [Keiser Metrics](https://metrics.keiser.com). The SDK is written in [TypeScript](https://www.typescriptlang.org) and supports both [browser](https://caniuse.com/#feat=es6) and [NodeJS](https://nodejs.org) platforms.


### Installation

Navigate to the folder of your consuming project and install with [npm](https://www.npmjs.com/):

```
npm install @keiser/metrics-sdk-admin-typescript@5.0.29 --save
```


## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript

import { MetricsAdminApi } from '@keiser/metrics-sdk-admin-typescript';

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

All URIs are relative to *https://metrics-api-v3.keiser.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adminLogin**](docs/MetricsAdminApi.md#adminLogin) | **POST** /admin/login | Login admin user using email, password, and 2FA token
[**authExchangeFulfillment**](docs/MetricsAdminApi.md#authExchangeFulfillment) | **POST** /auth/exchange/fulfillment | Exchanges an authorization token for access and refresh tokens
[**facilityLicenseCreate**](docs/MetricsAdminApi.md#facilityLicenseCreate) | **POST** /facility/license | Create a facility license
[**facilityLicenseDelete**](docs/MetricsAdminApi.md#facilityLicenseDelete) | **DELETE** /facility/license/{id} | Delete a facility license
[**facilityLicenseList**](docs/MetricsAdminApi.md#facilityLicenseList) | **GET** /facility/license/list | List facility licenses
[**globalAccessControlCreate**](docs/MetricsAdminApi.md#globalAccessControlCreate) | **POST** /global-access-control | Create a user\&#39;s global access control rights
[**globalAccessControlDelete**](docs/MetricsAdminApi.md#globalAccessControlDelete) | **DELETE** /global-access-control/{userId} | Delete a user\&#39;s global access control
[**globalAccessControlList**](docs/MetricsAdminApi.md#globalAccessControlList) | **GET** /global-access-control/list | List global access control for users
[**globalAccessControlRecreateSecret**](docs/MetricsAdminApi.md#globalAccessControlRecreateSecret) | **POST** /global-access-control/recreate-secret | Recreate a user\&#39;s authenticator secret
[**globalAccessControlShow**](docs/MetricsAdminApi.md#globalAccessControlShow) | **GET** /global-access-control | Show a global access control
[**globalAccessControlUpdate**](docs/MetricsAdminApi.md#globalAccessControlUpdate) | **PUT** /global-access-control | Update a user global access control rights
[**resqueCacheCreate**](docs/MetricsAdminApi.md#resqueCacheCreate) | **POST** /resque/cache | Create cached object
[**resqueCacheDelete**](docs/MetricsAdminApi.md#resqueCacheDelete) | **DELETE** /resque/cache/{key} | Delete cached object
[**resqueCacheList**](docs/MetricsAdminApi.md#resqueCacheList) | **GET** /resque/cache/list | List cached objects
[**resqueCacheShow**](docs/MetricsAdminApi.md#resqueCacheShow) | **GET** /resque/cache | Show cache object
[**resqueCacheUpdate**](docs/MetricsAdminApi.md#resqueCacheUpdate) | **PUT** /resque/cache/{key} | Update cached object
[**resqueDetails**](docs/MetricsAdminApi.md#resqueDetails) | **GET** /resque/details | Show wholistic details about resque system
[**resqueTaskDeleteAllFailed**](docs/MetricsAdminApi.md#resqueTaskDeleteAllFailed) | **DELETE** /resque/task/delete-all-failed | Delete all failed task
[**resqueTaskDeleteFailed**](docs/MetricsAdminApi.md#resqueTaskDeleteFailed) | **DELETE** /resque/task/delete-failed | Delete a failed task
[**resqueTaskDeleteTask**](docs/MetricsAdminApi.md#resqueTaskDeleteTask) | **DELETE** /resque/task/delete-task | Delete a task from the queue
[**resqueTaskFailures**](docs/MetricsAdminApi.md#resqueTaskFailures) | **GET** /resque/task/failures | Lists failed tasks
[**resqueTaskQueue**](docs/MetricsAdminApi.md#resqueTaskQueue) | **GET** /resque/task/queue | Lists enqueued tasks
[**resqueTaskRetryAllFailed**](docs/MetricsAdminApi.md#resqueTaskRetryAllFailed) | **POST** /resque/task/retry-all-failed | Remove and retry all failed task
[**resqueTaskRetryFailed**](docs/MetricsAdminApi.md#resqueTaskRetryFailed) | **POST** /resque/task/retry-failed | Remove and retry a failed task
[**resqueWorkerList**](docs/MetricsAdminApi.md#resqueWorkerList) | **GET** /resque/worker | List resque workers
[**statsList**](docs/MetricsAdminApi.md#statsList) | **GET** /stats | Shows stats queries
[**userDelete**](docs/MetricsAdminApi.md#userDelete) | **DELETE** /user | Delete a user
[**userList**](docs/MetricsAdminApi.md#userList) | **GET** /user/list | List users
[**userMerge**](docs/MetricsAdminApi.md#userMerge) | **PUT** /user/merge | Merge two user together
[**userShow**](docs/MetricsAdminApi.md#userShow) | **GET** /user | Show a user


## Documentation for Models

 - [A500DataSetData](docs/A500DataSetData.md)
 - [A500MachineStateData](docs/A500MachineStateData.md)
 - [A500RepDataPointData](docs/A500RepDataPointData.md)
 - [A500TestResultData](docs/A500TestResultData.md)
 - [A500TimeSeriesPointData](docs/A500TimeSeriesPointData.md)
 - [AcceptedTermsVersionData](docs/AcceptedTermsVersionData.md)
 - [BodyCompositionMeasurementData](docs/BodyCompositionMeasurementData.md)
 - [CacheKeysResponse](docs/CacheKeysResponse.md)
 - [CacheObject](docs/CacheObject.md)
 - [CacheObjectResponse](docs/CacheObjectResponse.md)
 - [CardioExerciseData](docs/CardioExerciseData.md)
 - [CardioExerciseVariantData](docs/CardioExerciseVariantData.md)
 - [CardioMachineData](docs/CardioMachineData.md)
 - [EmailAddressData](docs/EmailAddressData.md)
 - [ExerciseAliasData](docs/ExerciseAliasData.md)
 - [ExerciseOrdinalSetAssignmentData](docs/ExerciseOrdinalSetAssignmentData.md)
 - [ExerciseOrdinalSetData](docs/ExerciseOrdinalSetData.md)
 - [FacilityConfigurationData](docs/FacilityConfigurationData.md)
 - [FacilityData](docs/FacilityData.md)
 - [FacilityLicenseData](docs/FacilityLicenseData.md)
 - [FacilityLicenseListResponse](docs/FacilityLicenseListResponse.md)
 - [FacilityLicenseListResponseMeta](docs/FacilityLicenseListResponseMeta.md)
 - [FacilityLicenseResponse](docs/FacilityLicenseResponse.md)
 - [FacilityLicenseSorting](docs/FacilityLicenseSorting.md)
 - [FacilityProfileData](docs/FacilityProfileData.md)
 - [FacilityRelationshipData](docs/FacilityRelationshipData.md)
 - [FacilitySessionUserData](docs/FacilitySessionUserData.md)
 - [FacilityStrengthMachineConfigurationData](docs/FacilityStrengthMachineConfigurationData.md)
 - [FacilityStrengthMachineData](docs/FacilityStrengthMachineData.md)
 - [FingerprintData](docs/FingerprintData.md)
 - [GlobalAccessControlCreationResponse](docs/GlobalAccessControlCreationResponse.md)
 - [GlobalAccessControlData](docs/GlobalAccessControlData.md)
 - [GlobalAccessControlListResponse](docs/GlobalAccessControlListResponse.md)
 - [GlobalAccessControlListResponseMeta](docs/GlobalAccessControlListResponseMeta.md)
 - [GlobalAccessControlResponse](docs/GlobalAccessControlResponse.md)
 - [GlobalAccessControlSecretData](docs/GlobalAccessControlSecretData.md)
 - [GlobalAccessControlSecretResponse](docs/GlobalAccessControlSecretResponse.md)
 - [GlobalAccessControlSorting](docs/GlobalAccessControlSorting.md)
 - [HeartRateDataPointData](docs/HeartRateDataPointData.md)
 - [HeartRateDataSetData](docs/HeartRateDataSetData.md)
 - [HeartRateDataSetSessionData](docs/HeartRateDataSetSessionData.md)
 - [HeightMeasurementData](docs/HeightMeasurementData.md)
 - [High](docs/High.md)
 - [Low](docs/Low.md)
 - [MSeriesDataPointData](docs/MSeriesDataPointData.md)
 - [MSeriesDataSetData](docs/MSeriesDataSetData.md)
 - [MSeriesDataSetSegmentData](docs/MSeriesDataSetSegmentData.md)
 - [MSeriesFtpMeasurementData](docs/MSeriesFtpMeasurementData.md)
 - [MuscleArea](docs/MuscleArea.md)
 - [MuscleData](docs/MuscleData.md)
 - [MuscleGroup](docs/MuscleGroup.md)
 - [MuscleIdentifier](docs/MuscleIdentifier.md)
 - [OAuthServiceData](docs/OAuthServiceData.md)
 - [PrimaryEmailAddressData](docs/PrimaryEmailAddressData.md)
 - [ProfileData](docs/ProfileData.md)
 - [Queue](docs/Queue.md)
 - [ResqueDetailsData](docs/ResqueDetailsData.md)
 - [ResqueDetailsResponse](docs/ResqueDetailsResponse.md)
 - [SessionData](docs/SessionData.md)
 - [SessionPlanActivitySetData](docs/SessionPlanActivitySetData.md)
 - [SessionPlanCardioSetData](docs/SessionPlanCardioSetData.md)
 - [SessionPlanData](docs/SessionPlanData.md)
 - [SessionPlanSequenceAssignmentData](docs/SessionPlanSequenceAssignmentData.md)
 - [SessionPlanSequenceData](docs/SessionPlanSequenceData.md)
 - [SessionPlanSequenceInstanceData](docs/SessionPlanSequenceInstanceData.md)
 - [SessionPlanSetData](docs/SessionPlanSetData.md)
 - [SessionPlanSetInstanceData](docs/SessionPlanSetInstanceData.md)
 - [SessionPlanStrengthSetData](docs/SessionPlanStrengthSetData.md)
 - [SessionPlanStretchSetData](docs/SessionPlanStretchSetData.md)
 - [StatData](docs/StatData.md)
 - [StatListResponse](docs/StatListResponse.md)
 - [StatListResponseMeta](docs/StatListResponseMeta.md)
 - [StatSorting](docs/StatSorting.md)
 - [StrengthExerciseData](docs/StrengthExerciseData.md)
 - [StrengthExerciseVariantData](docs/StrengthExerciseVariantData.md)
 - [StrengthMachineData](docs/StrengthMachineData.md)
 - [StrengthMachineDataSetData](docs/StrengthMachineDataSetData.md)
 - [StrengthMachineDataSetTestData](docs/StrengthMachineDataSetTestData.md)
 - [StrengthMachineDataSetTestSubsetData](docs/StrengthMachineDataSetTestSubsetData.md)
 - [StrengthMachineModelData](docs/StrengthMachineModelData.md)
 - [StretchExerciseData](docs/StretchExerciseData.md)
 - [StretchExerciseVariantData](docs/StretchExerciseVariantData.md)
 - [TaskFailedResponse](docs/TaskFailedResponse.md)
 - [TaskFailure](docs/TaskFailure.md)
 - [TaskPayload](docs/TaskPayload.md)
 - [TaskQueueResponse](docs/TaskQueueResponse.md)
 - [TaskQueueResponseMeta](docs/TaskQueueResponseMeta.md)
 - [TaskQueues](docs/TaskQueues.md)
 - [TaskStats](docs/TaskStats.md)
 - [UserData](docs/UserData.md)
 - [UserListResponse](docs/UserListResponse.md)
 - [UserListResponseMeta](docs/UserListResponseMeta.md)
 - [UserResponse](docs/UserResponse.md)
 - [UserSorting](docs/UserSorting.md)
 - [WeightMeasurementData](docs/WeightMeasurementData.md)
 - [WorkersResponse](docs/WorkersResponse.md)


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