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
import { HttpClient, HttpHeaders, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Configuration } from '../configuration';
import { PermissionSummaryRequest, PermissionSummaryResponse } from '../model/models';
export declare class SecurityService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm;
    getPermissionsSummary(authenticationkey?: string, body?: PermissionSummaryRequest, observe?: 'body', reportProgress?: boolean): Observable<PermissionSummaryResponse>;
    getPermissionsSummary(authenticationkey?: string, body?: PermissionSummaryRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PermissionSummaryResponse>>;
    getPermissionsSummary(authenticationkey?: string, body?: PermissionSummaryRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PermissionSummaryResponse>>;
}
