const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db")
const moment = require("moment")
const conf = require('../config.js');
const a = require('../config.js');

module.exports.run = async (client, message, args) => {

let reawEmbed = new Discord.MessageEmbed().setColor("f1f1f1").setFooter("tali ???? Shiva").setTimestamp().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
let embed = reawEmbed;

if (!args[0]) {
message.channel.send(reawEmbed.setDescription(`
:no_entry_sign: **Ceza Bilgilendirmesi:**

\`>\` Cezalar hakk覺nda bilgi almak i癟in bu komutu kullanabilirsiniz! Cezalar覺n nas覺l i??ledi??i, hangi konuda ne bi癟imde yard覺m alabilece??iniz a??a??覺da belirtilmi??tir.

Cezalar veritaban覺na kaydedilir. Her ceza ba??覺na belirli ceza puanlar覺 al覺rs覺n覺z. Ceza puanlar覺 a??a??覺da verilmi??tir.

Ban: **25**
Kick: **20**
Jail: **15**
Mute: **10**
Vmute: **10**

Her ceza sebepleri ile beraber sicil veritaban覺na kaydedilir. Sicil kay覺tlar覺na bakmak i癟in: **${a.prefix}sicil @tali/taliID**
`))
return; 
}

if (args[0] === "jail") {
message.channel.send(reawEmbed.setDescription(`
:no_entry_sign: **Jail Ceza Bilgilendirmesi:**

\`>\` Ceza Puan覺: **15**.
\`>\` Gerekli Rol: <@&${a.jailSorumlusu}>
\`>\` Ceza Rol羹: <@&${a.jailRolu}>
\`>\` Ceza: **Kanallara eri??im yetkiniz al覺n覺r.**
`))
return;
}
if (args[0] === "mute") {
message.channel.send(reawEmbed.setDescription(`
:no_entry_sign: **Mute Ceza Bilgilendirmesi:**
    
\`>\` Ceza Puan覺: **10**.
\`>\` Gerekli Rol: <@&${a.muteSorumlusu}>
\`>\` Ceza Rol羹: <@&${a.muteRolu}>
\`>\` Ceza: **Metin kanallara yazma yetkiniz al覺n覺r.**
    `))
    return;
    }
if (args[0] === "vmute") {
message.channel.send(reawEmbed.setDescription(`
:no_entry_sign: **Mute Ceza Bilgilendirmesi:**
    
\`>\` Ceza Puan覺: **10**.
\`>\` Gerekli Rol: <@&${a.muteSorumlusu}>
\`>\` Ceza Rol羹: <@&${a.muteRolu}>
\`>\` Ceza: **Sesli kanallarda konu??ma yetkiniz al覺n覺r.**
    `))
    return;
    }
    if (args[0] === "ban") {
message.channel.send(reawEmbed.setDescription(`
    :no_entry_sign: **Ban Ceza Bilgilendirmesi:**
            
    \`>\` Ceza Puan覺: **25**.
    \`>\` Gerekli Rol: <@&${a.banSorumlusu}>
    \`>\` Ceza Rol羹: Bulunmamaktad覺r!
    \`>\` Ceza: **Sunucudan s覺n覺rd覺??覺 edilirsiniz!**
    `))
    return;
}
};

exports.config = {
  name: "bilgi",
  guildOnly: true,
  aliases: ["cezalar"],
};
