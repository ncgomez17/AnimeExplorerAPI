const errors = require('../../errors')
const kitsuService = require('../service/kitsuService')

exports.getAnimeList = (req, res) => {

  try{
    var pageLimit= req.query.pageLimit ||10;
    var pageOffset= req.query.pageOffset ||0;
    var season = req.query.season;
    var seasonYear = req.query.seasonYear;
    var streamers = req.query.streamers;
    var ageRating= req.query.ageRating;

    kitsuService.getAnimeListKitsu(pageLimit, pageOffset, season, seasonYear, streamers, ageRating)
    .then(value => {
      res.send(value) 
    })
  }catch(error) {
    res
      .status(500)
      .json({ message: "Error in invocation of API: /animeExplorer" })
  }
}

exports.getAnime  = (req, res) => {
  try{
    var id = req.query.id;
    var name = req.query.name;
    var genre = req.query.genre;
    var episodeCount = req.query.episodeCount;

    kitsuService.getAnime(id, name, genre, episodeCount)
    .then(value => {
      res.send(value) 
    })
  }catch(error) {
    //lanzar servicio jikan
    res
        .status(500)
        .json({ message: "Error in invocation of API: /animeExplorer" })
  }
}