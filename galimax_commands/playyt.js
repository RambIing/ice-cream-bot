var whitelist = [292139933835984897, 94891528303943680];
module.exports.func = function (bot, msg) {
  var args = msg.content.split(" ");
  args.splice(0, 1);
  args = args.join(" ");
  const ytdl = require('ytdl-core');
  const channel = msg.member.voiceChannel;
const streamOptions = { seek: 0, volume: 1 };
if (whitelist.includes(msg.guild.id)) {
  channel.join().then(connection => {
   const stream = ytdl(`${args}`, {filter : 'audioonly'});
   const dispatcher = connection.playStream(stream, streamOptions);
 })
 .catch(console.error);
} else {
  channel.join().then(connection => {
   const stream = ytdl(`${args}`, {filter : 'audioonly'});
   const dispatcher = connection.playStream(stream, streamOptions);
 })
 .catch(console.error);
};
}
