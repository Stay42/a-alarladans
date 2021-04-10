const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db")
const moment = require("moment")
const conf = require('../config.js');

module.exports.run = async (client, message, args) => {

let reawEmbed = new Discord.MessageEmbed().setColor("f1f1f1").setFooter("tali 🤍 Shiva").setTimestamp().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
let embed = reawEmbed;

let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author;

                                                      
  
message.channel.send(reawEmbed.setDescription(`
:no_entry_sign: ${member} isimli kullanıcının ceza puanı ve ceza sayıları:

Toplam **${db.fetch(`muteSayi.${member.id}`) || "0"}.** kez mute cezası almış!
Toplam **${db.fetch(`jailSayi.${member.id}`) || "0"}.** kez jail cezası almış!
Toplam **${db.fetch(`banSayi.${member.id}`) || "0"}.** kez yasaklama cezası almış!
Toplam **${db.fetch(`vmuteSayi.${member.id}`) || "0"}.** kez ses mute almış!

\`Toplam Ceza Puanı:\` **${db.fetch(`cezaPuani.${member.id}`) || "0"}.**

**・・・・・・・・・・・・・・・・・**

Toplam **${db.fetch(`muteSayiYT.${member.id}`) || "0"}.** kez mute cezası uygulamış!
Toplam **${db.fetch(`jailSayiYT.${member.id}`) || "0"}.** kez jail cezası uygulamış!
Toplam **${db.fetch(`banSayiYT.${member.id}`) || "0"}.** kez yasaklama cezası uygulamış!
Toplam **${db.fetch(`vmuteSayiYT.${member.id}`) || "0"}.** kez ses mute cezası uygulamış!

`))
};

exports.config = {
  name: "cezapuanı",
  guildOnly: false,
  aliases: ["topceza", "cezalarım"],
};