require('./controllers/db-conn.ctrl');
const express = require('express');
const keys  = require('./config/keys');
const port = keys.PORT;
const app = express();

const apiRouter = require('./routes/api.route');

app.use(express.json());
app.use(express.urlencoded( { extended:false } ));
app.use('/api', apiRouter);


app.listen(port, ()=> console.log(`Server started at port ${port}`));