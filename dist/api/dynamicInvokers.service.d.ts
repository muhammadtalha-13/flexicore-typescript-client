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
import { ExecuteInvokerRequest } from '../model/executeInvokerRequest';
import { ExecuteInvokersResponse } from '../model/executeInvokersResponse';
import { InvokersFilter } from '../model/invokersFilter';
import { PaginationResponse } from '../model/paginationResponse';
import { Configuration } from '../configuration';
import { InvokerInfo } from '../model/invokerInfo';
import { InvokersOperationFilter } from '../model/invokersOperationFilter';
import { Operation, DynamicExecution, ExecuteDynamicExecution, FileResource, DynamicExecutionExampleRequest } from '../model/models';
import { UpdateDynamicExecution } from '../model/updateDynamicExecution';
import { CreateDynamicExecution } from '../model/createDynamicExecution';
import { DynamicExecutionFilter } from '../model/dynamicExecutionFilter';
import { ExportDynamicExecution } from '../model/exportDynamicExecution';
export declare class DynamicInvokersService {
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
     * executeInvoker
     * executeInvoker
     * @param authenticationKey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    executeInvoker(authenticationKey?: string, body?: ExecuteInvokerRequest, observe?: 'body', reportProgress?: boolean): Observable<ExecuteInvokersResponse>;
    executeInvoker(authenticationKey?: string, body?: ExecuteInvokerRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ExecuteInvokersResponse>>;
    executeInvoker(authenticationKey?: string, body?: ExecuteInvokerRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ExecuteInvokersResponse>>;
    /**
   * executeInvoker
   * executeInvoker
   * @param authenticationKey The AuthenticationKey retrieved when sign-in into the system
   * @param body
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
    executeDynamicExecution(authenticationKey?: string, body?: ExecuteDynamicExecution, observe?: 'body', reportProgress?: boolean): Observable<ExecuteInvokersResponse>;
    executeDynamicExecution(authenticationKey?: string, body?: ExecuteDynamicExecution, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ExecuteInvokersResponse>>;
    executeDynamicExecution(authenticationKey?: string, body?: ExecuteDynamicExecution, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ExecuteInvokersResponse>>;
    createDynamicExecution(authenticationKey?: string, body?: CreateDynamicExecution, observe?: 'body', reportProgress?: boolean): Observable<DynamicExecution>;
    createDynamicExecution(authenticationKey?: string, body?: CreateDynamicExecution, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DynamicExecution>>;
    createDynamicExecution(authenticationKey?: string, body?: CreateDynamicExecution, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DynamicExecution>>;
    getAllDynamicExecutions(authenticationKey?: string, body?: DynamicExecutionFilter, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<DynamicExecution>>;
    getAllDynamicExecutions(authenticationKey?: string, body?: DynamicExecutionFilter, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<DynamicExecution>>>;
    getAllDynamicExecutions(authenticationKey?: string, body?: DynamicExecutionFilter, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<DynamicExecution>>>;
    getDynamicExecutionReturnExample(authenticationKey?: string, body?: DynamicExecutionExampleRequest, observe?: 'body', reportProgress?: boolean): Observable<any>;
    getDynamicExecutionReturnExample(authenticationKey?: string, body?: DynamicExecutionExampleRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    getDynamicExecutionReturnExample(authenticationKey?: string, body?: DynamicExecutionExampleRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    updateDynamicExecution(authenticationKey?: string, body?: UpdateDynamicExecution, observe?: 'body', reportProgress?: boolean): Observable<DynamicExecution>;
    updateDynamicExecution(authenticationKey?: string, body?: UpdateDynamicExecution, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DynamicExecution>>;
    updateDynamicExecution(authenticationKey?: string, body?: UpdateDynamicExecution, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DynamicExecution>>;
    /**
      * getAllInvokerOperations
      * lists all Invoker operations
      * @param authenticationKey The AuthenticationKey retrieved when sign-in into the system
      * @param body
      * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
      * @param reportProgress flag to report request and response progress.
      */
    getAllInvokerOperations(authenticationKey?: string, body?: InvokersOperationFilter, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<Operation>>;
    getAllInvokerOperations(authenticationKey?: string, body?: InvokersOperationFilter, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<Operation>>>;
    getAllInvokerOperations(authenticationKey?: string, body?: InvokersOperationFilter, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<Operation>>>;
    /**
     * getAllInvokers
     * lists all Invokers
     * @param authenticationKey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    exportDynamicExecutionResultToCSV(authenticationKey?: string, body?: ExportDynamicExecution, observe?: 'body', reportProgress?: boolean): Observable<FileResource>;
    exportDynamicExecutionResultToCSV(authenticationKey?: string, body?: ExportDynamicExecution, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<FileResource>>;
    exportDynamicExecutionResultToCSV(authenticationKey?: string, body?: ExportDynamicExecution, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<FileResource>>;
    /**
     * getAllInvokers
     * lists all Invokers
     * @param authenticationKey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getAllInvokers(authenticationKey?: string, body?: InvokersFilter, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<InvokerInfo>>;
    getAllInvokers(authenticationKey?: string, body?: InvokersFilter, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<InvokerInfo>>>;
    getAllInvokers(authenticationKey?: string, body?: InvokersFilter, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<InvokerInfo>>>;
    /**
  * getAllInvokersProtected
  * lists all Invokers protected
  * @param authenticationKey The AuthenticationKey retrieved when sign-in into the system
  * @param body
  * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
  * @param reportProgress flag to report request and response progress.
  */
    getAllInvokersProtected(authenticationKey?: string, body?: InvokersFilter, observe?: 'body', reportProgress?: boolean): Observable<PaginationResponse<InvokerInfo>>;
    getAllInvokersProtected(authenticationKey?: string, body?: InvokersFilter, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PaginationResponse<InvokerInfo>>>;
    getAllInvokersProtected(authenticationKey?: string, body?: InvokersFilter, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PaginationResponse<InvokerInfo>>>;
}
