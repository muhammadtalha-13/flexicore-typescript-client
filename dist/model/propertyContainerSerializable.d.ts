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
import { BasicContainer } from './basicContainer';
import { Property } from './property';
import { Serializable } from './serializable';
export interface PropertyContainerSerializable {
    property?: Property;
    value?: Serializable;
    simple?: boolean;
    simpleValue?: string;
    linkId?: string;
    inherited?: boolean;
    categoriesContained?: Array<BasicContainer>;
}
