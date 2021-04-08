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
import { Clazz } from '../model/clazz';
import { View } from '../model/view';
import { Configuration } from '../configuration';
export declare class ViewsService {
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
     * returns a list of views
     * @summary
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    getAllViews(authenticationkey?: string, extraHttpRequestParams?: any): Observable<Array<View>>;
    /**
     *
     * @param viewId
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    getViewClazzes(viewId: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<Array<Clazz>>;
    /**
     *
     * returns a list of views
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    getAllViewsWithHttpInfo(authenticationkey?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     *
     *
     * @param viewId
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    getViewClazzesWithHttpInfo(viewId: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<Response>;
}
