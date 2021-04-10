const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db")
const moment = require("moment")
const conf = require('../config.js');
const a = require('../config.js');

module.exports.run = async (client, message, args) => {

let reawEmbed = new Discord.MessageEmbed().setColor("f1f1f1").setFooter("tali 🤍 Shiva").setTimestamp().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
let embed = reawEmbed;

if (!message.member.hasPermission("ADMINISTRATOR")) return;
if(!args[0] || (args[0] && isNaN(args[0])) || Number(args[0]) < 1 || Number(args[0]) > 100) return;
await message.delete();
message.channel.bulkDelete(Number(args[0])).then(ree => message.channel.send(reawEmbed.setDescription(`${client.emojis.cache.get(a.yes)} **${ree.size}** adet mesaj Shiva'nın çöplüğüne yollandı!`))).then(x => x.delete({timeout: 4000}));

};

exports.config = {
  name: "sil",
  guildOnly: false,
  aliases: ["temizle", "clear"],
};
