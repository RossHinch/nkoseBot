var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
	colorize:true
});
logger.level = 'debug';
// Initialize discord Bot
var bot = new Discord.Client({
	token: auth.token,
	autorun:true
});
bot.on('ready',function (evt) {
	logger.info('Connected')
	logger.info('Logged in as: ');
	logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, usedID, channelID, message, evt) {
	// Our bot needs to know if it will execute a command
	// It will listen for messages that will start with '!'
	if (message.substring(0,1) == '!') {
		var args = message.substring(1).split(' ');
		var cmd = args[0];

		args = args.splice(1);
		switch(cmd) {
			// Ping
			case 'ping':
				bot.sendMessage({
					to: channelID,
					message: 'Pong!'
				});
			break;
			//just add any case commands if you want to..	
		}
	}
});

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
client.channels.find('id','749188813288374272').send(yumz) // channel id
}
}
});
