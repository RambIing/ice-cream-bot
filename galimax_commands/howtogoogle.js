module.exports.func = function (bot, msg) {
  var args = msg.content.split(" ");
  args.splice(0, 1);
  args = args.join(" ");
      var replacestr = ' ';
      var regex = /<br\s*[\/]?>/gi;
          msg.channel.sendMessage("http://www.lmgtfy.com/?q=" + args.replace(regex,'+'));
  }
