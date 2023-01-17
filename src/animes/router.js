
// Router
const router = require('express').Router()
const info = require('./info/index.js')
const rankings = require('./rankings/index.js')


router.get('/getAnimeList', info.getAnimeList)
router.get('/getAnime', info.getAnime)
router.get('/getAnimeTrending', rankings.getAnimeTrending)
router.get('/getAnimeRanking', rankings.getAnimeRanking)

module.exports = router