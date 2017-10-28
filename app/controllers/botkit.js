var Botkit = require('../../node_modules/botkit/lib/Botkit.js');

var controller = Botkit.core({
  debug: true
});

var bot = controller.spawn({})

// Conversation logic
var conversation = require('./conversations')(controller) 

// this function processes the POST request to the webhook
var handler = function (obj, con) {
    controller.trigger('greetings', [bot, obj.message, con]);
};


exports.handler = handler
