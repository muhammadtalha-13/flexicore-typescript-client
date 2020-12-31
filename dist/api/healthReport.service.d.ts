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
import { Observable } from 'rxjs/Observable';
import { Configuration } from '../configuration';
import { PaginationResponse, HealthReportAggregationRequest, HealthAggregationResponse } from '../model/models';
import { HealthReport } from '../model/healthReport';
import { HealthReportFiltering } from '../model/healthReportFiltering';
export declare class HealthReportService {
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
    /**
         *
         *
         * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
         * @param loginuponsuccess
         * @param body
         * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
         * @param reportProgress flag to report request and response progress.
         */
    getAllHealthReport(authenticationkey?: string, body?: HealthReportFiltering, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<HealthReport>>;
    getAllHealthReport(authenticationkey?: string, body?: HealthReportFiltering, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<HealthReport>>>;
    getAllHealthReport(authenticationkey?: string, body?: HealthReportFiltering, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<HealthReport>>>;
    /**
     *
     *
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param loginuponsuccess
     * @param body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getAggregatedHealthReport(authenticationkey?: string, body?: HealthReportAggregationRequest, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<HealthAggregationResponse>>;
    getAggregatedHealthReport(authenticationkey?: string, body?: HealthReportAggregationRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<HealthAggregationResponse>>>;
    getAggregatedHealthReport(authenticationkey?: string, body?: HealthReportAggregationRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<HealthAggregationResponse>>>;
}
