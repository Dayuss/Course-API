const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const cors = require('cors');
const router = require('./router')

const errorResponder = (error, request, response, next) => {
    response.header("Content-Type", 'application/json')

    const status = error.status || 400
    response.status(status).send(error.message)
}


const options = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}
app.use(cors(options));
app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())
app.use(router);
app.use(errorResponder)

app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening at http://localhost:${port}`)
})