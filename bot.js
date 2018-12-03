﻿const {Client} = require('discord.js');
const client = new Client();

client.on('ready', () => {
    setInterval(function(){
        client.guilds.get('457612402842796046').roles.find('name', 'RANDOM').edit({color: 'RANDOM'}) 
    },100);
}).login(process.env.BOT_TOKEN);