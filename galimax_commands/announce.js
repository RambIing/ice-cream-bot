const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
module.exports.func = function (bot, msg, args) {
  if (msg.author.id === "204073983769968640") {
                var args = msg.content.split(" ");
              args.splice(0, 1);
              args = args.join(" ");
              bot.channels.get("292140056347672576").send(`@everyone ***Announcement From Ice Cream Developers*** :
  ${args}
                `)
              }else{
            msg.channel.sendMessage(":warning: You have been logged for trying to type in an admin command. Trying again will get you BANNED :ice_cream:")
            msg.channel.sendMessage(`${msg.author.user} tried to make an announcment!`)
              }
}
