module.exports.func = function (bot, msg) {
if (msg.member.voiceChannel) {
      msg.member.voiceChannel.join()
        .then(connection => { // connection is an instance of VoiceConnection
          msg.channel.sendMessage('I am now binded to this voice channel.');
        })
        .catch(console.log);
    } else {
      msg.channel.sendMessage('You need to join a voice channel first!');
    }
  };
