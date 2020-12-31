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
import { Baseclass } from './baseclass';
import { FileResource } from './fileResource';
import { OperatingSystem } from './operatingSystem';
import { SoftwareToUpdateBundle } from './softwareToUpdateBundle';
export interface Software extends Baseclass {
    softwareVersion?: string;
    additonalInfo?: string;
    bundles?: Array<SoftwareToUpdateBundle>;
    operatingSystem?: OperatingSystem;
    installFile?: FileResource;
}
