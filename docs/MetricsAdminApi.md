# MetricsAdminApi

All URIs are relative to *https://metrics-api-v3.keiser.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adminLogin**](MetricsAdminApi.md#adminLogin) | **POST** /admin/login | Login admin user using email, password, and 2FA token
[**authExchangeFulfillment**](MetricsAdminApi.md#authExchangeFulfillment) | **POST** /auth/exchange/fulfillment | Exchanges an authorization token for access and refresh tokens
[**facilityLicenseCreate**](MetricsAdminApi.md#facilityLicenseCreate) | **POST** /facility/license | Create a facility license
[**facilityLicenseDelete**](MetricsAdminApi.md#facilityLicenseDelete) | **DELETE** /facility/license/{id} | Delete a facility license
[**facilityLicenseList**](MetricsAdminApi.md#facilityLicenseList) | **GET** /facility/license/list | List facility licenses
[**globalAccessControlCreate**](MetricsAdminApi.md#globalAccessControlCreate) | **POST** /global-access-control | Create a user\&#39;s global access control rights
[**globalAccessControlDelete**](MetricsAdminApi.md#globalAccessControlDelete) | **DELETE** /global-access-control/{userId} | Delete a user\&#39;s global access control
[**globalAccessControlList**](MetricsAdminApi.md#globalAccessControlList) | **GET** /global-access-control/list | List global access control for users
[**globalAccessControlRecreateSecret**](MetricsAdminApi.md#globalAccessControlRecreateSecret) | **POST** /global-access-control/recreate-secret | Recreate a user\&#39;s authenticator secret
[**globalAccessControlShow**](MetricsAdminApi.md#globalAccessControlShow) | **GET** /global-access-control | Show a global access control
[**globalAccessControlUpdate**](MetricsAdminApi.md#globalAccessControlUpdate) | **PUT** /global-access-control | Update a user global access control rights
[**resqueCacheCreate**](MetricsAdminApi.md#resqueCacheCreate) | **POST** /resque/cache | Create cached object
[**resqueCacheDelete**](MetricsAdminApi.md#resqueCacheDelete) | **DELETE** /resque/cache/{key} | Delete cached object
[**resqueCacheList**](MetricsAdminApi.md#resqueCacheList) | **GET** /resque/cache/list | List cached objects
[**resqueCacheShow**](MetricsAdminApi.md#resqueCacheShow) | **GET** /resque/cache | Show cache object
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


# **adminLogin**
> UserResponse adminLogin()


### Example


```typescript
import { MetricsAdminApi } from '@keiser/metrics-sdk-admin-typescript';
import * as fs from 'fs';

const api = new MetricsAdminApi();

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


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | [**string**] |  | defaults to undefined
 **password** | [**string**] |  | defaults to undefined
 **refreshable** | [**boolean**] |  | (optional) defaults to undefined
 **token** | [**string**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**UserResponse**

### Authorization

No authorization required


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authExchangeFulfillment**
> UserResponse authExchangeFulfillment()


### Example


```typescript
import { MetricsAdminApi } from '@keiser/metrics-sdk-admin-typescript';
import * as fs from 'fs';

const api = new MetricsAdminApi();

let body:MetricsAdminApiAuthExchangeFulfillmentRequest = {
  // string
  exchangeToken: exchangeToken_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.authExchangeFulfillment(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exchangeToken** | [**string**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**UserResponse**

### Authorization

No authorization required


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityLicenseCreate**
> FacilityLicenseResponse facilityLicenseCreate()


### Example


```typescript
import { MetricsAdminApi } from '@keiser/metrics-sdk-admin-typescript';
import * as fs from 'fs';

const api = new MetricsAdminApi();

let body:MetricsAdminApiFacilityLicenseCreateRequest = {
  // number
  term: 8.14,
  // string
  type: type_example,
  // string (optional)
  accountId: accountId_example,
  // string (optional)
  email: email_example,
  // string (optional)
  name: name_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityLicenseCreate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **term** | [**number**] |  | defaults to undefined
 **type** | [**string**] | Allowed values: normal, demo, test | defaults to undefined
 **accountId** | [**string**] |  | (optional) defaults to undefined
 **email** | [**string**] |  | (optional) defaults to undefined
 **name** | [**string**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityLicenseResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityLicenseDelete**
> facilityLicenseDelete()


### Example


```typescript
import { MetricsAdminApi } from '@keiser/metrics-sdk-admin-typescript';
import * as fs from 'fs';

const api = new MetricsAdminApi();

let body:MetricsAdminApiFacilityLicenseDeleteRequest = {
  // number
  id: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityLicenseDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **facilityLicenseList**
> FacilityLicenseListResponse facilityLicenseList()


### Example


```typescript
import { MetricsAdminApi } from '@keiser/metrics-sdk-admin-typescript';
import * as fs from 'fs';

const api = new MetricsAdminApi();

let body:MetricsAdminApiFacilityLicenseListRequest = {
  // string (optional)
  accountId: accountId_example,
  // boolean (optional)
  ascending: true,
  // string (optional)
  key: key_example,
  // number (optional)
  limit: 8.14,
  // string (optional)
  name: name_example,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // string (optional)
  type: type_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.facilityLicenseList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | [**string**] |  | (optional) defaults to undefined
 **ascending** | [**boolean**] |  | (optional) defaults to true
 **key** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **name** | [**string**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, type, term, effectiveDate | (optional) defaults to 'id'
 **type** | [**string**] | Allowed values: normal, demo, test | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**FacilityLicenseListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **globalAccessControlCreate**
> GlobalAccessControlCreationResponse globalAccessControlCreate()


### Example


```typescript
import { MetricsAdminApi } from '@keiser/metrics-sdk-admin-typescript';
import * as fs from 'fs';

const api = new MetricsAdminApi();

let body:MetricsAdminApiGlobalAccessControlCreateRequest = {
  // string (optional)
  accessControlRights: accessControlRights_example,
  // string (optional)
  analyticRights: analyticRights_example,
  // string (optional)
  exerciseRights: exerciseRights_example,
  // string (optional)
  facilityRights: facilityRights_example,
  // string (optional)
  licenseRights: licenseRights_example,
  // string (optional)
  mSeriesGuidedSessionRights: mSeriesGuidedSessionRights_example,
  // string (optional)
  resqueRights: resqueRights_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  userRights: userRights_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.globalAccessControlCreate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessControlRights** | [**string**] | Allowed values: view, edit | (optional) defaults to undefined
 **analyticRights** | [**string**] | Allowed values: view | (optional) defaults to undefined
 **exerciseRights** | [**string**] | Allowed values: edit | (optional) defaults to undefined
 **facilityRights** | [**string**] | Allowed values: view, edit | (optional) defaults to undefined
 **licenseRights** | [**string**] | Allowed values: view, edit | (optional) defaults to undefined
 **mSeriesGuidedSessionRights** | [**string**] | Allowed values: access, publish | (optional) defaults to undefined
 **resqueRights** | [**string**] | Allowed values: view, edit | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **userRights** | [**string**] | Allowed values: view, edit | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**GlobalAccessControlCreationResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **globalAccessControlDelete**
> globalAccessControlDelete()


### Example


```typescript
import { MetricsAdminApi } from '@keiser/metrics-sdk-admin-typescript';
import * as fs from 'fs';

const api = new MetricsAdminApi();

let body:MetricsAdminApiGlobalAccessControlDeleteRequest = {
  // number
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.globalAccessControlDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **globalAccessControlList**
> GlobalAccessControlListResponse globalAccessControlList()


### Example


```typescript
import { MetricsAdminApi } from '@keiser/metrics-sdk-admin-typescript';
import * as fs from 'fs';

const api = new MetricsAdminApi();

let body:MetricsAdminApiGlobalAccessControlListRequest = {
  // boolean (optional)
  ascending: true,
  // number (optional)
  limit: 8.14,
  // string (optional)
  name: name_example,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.globalAccessControlList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | [**boolean**] |  | (optional) defaults to true
 **limit** | [**number**] |  | (optional) defaults to undefined
 **name** | [**string**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, name | (optional) defaults to 'id'
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**GlobalAccessControlListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **globalAccessControlRecreateSecret**
> GlobalAccessControlSecretResponse globalAccessControlRecreateSecret()


### Example


```typescript
import { MetricsAdminApi } from '@keiser/metrics-sdk-admin-typescript';
import * as fs from 'fs';

const api = new MetricsAdminApi();

let body:MetricsAdminApiGlobalAccessControlRecreateSecretRequest = {
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.globalAccessControlRecreateSecret(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**GlobalAccessControlSecretResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **globalAccessControlShow**
> GlobalAccessControlResponse globalAccessControlShow()


### Example


```typescript
import { MetricsAdminApi } from '@keiser/metrics-sdk-admin-typescript';
import * as fs from 'fs';

const api = new MetricsAdminApi();

let body:MetricsAdminApiGlobalAccessControlShowRequest = {
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.globalAccessControlShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**GlobalAccessControlResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **globalAccessControlUpdate**
> GlobalAccessControlResponse globalAccessControlUpdate()


### Example


```typescript
import { MetricsAdminApi } from '@keiser/metrics-sdk-admin-typescript';
import * as fs from 'fs';

const api = new MetricsAdminApi();

let body:MetricsAdminApiGlobalAccessControlUpdateRequest = {
  // string (optional)
  accessControlRights: accessControlRights_example,
  // string (optional)
  analyticRights: analyticRights_example,
  // string (optional)
  exerciseRights: exerciseRights_example,
  // string (optional)
  facilityRights: facilityRights_example,
  // string (optional)
  licenseRights: licenseRights_example,
  // string (optional)
  mSeriesGuidedSessionRights: mSeriesGuidedSessionRights_example,
  // string (optional)
  resqueRights: resqueRights_example,
  // number (optional)
  userId: 8.14,
  // string (optional)
  userRights: userRights_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.globalAccessControlUpdate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessControlRights** | [**string**] | Allowed values: view, edit | (optional) defaults to undefined
 **analyticRights** | [**string**] | Allowed values: view | (optional) defaults to undefined
 **exerciseRights** | [**string**] | Allowed values: edit | (optional) defaults to undefined
 **facilityRights** | [**string**] | Allowed values: view, edit | (optional) defaults to undefined
 **licenseRights** | [**string**] | Allowed values: view, edit | (optional) defaults to undefined
 **mSeriesGuidedSessionRights** | [**string**] | Allowed values: access, publish | (optional) defaults to undefined
 **resqueRights** | [**string**] | Allowed values: view, edit | (optional) defaults to undefined
 **userId** | [**number**] |  | (optional) defaults to undefined
 **userRights** | [**string**] | Allowed values: view, edit | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**GlobalAccessControlResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resqueCacheCreate**
> CacheObjectResponse resqueCacheCreate()


### Example


```typescript
import { MetricsAdminApi } from '@keiser/metrics-sdk-admin-typescript';
import * as fs from 'fs';

const api = new MetricsAdminApi();

let body:MetricsAdminApiResqueCacheCreateRequest = {
  // string
  key: key_example,
  // string
  value: value_example,
  // number (optional)
  expireIn: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.resqueCacheCreate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | [**string**] |  | defaults to undefined
 **value** | [**string**] |  | defaults to undefined
 **expireIn** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**CacheObjectResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resqueCacheDelete**
> resqueCacheDelete()


### Example


```typescript
import { MetricsAdminApi } from '@keiser/metrics-sdk-admin-typescript';
import * as fs from 'fs';

const api = new MetricsAdminApi();

let body:MetricsAdminApiResqueCacheDeleteRequest = {
  // string
  key: key_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.resqueCacheDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | [**string**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resqueCacheList**
> CacheKeysResponse resqueCacheList()


### Example


```typescript
import { MetricsAdminApi } from '@keiser/metrics-sdk-admin-typescript';
import * as fs from 'fs';

const api = new MetricsAdminApi();

let body:MetricsAdminApiResqueCacheListRequest = {
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.resqueCacheList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**CacheKeysResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resqueCacheShow**
> CacheObjectResponse resqueCacheShow()


### Example


```typescript
import { MetricsAdminApi } from '@keiser/metrics-sdk-admin-typescript';
import * as fs from 'fs';

const api = new MetricsAdminApi();

let body:MetricsAdminApiResqueCacheShowRequest = {
  // string
  key: key_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.resqueCacheShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | [**string**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**CacheObjectResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resqueCacheUpdate**
> CacheObjectResponse resqueCacheUpdate()


### Example


```typescript
import { MetricsAdminApi } from '@keiser/metrics-sdk-admin-typescript';
import * as fs from 'fs';

const api = new MetricsAdminApi();

let body:MetricsAdminApiResqueCacheUpdateRequest = {
  // string
  key: key_example,
  // string
  value: value_example,
  // number (optional)
  expireIn: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.resqueCacheUpdate(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | [**string**] |  | defaults to undefined
 **value** | [**string**] |  | defaults to undefined
 **expireIn** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**CacheObjectResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resqueDetails**
> ResqueDetailsResponse resqueDetails()


### Example


```typescript
import { MetricsAdminApi } from '@keiser/metrics-sdk-admin-typescript';
import * as fs from 'fs';

const api = new MetricsAdminApi();

let body:MetricsAdminApiResqueDetailsRequest = {
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.resqueDetails(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**ResqueDetailsResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resqueTaskDeleteAllFailed**
> resqueTaskDeleteAllFailed()


### Example


```typescript
import { MetricsAdminApi } from '@keiser/metrics-sdk-admin-typescript';
import * as fs from 'fs';

const api = new MetricsAdminApi();

let body:MetricsAdminApiResqueTaskDeleteAllFailedRequest = {
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.resqueTaskDeleteAllFailed(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resqueTaskDeleteFailed**
> resqueTaskDeleteFailed()


### Example


```typescript
import { MetricsAdminApi } from '@keiser/metrics-sdk-admin-typescript';
import * as fs from 'fs';

const api = new MetricsAdminApi();

let body:MetricsAdminApiResqueTaskDeleteFailedRequest = {
  // string
  failedTask: failedTask_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.resqueTaskDeleteFailed(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **failedTask** | [**string**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resqueTaskDeleteTask**
> resqueTaskDeleteTask()


### Example


```typescript
import { MetricsAdminApi } from '@keiser/metrics-sdk-admin-typescript';
import * as fs from 'fs';

const api = new MetricsAdminApi();

let body:MetricsAdminApiResqueTaskDeleteTaskRequest = {
  // string
  args: args_example,
  // string
  queue: queue_example,
  // string
  taskName: taskName_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.resqueTaskDeleteTask(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **args** | [**string**] |  | defaults to undefined
 **queue** | [**string**] |  | defaults to undefined
 **taskName** | [**string**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resqueTaskFailures**
> TaskFailedResponse resqueTaskFailures()


### Example


```typescript
import { MetricsAdminApi } from '@keiser/metrics-sdk-admin-typescript';
import * as fs from 'fs';

const api = new MetricsAdminApi();

let body:MetricsAdminApiResqueTaskFailuresRequest = {
  // number (optional)
  limit: 8.14,
  // number (optional)
  offset: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.resqueTaskFailures(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**TaskFailedResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resqueTaskQueue**
> TaskQueueResponse resqueTaskQueue()


### Example


```typescript
import { MetricsAdminApi } from '@keiser/metrics-sdk-admin-typescript';
import * as fs from 'fs';

const api = new MetricsAdminApi();

let body:MetricsAdminApiResqueTaskQueueRequest = {
  // string
  queue: queue_example,
  // number (optional)
  limit: 8.14,
  // number (optional)
  offset: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.resqueTaskQueue(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queue** | [**string**] |  | defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**TaskQueueResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resqueTaskRetryAllFailed**
> resqueTaskRetryAllFailed()


### Example


```typescript
import { MetricsAdminApi } from '@keiser/metrics-sdk-admin-typescript';
import * as fs from 'fs';

const api = new MetricsAdminApi();

let body:MetricsAdminApiResqueTaskRetryAllFailedRequest = {
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.resqueTaskRetryAllFailed(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resqueTaskRetryFailed**
> resqueTaskRetryFailed()


### Example


```typescript
import { MetricsAdminApi } from '@keiser/metrics-sdk-admin-typescript';
import * as fs from 'fs';

const api = new MetricsAdminApi();

let body:MetricsAdminApiResqueTaskRetryFailedRequest = {
  // string
  failedTask: failedTask_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.resqueTaskRetryFailed(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **failedTask** | [**string**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resqueWorkerList**
> WorkersResponse resqueWorkerList()


### Example


```typescript
import { MetricsAdminApi } from '@keiser/metrics-sdk-admin-typescript';
import * as fs from 'fs';

const api = new MetricsAdminApi();

let body:MetricsAdminApiResqueWorkerListRequest = {
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.resqueWorkerList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**WorkersResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **statsList**
> StatListResponse statsList()


### Example


```typescript
import { MetricsAdminApi } from '@keiser/metrics-sdk-admin-typescript';
import * as fs from 'fs';

const api = new MetricsAdminApi();

let body:MetricsAdminApiStatsListRequest = {
  // boolean (optional)
  ascending: true,
  // Date (optional)
  from: 2013-10-20T19:20:30+01:00,
  // number (optional)
  limit: 8.14,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // Date (optional)
  to: 2013-10-20T19:20:30+01:00,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.statsList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | [**boolean**] |  | (optional) defaults to false
 **from** | [**Date**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, createdAt | (optional) defaults to 'createdAt'
 **to** | [**Date**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**StatListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userDelete**
> userDelete()


### Example


```typescript
import { MetricsAdminApi } from '@keiser/metrics-sdk-admin-typescript';
import * as fs from 'fs';

const api = new MetricsAdminApi();

let body:MetricsAdminApiUserDeleteRequest = {
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.userDelete(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userList**
> UserListResponse userList()


### Example


```typescript
import { MetricsAdminApi } from '@keiser/metrics-sdk-admin-typescript';
import * as fs from 'fs';

const api = new MetricsAdminApi();

let body:MetricsAdminApiUserListRequest = {
  // boolean (optional)
  ascending: true,
  // string (optional)
  email: email_example,
  // number (optional)
  limit: 8.14,
  // string (optional)
  name: name_example,
  // number (optional)
  offset: 8.14,
  // string (optional)
  sort: sort_example,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.userList(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ascending** | [**boolean**] |  | (optional) defaults to true
 **email** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **name** | [**string**] |  | (optional) defaults to undefined
 **offset** | [**number**] |  | (optional) defaults to undefined
 **sort** | [**string**] | Allowed values: id, name, createdAt | (optional) defaults to 'id'
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**UserListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userMerge**
> UserResponse userMerge()


### Example


```typescript
import { MetricsAdminApi } from '@keiser/metrics-sdk-admin-typescript';
import * as fs from 'fs';

const api = new MetricsAdminApi();

let body:MetricsAdminApiUserMergeRequest = {
  // number
  fromUserId: 8.14,
  // number
  toUserId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.userMerge(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fromUserId** | [**number**] |  | defaults to undefined
 **toUserId** | [**number**] |  | defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**UserResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userShow**
> UserResponse userShow()


### Example


```typescript
import { MetricsAdminApi } from '@keiser/metrics-sdk-admin-typescript';
import * as fs from 'fs';

const api = new MetricsAdminApi();

let body:MetricsAdminApiUserShowRequest = {
  // number (optional)
  userId: 8.14,
  // string (optional)
  apiVersion: apiVersion_example,
};

try {
  const data = await api.userShow(body);
  console.log('API called successfully. Returned data: ' + data);
} catch (error) {
  console.error(error);
}
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**number**] |  | (optional) defaults to undefined
 **apiVersion** | [**string**] |  | (optional) defaults to undefined


### Return type

**UserResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)


[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

