import express from 'express';
type DocumentReference = {
    '_links': Links

    'version': string

    'version_date': string

    'title': string

    'file_description': FileDescription

};
type MetadataLink = {
    'href': string

};
type ContentLink = {
    'href': string

};
type VersionsLink = {
    'href': string

};
type DocumentReferenceLink = {
    'href': string

};
type HALLink = {
    'href': string

};
type UploadSessionCreatedResponse = {
    '_links': Links1

};
type UploadDocumentRequest = {
    'file' ? : string

};
type RegisterFileRequest = {
    'filename' ? : string

    'size' ? : string

    'last_modified' ? : string

    'version' ? : string

};
type RegisterFileResponse = {
    '_links': Links2

};
type DocumentMetadata = {
    '_links': Links3

    '_metaData': Array < MetaDatum >
        | MetaDatum

};
type DocumentReferenceList = {
    '_links': Links4

    '_embedded': Embedded

};
type DataType = {
    'type': Type

    'required': boolean

    'enumValues' ? : Array < string >
        | string

    'arrayType' ? : DataType

};
type Embedded = {
    'documentReferenceList': Array < DocumentReference >
        | DocumentReference

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
type Links1 = {
    'register-file-upload' ? : RegisterFileUpload

    'upload-metadata' ? : UploadMetadata

};
type Links2 = {
    'upload-file' ? : UploadFile

};
type Links3 = {
    'self' ? : MetadataLink

    'documentReference' ? : DocumentReferenceLink

};
type Links4 = {
    'self' ? : MetadataLink

};
type MetaDatum = {
    'name' ? : string

    'value' ? : string

    'type' ? : DataType

};
type RegisterFileUpload = {
    'href' ? : string

};
type select_mode = "single" | "multi";
type Type = "string" | "boolean" | "date-time" | "integer" | "number" | "enum" | "array";
type UploadFile = {
    'href' ? : string

};
type UploadMetadata = {
    'href' ? : string

};
