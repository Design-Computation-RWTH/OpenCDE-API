export type DocumentReference = {
    '_links': Links

    'version': string

    'version_date': string

    'title': string

    'file_description': FileDescription

};

type FileDescription = {
    'size_in_bytes': number

    'name' ? : string

};
type Links = {
    'self' ? : DocumentReferenceLink

    'metadata' ? : MetadataLink

    'versions' ? : VersionsLink

    'content' ? : ContentLink

};

type DocumentReferenceLink = {
    'href': string

};

type MetadataLink = {
    'href': string

};

type VersionsLink = {
    'href': string

};

type ContentLink = {
    'href': string

};


export type DocumentMetadata = {
    '_links': Links3

    '_metaData': Array < MetaDatum >
        | MetaDatum

};

type Links3 = {
    'self' ? : MetadataLink

    'documentReference' ? : DocumentReferenceLink

};

type MetaDatum = {
    'name' ? : string

    'value' ? : string

    'type' ? : DataType

};

type DataType = {
    'type': Type

    'required': boolean

    'enumValues' ? : Array < string >
        | string

    'arrayType' ? : DataType

};
type Type = "string" | "boolean" | "date-time" | "integer" | "number" | "enum" | "array";

export type DocumentReferenceList = {
    '_links': Links4

    '_embedded': Embedded

};

type Links4 = {
    'self' ? : MetadataLink

};

type Embedded = {
    'documentReferenceList': Array < DocumentReference >
        | DocumentReference

};
