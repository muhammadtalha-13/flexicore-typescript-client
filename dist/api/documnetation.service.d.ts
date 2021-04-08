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
import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Job } from '../model/job';
import { Configuration } from '../configuration';
export declare class DocumnetationService {
    protected http: Http;
    protected basePath: string;
    defaultHeaders: Headers;
    configuration: Configuration;
    constructor(http: Http, basePath: string, configuration: Configuration);
    /**
     *
     * Extends object by coping non-existing properties.
     * @param objA object to be extended
     * @param objB source object
     */
    private extendObj;
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm;
    /**
     *
     * @param clientType
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param view
     */
    generateClient(clientType: string, authenticationkey?: string, view?: string, extraHttpRequestParams?: any): Observable<Job>;
    /**
     *
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    getClients(authenticationkey?: string, extraHttpRequestParams?: any): Observable<Array<string>>;
    /**
     *
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param view
     */
    getDocs(authenticationkey: string, view?: string, extraHttpRequestParams?: any): Observable<string>;
    /**
     *
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param view
     */
    getSwaggerJSON(authenticationkey: string, view?: string, extraHttpRequestParams?: any): Observable<string>;
    /**
     *
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    invalidateCache(authenticationkey?: string, extraHttpRequestParams?: any): Observable<{}>;
    /**
     *
     *
     * @param clientType
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param view
     */
    generateClientWithHttpInfo(clientType: string, authenticationkey?: string, view?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    getClientsWithHttpInfo(authenticationkey?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param view
     */
    getDocsWithHttpInfo(authenticationkey: string, view?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param view
     */
    getSwaggerJSONWithHttpInfo(authenticationkey: string, view?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    invalidateCacheWithHttpInfo(authenticationkey?: string, extraHttpRequestParams?: any): Observable<Response>;
}
