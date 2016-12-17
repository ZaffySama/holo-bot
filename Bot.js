/**
 * Created by Raenilol on 17.12.2016.
 */
const DiscordJS = require('discord.js');
const PREFIX = "h!";

class Bot {
    constructor() {
        this.client = new DiscordJS.Client();
        this.client.on('ready', () => this.onReady());
    }

    onReady() {
        console.log('Bot is ready!');
        //@todo bind events
        this.client.on('message', (msg) => this.onMessage(msg));
    }

    login(token) {
        this.client.login(token);
    }

    onMessage(msg) {
        if(msg.content.startsWith(PREFIX)) {
            let command = msg.content.substring(2, msg.content.indexOf(" "));
            let args = msg.content.substring(msg.content.indexOf(" "+1)).split(" ");
            console.log("Received query: ", command, '| ', args);

            switch(command) {
                case "whoareyou?":
                    msg.channel.sendMessage("I am Holo the Wise Wolf!");
                    break;
                default:
                    msg.channel.sendMessage("You're not making any sense. *Unrecognized command.*");
            }
        }
    }
}

module.exports = Bot;