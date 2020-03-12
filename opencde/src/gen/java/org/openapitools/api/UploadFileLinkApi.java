package org.openapitools.api;

import org.openapitools.model.*;
import org.openapitools.api.UploadFileLinkApiService;
import org.openapitools.api.factories.UploadFileLinkApiServiceFactory;

import io.swagger.annotations.ApiParam;
import io.swagger.jaxrs.*;

import org.openapitools.model.DocumentReference;
import java.io.File;

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

@Path("/<upload-file-link>")


@io.swagger.annotations.Api(description = "the <upload-file-link> API")
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaJerseyServerCodegen", date = "2020-03-10T16:51:27.349+01:00[Europe/Berlin]")
public class UploadFileLinkApi  {
   private final UploadFileLinkApiService delegate;

   public UploadFileLinkApi(@Context ServletConfig servletContext) {
      UploadFileLinkApiService delegate = null;

      if (servletContext != null) {
         String implClass = servletContext.getInitParameter("UploadFileLinkApi.implementation");
         if (implClass != null && !"".equals(implClass.trim())) {
            try {
               delegate = (UploadFileLinkApiService) Class.forName(implClass).newInstance();
            } catch (Exception e) {
               throw new RuntimeException(e);
            }
         } 
      }

      if (delegate == null) {
         delegate = UploadFileLinkApiServiceFactory.getUploadFileLinkApi();
      }

      this.delegate = delegate;
   }

    @POST
    
    @Consumes({ "multipart/form-data" })
    @Produces({ "application/hal+json" })
    @io.swagger.annotations.ApiOperation(value = "Upload a file", notes = "", response = DocumentReference.class, tags={ "Upload - Vendor specific URL (discovered via standard API)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "Returns the links to upload file binary", response = DocumentReference.class) })
    public Response uploadFileLinkPost(
            @FormDataParam("file") InputStream fileInputStream,
            @FormDataParam("file") FormDataContentDisposition fileDetail
,@Context SecurityContext securityContext)
    throws NotFoundException {
        return delegate.uploadFileLinkPost(fileInputStream, fileDetail, securityContext);
    }
}
