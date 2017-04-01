const Discord = require("discord.js"); 
module.exports.func = function (bot, msg) {
    var magicEightBall = new Array(
  'As I see it, yes',
  'Better not tell you now',
  'Cannot predict now',
  'Don\'t count on it',
  'If you say so',
  'In your dreams',
  'It is certain',
  'Most likely',
  'Out of psychic coverage range',
  'Signs point to yes',
  'Sure, sure',
  'Shake harder and ask again',
  'Sorry, Ask again',
  'Ask again later',
  'Very doubtful',
  'Without a doubt',
  'Yes, definitely',
  'You can\'t handle the truth',
  'Sadly, we say no.',
  'I don\'t approve',
  'I don\'t agree.',
  'Unknown.',
  'Yes',
  'No'
)
       var magicEightBallResult = Math.floor(Math.random()*magicEightBall.length);
       const embed = new Discord.RichEmbed()
            .setTitle('')
            .setAuthor( msg.author.username, msg.author.avatarURL )
            .setColor([121, 212, 242])
            .setDescription(`\n`)
            .setFooter('', '')
            .setImage( "https://cdn.shopify.com/s/files/1/1061/1924/files/Crystal_Magic_Ball.png?9898922749706957214" )
            .setThumbnail( "" )
            .setTimestamp( '' )
            .setURL('')
            .addField(`\n:crystal_ball: You shake the ball, it says: :crystal_ball:`, `${magicEightBall[magicEightBallResult]}`);

        msg.channel.sendEmbed(embed, '', { disableEveryone: true });
return;
}