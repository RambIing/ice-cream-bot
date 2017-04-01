const Discord = require("discord.js");
const client = new Discord.Client();
const request = require("superagent") //Require Superagent
const config = require("./config.json");
module.exports.func = function (bot, msg, args) {
  msg.channel.send("My owner is Pixl and his server is here: https://discord.gg/TvdBENY")
}
