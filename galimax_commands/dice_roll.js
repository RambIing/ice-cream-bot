module.exports.func = function (bot, msg) {
  var roll = Math.floor(Math.random() * 6) +1;
  msg.reply(`you rolled a: ${roll}! :ice_cream:`);
};
