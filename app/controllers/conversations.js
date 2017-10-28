module.exports = function (controller) {

  controller.on('greetings', function (bot, message, con) {
    bot.reply(message, 'Welcome, friend')  
    con.send('Welcome, friend', 200)
  })

  // user said hello
  controller.hears(['hello'], function (bot, message, con) {
    bot.reply(message, 'Hey there.')
    con.send('Hey there.', 201)
  })

  // user says anything else
  controller.hears('(.*)', function (bot, message, con) {
    bot.reply(message, 'you said ' + message.match[1])
    con.send('you said ' + message.match[1], 201)
  })
}
