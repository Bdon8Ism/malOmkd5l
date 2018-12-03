﻿const {Client} = require('discord.js');
const client = new Client();

client.on('ready', () => {
    setInterval(function(){
        client.guilds.get('518343423787401217').roles.find('name', 'offical').edit({color: 'RANDOM'}) 
    },6000);
}).login(process.env.BOT_TOKEN);