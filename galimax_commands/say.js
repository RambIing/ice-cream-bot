module.exports.func = function (bot, msg) {
  if (msg.author.bot) return;
  var args = msg.content.split(" ");
  args.splice(0, 1);
  args = args.join(" ");
  msg.channel.send(args);
};
