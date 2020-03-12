/*
 * OpenCDE document API
 * Proposals for OpenCDE document API
 *
 * The version of the OpenAPI document: 0.1
 * Contact: dirk.harbinson@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import org.openapitools.model.DocumentReferenceListEmbedded;
import org.openapitools.model.DocumentReferenceListLinks;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import javax.validation.constraints.*;
import javax.validation.Valid;

/**
 * DocumentReferenceList
 */
@JsonPropertyOrder({
  DocumentReferenceList.JSON_PROPERTY_LINKS,
  DocumentReferenceList.JSON_PROPERTY_EMBEDDED
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaJerseyServerCodegen", date = "2020-03-10T16:51:27.349+01:00[Europe/Berlin]")
public class DocumentReferenceList   {
  public static final String JSON_PROPERTY_LINKS = "_links";
  @JsonProperty(JSON_PROPERTY_LINKS)
  private DocumentReferenceListLinks links;

  public static final String JSON_PROPERTY_EMBEDDED = "_embedded";
  @JsonProperty(JSON_PROPERTY_EMBEDDED)
  private DocumentReferenceListEmbedded embedded;

  public DocumentReferenceList links(DocumentReferenceListLinks links) {
    this.links = links;
    return this;
  }

  /**
   * Get links
   * @return links
   **/
  @JsonProperty("_links")
  @ApiModelProperty(required = true, value = "")
  @NotNull @Valid 
  public DocumentReferenceListLinks getLinks() {
    return links;
  }

  public void setLinks(DocumentReferenceListLinks links) {
    this.links = links;
  }

  public DocumentReferenceList embedded(DocumentReferenceListEmbedded embedded) {
    this.embedded = embedded;
    return this;
  }

  /**
   * Get embedded
   * @return embedded
   **/
  @JsonProperty("_embedded")
  @ApiModelProperty(required = true, value = "")
  @NotNull @Valid 
  public DocumentReferenceListEmbedded getEmbedded() {
    return embedded;
  }

  public void setEmbedded(DocumentReferenceListEmbedded embedded) {
    this.embedded = embedded;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DocumentReferenceList documentReferenceList = (DocumentReferenceList) o;
    return Objects.equals(this.links, documentReferenceList.links) &&
        Objects.equals(this.embedded, documentReferenceList.embedded);
  }

  @Override
  public int hashCode() {
    return Objects.hash(links, embedded);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DocumentReferenceList {\n");
    
    sb.append("    links: ").append(toIndentedString(links)).append("\n");
    sb.append("    embedded: ").append(toIndentedString(embedded)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}

