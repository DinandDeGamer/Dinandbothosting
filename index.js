const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");

const client = new discord.Client();

client.login(botConfig.token);
 
client.on("ready", async () => {
 
    console.log(`${client.user.username} is online.`);
 
    client.user.setActivity("Aan het werken", { type: "PLAYING" });
 
});
 
 
client.on("message", async message => {
 
    if(message.author.bot) return;
 
    if(message.channel.type === "dm") return;
 
    var prefix = botConfig.prefix;
 
    var messageArray = message.content.split(" ");
 
    var command = messageArray[0];



    if (command === `${prefix}info`) {
 
        return message.channel.send("Ik ben als dinand niet online is in de server en dan ben ik de vervanger van dinand");
    }

    if (command === `${prefix}help`) {
 
        return message.channel.send("Hi, als je vragen of ideën heb stuur dan een dm naar @DinandNL#4401");
    }


    if (command === `${prefix}command`) {
 
        return message.channel.send("De commands zijn !help !info !command en binnenkort komen er meer command.");
    }

});