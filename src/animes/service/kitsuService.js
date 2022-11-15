const config = require('../urlDatabases')
const axios = require('axios');
const e = require('express');

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
    }).then(function (response) {
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

module.exports = {getAnimeListKitsu}