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
import { Operation } from './operation';
import { Tenant } from './tenant';
import { UserClass } from './userClass';
export interface SecurityContext {
    tenants?: Array<Tenant>;
    user?: UserClass;
    operation?: Operation;
    tenantToCreateIn?: Tenant;
}
