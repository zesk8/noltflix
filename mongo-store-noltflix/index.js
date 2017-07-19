const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;

const app = express();
const movieShowSchema = new Schema({
  unit: Number,
  show_id: Number,
  show_title: String,
  release_year: String,
  rating: String,
  category: String,
  show_cast: String,
  director: String,
  summary: String,
  poster: String,
  mediatype: Number,
  runtime: String
}, {
  collection: 'movies'
});
const Model = mongoose.model('Model', movieShowSchema);
//  Set mongo connection to mlab
mongoose.connect(
  'mongodb://zesk8:noltflix@ds129031.mlab.com:29031/noltflix', {
    useMongoClient: true
  }
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
/**
 * Save movie show object
 * @param  {string}     '/save'    Api route
 * @param  {middleware} cors()     CORS Headers
 * @param  {function}   (req, res) Callback
 */
app.post('/save', cors(), (req, res) => {
  const savedata = new Model(req.body).save((err, result) => {
    if (err) throw err;
    // Return stored object
    if(result) {
      res.json(result)
    }
  });
});
/**
 * Find all movie/shows stored
 * @param  {string}     '/findAll'   Api route
 * @param  {middleware} cors()       CORS Headers
 * @param  {function}   (req, res)   Callback
 */
app.get('/findAll', cors(), (req, res) => {
  Model.find({}, (err, result) => {
    if (err) throw err;
    // Return all obejcts
    if (result) {
      res.json(result)
    }
  });
});
/**
 * Find movie/shows stored by title
 * @param  {string}     '/find/:title'  Api route
 * @param  {middleware} cors()          CORS Headers
 * @param  {function}   (req, res)      Callback
 */
app.get('/find/:title', cors(), (req, res) => {
  const title = req.params.title;
  Model.find({
    'show_title': title
  }, (err, result) => {
    if (err) throw err;
    if (result) {
      res.json(result)
    }
  });
});

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`Node.js listening on port ${port}`);
});
