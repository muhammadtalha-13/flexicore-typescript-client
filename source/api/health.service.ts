/**
 * REST API for Flexicore filtered by your access rights
 * Flexicore REST API
 *
 * OpenAPI spec version: V1.1.0
 * Contact: avishaybennatan@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpEvent } from '@angular/common/http';

import { Observable } from 'rxjs';

import { BASE_PATH } from '../variables';
import { Configuration } from '../configuration';
import { HealthStatusResponse } from '../model/models';


@Injectable()
export class HealthService {

    protected basePath = 'https://192.168.14.71:8180/FlexiCore/rest';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }

    public healthUnsecure(observe?: 'body', reportProgress?: boolean): Observable<HealthStatusResponse>;
    public healthUnsecure(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<HealthStatusResponse>>;
    public healthUnsecure(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<HealthStatusResponse>>;
    public healthUnsecure(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let headers = this.defaultHeaders;


        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.get<HealthStatusResponse>(`${this.basePath}/healthUnsecure`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }



    public healthOrFail(observe?: 'body', reportProgress?: boolean): Observable<boolean>;
    public healthOrFail(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<boolean>>;
    public healthOrFail(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<boolean>>;
    public healthOrFail(observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        let headers = this.defaultHeaders;


        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.get<boolean>(`${this.basePath}/healthUnsecure/healthOrFail`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
