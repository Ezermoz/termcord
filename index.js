const Discord = require('discord.js')
const client = new Discord.Client()
const readline = require("readline")
const config = require('./config.json')
const colors  = require("colors")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function sendMessage(getID) {
        rl.question('*send message* \n'.red, (theMessage) => {
            var status = 1
            if(theMessage == "/stop") return getBack()
            var channel = client.channels.cache.find(channel => channel.id === getID)
            channel.send(theMessage)
            console.log("[+]".green+` Me: ${theMessage}`);
            sendMessage(getID)
        });

}
function getBack() {
    rl.question('Re: What the server id? '.blue, (getResponse) => {
            let available = client.guilds.cache.get(getResponse);
            if(!available) { 
                getBack();
                return console.log('[!] > The guild is not correct!');
            };
    rl.question('What the channel id? '.blue, (getAnswer) => {
                let correct = client.channels.cache.get(getAnswer);
                if(!correct) { 
                getBack();
                return console.log('[!] > The channel is not correct!');
            };
    client.on('message', message => {
                if(message.channel.id != getAnswer) { return;};
                if(message.author.id == client.user.id) { return;};
                console.log("[+]".green+` ${message.author.tag.blue}: ${message.content.gray}\n`)
                });
            });
        });
};

function getMessage() {
    client.on('message', async message => {
        var status = 0
        if(message.channel.id != id_chann) { return;};
        if(message.author.id == client.user.id) { return;};
        console.log("[+]".green+` ${message.author.tag.blue}: ${message.content.gray}\n`)
        sendMessage(id_chann)
        if(status == 1){sendMessage(id_chann)};
        
    });
}
client.on('ready', async() => {
    console.log("        *   )                  (            (     \n".red+"      ` )  /(  (  (      )     )\\      (    )\\ )  \n".red+"       ( )(_))))\\ )(    (    (((_)  (  )(  (()/(  \n".red+"      (_(_())/((_|()\   )\\  ')\\___  )\\(()\\  ((_)) \n".red+"      |_   _(_))  ((_)_((_))((/ __|((_)((_) _| |  \n".red+"        | | / -_)| '_| '  \\()| (__/ _ \\ '_/ _` |  \n".red+"        |_| \\___||_| |_|_|_|  \\___\\___/_| \\__,_|  \n".red)
    console.log("[+] > Made by PeacefulTrees for the lol".green)
    rl.question('What the server id? '.blue, (getResponse) => {
        let available = client.guilds.cache.get(getResponse);
        if(!available) { 
            getBack();
            return console.log('[!] > The guild is not correct!');
        };
    rl.question('What the channel id? '.blue, (getAnswer) => {
            id_chann = getAnswer
            let correct = client.channels.cache.get(getAnswer);
            if(!correct) { 
                getBack();
                return console.log('[!] > The channel is not correct!');
            };
            getMessage()
        });
    });
});

client.login(config.token).catch(error => {console.error(error)} )


