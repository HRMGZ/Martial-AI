const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
        .setCooldown(10)
		.setName('help')
		.setDescription('Provides information about the bot.'),
	async execute(interaction) {
		await interaction.reply('Bot WIP, please wait for further updates.');
	},
};