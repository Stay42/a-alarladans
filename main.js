const Discord = require("discord.js")    
const client = new Discord.Client();      
const config = require("./config.js") 
const a = require("./config.js") 
const fs = require("fs");
const db = require("quick.db");
const ms = require("ms");               
require('./util/Loader.js')(client);    

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();  
fs.readdir('./commands/', (err, files) => { 
  if (err) console.error(err);               
  console.log(`${files.length} komut yüklenecek.`); 
  files.forEach(f => {                    
    let props = require(`./commands/${f}`);
    console.log(`${props.config.name} komutu yüklendi.`); 
    client.commands.set(props.config.name, props);
    props.config.aliases.forEach(alias => {       
      client.aliases.set(alias, props.config.name);
    });
  });
})

client.login(config.token);

/// SNİPE ///

client.on('messageDelete', message => {
    const data = require("quick.db")
    data.set(`snipe.mesaj.${message.guild.id}`, message.content)
    data.set(`snipe.id.${message.guild.id}`, message.author.id)

  })

/// SNİPE ///

/// BOTUN DURUMU VE SES KANALINA SOKMA ŞEYSİ ///

client.on('ready', () => {
    client.user.setPresence({ activity: { name: 'tali 🤍 99' }, status: "dnd" })
    client.channels.cache.get('815659424051626004').join() // ses kanalı İD
   })

/// BOTUN DURUMU VE SES KANALINA SOKMA ŞEYSİ ///

  

client.on("guildMemberAdd", member => {
if (db.fetch(`jailli.${member.id}`)) {
member.guild.channels.cache.get(config.jailLog).send(new Discord.MessageEmbed().setFooter("bak bak ne buldum").setColor("010000").setTimestamp().setDescription(`
${client.emojis.cache.get(config.no)} ${member} ( \`${member.id}\` ) isimli kullanıcı jailli iken çıkıp girdiği için tekrar jaillendi!
`))
member.roles.set([a.jailRolu]);
}
})

client.on("guildMemberAdd", member => {
  if (db.fetch(`muteli.${member.id}`)) {
  member.guild.channels.cache.get(config.muteLog).send(new Discord.MessageEmbed().setFooter("bak bak ne buldum").setColor("010000").setTimestamp().setDescription(`
  ${client.emojis.cache.get(config.no)} ${member} ( \`${member.id}\` ) isimli kullanıcı muteli iken çıkıp girdiği için tekrar mutelendi!
  `))
  member.roles.add(a.muteRolu);
  }
  })
  
 


/// İLTİFAT ///

const kiltifat = [
    'Gözlerindeki saklı cenneti benden başkası fark etsin istemiyorum.',
    'Mavi gözlerin, gökyüzü oldu dünyamın.',
    'Parlayan gözlerin ile karanlık gecelerime ay gibi doğuyorsun.',
    'Huzur kokuyor geçtiğin her yer.',
    'Öyle bir duru güzelliğin var ki, seni gören şairler bile adına günlerce şiir yazardı.',
    'Gözlerinin hareketi bile yeter  benim aklımı başımdan almaya.',
    'Güller bile kıskanır seni gördükleri zaman kendi güzelliklerini.',
     'Hiç yazılmamış bir şiirsin sen, daha önce eşi benzeri olmayan.',
     'Adım şaire çıktı civarda. Kimse senin şiir olduğunun farkında değil henüz.',
     'Etkili gülüş kavramını ben senden öğrendim.',
     'Seni anlatmaya kelimeler bulamıyorum. Nasıl anlatacağımı bilemediğim için seni kimselere anlatamıyorum.',
     'Gözlerinle baharı getirdin garip gönlüme.',
     'Bir gülüşün ile çiçek açıyor bahçemdeki her bir çiçek.',
     'Yuva kokuyor kucağın. Sarılınca seninle yuva kurası geliyor insanın.',
     'Sen bu  dünyadaki bütün şarkıların tek sahibisin. Sana yazılıyor bütün şarkılar ve şiirler. Adın geçiyor bütün namelerde.',
     'Seni yüreğimde taşıyorum ben, sırtımda taşımak ne kelime. Ömrüm boyunca çekmeye hazırım her anlamda senin yükünü.',
     'Hayatıma gelerek hayatımdaki bütün önemli şeylerin önemsiz olmasını sağladın. Artık sensin tek önem verdiğim şu hayatta.',
     'Sen benim bu hayattaki en büyük duamsın.  Gözlerin adeta bir ay parçası. Işık oluyorsun karanlık gecelerime.',
     'Aynı zaman diliminde yaşamak benim için büyük ödüldür.',
    'Biraz Çevrendeki İnsanları Takarmısın ?',
    'İğrenç İnsansın!',
     'Kalbime giden yolu aydınlatıyor gözlerin.  Sadece sen görebilirsin kalbimi. Ve sadece ben hissedebilirim bana karşı olan hislerini.',
     'Onu Bunu Boşver de bize gel 2 bira içelim.',
      'Taş gibi kızsın ama okey taşı… Elden elde gidiyorsun farkında değilsin.',
      'Knave seni çok sevdi...',
      'Mucizelerden bahsediyordum.',
  ];
  client.on("message", async message => {
    if(message.channel.id !== (config.chatkanalı)) return;
    let Knavedev = db.get('chatiltifat');
    await db.add("chatiltifat", 1);
    if(Knavedev >= 60) {
      db.delete("chatiltifat");
      const random = Math.floor(Math.random() * ((kiltifat).length - 1) + 1);
      message.reply(`${(kiltifat)[random]}`);
    };
  });


/// İLTİFAT ///