const { Client, Collection, Intents, MessageButton, MessageActionRow, MessageEmbed  } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const client = new Client({ intents: 32767});
module.exports = {
    data: new SlashCommandBuilder()
        .setName('say')
        .setDescription('Yazdığınız Şeyi Söyler')
        .addStringOption(option => 
            option.setName('metin')
            .setDescription('Söyletmek İstediğiniz Metini Yazınız')
            .setRequired(true)),
    async execute(interaction) {
       await interaction.reply({ content: "komut Başarılı Şekilde Çalıştırıldı!", ephemeral: true });
 const ichannel = interaction.channelId;
const mchannel = interaction.guild.channels.cache.get(ichannel)
mchannel.send(`${interaction.options.get("metin")?.value}`)

	},

}