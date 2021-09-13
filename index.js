const express = require('express');
const app = express();
const port = 3000;

const apiRouter = require('./src/api/api');
const authRouter = require('./src/api/auth');
const db = require('./src/db/connect');

app.use(express.urlencoded({ extended: false }));

app.use('/api', apiRouter);
//app.use('/auth', authRouter);


app.listen(port, () => console.log('server started at port ' + port));