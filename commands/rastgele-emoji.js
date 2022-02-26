const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rastgele-emoji')
        .setDescription('Rastgele emoji atar.'),
    async execute(interaction) {
        const emojiList = interaction.guild.emojis.cache.array();
        const randomEmoji = emojiList[Math.floor(Math.random() * emojiList.length)];
        await interaction.reply(`${randomEmoji}`);
    }
}