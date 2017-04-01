module.exports.func = function (bot, msg){
  var args = msg.content.split(" ");
  args.splice(0, 1);
  args = args.join(" ");
  var unirest = require("unirest");
  unirest.post("https://neutrinoapi-phone-validate.p.mashape.com/phone-validate")
.header("X-Mashape-Key", "mashape-key")
.header("Content-Type", "application/x-www-form-urlencoded")
.header("Accept", "application/json")
.send("country-code=US")
.send(`number=${args}`)
.end(function (result) {
  msg.channel.send(result.status, result.headers, result.body);
});
};
