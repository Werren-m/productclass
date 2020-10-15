const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const router = require ('./routes')

const cors = require ('cors')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(router);

require("dotenv").config();
const {router} = require('./routes/index')
// const errorHandler = require('./error/errorHandler')

// console.log(process.env.PORT)
const port = Number(process.env.PORT) || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use('/uploads', express.static('uploads'));

app.use(router);
// app.use(errorHandler);

app.listen(port, () => console.log("Listening on port " + port));
