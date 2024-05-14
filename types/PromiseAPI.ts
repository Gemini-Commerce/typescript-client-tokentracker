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
import { ObservableTokenTrackerApi } from './ObservableAPI';

import { TokenTrackerApiRequestFactory, TokenTrackerApiResponseProcessor} from "../apis/TokenTrackerApi";
export class PromiseTokenTrackerApi {
    private api: ObservableTokenTrackerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TokenTrackerApiRequestFactory,
        responseProcessor?: TokenTrackerApiResponseProcessor
    ) {
        this.api = new ObservableTokenTrackerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adjust token balance
     * AdjustTokenBalance
     * @param tenantId 
     * @param body 
     */
    public tokenTrackerAdjustTokenBalanceWithHttpInfo(tenantId: string, body: TokenTrackerAdjustTokenBalanceRequest, _options?: Configuration): Promise<HttpInfo<TokentrackerAdjustTokenBalanceResponse>> {
        const result = this.api.tokenTrackerAdjustTokenBalanceWithHttpInfo(tenantId, body, _options);
        return result.toPromise();
    }

    /**
     * Adjust token balance
     * AdjustTokenBalance
     * @param tenantId 
     * @param body 
     */
    public tokenTrackerAdjustTokenBalance(tenantId: string, body: TokenTrackerAdjustTokenBalanceRequest, _options?: Configuration): Promise<TokentrackerAdjustTokenBalanceResponse> {
        const result = this.api.tokenTrackerAdjustTokenBalance(tenantId, body, _options);
        return result.toPromise();
    }

    /**
     * Get token balance
     * GetTokenBalance
     * @param tenantId 
     * @param body 
     */
    public tokenTrackerGetTokenBalanceWithHttpInfo(tenantId: string, body: any, _options?: Configuration): Promise<HttpInfo<TokentrackerGetTokenBalanceResponse>> {
        const result = this.api.tokenTrackerGetTokenBalanceWithHttpInfo(tenantId, body, _options);
        return result.toPromise();
    }

    /**
     * Get token balance
     * GetTokenBalance
     * @param tenantId 
     * @param body 
     */
    public tokenTrackerGetTokenBalance(tenantId: string, body: any, _options?: Configuration): Promise<TokentrackerGetTokenBalanceResponse> {
        const result = this.api.tokenTrackerGetTokenBalance(tenantId, body, _options);
        return result.toPromise();
    }

    /**
     * Stripe webhook
     * StripeWebhook
     * @param body 
     */
    public tokenTrackerStripeWebhookWithHttpInfo(body: TokentrackerStripeWebhookRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.tokenTrackerStripeWebhookWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Stripe webhook
     * StripeWebhook
     * @param body 
     */
    public tokenTrackerStripeWebhook(body: TokentrackerStripeWebhookRequest, _options?: Configuration): Promise<any> {
        const result = this.api.tokenTrackerStripeWebhook(body, _options);
        return result.toPromise();
    }


}



