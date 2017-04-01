const Discord = require("discord.js");
module.exports.func = function (bot, msg) {
      var sender = "";
  if (msg.channel.guild.member(msg.author).nickname == null) {
    sender = msg.author.username;
  } else {
    sender = msg.channel.guild.member(msg.author).nickname;
  }
  msg.delete();
  const embed = new Discord.RichEmbed()
    .setTitle('Server Info:')
    .setAuthor(sender, msg.author.avatarURL)
    .setColor(0x00AE86)
    .setDescription('')
    .setFooter('', '')
    .setImage("https://www.iconexperience.com/_img/o_collection_png/green_dark_grey/512x512/plain/server_cloud.png")
    .setThumbnail("")
    .setTimestamp()
    .setURL('')
    .addField('\nName:', msg.guild.name, true)
    .addField('\nID:', msg.guild.id, true)
    .addField('\nMember Count:', msg.guild.memberCount, true)
    .addField('\nVoice Region:', msg.guild.region, true)
    .addField('\nCreated At', msg.guild.createdAt.toString(), true);

  msg.channel.sendEmbed(
    embed,
    '',
    { disableEveryone: true }
);
}