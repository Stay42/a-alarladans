const Discord = require("discord.js")
const moment = require("moment")
const db = require("quick.db")
const a = require('../config.js');

module.exports.run = async(client,message,args) => {
const guild = message.guild;
const executor = message.member;
moment.locale("tr") // T羹rkiye bura
//Embed
let oziemb = new Discord.MessageEmbed().setColor("f1f1f1").setFooter("tali ???? Shiva").setTimestamp().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
    

//Gerekli IDLER!!!!! (Haz覺r proje de??ilse buray覺 doldurun)
let cezarolu = a.banSorumlusu  
let ublog = a.banLog 
ublog = guild.channels.cache.get(ublog)
//
let cezarolismi = guild.roles.cache.get(cezarolu).name
//

if(!executor.hasPermission("ADMINISTRATOR") && !executor.roles.cache.has(cezarolu)) {message.react(a.no);
    return message.channel.send(oziemb.setDescription(`<a:carpi:795693041524408351> Bu komutu kullanmak i癟in gerekli yetkilere sahip de??ilsiniz!`));
}

if(!args[0]) {message.react(a.no);
    return message.channel.send(oziemb.setDescription(`<a:carpi:795693041524408351> Ge癟erli bir ID belirtmelisiniz!`));
}
let sorguid = args[0]
let kisi = await client.users.fetch(sorguid)
// Try Catch kullanal覺m ki yasaklamay覺 acabilcegim biri var m覺 buluy覺m

try {
    guild.members.unban(sorguid)
} catch (err) {
    console.log(err) 
    message.react(a.no);
    return message.channel.send(oziemb.setDescription(`${client.emojis.cache.get(a.no)} Belirtilen ID numaras覺na sahip bir ban bulunamad覺!`));
}
let tarih = moment(message.createdAt).format("lll")
message.channel.send(oziemb.setDescription(`${client.emojis.cache.get(a.yes)} ${kisi} kullan覺c覺s覺n覺n cezas覺 ${message.author} taraf覺ndan kald覺r覺ld覺!`));
ublog.send(oziemb.setDescription(`${client.emojis.cache.get(a.yes)} ${kisi} kullan覺c覺s覺n覺n cezas覺 ${message.author} taraf覺ndan kald覺r覺ld覺!`));
let cezano = db.fetch(`CezaNo_${guild.name}`);

  }


exports.config = {
  name: "unban",
  guildOnly: true,
  aliases: ["unban", "bana癟", "s繹nd羹r"],
};
