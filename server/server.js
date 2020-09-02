var directory = GetResourcePath(GetCurrentResourceName()).replace('//', '/');
var utilts = require(`${directory}/server/utils.js`);
var prefix = '[TweetBot] ';
var config = require(`${directory}/config.js`);

var Discord = require('discord.js');
var client = new Discord.Client();

client.on('ready', () => {
    console.log(prefix + `Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    var raw = message.content.slice(config.discord.prefix.length).trim().split(' ');
    var args = raw.join(" ").slice(raw[0].length + 1);
    let user;

    if (message.channel.type === 'dm') return;
    if (message.author.bot) return;

    if (message.content.startsWith(config.discord.prefix + "ano") || message.content.startsWith(config.discord.prefix + "tweet")) {
        if (message.content.startsWith(config.discord.prefix + "ano")) {
            if (config.anonymousAccounts == false) return; 
            user = `AnnonymousUser#${utilts.AnnUserNum()}`;
        } else {
            user = `@${message.author.username}#${message.author.discriminator}`;
        }
        utilts.tweet(args, user, raw[0]);
        message.author.send(`**Thank You, Your Tweet has been Published!** <#${config.discord.tweetChannel}>`); 
    }
});

client.login(config.discord.token);