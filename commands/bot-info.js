const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Client } = require('discord.js');
var os = require('os');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('bot-bilgi')
        .setDescription('Bot Bilgilerini Gösterir.'),
    async execute(interaction,client) {
        //emojilerimizi tanımlıyoruz
        //emoji idleri botun bulunduğu sunucuda olmalıdır.
        const djs_emoji = client.emojis.cache.get('946840739868991548');
        const dev = client.emojis.cache.get('946840740649132042');
        const os_emoji = client.emojis.cache.get('946840741165035600');
        const v_emoji = client.emojis.cache.get('946840741383114792');
        const nodejs_emoji = client.emojis.cache.get('946842553687355432');
        const cekirdek = client.emojis.cache.get('946843497913278495');
        const süre_emoji = client.emojis.cache.get('947091054509817856');
        const tesekkur_emoji = client.emojis.cache.get('947092383500238888');
        //yazılarımızı tanımlıyoruz.
        //buradaki ${} içine tanımladığımız emojilerin adını yazıyoruz
        var version = `${v_emoji} **Version:** 2.2.5`;
        var developer = `${dev} **Developer:** Batuhantrkgl`;
        var djs_version =`${djs_emoji} **Discord.js Version:** v13.6.0`;
        var nodejs_version = `${nodejs_emoji} **Node.js Version:** v16.14.0`;
        var isletim_sistemi = ` ${os_emoji} **İşletim Sistemi:** `+os.platform();
        var cpu_arch = `${cekirdek} **Çekirdek Türü:**`+" "+os.arch();
        var ozel = `Easer#7548, Impecably Development, Discord.js, Node.js And Visiual Studio Code`;
        //burada uptime süremizi saat dakika ve saniye şeklinde bölüyoruz.
        var ut_sec = os.uptime();
        var ut_min = ut_sec/60;
        var ut_hour = ut_min/60;
        ut_sec = Math.floor(ut_sec);
        ut_min = Math.floor(ut_min);
        ut_hour = Math.floor(ut_hour);
          
        ut_hour = ut_hour%60;
        ut_min = ut_min%60;
        ut_sec = ut_sec%60;
        var süre = ` ${ut_hour} Saat ${ut_min} Dakika ${ut_sec} Saniye`;
        //devam
        var os_uptime = `${süre}`;
        const ping = `:ping_pong: ${interaction.client.ws.ping}`;
       //embedimiz
       const embed = new MessageEmbed()
       .setColor('RANDOM')
       .setTitle('Bot Bilgileri')
       .setDescription('**Bot Bilgilerini Gösterir.**')
       .addField(version, developer, true)
       .addField(djs_version, nodejs_version, true)
       .addField(isletim_sistemi, cpu_arch, true)
       .addField("Ping", ping, true)
       .addField(`${süre_emoji} Açık Kalma Süresi`, os_uptime, true)
       .addField(`${tesekkur_emoji} Special Thanks:`, ozel,  true)
       .setTimestamp();
           //embedi yolluyoruz
           interaction.reply({ embeds: [embed] });
   }
}