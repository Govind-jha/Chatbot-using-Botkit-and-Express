var response_handler = require('../controllers/botkit').handler

module.exports = function (app) {

  app.post('/webhook', function (req, res) {
    response_handler(req.body, res)
  })

}
