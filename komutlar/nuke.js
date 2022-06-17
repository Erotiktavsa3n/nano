 const Discord = require("discord.js");

module.exports.run = async(client,message,args) => {

 if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("`**:x: Hata: Bu komutu kullanabilmek için __KANALLARI YÖNET__ iznine sahip olmanız gerek.**`");
let csc = message.channel
  
 message.channel.clone({ name: csc.name, permissions: csc.withPermissions, topic: csc.topic, bitrate: this.bitrate })
  message.channel.delete();
  
};
module.exports.conf = {
aliases:[]
};
module.exports.help = {
  name: 'nuke'
};