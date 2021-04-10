const { MessageEmbed } = require("discord.js");
module.exports.run = async (client, message, args) => {
const a = require('../config.js');

  
let knave;
let knave1 = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
let knave2 = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if(!knave1)  return message.channel.send(new MessageEmbed().setFooter("tali 🤍 Shiva").setTimestamp().setColor('f1f1f1').setDescription(`Bir @tali/ID girmelisin veya kullanıcı etiketlemelisin!`));


if (knave1) {
    knave = knave;
}
if (knave2) {
    knave = knave2;
}
if (!knave) {
    knave = message.member;
}

let ses = knave.voice.channel;
if (!ses) {
message.channel.send(new MessageEmbed().setColor('f1f1f1').setFooter("tali 🤍 Shiva").setTimestamp().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setDescription("**<@"+knave.id+"> Bir Sesli Kanalda Değil.**"));

}
if (ses) {
message.channel.send(new MessageEmbed().setColor('f1f1f1').setFooter("tali 🤍 Shiva").setTimestamp().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setDescription(
"<@"+knave.id+"> \n ────────────────── \n `"+ses.name+"` İsimli ses kanalında."
));
}};

exports.config = {
  name: "n",
  guildOnly: true,
  aliases: ["sesli"],
};
