module.exports.func = function (bot, msg) {
    const request = require('request');
    request("https://murkapi.com/proxygen.php?key=key", function (error, response, body) {
                if (!error) {
                    msg.channel.sendMessage(body);
                }
            });
}