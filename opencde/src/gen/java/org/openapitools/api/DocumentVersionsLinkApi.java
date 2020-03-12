package org.openapitools.api;

import org.openapitools.model.*;
import org.openapitools.api.DocumentVersionsLinkApiService;
import org.openapitools.api.factories.DocumentVersionsLinkApiServiceFactory;

import io.swagger.annotations.ApiParam;
import io.swagger.jaxrs.*;

import org.openapitools.model.DocumentReferenceList;

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

@Path("/<document-versions-link>")


@io.swagger.annotations.Api(description = "the <document-versions-link> API")
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaJerseyServerCodegen", date = "2020-03-10T16:51:27.349+01:00[Europe/Berlin]")
public class DocumentVersionsLinkApi  {
   private final DocumentVersionsLinkApiService delegate;

   public DocumentVersionsLinkApi(@Context ServletConfig servletContext) {
      DocumentVersionsLinkApiService delegate = null;

      if (servletContext != null) {
         String implClass = servletContext.getInitParameter("DocumentVersionsLinkApi.implementation");
         if (implClass != null && !"".equals(implClass.trim())) {
            try {
               delegate = (DocumentVersionsLinkApiService) Class.forName(implClass).newInstance();
            } catch (Exception e) {
               throw new RuntimeException(e);
            }
         } 
      }

      if (delegate == null) {
         delegate = DocumentVersionsLinkApiServiceFactory.getDocumentVersionsLinkApi();
      }

      this.delegate = delegate;
   }

    @GET
    
    
    @Produces({ "application/hal+json" })
    @io.swagger.annotations.ApiOperation(value = "Get all versions of a document", notes = "", response = DocumentReferenceList.class, tags={ "Download - Vendor specific URL (discovered via standard API)", })
    @io.swagger.annotations.ApiResponses(value = { 
        @io.swagger.annotations.ApiResponse(code = 200, message = "The file references of all available document versions, in ascending version order", response = DocumentReferenceList.class) })
    public Response getDocumentVersions(@Context SecurityContext securityContext)
    throws NotFoundException {
        return delegate.getDocumentVersions(securityContext);
    }
}
