package org.openapitools.api.impl;

import org.openapitools.api.*;
import org.openapitools.model.*;

import java.io.File;
import org.openapitools.model.UploadSessionCreatedResponse;

import java.util.List;
import org.openapitools.api.NotFoundException;

import java.io.InputStream;

import org.glassfish.jersey.media.multipart.FormDataContentDisposition;

import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;
import javax.validation.constraints.*;
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaJerseyServerCodegen", date = "2020-03-10T16:51:27.349+01:00[Europe/Berlin]")
public class CdeApiServiceImpl extends CdeApiService {
    @Override
    public Response cde01DocumentsUploadDocumentsPost(SecurityContext securityContext) throws NotFoundException {
        // do some magic!
        return Response.ok().entity(new ApiResponseMessage(ApiResponseMessage.OK, "magic!")).build();
    }
    @Override
    public Response selectDocumentsUIEntrypoint( @NotNull String callbackUrl, String selectMode, SecurityContext securityContext) throws NotFoundException {
        // do some magic!
        return Response.ok().entity(new ApiResponseMessage(ApiResponseMessage.OK, "magic!")).build();
    }
}
