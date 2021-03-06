const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db")
const moment = require("moment")
const conf = require('../config.js');

module.exports.run = async (client, message, args) => {

let reawEmbed = new Discord.MessageEmbed().setColor("f1f1f1").setFooter("tali ???? Shiva").setTimestamp().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
let embed = reawEmbed;

let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author;

let sicil = db.get(`sicil.${member.id}`) || [];
sicil.reverse();
let listeliSicil = sicil.length < 1 ? "Sicil ge癟mi??i bulunamad覺!" : sicil.map((value) => `<@!${value.Yetkili}> taraf覺ndan **${value.Sebep}** sebebi ile **${value.Ceza}** cezas覺 alm覺??!`).join("\n")
                                                                        
  
message.channel.send(reawEmbed.setDescription(`
:no_entry_sign: ${member} isimli kullan覺c覺n覺n ceza ge癟mi??i:

${listeliSicil}

\`Toplam Ceza Puan覺:\` ${db.fetch(`cezaPuani.${member.id}`) || "0"}.
`))
};

exports.config = {
  name: "sicil",
  guildOnly: false,
  aliases: ["ge癟mi??", "ceza-ge癟mi??i"],
};