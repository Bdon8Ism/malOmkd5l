﻿const {Client} = require('discord.js');
const client = new Client();

client.on('ready', () => {
    setInterval(function(){
        client.guilds.get('518343423787401217').roles.find('Random', 'offical').edit({color: 'RANDOM'}) 
    },3000);
}).login(process.env.BOT_TOKEN);