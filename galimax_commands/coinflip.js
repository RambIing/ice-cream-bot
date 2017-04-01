  module.exports.func = function (bot, msg) {
    let coin = Math.random() > 0.5 ? "Heads" : "Tails";
    msg.channel.sendMessage("The coin landed on " + `${coin}!`);
  };
