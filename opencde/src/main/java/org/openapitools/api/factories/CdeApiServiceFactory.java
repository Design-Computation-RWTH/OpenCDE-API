package org.openapitools.api.factories;

import org.openapitools.api.CdeApiService;
import org.openapitools.api.impl.CdeApiServiceImpl;

@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaJerseyServerCodegen", date = "2020-03-10T16:51:27.349+01:00[Europe/Berlin]")
public class CdeApiServiceFactory {
    private final static CdeApiService service = new CdeApiServiceImpl();

    public static CdeApiService getCdeApi() {
        return service;
    }
}
