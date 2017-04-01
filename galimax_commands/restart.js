const config = require("./config.json");
module.exports.func = function (bot, msg) {
  var args = msg.content.split(" ");
  args.splice(0, 1);
  args = args.join(" ");
  if(msg.author.id === "204073983769968640") {
    if (args === "") {
    msg.channel.sendMessage("Please specify a reason for restart.");
    return; 
  } else {
    msg.channel.send(`Bot has been restarted for the reason: ${args}`);
  } 
} else {
  msg.channel.sendMessage("You dont have permission to restart!");
  return;
}
function exit() {
      process.exit();
    }
    setTimeout(exit(), 3000);
};
