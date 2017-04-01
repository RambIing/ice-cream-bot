const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
var searchYT = require('youtube-search');
//const fml = require("random_fml")
const fs = require("fs");
const request = require('request');
client.on("ready", () => {
  client.user.setGame(`$$help for cmds | I am in ${client.guilds.size} servers!`)
  console.log(`Logged in as ${client.user.username}!`);
  client.channels.get("292139999292424192").send("", {
    embed: {
      title: "Ice Cream Online! :ice_cream:",
      description: `I have started up again, I am in ${client.guilds.size} guilds, ${client.channels.size} channels, and I can see ${client.users.size} people! :ice_cream:`,
      timestamp: new Date(),
      color: 0x0049FF
    }
  });
});
client.on("guildMemberAdd", member => {
  if (member.guild.id === "110373943822540800") return;
  if (member.guild.id === "94891528303943680") return;
  let guild = member.guild;
  guild.defaultChannel.send(`Welcome ${member.user.username}.`);
  member.sendMessage("Welcome! Thanks for joining! To talk in the server please verify you can read the rules and accept them.");
  member.send(
  {
    embed: {
    color: 0x0049FF,
    description: "**Rules**\n",
    fields: [
      {
        name: "Rules",
        value: "1. Be nice. \n2. Dont be rude. \n3. No spamming, advertising, or NSFW content. Don't be a jerk or generally obnoxious - nobody likes trolls. \n4. Don't ask for staff.\n5. No self bots. We dont need your bot responding to people saying hi.\nThats all!\n_Remember, breaking these rules can get you muted/kicked/banned depending on the owner._"
      }
    ]
  }}).catch(console.error);
});

client.on("guildMemberRemove", member => {
  if (member.guild.id === "110373943822540800") return;
  let guild = member.guild;
  guild.defaultChannel.send(`${member.user.username} has left. :ice_cream:`);
});

client.on("guildCreate", guild => {
  request.post("https://bots.discord.pw/api/bots/"+client.user.id+"/stats",{headers:{"Authorization":config.dbotsapi},json:{server_count:client.guilds.size}});
  client.user.setGame(`$$help for cmds | I am in ${client.guilds.size} servers!`)
  console.log(`I have joined a server : ***${guild.name}***, owned by ***${guild.owner.user.username}***`);
  client.channels.get(config.guildchannelid).send(`:envelope_with_arrow: OAuth joined ${guild.name}, owned by ${guild.owner.user.username}. I am now in ${client.guilds.size} guilds. :ice_cream:`);
  guild.defaultChannel.send(`Hello! I am Ice Cream. I am a music and multi-purpose bot.\nTo the looks you would like me to moderate, help you, or use my fun commands.\nMy prefix is: $$.\nEnjoy!\nIf you have any issues/need help join my main server: https://discord.gg/TvdBENY`)
});

client.on("guildDelete", guild => {
  request.post("https://bots.discord.pw/api/bots/"+client.user.id+"/stats",{headers:{"Authorization":config.dbotsapi},json:{server_count:client.guilds.size}});
  client.user.setGame(`$$help for cmds | I am in ${client.guilds.size} servers!`);
  client.channels.get(config.guildchannelid).send(`:envelope_with_arrow: OAuth left ${guild.name}. I am now in ${client.guilds.size} guilds. :ice_cream:`);
});



client.on("message", msg => {
  let prefix = "$$";
  var commands = fs.readdirSync("./galimax_commands/");
  if (msg.content.startsWith(prefix)) {
    var command = msg.content.split(" ")[0].replace("$$", "");
    if (commands.indexOf(command + ".js") > -1) {
      var cmd = require("./galimax_commands/" + command + ".js");
      var args = msg.content.split(" ");
      args.splice(0, 1);
      args = args.join(" ");
      try {
        cmd.func(client, msg, args);
      } catch (err) {
        console.log("error", "Command " + command + " error! " + err.stack);
        msg.channel.send(":warning: Error in the `COMMAND_LOAD` event! This has been reported! :ice_cream:");
        client.channels.get(config.errorid).send("", {
          embed: {
            title: ":warning: Error :warning:",
            description: "Error during the `COMMAND_LOAD` event. Stack trace in console. **Shortened Error:**\n```js\n" + err + "```",
            timestamp: new Date(),
            color: 0xFF0000
          }
        });
      }
    }
  }
});

client.login(config.token);
