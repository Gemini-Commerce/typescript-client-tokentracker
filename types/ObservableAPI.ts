import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { ProtobufAny } from '../models/ProtobufAny';
import { ProtobufNullValue } from '../models/ProtobufNullValue';
import { RpcStatus } from '../models/RpcStatus';
import { StripeEventData } from '../models/StripeEventData';
import { StripeEventRequest } from '../models/StripeEventRequest';
import { TokenTrackerAdjustTokenBalanceRequest } from '../models/TokenTrackerAdjustTokenBalanceRequest';
import { TokentrackerAdjustTokenBalanceResponse } from '../models/TokentrackerAdjustTokenBalanceResponse';
import { TokentrackerGetTokenBalanceResponse } from '../models/TokentrackerGetTokenBalanceResponse';
import { TokentrackerStripeWebhookRequest } from '../models/TokentrackerStripeWebhookRequest';

import { TokenTrackerApiRequestFactory, TokenTrackerApiResponseProcessor} from "../apis/TokenTrackerApi";
export class ObservableTokenTrackerApi {
    private requestFactory: TokenTrackerApiRequestFactory;
    private responseProcessor: TokenTrackerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TokenTrackerApiRequestFactory,
        responseProcessor?: TokenTrackerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TokenTrackerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TokenTrackerApiResponseProcessor();
    }

    /**
     * Adjust token balance
     * AdjustTokenBalance
     * @param tenantId 
     * @param body 
     */
    public tokenTrackerAdjustTokenBalanceWithHttpInfo(tenantId: string, body: TokenTrackerAdjustTokenBalanceRequest, _options?: Configuration): Observable<HttpInfo<TokentrackerAdjustTokenBalanceResponse>> {
        const requestContextPromise = this.requestFactory.tokenTrackerAdjustTokenBalance(tenantId, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tokenTrackerAdjustTokenBalanceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Adjust token balance
     * AdjustTokenBalance
     * @param tenantId 
     * @param body 
     */
    public tokenTrackerAdjustTokenBalance(tenantId: string, body: TokenTrackerAdjustTokenBalanceRequest, _options?: Configuration): Observable<TokentrackerAdjustTokenBalanceResponse> {
        return this.tokenTrackerAdjustTokenBalanceWithHttpInfo(tenantId, body, _options).pipe(map((apiResponse: HttpInfo<TokentrackerAdjustTokenBalanceResponse>) => apiResponse.data));
    }

    /**
     * Get token balance
     * GetTokenBalance
     * @param tenantId 
     * @param body 
     */
    public tokenTrackerGetTokenBalanceWithHttpInfo(tenantId: string, body: any, _options?: Configuration): Observable<HttpInfo<TokentrackerGetTokenBalanceResponse>> {
        const requestContextPromise = this.requestFactory.tokenTrackerGetTokenBalance(tenantId, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tokenTrackerGetTokenBalanceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get token balance
     * GetTokenBalance
     * @param tenantId 
     * @param body 
     */
    public tokenTrackerGetTokenBalance(tenantId: string, body: any, _options?: Configuration): Observable<TokentrackerGetTokenBalanceResponse> {
        return this.tokenTrackerGetTokenBalanceWithHttpInfo(tenantId, body, _options).pipe(map((apiResponse: HttpInfo<TokentrackerGetTokenBalanceResponse>) => apiResponse.data));
    }

    /**
     * Stripe webhook
     * StripeWebhook
     * @param body 
     */
    public tokenTrackerStripeWebhookWithHttpInfo(body: TokentrackerStripeWebhookRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.tokenTrackerStripeWebhook(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tokenTrackerStripeWebhookWithHttpInfo(rsp)));
            }));
    }

    /**
     * Stripe webhook
     * StripeWebhook
     * @param body 
     */
    public tokenTrackerStripeWebhook(body: TokentrackerStripeWebhookRequest, _options?: Configuration): Observable<any> {
        return this.tokenTrackerStripeWebhookWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

}
