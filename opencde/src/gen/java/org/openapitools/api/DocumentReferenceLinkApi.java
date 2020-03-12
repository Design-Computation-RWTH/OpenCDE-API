package org.openapitools.api;

import org.openapitools.model.*;
import org.openapitools.api.DocumentReferenceLinkApiService;
import org.openapitools.api.factories.DocumentReferenceLinkApiServiceFactory;

import io.swagger.annotations.ApiParam;
import io.swagger.jaxrs.*;

import org.openapitools.model.DocumentReference;

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

@Path("/<document-reference-link>")


@io.swagger.annotations.Api(description = "the <document-reference-link> API")
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaJerseyServerCodegen", date = "2020-03-10T16:51:27.349+01:00[Europe/Berlin]")
public class DocumentReferenceLinkApi  {
   private final DocumentReferenceLinkApiService delegate;

   public DocumentReferenceLinkApi(@Context ServletConfig servletContext) {
      DocumentReferenceLinkApiService delegate = null;

      if (servletContext != null) {
         String implClass = servletContext.getInitParameter("DocumentReferenceLinkApi.implementation");
         if (implClass != null && !"".equals(implClass.trim())) {
            try {
               delegate = (DocumentReferenceLinkApiService) Class.forName(implClass).newInstance();
            } catch (Exception e) {
               throw new RuntimeException(e);
            }
         } 
      }

      if (delegate == null) {
         delegate = DocumentReferenceLinkApiServiceFactory.getDocumentReferenceLinkApi();
      }

      this.delegate = delegate;
   }

    @GET
    
    
    @Produces({ "application/hal+json" })
    @io.swagger.annotations.ApiOperation(value = "Get document reference", notes = "", response = DocumentReference.class, tags={ "Download - Vendor specific URL (discovered via standard API)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "The document reference payload", response = DocumentReference.class) })
    public Response getDocumentReference(@Context SecurityContext securityContext)
    throws NotFoundException {
        return delegate.getDocumentReference(securityContext);
    }
}
