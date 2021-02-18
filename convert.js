var fs = require('fs');
var CodeGen = require('swagger-js-codegen').CodeGen;
 
var file = 'openapi.json-Swagger20.json';
var swagger = JSON.parse(fs.readFileSync(file, 'UTF-8'));
var tsSourceCode = CodeGen.getTypescriptCode({ className: 'Test', swagger: swagger, imports: ['../../typings/tsd.d.ts'] });
console.log(tsSourceCode);