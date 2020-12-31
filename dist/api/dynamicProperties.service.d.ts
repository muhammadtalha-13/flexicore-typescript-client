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
import { Observable } from 'rxjs/Observable';
import { FilteringInformationHolder } from '../model/filteringInformationHolder';
import { Property } from '../model/property';
import { PropertyContainerSerializable } from '../model/propertyContainerSerializable';
import { PropertySetContainerBaseclass } from '../model/propertySetContainerBaseclass';
import { PropertyToBaseclass } from '../model/propertyToBaseclass';
import { PropertyToClazz } from '../model/propertyToClazz';
import { PropertyType } from '../model/propertyType';
import { Configuration } from '../configuration';
export declare class DynamicPropertiesService {
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
     * Connect a property and a baseclass with a complex type, this is the actual action of assigning a Complex Value of a property to a specific Baseclass , any Baseclasss
     * @summary connect Property
     * @param propertyId the ID of the Property instance to use
     * @param baseclassId The ID of the Baseclass to which we want to assign this complex value
     * @param valueId The ID of the ? extends Baseclass which is the complex value
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    connectPropertyComplex(propertyId: string, baseclassId: string, valueId: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<PropertyToBaseclass>;
    /**
     * Connect property and a baseclass with simple value, assign a value of a Property to an instance of Baseclass, any Baseclass instance
     * @summary connect Property
     * @param propertyId The ID of the property, this Property must be connected eith the Clazz of the Baseclass in the baseclass_id parameter
     * @param baseclassId The Baseclass instance to which this value (for that property) is set
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param simpleValue The value to set, must be a String
     */
    connectPropertySimple(propertyId: string, baseclassId: string, authenticationkey?: string, simpleValue?: string, extraHttpRequestParams?: any): Observable<PropertyToBaseclass>;
    /**
     * creates a property given a type and a name, properties can be created and linked with Types. instances of these types can have associated values
     * @summary creates Property
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param propertyName
     * @param propertyType
     */
    createProperty(authenticationkey?: string, propertyName?: string, propertyType?: string, extraHttpRequestParams?: any): Observable<Property>;
    /**
     * creates a property Type given  a name
     * @summary creates Property Type
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param propertyTypeName  the name of the property type to create
     */
    createPropertyType(authenticationkey?: string, propertyTypeName?: string, extraHttpRequestParams?: any): Observable<PropertyType>;
    /**
     * get all properties connected to baseclass
     * @summary get Connected Properties
     * @param id
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param propertyClazz
     * @param plainView
     */
    getDynamicProperties(id: string, authenticationkey?: string, propertyClazz?: string, plainView?: boolean, extraHttpRequestParams?: any): Observable<Array<PropertyContainerSerializable>>;
    /**
     * get all properties connected to baseclass
     * @summary get Connected Properties With Categories
     * @param id
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param propertyClazz
     * @param plainView
     */
    getDynamicPropertiesWithCategories(id: string, authenticationkey?: string, propertyClazz?: string, plainView?: boolean, extraHttpRequestParams?: any): Observable<Array<PropertyContainerSerializable>>;
    /**
     * get all Properties, paged, filtered and sorted by a FilteringInformationHolder
     * @summary listProperties
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     * @param pagesize Number of entries to be retrieved per page or -1 for full list
     * @param currentPage The current page or -1 for full list
     */
    listProperties(authenticationkey?: string, body?: FilteringInformationHolder, pagesize?: number, currentPage?: number, extraHttpRequestParams?: any): Observable<Array<Property>>;
    /**
     * get all property types, filtered and sorted
     * @summary listPropertyTypes
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     * @param pagesize Number of entries to be retrieved per page or -1 for full list
     * @param currentPage The current page or -1 for full list
     */
    listPropertyTypes(authenticationkey?: string, body?: FilteringInformationHolder, pagesize?: number, currentPage?: number, extraHttpRequestParams?: any): Observable<Array<PropertyType>>;
    /**
     * set Property to use with specific Clazz, a Clazz is an Entity in FlexiCore, the PropertySetContainer has the required default values for both simple and complex values
     * @summary set Property
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     */
    setProperty(authenticationkey?: string, body?: PropertySetContainerBaseclass, extraHttpRequestParams?: any): Observable<PropertyToClazz>;
    /**
     * update Simple value of a Dynamic Property of a Baseclass instance
     * @summary updateSimple
     * @param linkId The link id (of PropertyToBaseclass type)
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param simpleValue The value to update
     */
    updateSimple(linkId: string, authenticationkey?: string, simpleValue?: string, extraHttpRequestParams?: any): Observable<PropertyToBaseclass>;
    /**
     * connect Property
     * Connect a property and a baseclass with a complex type, this is the actual action of assigning a Complex Value of a property to a specific Baseclass , any Baseclasss
     * @param propertyId the ID of the Property instance to use
     * @param baseclassId The ID of the Baseclass to which we want to assign this complex value
     * @param valueId The ID of the ? extends Baseclass which is the complex value
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     */
    connectPropertyComplexWithHttpInfo(propertyId: string, baseclassId: string, valueId: string, authenticationkey?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * connect Property
     * Connect property and a baseclass with simple value, assign a value of a Property to an instance of Baseclass, any Baseclass instance
     * @param propertyId The ID of the property, this Property must be connected eith the Clazz of the Baseclass in the baseclass_id parameter
     * @param baseclassId The Baseclass instance to which this value (for that property) is set
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param simpleValue The value to set, must be a String
     */
    connectPropertySimpleWithHttpInfo(propertyId: string, baseclassId: string, authenticationkey?: string, simpleValue?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * creates Property
     * creates a property given a type and a name, properties can be created and linked with Types. instances of these types can have associated values
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param propertyName
     * @param propertyType
     */
    createPropertyWithHttpInfo(authenticationkey?: string, propertyName?: string, propertyType?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * creates Property Type
     * creates a property Type given  a name
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param propertyTypeName  the name of the property type to create
     */
    createPropertyTypeWithHttpInfo(authenticationkey?: string, propertyTypeName?: string, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * get Connected Properties
     * get all properties connected to baseclass
     * @param id
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param propertyClazz
     * @param plainView
     */
    getDynamicPropertiesWithHttpInfo(id: string, authenticationkey?: string, propertyClazz?: string, plainView?: boolean, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * get Connected Properties With Categories
     * get all properties connected to baseclass
     * @param id
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param propertyClazz
     * @param plainView
     */
    getDynamicPropertiesWithCategoriesWithHttpInfo(id: string, authenticationkey?: string, propertyClazz?: string, plainView?: boolean, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * listProperties
     * get all Properties, paged, filtered and sorted by a FilteringInformationHolder
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     * @param pagesize Number of entries to be retrieved per page or -1 for full list
     * @param currentPage The current page or -1 for full list
     */
    listPropertiesWithHttpInfo(authenticationkey?: string, body?: FilteringInformationHolder, pagesize?: number, currentPage?: number, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * listPropertyTypes
     * get all property types, filtered and sorted
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     * @param pagesize Number of entries to be retrieved per page or -1 for full list
     * @param currentPage The current page or -1 for full list
     */
    listPropertyTypesWithHttpInfo(authenticationkey?: string, body?: FilteringInformationHolder, pagesize?: number, currentPage?: number, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * set Property
     * set Property to use with specific Clazz, a Clazz is an Entity in FlexiCore, the PropertySetContainer has the required default values for both simple and complex values
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param body
     */
    setPropertyWithHttpInfo(authenticationkey?: string, body?: PropertySetContainerBaseclass, extraHttpRequestParams?: any): Observable<Response>;
    /**
     * updateSimple
     * update Simple value of a Dynamic Property of a Baseclass instance
     * @param linkId The link id (of PropertyToBaseclass type)
     * @param authenticationkey The AuthenticationKey retrieved when sign-in into the system
     * @param simpleValue The value to update
     */
    updateSimpleWithHttpInfo(linkId: string, authenticationkey?: string, simpleValue?: string, extraHttpRequestParams?: any): Observable<Response>;
}
