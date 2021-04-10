const Discord = require("discord.js");
const config = require("../config.js");
const a = require('../config.js');

exports.run =async (bot, message, args) => {

if(![(a.sahipRolu)].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new Discord.MessageEmbed().setDescription(`<a:shiva_carpi:810791843646013521> Bu komutu kullanmak için gerekli yetkilere sahip değilsiniz!`).setColor('RANDOM').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));


let knaveqwe = message.guild.members.cache.filter(m => m.roles.cache.filter(r => r.id !== message.guild.id).size == 0)

if(args[0] == "ver") {
    knaveqwe.forEach(r => {
r.roles.add(a.kayıtsız)
})
const khold = new Discord.MessageEmbed() 
.setColor("f1f1f1").setFooter("tali 🤍 99").setTimestamp().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
.setDescription("Sunucuda rolü olmayan \`"+ knaveqwe.size +"\` kişiye kayıtsız rolü verildi!")
message.channel.send(khold).then(m => message.react(a.yes))
} else if(!args[0]) {
const khold1 = new Discord.MessageEmbed()
.setColor("f1f1f1").setFooter("tali 🤍 99").setTimestamp().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
.setDescription("Sunucumuzda rolü olmayan \`"+ knaveqwe.size +"\` kişi var. Bu kişilere kayıtsız rolü vermek için \`.rolsüz ver\` komutunu uygulayın!")
message.channel.send(khold1)
}


}

exports.config = {
  name: "rolsüz",
  guildOnly: false,
  usage: "rolsüz ver",
  aliases: ["rolsüzver"],
};
