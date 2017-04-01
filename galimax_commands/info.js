const config = require("./config.json");
module.exports.func = function (bot, msg) {
  msg.channel.sendMessage("", {embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Information about Ice Cream",
    url: "https://bots.discord.pw/bots/292139791016001537",
    description: "Displays info about Ice Cream",
    fields: [
      {
        name: "Info",
        value: `Hello! My name is Ice Cream :ice_cream:! I am in version ${config.version} and I am used in: ${bot.guilds.size} servers and ${bot.users.size} people, I am a multifunctioning bot for everyone! My main server is here: https://discord.gg/TvdBENY`
      },
    ],
    timestamp: new Date(),
    footer: {
      text: "Ice Cream | By Pixl#1114"
    }
  }});
};
