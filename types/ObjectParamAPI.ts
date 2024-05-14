import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { ProtobufAny } from '../models/ProtobufAny';
import { ProtobufNullValue } from '../models/ProtobufNullValue';
import { RpcStatus } from '../models/RpcStatus';
import { StripeEventData } from '../models/StripeEventData';
import { StripeEventRequest } from '../models/StripeEventRequest';
import { TokenTrackerAdjustTokenBalanceRequest } from '../models/TokenTrackerAdjustTokenBalanceRequest';
import { TokentrackerAdjustTokenBalanceResponse } from '../models/TokentrackerAdjustTokenBalanceResponse';
import { TokentrackerGetTokenBalanceResponse } from '../models/TokentrackerGetTokenBalanceResponse';
import { TokentrackerStripeWebhookRequest } from '../models/TokentrackerStripeWebhookRequest';

import { ObservableTokenTrackerApi } from "./ObservableAPI";
import { TokenTrackerApiRequestFactory, TokenTrackerApiResponseProcessor} from "../apis/TokenTrackerApi";

export interface TokenTrackerApiTokenTrackerAdjustTokenBalanceRequest {
    /**
     * 
     * @type string
     * @memberof TokenTrackerApitokenTrackerAdjustTokenBalance
     */
    tenantId: string
    /**
     * 
     * @type TokenTrackerAdjustTokenBalanceRequest
     * @memberof TokenTrackerApitokenTrackerAdjustTokenBalance
     */
    body: TokenTrackerAdjustTokenBalanceRequest
}

export interface TokenTrackerApiTokenTrackerGetTokenBalanceRequest {
    /**
     * 
     * @type string
     * @memberof TokenTrackerApitokenTrackerGetTokenBalance
     */
    tenantId: string
    /**
     * 
     * @type any
     * @memberof TokenTrackerApitokenTrackerGetTokenBalance
     */
    body: any
}

export interface TokenTrackerApiTokenTrackerStripeWebhookRequest {
    /**
     * 
     * @type TokentrackerStripeWebhookRequest
     * @memberof TokenTrackerApitokenTrackerStripeWebhook
     */
    body: TokentrackerStripeWebhookRequest
}

export class ObjectTokenTrackerApi {
    private api: ObservableTokenTrackerApi

    public constructor(configuration: Configuration, requestFactory?: TokenTrackerApiRequestFactory, responseProcessor?: TokenTrackerApiResponseProcessor) {
        this.api = new ObservableTokenTrackerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adjust token balance
     * AdjustTokenBalance
     * @param param the request object
     */
    public tokenTrackerAdjustTokenBalanceWithHttpInfo(param: TokenTrackerApiTokenTrackerAdjustTokenBalanceRequest, options?: Configuration): Promise<HttpInfo<TokentrackerAdjustTokenBalanceResponse>> {
        return this.api.tokenTrackerAdjustTokenBalanceWithHttpInfo(param.tenantId, param.body,  options).toPromise();
    }

    /**
     * Adjust token balance
     * AdjustTokenBalance
     * @param param the request object
     */
    public tokenTrackerAdjustTokenBalance(param: TokenTrackerApiTokenTrackerAdjustTokenBalanceRequest, options?: Configuration): Promise<TokentrackerAdjustTokenBalanceResponse> {
        return this.api.tokenTrackerAdjustTokenBalance(param.tenantId, param.body,  options).toPromise();
    }

    /**
     * Get token balance
     * GetTokenBalance
     * @param param the request object
     */
    public tokenTrackerGetTokenBalanceWithHttpInfo(param: TokenTrackerApiTokenTrackerGetTokenBalanceRequest, options?: Configuration): Promise<HttpInfo<TokentrackerGetTokenBalanceResponse>> {
        return this.api.tokenTrackerGetTokenBalanceWithHttpInfo(param.tenantId, param.body,  options).toPromise();
    }

    /**
     * Get token balance
     * GetTokenBalance
     * @param param the request object
     */
    public tokenTrackerGetTokenBalance(param: TokenTrackerApiTokenTrackerGetTokenBalanceRequest, options?: Configuration): Promise<TokentrackerGetTokenBalanceResponse> {
        return this.api.tokenTrackerGetTokenBalance(param.tenantId, param.body,  options).toPromise();
    }

    /**
     * Stripe webhook
     * StripeWebhook
     * @param param the request object
     */
    public tokenTrackerStripeWebhookWithHttpInfo(param: TokenTrackerApiTokenTrackerStripeWebhookRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.tokenTrackerStripeWebhookWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Stripe webhook
     * StripeWebhook
     * @param param the request object
     */
    public tokenTrackerStripeWebhook(param: TokenTrackerApiTokenTrackerStripeWebhookRequest, options?: Configuration): Promise<any> {
        return this.api.tokenTrackerStripeWebhook(param.body,  options).toPromise();
    }

}
