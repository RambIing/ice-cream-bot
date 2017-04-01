module.exports.func = function (bot, msg) {
  startTime = Date.now();
  msg.channel.sendMessage("Calculating roundtrip....").then((message) => {
    endTime = Date.now();
     message.edit(":ice_cream: | Delay is:" + Math.round(endTime - startTime) + "ms");
  }
)};
