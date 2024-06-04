# .TokenTrackerApi

All URIs are relative to *https://token-tracker.api.gogemini.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tokenTrackerAdjustTokenBalance**](TokenTrackerApi.md#tokenTrackerAdjustTokenBalance) | **POST** /v1/{tenantId}/adjust_token_balance | AdjustTokenBalance
[**tokenTrackerGetTokenBalance**](TokenTrackerApi.md#tokenTrackerGetTokenBalance) | **POST** /v1/{tenantId}/get_token_balance | GetTokenBalance
[**tokenTrackerStripeWebhook**](TokenTrackerApi.md#tokenTrackerStripeWebhook) | **POST** /v1/stripe/webhook | StripeWebhook


# **tokenTrackerAdjustTokenBalance**
> TokentrackerAdjustTokenBalanceResponse tokenTrackerAdjustTokenBalance(body)

Adjust token balance

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TokenTrackerApi(configuration);

let body:.TokenTrackerApiTokenTrackerAdjustTokenBalanceRequest = {
  // string
  tenantId: "tenantId_example",
  // TokenTrackerAdjustTokenBalanceRequest
  body: {
    amount: "amount_example",
  },
};

apiInstance.tokenTrackerAdjustTokenBalance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **TokenTrackerAdjustTokenBalanceRequest**|  |
 **tenantId** | [**string**] |  | defaults to undefined


### Return type

**TokentrackerAdjustTokenBalanceResponse**

### Authorization

[standardAuthorization](README.md#standardAuthorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **tokenTrackerGetTokenBalance**
> TokentrackerGetTokenBalanceResponse tokenTrackerGetTokenBalance(body)

Get token balance

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TokenTrackerApi(configuration);

let body:.TokenTrackerApiTokenTrackerGetTokenBalanceRequest = {
  // string
  tenantId: "tenantId_example",
  // any
  body: {},
};

apiInstance.tokenTrackerGetTokenBalance(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **tenantId** | [**string**] |  | defaults to undefined


### Return type

**TokentrackerGetTokenBalanceResponse**

### Authorization

[standardAuthorization](README.md#standardAuthorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **tokenTrackerStripeWebhook**
> any tokenTrackerStripeWebhook(body)

Stripe webhook

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TokenTrackerApi(configuration);

let body:.TokenTrackerApiTokenTrackerStripeWebhookRequest = {
  // TokentrackerStripeWebhookRequest
  body: {
    data: {
      object: {},
      previousAttributes: {},
      raw: "raw_example",
    },
    account: "account_example",
    apiVersion: "apiVersion_example",
    created: "created_example",
    id: "id_example",
    livemode: true,
    object: "object_example",
    pendingWebhooks: "pendingWebhooks_example",
    request: {
      id: "id_example",
      idempotencyKey: "idempotencyKey_example",
    },
    type: "type_example",
  },
};

apiInstance.tokenTrackerStripeWebhook(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **TokentrackerStripeWebhookRequest**|  |


### Return type

**any**

### Authorization

[standardAuthorization](README.md#standardAuthorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


