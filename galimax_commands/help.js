module.exports.func = function (bot, msg) {
  msg.react("🍨");
  msg.channel.send("Commands sent to you via DMs :ice_cream: :ok_hand:")
  msg.author.sendMessage(`New Commands:\n-ban (@user) (reason) | Bans the user for a reason\nkick (@user) (reason) | Kicks the user for a reason\nlovecalc (person1) (person2) | Says the compatibility of the 2 names.`);
  msg.author.send("", {
    embed: { //add owner
      title: "Fun Section Commands", //owner,info,voice
      description:  `
      lovecalc (person1) (person2) | Says the compatibility of the 2 names.
      ping | Sends pong back with delay.
      cat | Gives a random picture from random.cat.
      say | Makes me say user-defined message.
      coinflip | Flips a coin!
      btcprice <value> | Displays how much btc you would get for the value you put.
      infogen | Generates fake info (useful for surveys).
      md5crypt <text> | Encrypts your text with md5.
      md5decrypt <hash> | Decrypts md5 hash.
      rndfact | Gives a random fact.
      OwO | Displays the OwO whats this copypasta.
      steamgames <steam64id> | Displays users games/hrs played.
      rndsteam | Displays a random 3-letter steam account.
      dice_role | Rolls a 6-sided dice.
      geoip | Gives geographical information on any IP.
      rndurl | Displays a random URL.
      tweet <tweet> | Tweets from @inb4blocked.
      howtogoogle | Gives you lmgtfy link. Replace spaces with + <example> I+can+howtogoogle
      myid | Displays your ID.
      rndproxy | Generates a random proxy.
      text2coolfont <text> | Converts text into 匚口口ㄥ ⓕⓞⓝⓣ
      `,
      timestamp: new Date(),
      color: 0x4077FF
    }
  });
  msg.author.send("", {
    embed: {
      title: "Info Section Commands",
      description:  `
      owner | Shows who owns Ice Cream.
      invite | Gives invite link to add Ice Cream to your server.
      donate | Gives you my link to donate.
      info | Gives information about me.
      proxychecker <ip> | Checks if IP is a proxy. (not 100% accurate)
      portscanner <ip/url> | Scans for open ports on the ip/url.
      websiteheaders <url> |Will return information gathered from the given website.
      wordcount <url> | Counts how much words are displayed.
      passwordgen <length from 8-40> | Generates a random password depending on the length.
      mcinfo <hostname> | Displays statistics on the Minecraft server specified.
      cfresolver <url> | Displays IP from a cloudflare site.
      urlshort <url> | Shorts the url to a bit.ly link.
      isitup <url> | Checks if the website is up.
      whois <url> | Displays WHOIS stats on a URL.
      url2ip <url> | Displays IP Address of a website.
      ytstats <id> | Displays basic YT Stats on a video.
      twitterstats <tweet/profile link> | Displays basic Twitter Stats on a tweet.
      instagramstats <profile link> | Displays basiv Instagram Stats on a picture.
      rndproxy | Generates a random proxy.
      `,
      timestamp: new Date(),
      color: 0x4077FF
    }
  });
  msg.author.send("", {
    embed: {
      title: "Moderation Section Commands",
      description:  `
       ban (@user) (reason) | Bans the user for a reason
       kick (@user) (reason) | Kicks the user for a reason
      `,
      timestamp: new Date(),
      color: 0x4077FF
    }
  });
    msg.author.send("", {
    embed: {
      title: "Owner Section Commands",
      description:  `
       owner | Shows who owns Ice Cream.
       suggest | Sends my owner suggestions you give me.
      `,
      timestamp: new Date(),
      color: 0x4077FF
    }
  });
  msg.author.send("", {
    embed: {
      title: "Audio Section Commands",
      description:  `
       joinvoice | Joins current voice channel.
       leavevoice | Leaves the voice channel.
       playyt <yt link> | Plays youtube link through voice.
      `,
      timestamp: new Date(),
      color: 0x4077FF
    }
  });
  msg.channel.sendMessage("Ice Cream is now in the process of being open source!");
};
