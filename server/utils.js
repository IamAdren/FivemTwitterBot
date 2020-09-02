module.exports.AnnUserNum = () => {
    var val = Math.floor(1000 + Math.random() * 9000);
    return val;
}

module.exports.tweet = (message, author, type) => {
    const embed = new Discord.MessageEmbed()
        .setAuthor(`[Twitter] ${author}`, "https://upload.wikimedia.org/wikipedia/fr/thumb/c/c8/Twitter_Bird.svg/1259px-Twitter_Bird.svg.png")
        .setDescription(`**Message:** ${message}`)
        .setTimestamp();

    if (type === 'ano') {
        embed.setColor("#FF2D00");
    } else {
        embed.setColor("#1DA1F2");
    }

    emitNet("chatMessage", -1, `[^5Twitter^0] (^5${author}^0)`, [255,255,255], message);
    client.channels.get(config.discord.tweetChannel).send(embed);
}

module.exports.notify = (emitNet, source, message) => {
    emitNet("notify", source, message);
}