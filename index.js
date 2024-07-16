const Discord = require('discord.js-selfbot-v13');
const bot = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'Asia/Kolkata', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

bot.on('ready', async () => {
  console.clear();
  console.log(`${bot.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1020066362967736340')
    .setType('STREAMING')
    .setURL('https://twitch.tv/developer') //Must be a youtube video link 
    .setState('.gg/chaiisutta...!? 🌙')
    .setName('sed🥀 ')
    .setDetails(` Unrivaled...!?  🌙 `)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1045290410458746962/1262724214520156160/20230801_135435.gif?ex=6697a311&is=66965191&hm=c01aa672130bfa45cff14d7b19665aef2a4a26a6b178960b97d87c3eb4a4ba7c&=') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('Swag....!? 🥀 ') //Text when you hover the Large image
    .setAssetsSmallImage('https://media.discordapp.net/attachments/1045290410458746962/1262724190209835101/8285d845fbce5ede830d6291fec56b14.gif?ex=6697a30b&is=6696518b&hm=145d4690631dac58a15e175a23f9a321aab4e77bb14b0472838dea53bc5b4174&=') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('God') //Text when you hover the Small image
    .addButton('Discord Server', 'https://discord.gg/HfmgsJuAW6')
    .addButton('Minecraft', 'https://discord.gg/ehfCFzNEEr');

  bot.user.setActivity(r);
  bot.user.setPresence({ status: "idle" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = ` Unrivaled....?  🌙 〈 ${newTime} 〉 `;
      r.setDetails(newDetails);
      bot.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
bot.login(mySecret);