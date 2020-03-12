package org.openapitools.api.factories;

import org.openapitools.api.DocumentReferenceLinkApiService;
import org.openapitools.api.impl.DocumentReferenceLinkApiServiceImpl;

@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaJerseyServerCodegen", date = "2020-03-10T16:51:27.349+01:00[Europe/Berlin]")
public class DocumentReferenceLinkApiServiceFactory {
    private final static DocumentReferenceLinkApiService service = new DocumentReferenceLinkApiServiceImpl();

    public static DocumentReferenceLinkApiService getDocumentReferenceLinkApi() {
        return service;
    }
}
