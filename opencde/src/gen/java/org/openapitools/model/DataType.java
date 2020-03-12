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
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.util.ArrayList;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import javax.validation.constraints.*;
import javax.validation.Valid;

/**
 * DataType
 */
@JsonPropertyOrder({
  DataType.JSON_PROPERTY_TYPE,
  DataType.JSON_PROPERTY_REQUIRED,
  DataType.JSON_PROPERTY_ENUM_VALUES,
  DataType.JSON_PROPERTY_ARRAY_TYPE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaJerseyServerCodegen", date = "2020-03-10T16:51:27.349+01:00[Europe/Berlin]")
public class DataType   {
  /**
   * Gets or Sets type
   */
  public enum TypeEnum {
    STRING("string"),
    
    BOOLEAN("boolean"),
    
    DATE_TIME("date-time"),
    
    INTEGER("integer"),
    
    NUMBER("number"),
    
    ENUM("enum"),
    
    ARRAY("array");

    private String value;

    TypeEnum(String value) {
      this.value = value;
    }

    @Override
    @JsonValue
    public String toString() {
      return String.valueOf(value);
    }

    @JsonCreator
    public static TypeEnum fromValue(String value) {
      for (TypeEnum b : TypeEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }
  }

  public static final String JSON_PROPERTY_TYPE = "type";
  @JsonProperty(JSON_PROPERTY_TYPE)
  private TypeEnum type;

  public static final String JSON_PROPERTY_REQUIRED = "required";
  @JsonProperty(JSON_PROPERTY_REQUIRED)
  private Boolean required;

  public static final String JSON_PROPERTY_ENUM_VALUES = "enumValues";
  @JsonProperty(JSON_PROPERTY_ENUM_VALUES)
  private List<String> enumValues = null;

  public static final String JSON_PROPERTY_ARRAY_TYPE = "arrayType";
  @JsonProperty(JSON_PROPERTY_ARRAY_TYPE)
  private DataType arrayType;

  public DataType type(TypeEnum type) {
    this.type = type;
    return this;
  }

  /**
   * Get type
   * @return type
   **/
  @JsonProperty("type")
  @ApiModelProperty(required = true, value = "")
  @NotNull 
  public TypeEnum getType() {
    return type;
  }

  public void setType(TypeEnum type) {
    this.type = type;
  }

  public DataType required(Boolean required) {
    this.required = required;
    return this;
  }

  /**
   * Get required
   * @return required
   **/
  @JsonProperty("required")
  @ApiModelProperty(required = true, value = "")
  @NotNull 
  public Boolean getRequired() {
    return required;
  }

  public void setRequired(Boolean required) {
    this.required = required;
  }

  public DataType enumValues(List<String> enumValues) {
    this.enumValues = enumValues;
    return this;
  }

  public DataType addEnumValuesItem(String enumValuesItem) {
    if (this.enumValues == null) {
      this.enumValues = new ArrayList<String>();
    }
    this.enumValues.add(enumValuesItem);
    return this;
  }

  /**
   * Get enumValues
   * @return enumValues
   **/
  @JsonProperty("enumValues")
  @ApiModelProperty(value = "")
  
  public List<String> getEnumValues() {
    return enumValues;
  }

  public void setEnumValues(List<String> enumValues) {
    this.enumValues = enumValues;
  }

  public DataType arrayType(DataType arrayType) {
    this.arrayType = arrayType;
    return this;
  }

  /**
   * Get arrayType
   * @return arrayType
   **/
  @JsonProperty("arrayType")
  @ApiModelProperty(value = "")
  @Valid 
  public DataType getArrayType() {
    return arrayType;
  }

  public void setArrayType(DataType arrayType) {
    this.arrayType = arrayType;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DataType dataType = (DataType) o;
    return Objects.equals(this.type, dataType.type) &&
        Objects.equals(this.required, dataType.required) &&
        Objects.equals(this.enumValues, dataType.enumValues) &&
        Objects.equals(this.arrayType, dataType.arrayType);
  }

  @Override
  public int hashCode() {
    return Objects.hash(type, required, enumValues, arrayType);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DataType {\n");
    
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
    sb.append("    required: ").append(toIndentedString(required)).append("\n");
    sb.append("    enumValues: ").append(toIndentedString(enumValues)).append("\n");
    sb.append("    arrayType: ").append(toIndentedString(arrayType)).append("\n");
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

