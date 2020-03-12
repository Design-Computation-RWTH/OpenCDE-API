package org.openapitools.api.factories;

import org.openapitools.api.DocumentVersionsLinkApiService;
import org.openapitools.api.impl.DocumentVersionsLinkApiServiceImpl;

@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaJerseyServerCodegen", date = "2020-03-10T16:51:27.349+01:00[Europe/Berlin]")
public class DocumentVersionsLinkApiServiceFactory {
    private final static DocumentVersionsLinkApiService service = new DocumentVersionsLinkApiServiceImpl();

    public static DocumentVersionsLinkApiService getDocumentVersionsLinkApi() {
        return service;
    }
}
