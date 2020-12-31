import { FilteringInformationHolder } from "./filteringInformationHolder";
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
export interface HealthReportFiltering extends FilteringInformationHolder {
    flexicoreServerIds?: string[];
    healthy?: boolean;
}
