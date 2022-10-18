const errors = require('../../errors')
const config = require('../urlDatabases.js')
const axios = require('axios')

exports.getAnimeList = (req, res, next) => {
  // Simulate task list, normally this would be retrieved from a databasek
  const animes = axios.get(config.urlKitsu+'anime')
    .then(function (response) {
      // handle success
      console.log(response);
      res.setHeader('Content-Type', 'application/json')
      res.status(200).json(response)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });

}

exports.getAnime  = (req, res, next) => {
  // Simulate a custom error
  next(errors.newHttpError(400, 'bad request'))
}
