const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Bot Hakkında Yardım İçeriklerini Gösterir.'),

        async execute(interaction) {
        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Agalar Bot Yardım')
            .setDescription('**Komutlar**')
            .addField('**help**', 'Bot Hakkında Yardım İçeriklerini Gösterir.')
            .addField('**avatar**', 'Avatarınızı gösterir.')
            .addField('**ping**', 'Botun Pingini Gösterir.')
            .addField('**say**', 'Yazdığınız Şeyi Söyler.')
            .addField('**oylama**', 'Oylama Yapar.')
            interaction.reply({embeds: [embed]});
        }
    }