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
import { LicensingFeature } from '../model/licensingFeature';
import { Configuration } from '../configuration';
import { PaginationResponse, LicensingFeatureFiltering } from '../model/models';
export declare class LicensingFeatureService {
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
    * @param pagesize Number of entries to be retrieved per page or -1 for full list
    * @param currentpage The current page or -1 for full list
    * @param body
    * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
    * @param reportProgress flag to report request and response progress.
    */
    getAllLicensingFeatures(authenticationkey?: string, body?: LicensingFeatureFiltering, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<LicensingFeature>>;
    getAllLicensingFeatures(authenticationkey?: string, body?: LicensingFeatureFiltering, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<LicensingFeature>>>;
    getAllLicensingFeatures(authenticationkey?: string, body?: LicensingFeatureFiltering, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<LicensingFeature>>>;
}
