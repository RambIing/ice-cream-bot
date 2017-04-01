module.exports.func = function (bot, msg) {
    const request = require('request');
    request("https://murkapi.com/urls.php?key=key", function (error, response, body) {
                if (!error) {
                    msg.channel.sendMessage(body);
                }
            });
}