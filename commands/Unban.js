const Discord = require("discord.js")
const moment = require("moment")
const db = require("quick.db")
const a = require('../config.js');

module.exports.run = async(client,message,args) => {
const guild = message.guild;
const executor = message.member;
moment.locale("tr") // Türkiye bura
//Embed
let oziemb = new Discord.MessageEmbed().setColor("f1f1f1").setFooter("tali 🤍 Shiva").setTimestamp().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
    

//Gerekli IDLER!!!!! (Hazır proje değilse burayı doldurun)
let cezarolu = a.banSorumlusu  
let ublog = a.banLog 
ublog = guild.channels.cache.get(ublog)
//
let cezarolismi = guild.roles.cache.get(cezarolu).name
//

if(!executor.hasPermission("ADMINISTRATOR") && !executor.roles.cache.has(cezarolu)) {message.react(a.no);
    return message.channel.send(oziemb.setDescription(`<a:carpi:795693041524408351> Bu komutu kullanmak için gerekli yetkilere sahip değilsiniz!`));
}

if(!args[0]) {message.react(a.no);
    return message.channel.send(oziemb.setDescription(`<a:carpi:795693041524408351> Geçerli bir ID belirtmelisiniz!`));
}
let sorguid = args[0]
let kisi = await client.users.fetch(sorguid)
// Try Catch kullanalım ki yasaklamayı acabilcegim biri var mı buluyım

try {
    guild.members.unban(sorguid)
} catch (err) {
    console.log(err) 
    message.react(a.no);
    return message.channel.send(oziemb.setDescription(`${client.emojis.cache.get(a.no)} Belirtilen ID numarasına sahip bir ban bulunamadı!`));
}
let tarih = moment(message.createdAt).format("lll")
message.channel.send(oziemb.setDescription(`${client.emojis.cache.get(a.yes)} ${kisi} kullanıcısının cezası ${message.author} tarafından kaldırıldı!`));
ublog.send(oziemb.setDescription(`${client.emojis.cache.get(a.yes)} ${kisi} kullanıcısının cezası ${message.author} tarafından kaldırıldı!`));
let cezano = db.fetch(`CezaNo_${guild.name}`);

  }


exports.config = {
  name: "unban",
  guildOnly: true,
  aliases: ["unban", "banaç", "söndür"],
};
