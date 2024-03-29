const config = require('../urlDatabases')
const axios = require('axios');
const configKitsu = require('../../../config/default.json')

const getAnimeListKitsu =  async (pageLimit, pageOffset, season, seasonYear,
  streamers, ageRating) => {
    var response =  await axios.get(config.urlKitsu+'anime',{
      params: {
        page :{
          limit: pageLimit,
          offset: pageOffset
        },
        filter :{
          season: season,
          seasonYear: seasonYear,
          streamers: streamers,
          ageRating: ageRating
        },
        fields :{
          anime: 'canonicalTitle,synopsis,startDate,endDate,episodeCount,averageRating,genres'
        },
        include :"genres"
      }
    },{timeout:configKitsu.timeOutKitsu}).then(function (response) {
      var data =response.data.data
      var genres = response.data.included

      data.forEach(element => {
        var elementGenres = []
        element.relationships.genres.data.forEach(genrer => {
          elementGenres.push(genres.filter(e => e.id == genrer.id)
            .map(e=> e.attributes.name).toString())
          element.attributes.genrer = elementGenres
        });
      });

      return data.map(e=> e.attributes)
    });
  return response

}

const getAnime =  async (id, name, genre, episodeCount) => {
    var response =  await axios.get(config.urlKitsu+'anime',{
      params: {
        fields :{
          anime: 'canonicalTitle,synopsis,startDate,endDate,episodeCount,averageRating,genres'
        },
        include :"genres"
      }
    },{timeout:configKitsu.timeOutKitsu}).then(function (response) {
      var data =response.data.data
      var genres = response.data.included
      var animes = []

      data.forEach(element => {

        var includesGenre = false
        var elementGenres = []

        element.relationships.genres.data.forEach(genrer => {
          elementGenres.push(genres.filter(e => e.id == genrer.id)
            .map(e=> e.attributes.name).toString())
          element.attributes.genrer = elementGenres
        });
        elementGenres.forEach(g =>{
          if(g.includes(genre)){
            includesGenre = true
          }
        })
        if(element.attributes.canonicalTitle.includes(name) || element.attributes.episodeCount == episodeCount || includesGenre
          || element.id == id){
          animes.push(element)
        }
      });

      return animes.map(e=> e.attributes)
    });
  return response

}
const getAnimeTrending =  async (pageLimit, pageOffset) => {
  var response =  await axios.get(config.urlKitsu+'trending/anime',{
    params: {
      page :{
        limit: pageLimit,
        offset: pageOffset
      }
    }
  },{timeout:configKitsu.timeOutKitsu}).then(function (response) {
    var data =response.data.data
    var animes =[]
    data.forEach(element => {
      var anime = {
        id: element.id,
        name: element.attributes.canonicalTitle,
        rating : element.attributes.averageRating
      }
      animes.push(anime)
      });

    return animes
  });
  return response
}

const getAnimeRanking =  async () => {
  var response =  await axios.get(config.urlKitsu+'anime',{
    params: {
      sort: "popularityRank"
    }
  },{timeout:configKitsu.timeOutKitsu}).then(function (response) {
    var data =response.data.data
    var animes =[]
    data.forEach(element => {
      var animeRank = {
        id: element.id,
        name: element.attributes.canonicalTitle,
        description : element.attributes.synopsis,
        rating : element.attributes.averageRating,
        popularityRank : element.attributes.popularityRank,
        ratingRank : element.attributes.ratingRank,
        ageRatingGuide : element.attributes.ageRatingGuide,
        status : element.attributes.status,
        episodeCount : element.attributes.episodeCount
      }

      animes.push(animeRank)
    });

    return animes
  });
  return response
}

module.exports = {getAnimeListKitsu, getAnime, getAnimeTrending, getAnimeRanking}