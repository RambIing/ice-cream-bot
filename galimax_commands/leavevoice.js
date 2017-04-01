module.exports.func = function (bot, msg) {
    const channel = msg.member.voiceChannel;
    channel.leave();
    msg.channel.sendMessage("Bot has left voice channel. :ice_cream:");
}
