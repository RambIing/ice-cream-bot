module.exports.func = function (bot, msg) {
    var args = msg.content.split(" ");
    args.splice(0, 1);
    args = args.join(" ");
    const request = require('request');
request("https://murkapi.com/header.php?key=key&url=" + args, function (error, response, body) {
 if (!error) {
       var replacestr = '<br>';
       var regex = /<br\s*[\/]?>/gi;
       if (body.length < 2000) {
           msg.channel.sendMessage(body.replace(regex,'\n'));
       } else {
           var count = 0;
           var end = 1999;
           while (count < body.length) {
               msg.channel.sendMessage(body.substring(count, end).replace(regex, '\n'));
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
