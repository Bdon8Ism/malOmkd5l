﻿const Discord = require('discord.js');


const client = new Discord.Client({disableEveryone: true});






///////////////////////// 

client.on('ready', () => {
    console.log('')
    console.log('')
    console.log('╔[═════════════════════════════════════════════════════════════════]╗')
    console.log(`[Start] ${new Date()}`);
    console.log('╚[═════════════════════════════════════════════════════════════════]╝')
    console.log('')
    console.log('╔[════════════════════════════════════]╗');
    console.log(`Logged in as * [ " ${client.user.username} " ]`);
    console.log('')
    console.log('Informations :')
    console.log('')
    console.log(`servers! [ " ${client.guilds.size} " ]`);
    console.log(`Users! [ " ${client.users.size} " ]`);
    console.log(`channels! [ " ${client.channels.size} " ]`);
    console.log('╚[════════════════════════════════════]╝')
    console.log('')
    console.log('╔[════════════]╗')
    console.log(' Bot Is Online')
    console.log('╚[════════════]╝')
    console.log('')
    console.log('')
  });


////////////////////////
const adminprefix = "$";
const devs = ['518176101403459594'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;

if (message.content.startsWith(adminprefix + 'setstreem')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
  }
  
  });


client.on('message',function(message) {
    let args = message.content.split(" ").slice(1).join(" ");
   if(message.content.startsWith(adminprefix + "setWatch")) {
       if(message.author.id !== '518176101403459594') return;
       client.user.setActivity(args,{type: 'WATCHING'});
       message.channel.send("**- :white_check_mark: Done!,**");
   } 
});
client.on('message',function(message) {
    let args = message.content.split(" ").slice(1).join(" ");
   if(message.content.startsWith(adminprefix + "setListen")) {
       if(message.author.id !== '518176101403459594') return;
       client.user.setActivity(args,{type: 'LISTENING'});
       message.channel.send("**- :white_check_mark: Done!,**");
   } 
});

////////////////////////////////////
client.on("ready", () => {
    function lol() {
      client.guilds.get('518343423787401217').roles.find("offical").setColor("RANDOM");
    };
    setInterval(lol, 5000);
  });
  


client.login(process.env.BOT_TOKEN);

