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
import { LicenseRequestToQuantityFeature } from '../model/licenseRequestToQuantityFeature';
import { Configuration } from '../configuration';
import { LicenseRequestToFeatureCreate, LicenseRequestToFeatureUpdate, PaginationResponse, LicenseRequestToFeatureFiltering } from '../model/models';
export declare class LicenseRequestToQuantityFeatureService {
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
    getAllLicenseRequestToFeatures(authenticationkey?: string, body?: LicenseRequestToFeatureFiltering, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<LicenseRequestToQuantityFeature>>;
    getAllLicenseRequestToFeatures(authenticationkey?: string, body?: LicenseRequestToFeatureFiltering, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<LicenseRequestToQuantityFeature>>>;
    getAllLicenseRequestToFeatures(authenticationkey?: string, body?: LicenseRequestToFeatureFiltering, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<LicenseRequestToQuantityFeature>>>;
    /**
    *
    *
    * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
    * @param body
    * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
    * @param reportProgress flag to report request and response progress.
    */
    updateLicenseRequestToFeature(authenticationkey?: string, body?: LicenseRequestToFeatureUpdate, observe?: 'body', reportProgress?: boolean): Observable<LicenseRequestToQuantityFeature>;
    updateLicenseRequestToFeature(authenticationkey?: string, body?: LicenseRequestToFeatureUpdate, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<LicenseRequestToQuantityFeature>>;
    updateLicenseRequestToFeature(authenticationkey?: string, body?: LicenseRequestToFeatureUpdate, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LicenseRequestToQuantityFeature>>;
    /**
    *
    *
    * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
    * @param body
    * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
    * @param reportProgress flag to report request and response progress.
    */
    createLicenseRequestToFeature(authenticationkey?: string, body?: LicenseRequestToFeatureCreate, observe?: 'body', reportProgress?: boolean): Observable<LicenseRequestToQuantityFeature>;
    createLicenseRequestToFeature(authenticationkey?: string, body?: LicenseRequestToFeatureCreate, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<LicenseRequestToQuantityFeature>>;
    createLicenseRequestToFeature(authenticationkey?: string, body?: LicenseRequestToFeatureCreate, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LicenseRequestToQuantityFeature>>;
}
