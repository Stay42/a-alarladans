const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db")
const moment = require("moment")
const conf = require('../config.js');
const a = require('../config.js');

module.exports.run = async (client, message, args) => {

let reawEmbed = new Discord.MessageEmbed().setColor("f1f1f1").setFooter("tali ???? Shiva").setTimestamp().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
let embed = reawEmbed;

let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
let sebep = args.splice(1).join(" ") || "Sebep belirtilmedi!";

if (!message.member.roles.cache.has(a.jailSorumlusu) && !message.member.hasPermission("ADMINISTRATOR")) {
message.channel.send(reawEmbed.setDescription(`${client.emojis.cache.get(a.no)} Bu komutu kullanmak i癟in gerekli yetkilere sahip de??ilsiniz!`))
message.react(a.no);
return;
};

if (!member) {
message.channel.send(reawEmbed.setDescription(`${client.emojis.cache.get(a.no)} Ge癟erli bir 羹ye belirtmelisiniz!`))
message.react(a.no);  
return;
};

if (member.id === message.author.id) {
message.channel.send(reawEmbed.setDescription(`${client.emojis.cache.get(a.no)} Kendinize ceza veremezsiniz!`))
message.react(a.no);  
return;
};

if (message.member.roles.highest.position <= member.roles.highest.position) {
message.channel.send(reawEmbed.setDescription(`${client.emojis.cache.get(a.no)} Belirtti??iniz 羹ye sizden 羹st/e??it pozisyonda!`))
message.react(a.no);  
return;
}



member.roles.remove(a.jailRolu).catch();
member.roles.add(a.kay覺ts覺z).catch();
member.roles.remove(a.jailRolu).catch();
member.roles.add(a.kay覺ts覺z).catch();
member.roles.remove(a.jailRolu).catch();
member.roles.add(a.kay覺ts覺z).catch();
member.roles.remove(a.jailRolu).catch();
member.roles.add(a.kay覺ts覺z).catch();

message.channel.send(reawEmbed.setDescription(`${client.emojis.cache.get(a.yes)} ${member} kullan覺c覺s覺 ${message.author} taraf覺ndan <@&810545782318563328> rol羹 kald覺r覺ld覺!`));
message.guild.channels.cache.get(a.jailLog).send(reawEmbed.setDescription(`${client.emojis.cache.get(a.yes)} ${member} kullan覺c覺s覺 ${message.author} taraf覺ndan <@&810545782318563328> rol羹 kald覺r覺ld覺!`));
db.delete(`jailli.${member.id}`);
};

exports.config = {
  name: "unjail",
  guildOnly: true,
  aliases: ["cezal覺al"],
};
