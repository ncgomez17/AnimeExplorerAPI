const errors = require('../../errors')
const kitsuService = require('../service/kitsuService')

exports.getAnimeTrending  = (req, res, next) => {
  try{
    var pageLimit= req.query.pageLimit ||10;
    var pageOffset= req.query.pageOffset ||0;

    kitsuService.getAnimeTrending(pageLimit, pageOffset)
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
