var Discord = require('discord.io');

client.on("message", (message) => {
  if (message.channel.type === "dm") {
    if (message.author.id != client.user.id) {
      let yumz = new Discord.RichEmbed()
      .setTimestamp()
      .setTitle("Direct Message To The Bot")
      .addField("Sent By", message.author.username)
      .setColor("RANDOM")
      .setThumbnail(message.author.displayAvatarURL)
      .addField('Message:', message.content)
      .setFooter('DM Bot Messages | DM Logs')
      client.channels.find('id','404968772969955329').send(yumz) // channel id
    }       
  }
});
