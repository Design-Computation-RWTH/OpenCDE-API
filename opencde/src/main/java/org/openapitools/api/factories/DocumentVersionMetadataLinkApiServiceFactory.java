package org.openapitools.api.factories;

import org.openapitools.api.DocumentVersionMetadataLinkApiService;
import org.openapitools.api.impl.DocumentVersionMetadataLinkApiServiceImpl;

@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaJerseyServerCodegen", date = "2020-03-10T16:51:27.349+01:00[Europe/Berlin]")
public class DocumentVersionMetadataLinkApiServiceFactory {
    private final static DocumentVersionMetadataLinkApiService service = new DocumentVersionMetadataLinkApiServiceImpl();

    public static DocumentVersionMetadataLinkApiService getDocumentVersionMetadataLinkApi() {
        return service;
    }
}
