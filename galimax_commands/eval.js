const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
module.exports.func = function (bot, msg) {
const params = msg.content.split(" ");
const args = msg.content.split(" ").slice(1);
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
  if(msg.author.id === "204073983769968640") {
    try {
         var code = args.join(" ");
         var evaled = eval(code);

         if (typeof evaled !== "string") {
           evaled = require("util").inspect(evaled);
         }
         msg.channel.sendMessage(":ice_cream: Output:")
         msg.channel.sendCode("xl", clean(evaled));
       } catch(err) {
         msg.channel.sendMessage(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
       }
     } else {
    msg.channel.sendMessage(":warning: You have been logged for trying to type in an admin command. Trying again will get you BANNED :warning:");
    msg.channel.sendMessage(`${msg.author.user} tried to use eval!`);
  }};
