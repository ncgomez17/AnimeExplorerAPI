
// Router
const router = require('express').Router()
const info = require('./info/index.js')

// Tasks
router.get('/getAnimeList', info.getAnimeList)
router.post('/getAnime', info.getAnime)
// Export the router
module.exports = router