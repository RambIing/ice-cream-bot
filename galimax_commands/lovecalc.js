const Discord = require("discord.js");
const unirest = require("unirest");
module.exports.func = function (bot, msg) {
    var cmd = "$$";
       let args = msg.content.replace(cmd + "lovecalc ", "").split(" ");

      if (args.length < 2) {
        msg.reply("Please specify 2 people's names to use the **Love Calculator** on");
        return;
      }

      unirest.get("https://love-calculator.p.mashape.com/getPercentage?fname=" + args[0] + "&sname=" + args[1])
        .header("X-Mashape-Key", "mashape-key")
        .header("Accept", "application/json")
        .end(function (result) {
          const embed = new Discord.RichEmbed()
            .setTitle('-=-=-=-= Love Calculator -=-=-=-=')
            .setAuthor(msg.author.username, msg.author.avatarURL)
            .setColor([121, 212, 242])
            .setDescription(`\n`)
            .setFooter('', '')
            .setImage("")
            .setThumbnail("")
            .setTimestamp('')
            .setURL('')
            .addField(`-> Person One:`, `**${result.body.fname}**`)
            .addField(`-> Person Two:`, `**${result.body.sname}**`)
            .addField(`-> Compatibility (%)`, `**${result.body.percentage}**`)
            .addField(`-> Compatibility`, `**${result.body.result}**`)

          msg.channel.sendEmbed(embed, '', { disableEveryone: true });
        });
};