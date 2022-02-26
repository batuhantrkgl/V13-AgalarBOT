const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed, Discord } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('oylama')
        .setDescription('Oylama yapar.')
        .addStringOption(option => 
            option.setName('konu')
            .setDescription('Oylama Konusunu Yazınız.')
            .setRequired(true)),
    async execute(interaction, args, message, client) {

       
        const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('destek')
					.setLabel('Destekliyorum')
					.setStyle('SUCCESS')
                    .setEmoji("946070953719373855")
            )

           
			.addComponents(
				new MessageButton()
					.setCustomId('destekleme')
					.setLabel('Desteklemiyorum')
					.setStyle('DANGER')
                    .setEmoji("946070767014121523"),
			)





        let Embed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor({ name: `${interaction.user.tag} Adlı Kişinin Oylaması`, iconURL:` ${interaction.user.avatarURL().replace('webp','gif')} `})
        .setDescription(`${interaction.options.get("konu")?.value}`)
        .setFooter(`Batuhantrkgl ♡ Discord.js | Butonlara Basarak Oy Kullanabilirsiniz.`)
        await interaction.reply({embeds: [Embed], components: [row] });




        const collector = interaction.channel.createMessageComponentCollector({ componentType: 'BUTTON', time: 600000 });

        collector.on('collect', async i => {
            if (i.customId === 'destek') {
                const embed1 = new MessageEmbed()
                 .setColor('#3ca55d')
                 .setTitle('Oylama')
                 .setDescription(`Merhaba ${interaction.member.user},\nBaşarı İle Destekliyorum oyunu kullandınız `);
                await i.reply({ embeds : [embed1], ephemeral: true });
                await i.fetchReply()
                .then(reply => console.log(reply.id))
                .catch(console.error);
            }else if (i.customId === 'destekleme') {
                const embed2 = new MessageEmbed()
                 .setColor('#ec4144')
                 .setTitle('Oylama')
                 .setDescription(`Merhaba ${interaction.member.user},\nBaşarı İle Desteklemiyorum oyunu kullandınız `);
                await i.reply({ embeds : [embed2], ephemeral: true });
            }
        }); 

        
        collector.on('end', collected => interaction.editReply({components:[]}));
        
        
        }
    }


