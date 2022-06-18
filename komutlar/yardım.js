const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
exports.run = async (client, message, args) => {
   const filter = (reaction, user) => {
  return ["🌟","⚙️"].includes(reaction.emoji.name) && user.id === message.author.id && reaction.users.remove(message.author.id);
};
 var prefix = ayarlar.prefix
  const yardım = new Discord.MessageEmbed()
    .setTitle(`${message.author.username} - Tarafından İstendi`)
      .setColor("GREEN")
  .setAuthor(client.user.username, client.user.avatarURL())
  .setDescription(`**Davet Komutları**",  \n**${prefix}**__davetleri-sıfırla__ = **__Davetleri Sıfırlar.__** \n**${prefix}**__top__ = **__Lider Tablosunu Gösterir.__** \n**${prefix}**__davetlerim__ = **__Davetlerinizi Gösterir.__** \n**${prefix}**__bonus-ekle__ = **__Bonus Ekler.__** \n**${prefix}**__davet-kanal #kanal__ = **__Davet Kanalını Ayarlar.__** \n**${prefix}**__davet-kanal-sıfırla__ = **__Davet Kanalını Sıfırlar.__** \n \n **Diğer Komutları Görmek İçin 🌟  Basınız**`)
  .setImage("https://images-ext-1.discordapp.net/external/Bb032GyJs8yCJiUy7tWQ-YnNRPreLuPDo-xp66eOIeU/https/images-ext-2.discordapp.net/external/H1PQhcDr-EaEvwENT8cUxj8S2yonFZl351YbXXH5sGs/https/media.discordapp.net/attachments/697145772801785876/716671769355747348/1.gif")
 var menü = await message.channel.send(yardım)
 const collector = menü.createReactionCollector(filter, { time: 99999 });
  let emojiler = ["🌟","⚙️"]
  await menü.react(emojiler[0])
  await menü.react(emojiler[1])

collector.on('collect', (reaction, user) => {

  
     if(reaction.emoji.name == "🌟") {
    const kobscode = new Discord.MessageEmbed()
      .setColor("BLUE")
 .addField("**Ek Komutlar**", `\n**${prefix}__yetkilerim__ = **__Yetkilerini Gösterir__** \n**${prefix}**__ping__ = **__Botun Gecikme Süresini Atar__** \n**${prefix}**__nuke__ = **__Kanalı Komple Siler Ve Yeniden Oluşturur__** \n**${prefix}**__roller__ = **__Sunucudaki Tüm Rolleri Gösterir__** \n**${prefix}**__botbilgi__ = **__Botun Bilgilerini Gösterir__** \n**${prefix}**__isim-değiştir__ = **__İstediğiniz Bir Kullanıcının İsmini Değiştirir__** \n \n **Davet Komutlarını Görmek İçin ⚙️ Basınız `)
.setImage("https://images-ext-1.discordapp.net/external/Bb032GyJs8yCJiUy7tWQ-YnNRPreLuPDo-xp66eOIeU/https/images-ext-2.discordapp.net/external/H1PQhcDr-EaEvwENT8cUxj8S2yonFZl351YbXXH5sGs/https/media.discordapp.net/attachments/697145772801785876/716671769355747348/1.gif")
  .setThumbnail(client.user.avatarURL())
 menü.edit(kobscode)
  }
 if(reaction.emoji.name == "⚙️") {
 menü.edit(yardım)
  }
});

collector.on('end', collected => {
  console.log(`Collected ${collected.size} items`);
});

};

exports.conf = {
 enabled: true,
 guildOnly: true,
 aliases: ['help'],
 permLevel: 0,
};

exports.help = {
 name: 'yardım',
 description: '',
 usage: ''
};