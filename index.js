const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const CepRouter = require("./routes/CepRouter");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", CepRouter);


app.listen(80, () => {
    console.log('Running!')
})