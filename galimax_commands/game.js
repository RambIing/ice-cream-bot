const config = require("./config.json");
module.exports.func = function (bot, msg) {
  if (msg.member.roles.has(config.devroleid)) {
    var args = msg.content.split(" ");
    args.splice(0, 1);
    args = args.join(" ");
    bot.channels.get("272212126821646337").sendMessage(`Game changed to :
  ${args}
                `);
    bot.user.setGame(`${args}`);
  } else {
    msg.channel.sendMessage(":warning: You have been logged for trying to type in an admin command. Trying again will get you BANNED :warning:");
    bot.channels.get("269961717121810433").sendMessage(`${msg.author.user.username} tried to change the bot's game!`);
  }
};
