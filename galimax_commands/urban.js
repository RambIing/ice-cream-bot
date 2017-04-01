var unirest = require("unirest");
module.exports.func = function (bot, msg) {
  var args = msg.content.split(" ");
  args.splice(0, 1);
  args = args.join(" ");

  unirest.get(`https://mashape-community-urban-dictionary.p.mashape.com/define?term=${args}`)
  .header("X-Mashape-Key", "mashape-key")
  .header("Accept", "text/plain")
  .end(function (result) {
    msg.channel.send(result.body);
  });
};
