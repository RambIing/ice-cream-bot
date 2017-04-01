const sql = require('sqlite');   
sql.open('/score.sqlite');
module.exports.func = function (bot, msg, args) {
  msg.react("💰");
  msg.channel.sendMessage("You have been given 100 in credit! Have fun! 💰");
}
