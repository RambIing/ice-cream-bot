module.exports.func = function (bot, msg) {
  msg.channel.send("", {
    embed: {
      title: "Invite",
      description:  `
      My invite link is: https://discordapp.com/oauth2/authorize?client_id=292139791016001537&scope=bot&permissions=1005710463
      `,
      timestamp: new Date(),
      color: 0x4077FF
    }
  });
};
