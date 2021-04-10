const { MessageEmbed } = require('discord.js')
const data = require('quick.db')
const a = require('../config.js');


   exports.run = async(client, message, args) => {


    const knave = await data.fetch(`snipe.id.${message.guild.id}`)
    if(!knave) {
    const embeds = new MessageEmbed()
  .setDescription(`Mesaj bulunamadı!`)
.setColor(`f1f1f1`)
message.react(a.no);
    message.channel.send(embeds);
          } else {
  let kullanıcı = client.users.cache.get(knave);
  const silinen = await data.fetch(`snipe.mesaj.${message.guild.id}`)
  const embed = new MessageEmbed()
  .setDescription(`Mesaj silen kişi: ${kullanıcı} \n\n Silinen mesaj: **${silinen}**`)
.setColor(`f1f1f1`)
message.react(a.yes);
  message.channel.send(embed) }
}
exports.config = {
  name: "snipe",
  guildOnly: true,
  usage: 'snipe',
  aliases: ["snipe"],
};

  usage: 'snipe'
