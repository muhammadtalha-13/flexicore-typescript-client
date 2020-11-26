/**
 * REST API for Flexicore filtered by your access rights
 * Flexicore REST API
 *
 * OpenAPI spec version: V3.2.0
 * Contact: avishay@flexi-core.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */import { Baseclass } from './baseclass';
import { CategoryToBaseClass } from './categoryToBaseClass';
import { SecurityLink } from './securityLink';
import { Tenant } from './tenant';


export interface FlexiCoreServer extends Baseclass { 
    externalId?: string;
    enabled?: boolean;
    basePathApi?: string;
    webSocketPath?: string;
    defaultRemoteServer?: boolean;
    username?: string;
    healthCheckInterval?: number;
    lastHealthData?: string;
    healthy?: boolean;
}