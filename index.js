const{
    Telegraf, Markup
} = require('telegraf')
require('dotenv').config()
const text = require('./const');


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const me = getRandomInt(4)
  if(me == 0){
    console.log("Ведущий Саша");
  }
  if(me == 1){
    console.log("Ведущая Таня");
  }
  if(me == 2)
  {
    console.log("Ведущая Диана");
  }
  if(me == 3){
    console.log("Ведущий Кирилл")
  }

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply(`Привет ${ctx.message.from.first_name} `));
bot.help((ctx) => ctx.reply(`Ведущим будет ${me}`));


bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));