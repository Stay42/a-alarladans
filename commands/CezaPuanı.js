const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db")
const moment = require("moment")
const conf = require('../config.js');

module.exports.run = async (client, message, args) => {

let reawEmbed = new Discord.MessageEmbed().setColor("f1f1f1").setFooter("tali ???? Shiva").setTimestamp().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
let embed = reawEmbed;

let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author;

                                                      
  
message.channel.send(reawEmbed.setDescription(`
:no_entry_sign: ${member} isimli kullan覺c覺n覺n ceza puan覺 ve ceza say覺lar覺:

Toplam **${db.fetch(`muteSayi.${member.id}`) || "0"}.** kez mute cezas覺 alm覺??!
Toplam **${db.fetch(`jailSayi.${member.id}`) || "0"}.** kez jail cezas覺 alm覺??!
Toplam **${db.fetch(`banSayi.${member.id}`) || "0"}.** kez yasaklama cezas覺 alm覺??!
Toplam **${db.fetch(`vmuteSayi.${member.id}`) || "0"}.** kez ses mute alm覺??!

\`Toplam Ceza Puan覺:\` **${db.fetch(`cezaPuani.${member.id}`) || "0"}.**

**??颯?颯?颯?颯?颯?颯?颯?颯?颯?颯?颯?颯?颯?颯?颯?颯??**

Toplam **${db.fetch(`muteSayiYT.${member.id}`) || "0"}.** kez mute cezas覺 uygulam覺??!
Toplam **${db.fetch(`jailSayiYT.${member.id}`) || "0"}.** kez jail cezas覺 uygulam覺??!
Toplam **${db.fetch(`banSayiYT.${member.id}`) || "0"}.** kez yasaklama cezas覺 uygulam覺??!
Toplam **${db.fetch(`vmuteSayiYT.${member.id}`) || "0"}.** kez ses mute cezas覺 uygulam覺??!

`))
};

exports.config = {
  name: "cezapuan覺",
  guildOnly: false,
  aliases: ["topceza", "cezalar覺m"],
};