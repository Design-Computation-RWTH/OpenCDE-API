package org.openapitools.api;

import org.openapitools.model.*;
import org.openapitools.api.CdeApiService;
import org.openapitools.api.factories.CdeApiServiceFactory;

import io.swagger.annotations.ApiParam;
import io.swagger.jaxrs.*;

import java.io.File;
import org.openapitools.model.UploadSessionCreatedResponse;

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

@Path("/cde")


@io.swagger.annotations.Api(description = "the cde API")
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaJerseyServerCodegen", date = "2020-03-10T16:51:27.349+01:00[Europe/Berlin]")
public class CdeApi  {
   private final CdeApiService delegate;

   public CdeApi(@Context ServletConfig servletContext) {
      CdeApiService delegate = null;

      if (servletContext != null) {
         String implClass = servletContext.getInitParameter("CdeApi.implementation");
         if (implClass != null && !"".equals(implClass.trim())) {
            try {
               delegate = (CdeApiService) Class.forName(implClass).newInstance();
            } catch (Exception e) {
               throw new RuntimeException(e);
            }
         } 
      }

      if (delegate == null) {
         delegate = CdeApiServiceFactory.getCdeApi();
      }

      this.delegate = delegate;
   }

    @POST
    @Path("/0.1/documents/upload-documents")
    
    @Produces({ "application/hal+json" })
    @io.swagger.annotations.ApiOperation(value = "Start the upload documents flow", notes = "", response = UploadSessionCreatedResponse.class, tags={ "OpenCDE Standard API", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "Returns the session links", response = UploadSessionCreatedResponse.class) })
    public Response cde01DocumentsUploadDocumentsPost(@Context SecurityContext securityContext)
    throws NotFoundException {
        return delegate.cde01DocumentsUploadDocumentsPost(securityContext);
    }
    @GET
    @Path("/0.1/documents/select-documents")
    
    @Produces({ "text/html" })
    @io.swagger.annotations.ApiOperation(value = "Start the select documents flow", notes = "", response = File.class, tags={ "OpenCDE Standard API", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "The select file(s) UI", response = File.class) })
    public Response selectDocumentsUIEntrypoint(@ApiParam(value = "The callback URL to call with the selected URLs, can contain parameters which must be preserved", required = true) @QueryParam("callback_url") @NotNull  String callbackUrl
,@ApiParam(value = "Start selection UI in single or multi select mode", allowableValues="single, multi") @QueryParam("select_mode")  String selectMode
,@Context SecurityContext securityContext)
    throws NotFoundException {
        return delegate.selectDocumentsUIEntrypoint(callbackUrl, selectMode, securityContext);
    }
}
