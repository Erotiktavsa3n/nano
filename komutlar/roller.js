const Discord = require('discord.js')

exports.run = async (client, msg, args) => {
  
  const embed = new Discord.MessageEmbed()
  .setTitle(`Bu sunucudaki roller; [${msg.guild.roles.cache.size}] adet.`)
  .setColor("BLUE")
  .setThumbnail(msg.guild.iconURL())
  .setDescription(`**İşte bunlarda sunucudaki roller;**\n<@&${msg.guild.roles.cache.map(role => `${role.id}`).slice(0, 50).join('>, <@&')}>`)
  .setTimestamp()
  return msg.channel.send(embed)
  
  }
exports.conf = {
  aliases: []
}

exports.help = {
  name: 'roller'
}