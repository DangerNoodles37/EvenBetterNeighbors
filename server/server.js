const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const apiRouter = require('./routes/api');
const cors = require('cors');

const MONGO_URI =
  'mongodb+srv://dangernoodles:V7ffVtFnMNGR4W8g@cluster0.yjnm2wn.mongodb.net/?retryWrites=true&w=majority';

// this connects our mongo database to our server
mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'Cluster0',
    //maybe also...
    //dbName: 'EvenBetterNeighbors'
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

// parses JSON from incoming request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// handle requests for static files
app.use(express.static(path.resolve(__dirname, '../client')));

// define route handlers
app.use('/api', apiRouter, (req, res) => {
  return res.status(200).send(res.locals.consumers);
});

// define catch all error handler
app.get('*', (req, res) => {
  return res.status(400).send('This page does not exist. Try again!');
});

// define catch all global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});

// port listener
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

module.exports = app;
