const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db")
const moment = require("moment")
const conf = require('../config.js');

module.exports.run = async (client, message, args) => {

let reawEmbed = new Discord.MessageEmbed().setColor("f1f1f1").setFooter("tali 🤍 Shiva").setTimestamp().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
let embed = reawEmbed;

let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author;

let sicil = db.get(`sicil.${member.id}`) || [];
sicil.reverse();
let listeliSicil = sicil.length < 1 ? "Sicil geçmişi bulunamadı!" : sicil.map((value) => `<@!${value.Yetkili}> tarafından **${value.Sebep}** sebebi ile **${value.Ceza}** cezası almış!`).join("\n")
                                                                        
  
message.channel.send(reawEmbed.setDescription(`
:no_entry_sign: ${member} isimli kullanıcının ceza geçmişi:

${listeliSicil}

\`Toplam Ceza Puanı:\` ${db.fetch(`cezaPuani.${member.id}`) || "0"}.
`))
};

exports.config = {
  name: "sicil",
  guildOnly: false,
  aliases: ["geçmiş", "ceza-geçmişi"],
};