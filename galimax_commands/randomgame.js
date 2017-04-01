const config = require("./config.json");
module.exports.func = function (bot) {
  var str = config.games;
  var arr = str.split(",");
  setInterval(function(){
    var game = arr[Math.floor(Math.random() * arr.length)];
    bot.user.setGame(game);
  },3000);
};
