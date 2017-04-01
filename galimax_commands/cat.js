const request = require("superagent"); //Require Superagent
module.exports.func = function (bot, msg) {
  request.get("http://www.random.cat/meow", (err, res) => {
    msg.channel.send(res.body.file).then(msg.channel.send(":cat: :ice_cream: Here is a picture of a random cat!")); //Send the File (picture of random cat)
  });};
