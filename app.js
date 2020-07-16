const express = require("express");
 
const app = express();
const jsonParser = express.json();

app.use(express.static(__dirname))

app.post("app.js", jsonParser, function (request, response) {
  console.log(request);
  if(!request.body) return response.sendStatus(400);
   
  response.json(request); // отправляем пришедший ответ обратно
});

app.use(function (request, response) {
  
  
  response.sendFile(__dirname + "./index.html");
  });


app.listen(4000);