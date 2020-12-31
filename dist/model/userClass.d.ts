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
import { RoleToUser } from './roleToUser';
import { TenantToUser } from './tenantToUser';
import { Baseclass } from './baseclass';
/**
 * The basic entity for controlling access to system functions and objects
 */
export interface UserClass extends Baseclass {
    email?: string;
    homeDir?: string;
    surName?: string;
    roles?: Array<RoleToUser>;
    tenantToUsers?: Array<TenantToUser>;
    phoneNumber?: string;
    password?: string;
    name?: string;
    uiConfiguration?: string;
}
