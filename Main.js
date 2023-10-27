// Require the necessary discord.js classes and config file
const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('fs');
const { token, prefix } = require('./config.json');


// Create a new client instance
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});


//Ready message when bot is online (node Main.js)
client.once('ready', () => {
	console.log("May your path be blessed with good fortune.");
});


client.on('error', error => {
    console.error('An error occurred:', error);
});

client.login(token);