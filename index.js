var express    = require('express')
var app = express();
app.use(express.json());

app.get("/select-documents", (request, response) => {
 response.json(["return"]);
});

app.post('/upload-documents', (request, response) => {
   return response.send('Received a POST HTTP method');
})

app.post('/register-file-upload', (request, response) =>{
   response.send(request.body);  
})

app.post('/upload-file', (request, response)=> {
   return response.send('Received a POST HTTP method');
})

app.get("/document-reference/:document_id", (request, response) => {
 response.json([request.params.document_id]);
});

app.get("/document-version-metadata/:document_id", (request, response) => {
response.json([request.params.document_id]);
});

app.get("/document-versions-link", (request, response) => {
 response.json(["list"]);
});


app.listen(3000, () => {
 console.log("Server running on port 3000");
});