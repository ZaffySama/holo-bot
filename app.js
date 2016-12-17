/**
 * Created by Raenilol on 16.12.2016.
 */

const bot = new (require('./Bot'))();
bot.login(process.env.BOT_TOKEN);
