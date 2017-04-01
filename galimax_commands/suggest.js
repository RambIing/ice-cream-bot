const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
module.exports.func = function (bot, msg, args) {
var args = msg.content.split(" ");
args.splice(0, 1);
args = args.join(" ");
bot.channels.get("292140091789279233").send(`new suggestion from ${msg.author.username}: ${args}`)
}
