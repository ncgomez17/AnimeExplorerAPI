const errors = require('../../errors')
const kitsuService = require('../service/kitsuService')

exports.getAnimeList = (req, res, next) => {

  try{
    //actualizar campos de busqueda
    var pageLimit= req.query.pageLimit ||10;
    var pageOffset= req.query.pageOffset ||0;
    var season = req.params.season;
    var seasonYear = req.query.seasonYear;
    var streamers = req.query.streamers;
    var ageRating= req.query.ageRating;

    kitsuService.getAnimeListKitsu(pageLimit, pageOffset, season, seasonYear, streamers, ageRating)
    .then(value => {
      res.send(value) 
    }).catch(err => {
      console.log(err);
    });
  }catch(error) { // intercept the error in catch block
    console.log(error)
    // return error response
    res
        .status(500)
        .json({ message: "Error in invocation of API: /animeExplorer" })
  }

}

exports.getAnime  = (req, res, next) => {
  // Simulate a custom error
  next(errors.newHttpError(400, 'bad request'))
}
