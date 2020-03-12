package org.openapitools.api.factories;

import org.openapitools.api.UploadFileLinkApiService;
import org.openapitools.api.impl.UploadFileLinkApiServiceImpl;

@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaJerseyServerCodegen", date = "2020-03-10T16:51:27.349+01:00[Europe/Berlin]")
public class UploadFileLinkApiServiceFactory {
    private final static UploadFileLinkApiService service = new UploadFileLinkApiServiceImpl();

    public static UploadFileLinkApiService getUploadFileLinkApi() {
        return service;
    }
}
