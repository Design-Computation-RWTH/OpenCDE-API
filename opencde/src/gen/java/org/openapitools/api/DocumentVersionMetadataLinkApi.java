package org.openapitools.api;

import org.openapitools.model.*;
import org.openapitools.api.DocumentVersionMetadataLinkApiService;
import org.openapitools.api.factories.DocumentVersionMetadataLinkApiServiceFactory;

import io.swagger.annotations.ApiParam;
import io.swagger.jaxrs.*;

import org.openapitools.model.DocumentMetadata;

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

@Path("/<document-version-metadata-link>")


@io.swagger.annotations.Api(description = "the <document-version-metadata-link> API")
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaJerseyServerCodegen", date = "2020-03-10T16:51:27.349+01:00[Europe/Berlin]")
public class DocumentVersionMetadataLinkApi  {
   private final DocumentVersionMetadataLinkApiService delegate;

   public DocumentVersionMetadataLinkApi(@Context ServletConfig servletContext) {
      DocumentVersionMetadataLinkApiService delegate = null;

      if (servletContext != null) {
         String implClass = servletContext.getInitParameter("DocumentVersionMetadataLinkApi.implementation");
         if (implClass != null && !"".equals(implClass.trim())) {
            try {
               delegate = (DocumentVersionMetadataLinkApiService) Class.forName(implClass).newInstance();
            } catch (Exception e) {
               throw new RuntimeException(e);
            }
         } 
      }

      if (delegate == null) {
         delegate = DocumentVersionMetadataLinkApiServiceFactory.getDocumentVersionMetadataLinkApi();
      }

      this.delegate = delegate;
   }

    @GET
    
    
    @Produces({ "application/hal+json" })
    @io.swagger.annotations.ApiOperation(value = "Get document version metadata", notes = "", response = DocumentMetadata.class, tags={ "Download - Vendor specific URL (discovered via standard API)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "The document metadata", response = DocumentMetadata.class) })
    public Response getDocumentMetadata(@Context SecurityContext securityContext)
    throws NotFoundException {
        return delegate.getDocumentMetadata(securityContext);
    }
}
