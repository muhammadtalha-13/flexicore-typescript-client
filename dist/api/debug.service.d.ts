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
import { FileResource } from '../model/fileResource';
import { FilteringInformationHolder } from '../model/filteringInformationHolder';
import { Configuration } from '../configuration';
export declare class DebugService {
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
     * create heap dump
     * @summary createHeapDump
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param path
     */
    createHeapDump(authenticationkey?: string, path?: string, extraHttpRequestParams?: any): Observable<FileResource>;
    /**
     * delete heap dump
     * @summary deleteHeapDump
     * @param id
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    deleteHeapDump(id: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<boolean>;
    /**
     * list heap dumps
     * @summary listHeapDumps
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     * @param pagesize Number of entries to be retrieved per page or -1 for full list
     * @param currentpage The current page or -1 for full list
     * @param start
     */
    listHeapDumps(authenticationkey?: string, body?: FilteringInformationHolder, pagesize?: number, currentpage?: number, start?: number, extraHttpRequestParams?: any): Observable<Array<FileResource>>;
    /**
     * createHeapDump
     * create heap dump
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param path
     */
    createHeapDumpWithHttpInfo(authenticationkey?: string, pathparam?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * deleteHeapDump
     * delete heap dump
     * @param id
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    deleteHeapDumpWithHttpInfo(id: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * listHeapDumps
     * list heap dumps
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     * @param pagesize Number of entries to be retrieved per page or -1 for full list
     * @param currentpage The current page or -1 for full list
     * @param start
     */
    listHeapDumpsWithHttpInfo(authenticationkey?: string, body?: FilteringInformationHolder, pagesize?: number, currentpage?: number, start?: number, extraHttpRequestParams?: any): Observable<Response>;
}
