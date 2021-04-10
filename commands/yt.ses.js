const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {


if(![("813878042409042000")].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('RANDOM').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

  
  
  let knave2 = "**Seste Olmayan Yetkililer:**\n";
  message.guild.roles.cache.get(message.guild.roles.cache.get(("813878075410219029")).members.map(r => {
    knave2 += !r.voice.channel ? "<@" + r.user.id + "> \n" : "";
  }));

 
  message.channel.send("" + knave2 + "").then(s => s.s);
};

exports.config = {
  name: "sesyt",
  guildOnly: true,
  aliases: ["ytses"],
};
