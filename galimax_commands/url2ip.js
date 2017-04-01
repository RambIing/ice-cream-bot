module.exports.func = function (bot, msg) {
    var args = msg.content.split(" ");
    args.splice(0, 1);
    args = args.join(" ");
    const request = require('request');
    request("https://murkapi.com/url2ip.php?key=key&domain=" + args, function (error, response, body) {
      if (!error) {
          var replacestr = '</strong>';
          var regex = /<br\s*[\/]?>/gi;
          if (body.length < 2000) {
              msg.channel.sendMessage(body.replace(regex,''));
          } else {
              var count = 0;
              var end = 1999;
              while (count < body.length) {
                  msg.channel.sendMessage(body.substring(count, end).replace(regex, ''));
                  count += 1999;
                  end += 1999;
                  if (count > body.length)
                      count = body.length;
                  if (end > body.length)
                      end = body.length;
              }
          }
      }
            });
}
