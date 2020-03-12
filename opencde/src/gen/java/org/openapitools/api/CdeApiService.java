package org.openapitools.api;

import org.openapitools.api.*;
import org.openapitools.model.*;

import org.glassfish.jersey.media.multipart.FormDataContentDisposition;

import java.io.File;
import org.openapitools.model.UploadSessionCreatedResponse;

import java.util.List;
import org.openapitools.api.NotFoundException;

import java.io.InputStream;

import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;
import javax.validation.constraints.*;
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaJerseyServerCodegen", date = "2020-03-10T16:51:27.349+01:00[Europe/Berlin]")
public abstract class CdeApiService {
    public abstract Response cde01DocumentsUploadDocumentsPost(SecurityContext securityContext) throws NotFoundException;
    public abstract Response selectDocumentsUIEntrypoint( @NotNull String callbackUrl,String selectMode,SecurityContext securityContext) throws NotFoundException;
}
