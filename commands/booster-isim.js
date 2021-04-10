const Discord = require("discord.js");

exports.run = async (client, message, args) => {
let isim = args.slice(0).join(' ');
let tag = "໙"
let ikinciTag = "•"
 
if(![("740285821961240709")].some(role => message.member.roles.cache.get(role))) 
return message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} Komutu kullanmak için sunucumuza takviye yapmalısın.`).setColor('RANDOM').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

if(!isim) return message.channel.send(new Discord.MessageEmbed().setTimestamp().setColor('f1f1f1').setDescription(`Bir İsim Belirtmelisin.`))
 
 
message.guild.members.cache.get(message.author.id).setNickname(`${message.author.username.includes((tag)) ? (tag) : (ikinciTag)} ${isim}`)
return message.channel.send(new Discord.MessageEmbed().setDescription(`<@${message.author.id}> Kullanıcı adın "**${isim}**" olarak değistirildi.`).setColor('RANDOM').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
 


}
exports.config = {
  name: "me",
  guildOnly: true,
  aliases: ["me"],
};
