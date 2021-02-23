export type UploadSessionCreatedResponse = {
    '_links': Links1

};

type Links1 = {
    'register-file-upload' ? : RegisterFileUpload

    'upload-metadata' ? : UploadMetadata

};

type RegisterFileUpload = {
    'href' ? : string

};

type UploadMetadata = {
    'href' ? : string

};


export type RegisterFileRequest = {
    'filename' ? : string

    'size' ? : string

    'last_modified' ? : string

    'version' ? : string

};



export type RegisterFileResponse = {
    '_links': Links2

}

type Links2 = {
    'upload-file' ? : UploadFile

};
type UploadFile = {
    'href' ? : string

};