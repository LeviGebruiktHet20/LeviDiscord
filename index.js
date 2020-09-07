const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const bot = new discord.Client();


bot.on("ready", async () => {

   console.log(`${bot.user.username} im on bitch!!`);

   bot.user.setActivity("Twitch", {type: "STREAMING"});

});


bot.login(process.env.token);