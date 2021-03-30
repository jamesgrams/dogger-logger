const express = require("express");
const DEFAULT_PORT = 80;
const JSON_ENCODING = "application/json";

let key = process.env.DOGGER_LOGGER_KEY;

const app = express();
app.use(express.json());

app.post("/log", (request, response) => {
    response.set({ 'content-type':  JSON_ENCODING });
    if( key && request.body.key == key ) {
        console.log( request.body.data );
        response.status(200);
        response.end( JSON.stringify({
            "status": "ok"
        }) );
    }
    else {
        response.status(401);
        response.end( JSON.stringify({
            "status": "unauthorized"
        }) );
    }
});

app.listen(process.env.PORT ? process.env.port : DEFAULT_PORT);