package org.openapitools.api;

import org.openapitools.model.*;
import org.openapitools.api.RegisterFileUploadLinkApiService;
import org.openapitools.api.factories.RegisterFileUploadLinkApiServiceFactory;

import io.swagger.annotations.ApiParam;
import io.swagger.jaxrs.*;

import org.openapitools.model.RegisterFileRequest;
import org.openapitools.model.RegisterFileResponse;

import java.util.Map;
import java.util.List;
import org.openapitools.api.NotFoundException;

import java.io.InputStream;

import org.glassfish.jersey.media.multipart.FormDataContentDisposition;
import org.glassfish.jersey.media.multipart.FormDataParam;

import javax.servlet.ServletConfig;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;
import javax.ws.rs.*;
import javax.validation.constraints.*;
import javax.validation.Valid;

@Path("/<register-file-upload-link>")


@io.swagger.annotations.Api(description = "the <register-file-upload-link> API")
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaJerseyServerCodegen", date = "2020-03-10T16:51:27.349+01:00[Europe/Berlin]")
public class RegisterFileUploadLinkApi  {
   private final RegisterFileUploadLinkApiService delegate;

   public RegisterFileUploadLinkApi(@Context ServletConfig servletContext) {
      RegisterFileUploadLinkApiService delegate = null;

      if (servletContext != null) {
         String implClass = servletContext.getInitParameter("RegisterFileUploadLinkApi.implementation");
         if (implClass != null && !"".equals(implClass.trim())) {
            try {
               delegate = (RegisterFileUploadLinkApiService) Class.forName(implClass).newInstance();
            } catch (Exception e) {
               throw new RuntimeException(e);
            }
         } 
      }

      if (delegate == null) {
         delegate = RegisterFileUploadLinkApiServiceFactory.getRegisterFileUploadLinkApi();
      }

      this.delegate = delegate;
   }

    @POST
    
    @Consumes({ "application/json" })
    @Produces({ "application/hal+json" })
    @io.swagger.annotations.ApiOperation(value = "Register a file to upload", notes = "", response = RegisterFileResponse.class, tags={ "Upload - Vendor specific URL (discovered via standard API)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "Returns the links to upload file binary", response = RegisterFileResponse.class) })
    public Response registerFileUploadLinkPost(@ApiParam(value = "") @Valid  RegisterFileRequest registerFileRequest
,@Context SecurityContext securityContext)
    throws NotFoundException {
        return delegate.registerFileUploadLinkPost(registerFileRequest, securityContext);
    }
}
