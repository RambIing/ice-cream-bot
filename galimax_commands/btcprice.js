module.exports.func = function (bot, msg) {
    var args = msg.content.split(" ");
    args.splice(0, 1);
    args = args.join(" ");
    const request = require('request');
    request("https://murkapi.com/btc.php?key=key&cur=USD&value=" + args, function (error, response, body) {
                if (!error) {
                    msg.channel.sendMessage(body);
                }
            });
}