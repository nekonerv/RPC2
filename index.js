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
    .setDetails(` коммунист...!?  🌙 `)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1259143050522001439/1263783633534062623/20230801_135435.gif?ex=669ccf3a&is=669b7dba&hm=ec2c3e09cc87a938a8c8cc14555cbd0fe8e2a626260765bb22bb1dd6ce9c077f&=&width=281&height=350') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('бог....!? 🥀 ') //Text when you hover the Large image
    .setAssetsSmallImage('https://media.discordapp.net/attachments/1045290410458746962/1262724190209835101/8285d845fbce5ede830d6291fec56b14.gif?ex=669ce90b&is=669b978b&hm=c3fafde704fcedb9f728da7b807dc35dc4a132cf7afc13a9753c21b3e3ebe6cc&=') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('') //Text when you hover the Small image
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
