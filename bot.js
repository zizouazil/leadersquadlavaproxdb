const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');
const moment = require('moment');
const sql = require('sqlite');
const ms = require('ms');
 var prefix = "-";


client.on("guildDelete", guild => {
    console.log(` BOT Left From Server -- = ${guild.name} = -- , Server Owner -- = ${guild.owner.user.username} = --`)
   
var g= guild.members.size
var i= guild.iconURL

const embed = new Discord.RichEmbed()
  
                   .setColor("RANDOM")
                .setFooter(` ©  SOKA™ `)
                .setTitle(" Dreams Left Server !")
                .addField("**Guild Name:**", guild.name )
                 .addField("**Owner:**", guild.owner.user.username )
                 .addField("**Owner id:**", guild.owner.user.id )
                 .addField("**MEMBER COUNT:**", g )
                  .setThumbnail (i)
client.channels.get("423210879169855499").send(embed)
});

client.on('guildDelete', guild => {
    

  var star = new Discord.RichEmbed()
  .setTitle("**__Why SOKA Left ?__**")
  .setColor("ffffff")
  .setDescription("**We Are Sorry For Any Problems In The Bot **")
   .addField("🌍 **| CONTACT :**   ",
" `-contact` `-sug` `-bug` ")
 .addField('🔗 **| SUPPORT SERVER** :' , "  https://discord.gg/ArGwWfH")
            .setFooter(`Dreams`, 'https://cdn.discordapp.com/attachments/402070843032731648/417407034775044097/image.jpg')
      guild.owner.send(star)
})

client.on("guildCreate", guild => {
console.log(` Dreams Added From Server -- = ${guild.name} = -- , Server Owner -- = ${guild.owner.user.username} = --`)

var g= guild.members.size
var i= guild.iconURL

const embed = new Discord.RichEmbed()
  
                   .setColor("RANDOM")
                .setFooter(` ©  SOKA™ `)
                .setTitle(" Dreams Added To Server !")
                .addField("**Guild Name:**", guild.name )
                 .addField("**Owner:**", guild.owner.user.username )
                 .addField("**MEMBER COUNT:**", g )
                  .setThumbnail (i)
client.channels.get("492667082962370570").send(embed)

});





//╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
//╭━━┳┳━╮╭━━╮╭━━┳╮╭┳━╮╭━╯┃
//┃╭╮┣┫╭╮┫╭╮┃┃╭━┫╰╯┃╭╮┫╭╮┃
//┃╰╯┃┃┃┃┃╰╯┃┃╰━┫┃┃┃┃┃┃╰╯┃
//┃╭━┻┻╯╰┻━╮┃╰━━┻┻┻┻╯╰┻━━╯
//┃┃╱╱╱╱╱╭━╯┃
//╰╯╱╱╱╱╱╰━━╯



client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('-ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        const embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setThumbnail('https://cdn.discordapp.com/avatars/368141321547808768/c42716e13cb850f9ad0930af699472d0.png?size=2048nk')
                        .setColor('ffffff')
                        .addField('**Time Taken:**',msg + " ms")
                        .addField('**WebSocket:**',api + " ms")
         message.channel.send({embed:embed});
                        }
                    });
                    
                    
//╱╱╱╱╱╱╱╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//╱╱╱╱╱╱╱╱╭╯╰╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
//╭━━┳╮╭┳━┻╮╭╋━━┳━╮╭━━┳╮╭┳━╮╭━╯┃
//┃╭╮┃╰╯┃╭╮┃┃┃╭╮┃╭╯┃╭━┫╰╯┃╭╮┫╭╮┃
//┃╭╮┣╮╭┫╭╮┃╰┫╭╮┃┃╱┃╰━┫┃┃┃┃┃┃╰╯┃
//╰╯╰╯╰╯╰╯╰┻━┻╯╰┻╯╱╰━━┻┻┻┻╯╰┻━━╯

client.on('message', message => {
    if (message.content.startsWith("-avatar")) {
        if(!message.channel.guild) return message.reply('** This command only for servers **');
   
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor(0xd3d0c4)
        .setImage(`${x5bzm.avatarURL}`)
           .setFooter(`©  Dreams™ `)
      message.channel.sendEmbed(embed);
    }
});

  
//╭╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//┃┃╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
//┃╰━┳━━┳━╮╱╭━━┳╮╭┳━╮╭━╯┃
//┃╭╮┃╭╮┃╭╮╮┃╭━┫╰╯┃╭╮┫╭╮┃
//┃╰╯┃╭╮┃┃┃┃┃╰━┫┃┃┃┃┃┃╰╯┃
//╰━━┻╯╰┻╯╰╯╰━━┻┻┻┻╯╰┻━━╯

  
  
client.on('message', message => {
    if (message.content == ("-ban")) {
               

        const mmss = require('ms');
        let reason = message.content.split(' ').slice(3).join(' ');
        let time = message.content.split(' ')[2];
        let guild = message.guild;

        let usermention = message.mentions.users.first();

        if (!message.guild.member(message.author).hasPermission('BAN_MEMBERS')) {
            return message.reply(':lock: **You** need `BAN_MEMBERS` Permissions to execute `ban`')
        }

        if (!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) {
            return message.reply(':lock: **I** need `BAN_MEMBERS` Permissions to execute `ban`')
        }

    

        if (message.mentions.users.size < 1) {
            return message.reply('You need to mention someone to Ban them!')
        }

        if (message.author.id === usermention.id) {
            return message.reply('You cant punish yourself :wink:')
        }

        if (!time) {
            return message.reply(`How much time ? **Usage:**\`-ban [@mention] [1d] [Reason]\``)
        }

        if (!time.match(/[1-7][s,m,h,d,w]/g)) {
            return message.reply('I need a valid time ! look at the Usage! right here: **Usage:**`-ban [@mention] [1m] [Reason]`')
        }

        if (!reason) {
            return message.reply(`You must give me a reason for the ban **Usage:**\`-ban [@mention] [1d] [Reason]\``)
        }

        if (!message.guild.member(usermention).bannable) {
            return message.reply('This member is above me in the `role chain` Can\'t ban them')
        }

        message.reply("This user has been banned form the server.");

        usermention.send(`You've just got banned from ${guild.name}  \n State reason: **${reason}** \n **Disclamer**: If the ban is not timed and Permanent you may not appeal the **BAN**!`)
        message.guild.ban(usermention, 7);
        setTimeout(() => {
            message.guild.unban(usermention.id);
        }, mmss(time));
       message.channel.send({embed: {
            color: 3447003,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            fields: [{
                name: "Ban:",
                value: `**Banned:** ${usermention.username}#${usermention.discriminator}\n**Moderator:** ${message.author.username} \n**Duration:** ${mmss(mmss(time), {long: true})} \n**Reason:** ${reason}`
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "© SOKA"
            }
          }
        });
    }
});


//╱╭╮╱╱╱╱╱╱╱╱╱╱╱╭╮╱╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//╭╯╰╮╱╱╱╱╱╱╱╱╱╱┃┃╱╱╭╯╰╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
//╰╮╭╋━┳━━┳━╮╭━━┫┃╭━┻╮╭╋━━╮╭━━┳╮╭┳━╮╭━╯┃
//╱┃┃┃╭┫╭╮┃╭╮┫━━┫┃┃╭╮┃┃┃┃━┫┃╭━┫╰╯┃╭╮┫╭╮┃
//╱┃╰┫┃┃╭╮┃┃┃┣━━┃╰┫╭╮┃╰┫┃━┫┃╰━┫┃┃┃┃┃┃╰╯┃
//╱╰━┻╯╰╯╰┻╯╰┻━━┻━┻╯╰┻━┻━━╯╰━━┻┻┻┻╯╰┻━━╯


client.on('message', message => {
    if (message.content.startsWith("-translate")) {
      
        const translate = require('google-translate-api');
        const Discord = require('discord.js');

    let toTrans = message.content.split(' ').slice(1);
    let language;

    language = toTrans[toTrans.length - 2] === 'to' ? toTrans.slice(toTrans.length - 2, toTrans.length)[1].trim() : undefined;
    if (!language) {
        return message.reply(`Please supply valid agruments.\n**Example** \`-translate [text] to [language]\``);
    }
    let finalToTrans = toTrans.slice(toTrans.length - toTrans.length, toTrans.length - 2).join(' ');
    translate(finalToTrans, {to: language}).then(res => {
            message.channel.send({embed: {
                color: 3447003,
                author: {
                  name: 'Dreams\'s translator',
                  icon_url: client.user.avatarURL
                },
                fields: [{
                    name: "Translator",
                    value: `**From:** ${res.from.language.iso}\n\`\`\`${finalToTrans}\`\`\`\n**To: **${language}\n\`\`\`${res.text}\`\`\``
                  }
                ],
                timestamp: new Date(),
                footer: {
                  icon_url: client.user.avatarURL,
                  text: "© SOKA"
                }
              }
            });
    }).catch(err => {
        message.channel.send({
            embed: {
                description: '❌ We could not find the supplied language.',
                color: 0xE8642B
            }
        });
    });
    }
});


//╱╱╱╱╱╱╱╱╱╱╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//╱╱╱╱╱╱╱╱╱╱╱╱┃┃╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
//╭━━┳━━┳━━┳━━┫┃╭━━╮╭━━┳╮╭┳━╮╭━╯┃
//┃╭╮┃╭╮┃╭╮┃╭╮┃┃┃┃━┫┃╭━┫╰╯┃╭╮┫╭╮┃
//┃╰╯┃╰╯┃╰╯┃╰╯┃╰┫┃━┫┃╰━┫┃┃┃┃┃┃╰╯┃
//╰━╮┣━━┻━━┻━╮┣━┻━━╯╰━━┻┻┻┻╯╰┻━━╯
//╭━╯┃╱╱╱╱╱╭━╯┃
//╰━━╯╱╱╱╱╱╰━━╯


client.on('message', message => {
    if(message.content.startsWith("-google")) {
        if(!message.channel.guild) return message.reply('** This command only for servers **');
   		const args = message.content.split(' ').slice(1);
				let query = args;
				message.channel.send({embed: {
					color: 3447003,
					title: "Your Search",
					url: `https://www.google.com/search?q=${query}`,
					description: "Look at your Search Query via Google.",
					timestamp: new Date(),
					footer: {
						icon_url: client.user.avatarURL,
						text: "Powered by Google"
					},
				}});
				
    }
});


//╱╱╱╱╱╱╱╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//╱╱╱╱╱╱╱╱╭╯╰╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
//╭━━┳╮╭┳━┻╮╭╋━━┳━━┳╮╭┳━━╮╭━━┳╮╭┳━╮╭━╯┃
//┃━━┫┃┃┃╭╮┃┃┃┃━┫╭╮┃╰╯┃━━┫┃╭━┫╰╯┃╭╮┫╭╮┃
//┣━━┃╰╯┃╰╯┃╰┫┃━┫╭╮┃┃┃┣━━┃┃╰━┫┃┃┃┃┃┃╰╯┃
//╰━━┻━━┫╭━┻━┻━━┻╯╰┻┻┻┻━━╯╰━━┻┻┻┻╯╰┻━━╯
//╱╱╱╱╱╱┃┃
//╱╱╱╱╱╱╰╯


client.on('message', message => {
    var x1 = "-supportteam"
	if (message.content === x1) {
	    if(!message.channel.guild) return;
		message.member.addRole(message.guild.roles.find("name", "Support+"));
	const embed = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
 	.addField('Requested by:', "<@" + message.author.id + ">")
   .setDescription('**__:white_check_mark: Support Team Added + __**')
   .setColor("3fcf24")
   
  message.channel.sendEmbed(embed);
	}
});



//╱╱╱╭╮╱╱╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//╱╱╱┃┃╱╱╱╭╯╰╮╱╱╱╱╱╱╱╱╱╱╱┃┃
//╭━━┫┃╭┳━┻╮╭╯╭━━┳╮╭┳━╮╭━╯┃
//┃━━┫┃┣┫━━┫┃╱┃╭━┫╰╯┃╭╮┫╭╮┃
//┣━━┃╰┫┣━━┃╰╮┃╰━┫┃┃┃┃┃┃╰╯┃
//╰━━┻━┻┻━━┻━╯╰━━┻┻┻┻╯╰┻━━╯



client.on('message', message => {
if(message.content == prefix + 'slist') {
         if(!message.author.id !== '280040452995153923') return;
var gimg;
var gname;
var gmemb;
var gbots;
var groles;
var servers = client.guilds;
servers.forEach((g)=>{
gname = g.name;
gimg = g.iconURL;
gmemb = g.members.size;
let serv = new Discord.RichEmbed()
.setAuthor(gname,gimg)
.setThumbnail(gimg)
.addField('Server Member Count',gmemb = g.members.size)
.setColor('RANDOM')

      message.channel.sendEmbed(serv);
}) 
}
});


//╱╱╭╮╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//╱╱┃┃╱╭╯╰╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
//╭━╯┣━┻╮╭╋━━╮╭━━┳╮╭┳━╮╭━╯┃
//┃╭╮┃╭╮┃┃┃┃━┫┃╭━┫╰╯┃╭╮┫╭╮┃
//┃╰╯┃╭╮┃╰┫┃━┫┃╰━┫┃┃┃┃┃┃╰╯┃
//╰━━┻╯╰┻━┻━━╯╰━━┻┻┻┻╯╰┻━━╯

client.on('message', message => {
        if (message.content === prefix + "dt") {
     let user = message.mentions.users.first();
     var args = message.content.split(" ").slice(1);
     var men = message.mentions.users.first();
        var heg;
        if(men) {
            heg = men
        } else {
            heg = message.author
        }
      var mentionned = message.mentions.members.first();
         var h;
        if(mentionned) {
            h = mentionned
        } else {
            h = message.member
        }
       moment.locale('en-TN'); //TN
      var id = new  Discord.RichEmbed()
         .setColor("RANDOM")
       
         .setDescription([`
**Time** : ${moment().format('HH:mm:ss A')}
**Date** : ${moment().format('YYYY/M/D - MMMM ')}
**Today** : ${moment().format('dddd')}`])
.setFooter(`${heg.username}`,heg.avatarURL)
         message.channel.send(id)
}
});

//╱╱╱╭╮╱╱╱╱╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//╱╱╱┃┃╱╱╱╱╱╭╯╰╮╱╱╱╱╱╱╱╱╱╱╱┃┃
//╭━━┫╰━┳━━┳┻╮╭╯╭━━┳╮╭┳━╮╭━╯┃
//┃━━┫╭╮┃╭╮┃╭┫┃╱┃╭━┫╰╯┃╭╮┫╭╮┃
//┣━━┃┃┃┃╰╯┃┃┃╰╮┃╰━┫┃┃┃┃┃┃╰╯┃
//╰━━┻╯╰┻━━┻╯╰━╯╰━━┻┻┻┻╯╰┻━━╯

  client.on('message', message => {
    let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'short')) {
    if(!message.channel.guild) return;  
        const googl = require('goo.gl');
        googl.setKey('AIzaSyC2Z2mZ_nZTcSvh3QvIyrmOIFP6Ra6co6w');
        googl.getKey();
        googl.shorten(args.join(' ')).then(shorturl => {
            message.channel.send(''+shorturl)
        }).catch(e=>{
            message.channel.send('Error!');
        });

    }
});



//╱╱╱╭━━━╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//╱╱╱┃╭━╮┃╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
//╭╮╭╋╯╭╯┣╮╭╮╭━━┳╮╭┳━╮╭━╯┃
//┃╰╯┣━╯╭┫╰╯┃┃╭━┫╰╯┃╭╮┫╭╮┃
//╰╮╭┫┃╰━┫┃┃┃┃╰━┫┃┃┃┃┃┃╰╯┃
//╱╰╯╰━━━┻┻┻╯╰━━┻┻┻┻╯╰┻━━╯



 client.on("message", message => {
if(message.content.startsWith(prefix + 'v2m')) {
 let args = message.content.split(" ").slice(1);
   var nam = args.join(' ');

  if(!message.member.hasPermission('ADMINISTRATOR')) return   
  message.channel.send('You Dont Have `ADMINISTRATOR` Perm ! ').then(msg => msg.delete(6000))
  if (!nam) return message.channel.send(`<@${message.author.id}> Wrie A Room Name !`).then(msg => msg.delete(10000))
  message.guild.createChannel(nam, 'voice').then(c => setTimeout(() => c.delete(), 120000)) // كل 60 تساوي دقيقة عدل عليها الوقت لي تبيه 
  message.channel.send(`:ballot_box_with_check: TemporarySound : \`${nam}\``).then(c => setTimeout(() => c.edit(`<@${message.author.id}> :stopwatch: Voice Channel Timedout !`), 120000))  // 120000 دقيقتان
}
});



//╱╱╱╱╱╭╮╱╭╮╱╱╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//╱╱╱╱╱┃┃╱┃┃╱╱╱╱┃┃╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
//╭━━┳━╯┣━╯┣━┳━━┫┃╭━━╮╭━━┳╮╭┳━╮╭━╯┃
//┃╭╮┃╭╮┃╭╮┃╭┫╭╮┃┃┃┃━┫┃╭━┫╰╯┃╭╮┫╭╮┃
//┃╭╮┃╰╯┃╰╯┃┃┃╰╯┃╰┫┃━┫┃╰━┫┃┃┃┃┃┃╰╯┃
//╰╯╰┻━━┻━━┻╯╰━━┻━┻━━╯╰━━┻┻┻┻╯╰┻━━╯




//╱╱╱╱╱╭╮╭╮╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//╱╱╱╱╱┃┃┃┃╱╱╱╱╱╱╱╱╱╱╱╱┃┃
//╭━┳━━┫┃┃┃╱╭━━┳╮╭┳━╮╭━╯┃
//┃╭┫╭╮┃┃┃┃╱┃╭━┫╰╯┃╭╮┫╭╮┃
//┃┃┃╰╯┃╰┫╰╮┃╰━┫┃┃┃┃┃┃╰╯┃
//╰╯╰━━┻━┻━╯╰━━┻┻┻┻╯╰┻━━╯


client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'roll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**Put a number** :game_die:');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});


//╱╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//╱╱╱┃┃╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
//╭━━┫┃╭━━┳━━┳━╮╭━━┳╮╭┳━╮╭━╯┃
//┃╭━┫┃┃┃━┫╭╮┃╭╯┃╭━┫╰╯┃╭╮┫╭╮┃
//┃╰━┫╰┫┃━┫╭╮┃┃╱┃╰━┫┃┃┃┃┃┃╰╯┃
//╰━━┻━┻━━┻╯╰┻╯╱╰━━┻┻┻┻╯╰┻━━╯


client.on("message", message => {
  
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "purge")) {
                if (!message.member.hasPermission("MANGE_MESSAGES"))  return;
 if (!args[1]) {
                                let embed3 = new Discord.RichEmbed()
                                .setDescription("`-purge` <number>")
                                .setColor("RANDOM")
                                message.channel.sendEmbed(embed3);
                            } else {
                            let messagecount = parseInt(args[1]);
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                                          message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                           
                              
                            }
                          }
});


//╭╮╱╱╱╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//┃┃╱╱╱╱╱┃┃╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
//┃┃╭┳┳━━┫┃╭╮╭━━┳╮╭┳━╮╭━╯┃
//┃╰╯╋┫╭━┫╰╯╯┃╭━┫╰╯┃╭╮┫╭╮┃
//┃╭╮┫┃╰━┫╭╮╮┃╰━┫┃┃┃┃┃┃╰╯┃
//╰╯╰┻┻━━┻╯╰╯╰━━┻┻┻┻╯╰┻━━╯


client.on('message', message => {

  if (message.author.omar) return;
  if (!message.content.startsWith(prefix)) return;
  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  var args = message.content.split(" ").slice(1);
  if (command == "kick") {
   if(!message.channel.guild) return message.reply('** This command only for servers :x:**');
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  var user = message.mentions.users.first();
  var reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**__Mention__ A Member To Kick !**");
  if(!reason) return message.reply ("**Write A __Reason__ !**");
  if (!message.guild.member(user).kickable) return message.reply("**Can't Kick A Higher Role Than Me !**");
  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({embed : kickembed})
  user.send(reason).then(()=>{
message.guild.member(user).kick();
  })
}
});

//╱╱╭╮╱╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//╱╱┃┃╱╱╱┃┃╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
//╭━╯┣┳━━┫┃╭╮╭━━┳╮╭┳━╮╭━╯┃
//┃╭╮┣┫╭━┫╰╯╯┃╭━┫╰╯┃╭╮┫╭╮┃
//┃╰╯┃┃╰━┫╭╮╮┃╰━┫┃┃┃┃┃┃╰╯┃
//╰━━┻┻━━┻╯╰╯╰━━┻┻┻┻╯╰┻━━╯


client.on('message', message => {
    if (message.content.startsWith("-dick")) {
   
        // pretty shitty command

        let dicksize = ["=", "==", "===", "====", "=====", "======", "=======", "========", "=========", "=========="];
        let dickuser = message.mentions.users.first();

        if (!dickuser) {
            return message.channel.send('You must mention someone!');
        }

        message.channel.send(`**${dickuser} Size: ** 8${dicksize[~~Math.floor(Math.random() * dicksize.length)]}D\nSized by **${message.author.tag}**`);
       
    }
});


//╱╱╱╱╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//╱╱╱╱╱╭╯╰╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
//╭╮╭┳╮┣╮╭╋━━╮╭━━┳╮╭┳━╮╭━╯┃
//┃╰╯┃┃┃┃┃┃┃━┫┃╭━┫╰╯┃╭╮┫╭╮┃
//┃┃┃┃╰╯┃╰┫┃━┫┃╰━┫┃┃┃┃┃┃╰╯┃
//╰┻┻┻━━┻━┻━━╯╰━━┻┻┻┻╯╰┻━━╯

   
client.on('message', message => {
    if (message.content.startsWith("-mute")) {
     

        if (!message.member.hasPermission('MUTE_MEMBERS')) {
            message.channel.send(':lock: **I** need `MANAGE_ROLES` Permissions to execute `mute`');
            return;
        }

        if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) {
            return message.reply(':lock: **I** need `MANAGE_ROLES` Permissions to execute `mute`')
        }
        const msmute = require('ms');
        let reasonMute = message.content.split(' ').slice(3).join(' ');
        let timeMute = message.content.split(' ')[2];
        let guildMute = message.guild;
      // Let adminRoleMute = guild.roles.find("name", "TOA");
        let memberMute = message.guild.member;
        let userMute = message.mentions.users.first();
        let muteRoleMute = client.guilds.get(message.guild.id).roles.find('name', 'muted');
   

        if (!muteRoleMute) {
            return message.reply('`Please create a role called "muted"`');
        }

        if (message.mentions.users.size < 1) {
            return message.reply('You need to mention someone to Mute him!.');
        }
        if (message.author.id === userMute.id) {
            return message.reply('You cant punish yourself :wink:');
        }
        if (!timeMute) {
            return message.reply('specify the time for the mute!**Usage:**`~mute [@mention] [1m] [reason]`');
        }
        if (!timeMute.match(/[1-60][s,m,h,d,w]/g)) {
            return message.reply('I need a valid time ! look at the Usage! right here: **Usage:**`~mute [@mention] [1m] [reason]`');
        }
        if (!reasonMute) {
            return message.reply('You must give me a reason for Mute **Usage:**`~mute [@mention] [15m] [reason]`');
        }
        if (reasonMute.time < 1) {
            return message.reply('TIME?').then(message => message.delete(2000));
        }
        if (reasonMute.length < 1) {
            return message.reply('You must give me a reason for Mute');
        }
        message.guild.member(userMute).addRole(muteRoleMute)

        setTimeout(() => {
            message.guild.member(userMute).removeRole(muteRoleMute)
        }, msmute(timeMute));
        message.guild.channels.filter(textchannel => textchannel.type === 'text').forEach(cnl => {
            cnl.overwritePermissions(muteRoleMute, {
                SEND_MESSAGES: false
            });
        });

        message.reply("This user has been muted.");

       message.channel.send({embed: {
            color: 16745560,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            fields: [{
                name: 'Mute',
                value: `**Muted:**${userMute.username}#${userMute.discriminator}\n**Moderator:** ${message.author.username}\n**Duration:** ${msmute(msmute(timeMute), {long: true})}\n**Reason:** ${reasonMute}`
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "© SOKA "
            }
          }
        });

    
    
    
    
//╱╱╱╱╱╱╱╱╱╱╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//╱╱╱╱╱╱╱╱╱╱╱╭╯╰╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
//╭╮╭┳━╮╭╮╭┳╮┣╮╭╋━━╮╭━━┳╮╭┳━╮╭━╯┃
//┃┃┃┃╭╮┫╰╯┃┃┃┃┃┃┃━┫┃╭━┫╰╯┃╭╮┫╭╮┃
//┃╰╯┃┃┃┃┃┃┃╰╯┃╰┫┃━┫┃╰━┫┃┃┃┃┃┃╰╯┃
//╰━━┻╯╰┻┻┻┻━━┻━┻━━╯╰━━┻┻┻┻╯╰┻━━╯


client.on('message', message => {
    if (message.content.startsWith("-unmute")) {
    

        let guildUnmute = message.guild;
        let argsUnmute = message.content.split(' ').slice(1);
      
        if (!message.guild.member(message.author).hasPermission('MANAGE_ROLES')) {
            return message.reply(':lock: **I** need `MANAGE_ROLES` Permissions to execute `mute`')
        }
        if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) {
            return message.reply(':lock: **I** need `MANAGE_ROLES` Permissions to execute `mute`')
        }
        let userUnmute = message.mentions.users.first();
        let muteRoleUnmute = client.guilds.get(message.guild.id).roles.find('name', 'muted');
        if (message.mentions.users.size < 1) {
            return message.reply('You need to mention someone to unmute him!.');
        }
        message.guild.member(userUnmute).removeRole(muteRoleUnmute).then(() => {
            message.reply(`You've succesfully unmuted ${userUnmute}`);
        });
    }
});


//╱╱╱╱╱╱╱╭━┳╮╭╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//╱╱╱╱╱╱╱┃╭╯╰┫┃╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
//╭━━┳━━┳╯╰╮╭┫╰━┳━━┳━╮╱╭━━┳╮╭┳━╮╭━╯┃
//┃━━┫╭╮┣╮╭┫┃┃╭╮┃╭╮┃╭╮╮┃╭━┫╰╯┃╭╮┫╭╮┃
//┣━━┃╰╯┃┃┃┃╰┫╰╯┃╭╮┃┃┃┃┃╰━┫┃┃┃┃┃┃╰╯┃
//╰━━┻━━╯╰╯╰━┻━━┻╯╰┻╯╰╯╰━━┻┻┻┻╯╰┻━━╯

    
    
    client.on('message', message => {
    if (message.content.startsWith("-softban")) {
     

        let reasonSoftban = message.content.split(' ').slice(3).join(' ');
        let timeSoftban = message.content.split(' ')[2];
        let guildSoftban = message.guild;
       
        let userSoftban = message.mentions.users.first();
        if (!message.guild.member(message.author).hasPermission('BAN_MEMBERS')) {
            return message.reply(':lock: You need to have `BAN_MEMBERS` Permission to execute `SoftBan`');
        }
        if (!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) {
            return message.reply(':lock: I need to have `BAN_MEMBERS` Permission to execute `SoftBan`');
        }
       
        if (message.author.id === userSoftban.id) {
            return message.reply('You cant punish yourself :wink:');
        }
        if (message.mentions.users.size < 1) {
            return message.reply('You need to mention someone to SoftBan him!');
        }
        if (!reasonSoftban) {
            return message.reply(`You must give me a reason for the ban **Usage:**\`~softban [@mention] [reason]\``);
        }
        userSoftban.send(`You've just got softbanned from ${guildSoftban.name}  \n State reason: **${reasonSoftban}** \n **Disclamer**: In a softban you can come back straight away, we just got your messages deleted`);
        message.guild.ban(userSoftban, 2);
        setTimeout(() => {
            message.guild.unban(userSoftban.id);
        }, 0);

       message.channel.send({embed: {
            color: 0x18FE26,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            fields: [{
                name: "Softban:",
                value: `**Softbanned:** ${userSoftban.username}#${userSoftban.discriminator}\n**Moderator:** ${message.author.username}\n**Reason:** ${reasonSoftban}`
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "© Dreams"
            }
          }
        });
    }
});


//╱╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//╱╱╱┃┃╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
//╭━━┫┃╭━━┳━━┳━╮╭━━┳╮╭┳━╮╭━╯┃
//┃╭━┫┃┃┃━┫╭╮┃╭╯┃╭━┫╰╯┃╭╮┫╭╮┃
//┃╰━┫╰┫┃━┫╭╮┃┃╱┃╰━┫┃┃┃┃┃┃╰╯┃
//╰━━┻━┻━━┻╯╰┻╯╱╰━━┻┻┻┻╯╰┻━━╯


  client.on('message', message => {
       var prefix = "-";
      if (message.content.startsWith(prefix + 'clear')) {
          if(!message.channel.guild) return message.reply('** This command only for servers **');
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`You Don't Have [*MANAGE_MESSAGES*] Permission `).catch(console.error);
    message.delete()
    if(!message.channel.guild) return;
let args = message.content.split(" ").slice(1);

  const messagecount = parseInt(args.join(' '));

  message.channel.fetchMessages({
  
    limit: messagecount

}).then(messages => message.channel.bulkDelete(messages));
  message.channel.send(`__${messagecount}__`+ " **Message Deleted  :skull_crossbones: **" ).then(msg => msg.delete(3000));
};

});


//╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
//╭━━┳╮╭┳━┳━━┳━╮╱╭━━┳╮╭┳━╮╭━╯┃
//┃╭╮┃┃┃┃╭┫╭╮┃╭╮╮┃╭━┫╰╯┃╭╮┫╭╮┃
//┃╰╯┃╰╯┃┃┃╭╮┃┃┃┃┃╰━┫┃┃┃┃┃┃╰╯┃
//╰━╮┣━━┻╯╰╯╰┻╯╰╯╰━━┻┻┻┻╯╰┻━━╯
//╱╱┃┃
//╱╱╰╯

client.on('message', message => {
const yt = require('ytdl-core');
  if (message.content.startsWith('-quran')) {
              if(!message.channel.guild) return message.reply('** This command only for servers **');

    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`من فضلك ادخل روم صوتي `);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=9-oGnGaI9Ps&t=8009s', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
  }
  
  if (message.content.startsWith('-stop')) {
              if(!message.channel.guild) return message.reply('** This command only for servers **');

    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`من فضلك ادخل روم صوتي `);
    }
voiceChannel.leave();
  }

});



//╱╱╱╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//╱╱╱╱╱┃┃╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
//╭━┳━━┫┃╭━━┳━━╮╭━━┳╮╭┳━╮╭━╯┃
//┃╭┫╭╮┃┃┃┃━┫━━┫┃╭━┫╰╯┃╭╮┫╭╮┃
//┃┃┃╰╯┃╰┫┃━╋━━┃┃╰━┫┃┃┃┃┃┃╰╯┃
//╰╯╰━━┻━┻━━┻━━╯╰━━┻┻┻┻╯╰┻━━╯



client.on('message', message => {
    if (message.content === "-roles") {
        if(!message.channel.guild) return message.reply('** This command only for servers **');

        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        message.channel.send(`**[${roles}]**`);
    }
});


//╭╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//┃┃╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
//┃╰━┳━━╮╭━━┳╮╭┳━╮╭━╯┃
//┃╭╮┃╭━╯┃╭━┫╰╯┃╭╮┫╭╮┃
//┃╰╯┃╰━╮┃╰━┫┃┃┃┃┃┃╰╯┃
//╰━━┻━━╯╰━━┻┻┻┻╯╰┻━━╯



client.on('message', message => {
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('-bc_b')){

 if(message.channel.type === "dm") return;


client.users.forEach(m =>{
m.sendMessage(args)
message.delete();
})
}

});





client.on('message', message => {

    if (message.author.id === client.user.id) return;
   var a = "```css"
   var z = "```"
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {

     if(!message.member.hasPermission('ADMINISTRATOR')) return;
    if (!args[1]) {
message.channel.send("**-bc <message>**").then(msg => msg.delete(5000));
return;
}

   message.channel.send(`**Sure To Send This Message ?
متاكد من ارسال هذه الرسالة ؟
**
${a}
${args}
${z}
**
Send __yes__ If You Sure
ارسل  **__نعم__** اذا تريد اتمام الامر
**
   
   `).then(msg => msg.delete(8000));
    message.delete()
       const filter = m => m.content.startsWith("yes","نعم");
        if(!message.member.hasPermission('ADMINISTRATOR')) return;
message.channel.awaitMessages(filter, { max: 1, time: 12000, errors: ['time'] })
 .then(collected => {
  if (message.guild) {
 message.guild.members.forEach(m => {
  
            var bc = new Discord.RichEmbed()
            .addField('» Server:', `${message.guild.name}`)
            .addField('» Sent By : ', `${message.author.username}#${message.author.discriminator}`)
            .addField('» Message : ', args)
            
            .setColor('#ffffff')
            // m.send(`[${m}]`);
           
            m.send(`${m}`,{embed: bc});
 });
        const AziRo = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)   
            .setTitle('✔️ | Message Sending ! ')
            .addBlankField(true)
            .addField('👥 | Sent To   ', message.guild.memberCount +"Member!" )        
            .setColor('RANDOM')  
            message.channel.sendEmbed(AziRo) .then(msg => msg.delete(5000));
           
              
} else {
        return;
    }

    }) 
    
 .catch(collected => message.channel.send(`**
:stopwatch: ! انتهى الوقت
حاول لاحقا ! :x:
:stopwatch:Timedout
Try Later :x:
**`));   
        
}
});




client.on("message", message => {

            if (message.content.startsWith(prefix + "obc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : Online Member Count `); 

 message.delete(); 
};     
});





//╱╱╱╱╱╱╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//╱╱╱╱╱╱╱╭╯╰╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
//╭┳━╮╭╮╭╋╮╭╋━━┳━━╮╭━━┳╮╭┳━╮╭━╯┃
//┣┫╭╮┫╰╯┣┫┃┃┃━┫━━┫┃╭━┫╰╯┃╭╮┫╭╮┃
//┃┃┃┃┣╮╭┫┃╰┫┃━╋━━┃┃╰━┫┃┃┃┃┃┃╰╯┃
//╰┻╯╰╯╰╯╰┻━┻━━┻━━╯╰━━┻┻┻┻╯╰┻━━╯


client.on('message' , message => {

  if (message.author.bot) return;
    if(message.content.startsWith( "-invite")) {
 
const embed = new Discord.RichEmbed()
  .setFooter(`©  Dream™ `)
     .setColor(0xd3d0c4)
.setAuthor(message.author.username, message.author.avatarURL)
.setTitle(':arrow_right: Click Here Invite Link اضغط هنا')
.setURL('https://discordapp.com/api/oauth2/authorize?client_id=500702351229714432&permissions=8&scope=bot')

message.channel.sendEmbed(embed);

}
});

client.on('message' , message => {

  if (message.author.bot) return;
    if(message.content == ( "-invite")) {
 
const embed = new Discord.RichEmbed()
  .setFooter(`©  Dream™ `)
     .setColor(0xd3d0c4)
.setAuthor(message.author.username, message.author.avatarURL)
.setTitle(':arrow_right: Click Here Invite Link اضغط هنا')
.setURL('https://discordapp.com/api/oauth2/authorize?client_id=500702351229714432&permissions=8&scope=bot')

message.channel.sendEmbed(embed);

}
});

//invite// --------------------------------------------------------------------------------

client.on('message' , message => {
 var prefix = "-";
  if (message.author.bot) return;
    if(message.content == (prefix  + 'support')) {
  
const embed = new Discord.RichEmbed()
   .setColor(0xd3d0c4)
.setAuthor(message.author.username, message.author.avatarURL)
.setTitle(':arrow_right: Click Here Invite Link اضغط هنا')
.setURL('  https://discord.gg/ArGwWfH ')
  .setFooter(`©  SOKA™ `)
message.channel.sendEmbed(embed);

}
});


client.on('message', message => {
    if (message.content.startsWith ("-invites")) {
     if(!message.channel.guild) return message.reply('** This command only for servers **');
         var mentionned = message.mentions.users.first();
        var os;
      if(mentionned){
          var os = mentionned.id;
      } else {
          var os = message.author.id;
          
      }
          var oss;
      if(mentionned){
          var oss = mentionned;
      } else {
          var oss = message.author;
          
      }
message.guild.fetchInvites()
 .then(invites =>{
 if(!invites.find(invite => invite.inviter.id === `${os}`)) return message.channel.send(`**${oss.username}, Does't Have Invites :x:**`);
 message.channel.send(`**__${invites.find(invite => invite.inviter.id === `${os}`).uses}__ Member Joined By ${oss.username} !** :chart_with_upwards_trend: `)

 })
 
 

}

});


client.on('message', message => {
    if (!message.content.startsWith(prefix)) return;
  if(!message.channel.guild) return message.reply('** This command only for servers **')
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (command === "kill"){

   var sabotage = message.mentions.users.first();
   if(sabotage == message.author)return message.reply(`**الانتحار مو زين و الله**`);
    if(sabotage === client.user) return message.reply(`** تبي تقتلني ؟ **`);
  if (sabotage < 1) {
    message.delete();
    return message.channel.sendMessage('ضع شيئا للقتل، مثل ذكر مستخدم، أو استخدام رمز تعبيري');
  }
  if (!sabotage) return message.channel.send(`Please Mention A Member to Kill :warning:`)
  message.channel.send("▄︻̷̿┻̿═━一 ${sabotage")
  .then(msg =>{
  msg.edit(`▄︻̷̿┻̿═━一 ${sabotage} :three:`);
  setTimeout(function() {
    msg.edit(`▄︻̷̿┻̿═━一 ${sabotage} :two:`);
  }, 1000);
  setTimeout(function() {
    msg.edit(`▄︻̷̿┻̿═━一 ${sabotage} :one:`);
  }, 2000);
  setTimeout(function() {
    msg.edit(`▄︻̷̿┻̿═━一 :boom:`);
  }, 3000);
  setTimeout(function() {
    msg.edit(`▄︻̷̿┻̿═━一 :fire:`);
  }, 4000);
  setTimeout(function() {
    msg.edit(`▄︻̷̿┻̿═━一 :skull:`);
  }, 5000);
  msg.delete(6000)
  message.delete()
  })
  message.channel.send("**تم اخفاء الجريمة بنجاح :hole: **").then(msg => msg.delete(10000));
    }
});


client.on('message', message => {
      if(message.content.startsWith ("-marry")) {
      if(!message.channel.guild) return message.reply('** This command only for servers **')
      var proposed = message.mentions.members.first()
     
      if(!message.mentions.members.first()) return message.reply('لازم تطلب ايد وحدة').catch(console.error);
      if(message.mentions.users.size > 1) return message.reply('ولد ما يصحلك الا حرمة وحدة كل مرة').catch(console.error);
       if(proposed === message.author) return message.reply(`**خنثى ؟ **`);
        if(proposed === client.user) return message.reply(`** تبي تتزوجني؟ **`);
              message.channel.send(`**${proposed} 
 بدك تقبلي عرض الزواج من ${message.author}
 العرض لمدة 15 ثانية 
 اكتب موافقة او لا** `)

const filter = m => m.content.startsWith("موافقة");
message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
    message.channel.send(`**${message.author} و ${proposed} الف الف مبروك الله يرزقكم الذرية الصالحة**`);
})
   .catch(collected => message.channel.send(`**السكوت علامة الرضا نقول مبروك ؟**`))
   
   const filte = m => m.content.startsWith("لا");
message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
   message.channel.send(`**${message.author} تم رفض عرضك**`);
})
        
  
             
    
  }
}); 


//╭━━━╮╱╱╱╱╱╱╱╱╱╱╱╱╭━━━╮╱╱╱╱╱╱╱╱╱╱╭╮
//╰╮╭╮┃╱╱╱╱╱╱╱╱╱╱╱╱┃╭━╮┃╱╱╱╱╱╱╱╱╱╱┃┃
//╱┃┃┃┣┳━━┳━━┳━┳┳╮╭┫┃╱╰╋━━┳╮╭┳━╮╭━╯┃
//╱┃┃┃┣┫━━┫╭━┫╭╋┫╰╯┃┃╱╭┫╭╮┃╰╯┃╭╮┫╭╮┃
//╭╯╰╯┃┣━━┃╰━┫┃┃┃┃┃┃╰━╯┃╰╯┃┃┃┃┃┃┃╰╯┃
//╰━━━┻┻━━┻━━┻╯╰┻┻┻┻━━━┻━━┻┻┻┻╯╰┻━━╯



client.on('message', message => {
if(message.content.startsWith('-discrim') ) {
     if(!message.channel.guild) return message.reply('** This command only for servers **')
     
          var args = message.content.split(" ").slice(1);
    let sent = 0
	let count = 1;
	
      if(args){
client.users.filter(u => u.discriminator == args[0]).forEach(u => {
    if(sent > 4){
     return
    }
    sent = sent + 1
      message.channel.send(`

      ** ${count}➥ ${u.tag}**
         
      `)
      count++;
   
      })
      } 
      
}

if(message.content ===('-discrim') ) {
     if(!message.channel.guild) return message.reply('** This command only for servers **')
  let sent = 0
	let count = 1;
          

client.users.filter(u => u.discriminator == message.author.discriminator).forEach(u => {
    if(sent > 4){
        return
    }
    sent = sent + 1
      message.channel.send(`

      ** ${count}➥ ${u.tag}**
         
      `)
      count++;
   
      })
          
      }

 
});


//╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
//╭━┳━━┳━╮╭━━┳╮╭┳━━╮╭━━┳╮╭┳━╮╭━╯┃
//┃╭┫┃━┫╭╮┫╭╮┃╰╯┃┃━┫┃╭━┫╰╯┃╭╮┫╭╮┃
//┃┃┃┃━┫┃┃┃╭╮┃┃┃┃┃━┫┃╰━┫┃┃┃┃┃┃╰╯┃
//╰╯╰━━┻╯╰┻╯╰┻┻┻┻━━╯╰━━┻┻┻┻╯╰┻━━╯


client.on('message', message => {
        
   if(message.content.startsWith(prefix + 'rename')) {
if(message.member.hasPermission("ADMINISTRATOR")) {
         let args = message.content.split(' ').slice(2);
var mentionned = message.mentions.users.first();
   
  if(!args){
    return message.channel.send(":x: " + `**| Please enter a new Nick for ${mentionned}**`);
  }
  if (!mentionned)return message.channel.send("**You Have to Mention A member :x:**")
  message.guild.member(mentionned).setNickname(args.join(" ")).then(user => message.channel.send(`:full_moon_with_face: ${mentionned}'s' **New NickName is **` + `__${args.join(" ")}__` + "!")).catch(console.error);
} else {
  return message.reply(":x: " + "| You need to have the \"ADMINISTRATOR\" Permission");
  }


    }
});


//╱╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╭╮
//╱╱╱┃┃╱╱╱╱╱╱╱╱╱╱╱┃┃
//╭┳━╯┃╭━━┳╮╭┳━╮╭━╯┃
//┣┫╭╮┃┃╭━┫╰╯┃╭╮┫╭╮┃
//┃┃╰╯┃┃╰━┫┃┃┃┃┃┃╰╯┃
//╰┻━━╯╰━━┻┻┻┻╯╰┻━━╯


client.on('message', message => {
   if (message.content.startsWith ("-id")) {
       if(!message.channel.guild) return message.reply('** This command only for servers **');

               var mentionned = message.mentions.users.first();
    var mentionavatar;
      if(mentionned){
          var mentionavatar = mentionned;
      } else {
          var mentionavatar = message.author;
          
      }
      message.guild.fetchInvites()
       .then(invites =>{
 if(!invites.find(invite => invite.inviter.id === `${mentionavatar.id}`)) {
     let embed = new Discord.RichEmbed()
  .setColor(0xd3d0c4)
   .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("Name:",`<@` + `${mentionavatar.id}` + `>`, true)
  .addField('Discrim:',"#" +  `${mentionavatar.discriminator}`, true)
   .addField("ID:", "**" + `${mentionavatar.id}` + "**", true)
  .addField("Create At:", "**" + `${mentionavatar.createdAt}` + "**", true)
  .addField("Invites:", `**0**` ,true)
     .setFooter(`©  Dream™ `)
      message.channel.sendEmbed(embed);
 }else{
   let embed = new Discord.RichEmbed()
  .setColor(0xd3d0c4)
   .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("Name:",`<@` + `${mentionavatar.id}` + `>`, true)
  .addField('Discrim:',"#" +  `${mentionavatar.discriminator}`, true)
   .addField("ID:", "**" + `${mentionavatar.id}` + "**", true)
  .addField("Create At:", "**" + `${mentionavatar.createdAt}` + "**", true)

  .addField("Invites:", `**${invites.find(invite => invite.inviter.id === `${mentionavatar.id}`).uses}**` ,true)
    .setFooter(`©  Dream™ `)

  message.channel.sendEmbed(embed);
 }
 
       })
    }
});


//╱╱╱╱╱╱╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//╱╱╱╱╱╱╱╱┃┃╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
//╭━━┳━┳━━┫┃╭━━╮╭━━┳╮╭┳━╮╭━╯┃
//┃╭━┫╭┫╭╮┃┃┃┃━┫┃╭━┫╰╯┃╭╮┫╭╮┃
//┃╰━┫┃┃╰╯┃╰┫┃━┫┃╰━┫┃┃┃┃┃┃╰╯┃
//╰━━┻╯╰━━┻━┻━━╯╰━━┻┻┻┻╯╰┻━━╯


client.on('message', message => {

   if (message.content.startsWith("-crole")) {
       if(!message.channel.guild) return message.reply('**Commands in the server**');
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply('⚠ **You do not have permissions**');
        let args = message.content.split(" ").slice(1);
            message.guild.createRole({
                name : args.join(' '),
                color :    0xd3d0c4, 
                permissions : [1]
            }).then(function(role){
                message.addRole(role)
            })
            message.reply("Role Created !")

}
});


//╭━━━╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//┃╭━╮┃╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
//┃╰━╯┣━━┳━━┳╮╭┳━━╮╭━━┳╮╭┳━╮╭━╯┣━━╮
//┃╭╮╭┫╭╮┃╭╮┃╰╯┃━━┫┃╭━┫╰╯┃╭╮┫╭╮┃━━┫
//┃┃┃╰┫╰╯┃╰╯┃┃┃┣━━┃┃╰━┫┃┃┃┃┃┃╰╯┣━━┃
//╰╯╰━┻━━┻━━┻┻┻┻━━╯╰━━┻┻┻┻╯╰┻━━┻━━╯

client.on("message", (message) => {
if (message.content.startsWith("-cv")) {
    if(!message.channel.guild) return message.reply('** This command only for servers **');
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
        const embed = new Discord.RichEmbed()
        .setColor(0xd3d0c4)
        .setDescription(' **Room Created ! ✔** ')
  .setFooter(`©  Dream™ `)
        message.channel.sendEmbed(embed);
}
});



client.on("message", (message) => {
if (message.content.startsWith("-ct")) {
    if(!message.channel.guild) return message.reply('** This command only for servers **');
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
    const embed = new Discord.RichEmbed()
        .setColor(0xd3d0c4)
        .setDescription(' **Room Created ! ✔** ')
       .setFooter(`©  Dream™ `)
        message.channel.sendEmbed(embed);
}
});

//delete room  --------------------------------------------------------------------------------
client.on("message", (message) => {
    if (message.content.startsWith('-del')) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");

        let args = message.content.split(' ').slice(1);
        let channel = message.client.channels.find('name', args.join(' '));
        if (!channel) return message.reply('**There is no room like this name -_-**').catch(console.error);
        channel.delete()
    }
});

//╱╭╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//╭╯╰╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
//╰╮╭╋┳╮╭┳━━┳━╮╭━━┳╮╭┳━╮╭━╯┣━━╮
//╱┃┃┣┫╰╯┃┃━┫╭╯┃╭━┫╰╯┃╭╮┫╭╮┃━━┫
//╱┃╰┫┃┃┃┃┃━┫┃╱┃╰━┫┃┃┃┃┃┃╰╯┣━━┃
//╱╰━┻┻┻┻┻━━┻╯╱╰━━┻┻┻┻╯╰┻━━┻━━╯


client.on('message', message => {
        
   if(message.content.startsWith(prefix + 'timer')) {
         let args = message.content.split(' ').slice(1);
  let Timer = args[0];

  if(!args[0]){
    return message.channel.send(":x: " + "| Please Enter a time period followed by \"s or m or h\"");
  }

  if(args[0] <= 0){
    return message.channel.send(":x: " + "| Please Enter a time period followed by \"s or m or h\"");
  }

  message.channel.send(":white_check_mark: " + "| Timer Started for: " + `${ms(ms(Timer), {long: true})}`)

  setTimeout(function(){
    message.channel.send(message.author.toString() + ` The Timer Has FINISHED!, it lasted: ${ms(ms(Timer), {long: true})}`)

  }, ms(Timer));

    }
});


//╱╱╱╱╱╱╭╮╱╱╱╱╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╭╮
//╱╱╱╱╱╱┃┃╱╱╱╱╱╱┃┃╱╱╱╱╱╱╱╱╱╱╱┃┃
//╭━━┳╮╭┫╰━┳━━┳━╯┃╭━━┳╮╭┳━╮╭━╯┣━━╮
//┃┃━┫╰╯┃╭╮┃┃━┫╭╮┃┃╭━┫╰╯┃╭╮┫╭╮┃━━┫
//┃┃━┫┃┃┃╰╯┃┃━┫╰╯┃┃╰━┫┃┃┃┃┃┃╰╯┣━━┃
//╰━━┻┻┻┻━━┻━━┻━━╯╰━━┻┻┻┻╯╰┻━━┻━━╯


var prefix = "-";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
 

if (command == "embed") {
      if(!message.channel.guild) return message.reply('** This command only for servers**');
    let say = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)  
  .setAuthor(message.author.username)
    .setDescription(args.join("  "))
    .setColor(0xd3d0c4)
      .setFooter(`©  Dreams™ `)
    message.channel.sendEmbed(say);
    
    message.delete();
  }


});



client.on("message", message => {
  if (message.channel.type === "dm") {

      message.channel.startTyping();
      setTimeout(() => {
        message.channel.stopTyping();
      }, Math.random() * (1 - 3) + 1 * 1000);
   
  }
});

//╱╱╱╱╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//╱╱╱╱╱╭╯╰╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
//╭━━┳━┻╮╭╋━━╮╭━━┳╮╭┳━╮╭━╯┃
//┃╭━┫╭╮┃┃┃━━┫┃╭━┫╰╯┃╭╮┫╭╮┃
//┃╰━┫╭╮┃╰╋━━┃┃╰━┫┃┃┃┃┃┃╰╯┃
//╰━━┻╯╰┻━┻━━╯╰━━┻┻┻┻╯╰┻━━╯


var cats = [

"https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg",
"https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg",
"http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg",
"https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg",
"https://vignette1.wikia.nocookie.net/houseofnight/images/8/8b/Cats.jpg/revision/latest?cb=20130812053537",
"https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg",
"http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg"
]
    client.on('message', message => {
        
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'cat')) {
        if(!message.channel.guild) return message.reply('** This command only for servers **');
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
.setColor(0xd3d0c4)
   .setFooter(`©  Dream™ `)
message.channel.sendEmbed(cat);

    }
});


//╱╭━┳╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//╱┃╭┫┃╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
//╭╯╰┫┃╭┳━━╮╭━━┳╮╭┳━╮╭━╯┃
//╰╮╭┫┃┣┫╭╮┃┃╭━┫╰╯┃╭╮┫╭╮┃
//╱┃┃┃╰┫┃╰╯┃┃╰━┫┃┃┃┃┃┃╰╯┃
//╱╰╯╰━┻┫╭━╯╰━━┻┻┻┻╯╰┻━━╯
//╱╱╱╱╱╱┃┃
//╱╱╱╱╱╱╰╯



var flip = ["**__HEADS__**",
"**__TAILS__**"
]
    client.on('message', message => {
        
    if(message.content.startsWith(prefix + 'flip')) {
        if(!message.channel.guild) return message.reply('** This command only for servers **');
         var cat = new Discord.RichEmbed()
.setDescription(flip[Math.floor(Math.random() * flip.length)])
.setThumbnail("https://cdn.onlinewebfonts.com/svg/img_441809.png")
.setColor(0xd3d0c4)
   .setFooter(`©  Dream™ `)
message.channel.sendEmbed(cat);

    }
});



//╱╱╱╱╱╱╱╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//╱╱╱╱╱╱╱╱╱┃┃╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
//╭╮╭┳━━┳╮╭┫╰━┳━━┳━┳━━╮╭━━┳╮╭┳━╮╭━╯┃
//┃╰╯┃┃━┫╰╯┃╭╮┃┃━┫╭┫━━┫┃╭━┫╰╯┃╭╮┫╭╮┃
//┃┃┃┃┃━┫┃┃┃╰╯┃┃━┫┃┣━━┃┃╰━┫┃┃┃┃┃┃╰╯┃
//╰┻┻┻━━┻┻┻┻━━┻━━┻╯╰━━╯╰━━┻┻┻┻╯╰┻━━╯


  
client.on('message', message => {
    if(message.content == '-members') {
    const embed = new Discord.RichEmbed()
    .setDescription(`**Members info🔋
:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart: idle:      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}   
:black_heart: offline:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size} 
:blue_heart:   all:  ${message.guild.memberCount}**`)         
             .setColor(0xd3d0c4)
            .setFooter(`©  Dream™ `)
         message.channel.send({embed});

    }
  });


//╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
//�����━━┳┳━━┳━━┳━╮╱╭���━┳╮╭┳━╮╭━╯┃
//┃━━╋┫╭━┫╭╮┃╭╮╮┃╭━┫╰╯┃╭╮┫╭╮┃
//┣━━┃┃╰━┫╰╯┃┃┃┃┃╰━┫┃┃┃┃┃┃╰╯┃
//╰━━┻┻━━┻━━┻╯╰╯╰━━┻┻┻┻╯╰┻━━╯



   client.on("message", message => {

              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "sicon"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
  .setColor(0xd3d0c4)
     .setFooter(`©  Dream™ `)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });
  
//╱╱╱╭╮╱╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//╱╱╭╯╰╮╱╭╯╰╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
//╭━┻╮╭╋━┻╮╭╋━━╮╭━━┳╮╭┳━╮╭━╯┃
//┃━━┫┃┃╭╮┃┃┃━━┫┃╭━┫╰╯┃╭╮┫╭╮┃
//┣━━┃╰┫╭╮┃╰╋━━┃┃╰━┫┃┃┃┃┃┃╰╯┃
//╰━━┻━┻╯╰┻━┻━━╯╰━━┻┻┻┻╯╰┻━━╯


client.on('message', message => {
    if (message.content.startsWith("-stats")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setColor('ffffff')
            .setTitle('**Dreams Stats** ')
            .addField('``Uptime``', timeCon(process.uptime()), true)
            .addField('``Ping Is``' , `${Date.now() - message.createdTimestamp}` + '``Ms``', true)
            .addField('``RAM Usage``', `${(process.memoryUsage().rss / 1048576).toFixed()}MB`, true)
            .addField('``Guild Count``', client.guilds.size, true)
            .addField('``Bot In channel``' , `${client.channels.size}` , true)
            .addField('``Users rout``' ,`${client.users.size}` , true)
            .addField('``Name Bot Or tag``' , `${client.user.tag}` , true)
            .addField('``Bot Id``' , `${client.user.id}` , true)
           .setThumbnail(client.avatarURL)
            .setFooter('Dreams')
          
    })
}
});


function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}


//╱╱╱╱╭━╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//╱╱╱╱┃╭╯╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
//╭┳━┳╯╰┳━━╮╭━━┳╮╭┳━╮╭━╯┃
//┣┫╭╋╮╭┫╭╮┃┃╭━┫╰╯┃╭╮┫╭╮┃
//┃┃┃┃┃┃┃╰╯┃┃╰━┫┃┃┃┃┃┃╰╯┃
//╰┻╯╰┻╯╰━━╯╰━━┻┻┻┻╯╰┻━━╯
 
 
client.on('message', message => {
    if (message.content === "-info") {
    if(!message.channel.guild) return;
    const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const now = new Date();
    const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
    const days = millis / 1000 / 60 / 60 / 24;
    let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
    var embed  = new Discord.RichEmbed()
    .setAuthor("[ Dreames Bot ]", " https://cdn.discordapp.com/attachments/409281937794924546/420678602892378112/Untitled-1_converted.png")
    .addField("**[ Prefix ] :**","**[ - ]**" , true)
    .addField("**🆔 [ SOKA ID ] **", "**"+"500702351229714432"+"**",true)
    .addField("**🏷 [ SOKA ] **","** دريمس**")
    .addField("🛠 [ Bot Developer ]","<@!389100615432929290>")
    .addField("**🌍 [ Servers ]**" , "**"+`${client.guilds.size}`+" Server**",true)
    .addField("**👥 [ Users ] **",`** ${client.users.size} User**`)
    .setThumbnail(" https://cdn.discordapp.com/attachments/409281937794924546/420678602892378112/Untitled-1_converted.png")
    .setColor("ffffff")
    .setFooter(`-help to see all SOKA commands `, ' https://cdn.discordapp.com/attachments/409281937794924546/420678602892378112/Untitled-1_converted.png')
    message.channel.sendEmbed(embed)
    }
    });


//╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//╱╱╱╱╱╱╱╱╱╱╱╱╭╯╰╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
//╭╮╭┳━╮╱╭╮╭┳╮┣╮╭╋━━╮╭━━┳╮╭┳━╮╭━╯┃
//┃┃┃┃╭╮╮┃╰╯┃┃┃┃┃┃┃━┫┃╭━┫╰╯┃╭╮┫╭╮┃
//┃╰╯┃┃┃┃┃┃┃┃╰╯┃╰┫┃━┫┃╰━┫┃┃┃┃┃┃╰╯┃
//╰━━┻╯╰╯╰┻┻┻━━┻━┻━━╯╰━━┻┻┻┻╯╰┻━━╯


client.on('message', message => {

       if(message.content === prefix + "mutechannel") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("**__You Dont Have Perm :warning: __**");
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                          const embed = new Discord.RichEmbed()
          .setColor(0xff0000)
        .setDescription('**__Channel Muted :lock: __**')
.setFooter(message.author.username, message.author.avatarURL)
               message.channel.sendEmbed(embed);
              });
                }
 // unmute channel  --------------------------------------------------------------------------------
    if(message.content === prefix + "unmutechannel") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("**__You Dont Have Perm :warning: __**");
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                      const embed = new Discord.RichEmbed()
         .setColor(0x56f442)
        .setDescription('**__Channel UnMuted :unlock: __**')
.setFooter(message.author.username, message.author.avatarURL)
               message.channel.sendEmbed(embed);
              });
                }
    
});



//╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭━╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃╭���╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
//╭━━┳━━┳━┳╮╭┳━━┳━┳┳━┳╯╰┳━━╮╭━━┳╮╭┳━╮╭━╯┃
//┃━━┫┃━┫╭┫╰╯┃┃━┫╭╋┫╭╋╮╭┫╭╮┃┃╭━┫╰╯┃╭╮┫╭╮┃
//┣━━┃┃━┫┃╰╮╭┫┃━┫┃┃┃┃┃┃┃┃╰╯┃┃╰━┫┃┃┃┃┃┃╰╯┃
//╰━━┻━━┻╯╱╰╯╰━━┻╯╰┻╯╰┻╯╰━━╯╰━━┻┻┻┻╯╰┻━━╯


  client.on('message', message => {
    if (message.content === "-serverinfo") {
        if (!message.channel.guild) return
        var verificationLevel = message.guild.verificationLevel;
        const verificationLevels = ['None','Low','Meduim','High','Extreme'];
        var Y1 = message.guild.createdAt.getFullYear() - 2000
        var M2 = message.guild.createdAt.getMonth()
        var D3 = message.guild.createdAt.getDate()
        const xNiTRoZ = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setColor('ffffff')
         .setTimestamp()
         .setTitle(message.guild.name,message.guild.iconURL)
         .addField(':id: Server Id :',`${message.guild.id}`,true)
         .addField(':date: Create Date: ',D3 + '.' + M2 + '.' + Y1,true)             
         .addField(':crown: Server Owner:',`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)             
         .addField(':busts_in_silhouette: Members : ' + ` ${message.guild.memberCount} `,'Online '+`[ ${message.guild.members.filter(m=>m.presence.status == 'online','idle','dnd').size} ]`+ ','+'Offline '+`[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]`,true)
         .addField(':speech_balloon: Channels:' +' '+message.guild.channels.size+' ',`Text [ ${message.guild.channels.filter(m => m.type === 'text').size} ]`+', '+`Voice [ ${message.guild.channels.filter(m => m.type === 'voice').size} ]`,true)
         .addField(':earth_asia: Region:',message.guild.region)
         .addField(':ribbon: Server Emojis :',`${message.guild.emojis.size}`,true)
         .addField(':construction: VerificationLevel:',`${verificationLevels[message.guild.verificationLevel]}`,true)
         .addField(':closed_lock_with_key: Roles Count : '+message.guild.roles.size+' ','Type`-roles` To See The Server Roles!')
         message.channel.send({embed:xNiTRoZ});
     }
    });
    
//╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭━╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃╭╯╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
//╭╮╭┳━━┳━━┳━┳┳━┳╯╰┳━━╮╭━━┳╮╭┳━╮╭━╯┃
//┃┃┃┃━━┫┃━┫╭╋┫╭╋╮╭┫╭╮┃┃╭━┫╰╯┃╭╮┫╭╮┃
//┃╰╯┣━━┃┃━┫┃┃┃┃┃┃┃┃╰╯┃┃╰━┫┃┃┃┃┃┃╰╯┃
//╰━━┻━━┻━━┻╯╰┻╯╰┻╯╰━━╯╰━━┻┻┻┻╯╰┻━━╯

    
        client.on('message', message => {
     if (message.content === "-userinfo") {
		 if(!message.channel.guild) return message.reply('** This command only for servers**');
     let embed = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)  
               .setFooter(`Anti Invite Links`, '')
    .setColor("ffffff")
    .addField(" :bust_in_silhouette: Full Username", `${message.author.username}#${message.author.discriminator}`)
    .addField(" :id: User ID", message.author.id)
    .addField(" :information_source: Stats", `${message.author.presence.status}`, true)
    .addField(' :game_die: Game', `${message.author.presence.game === null ? "No Game" : message.author.presence.game.name}`, true)
    .addField(':robot: Bot ?', message.author.client)
    .addField(" :shield: Roles:", message.member.roles.filter(r => r.id !== message.guild.id).map(roles => roles.name))
    .addField(" :globe_with_meridians: Registered \ Joined Discord", message.author.createdAt)
    .addField(" :inbox_tray: Joined Server", message.member.joinedAt)

     
  message.channel.sendEmbed(embed);
    }
});


//╱╱╭╮╱╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//╱╱┃┃╱╱╱┃┃╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
//╭━╯┣╮╭╮┃┃╭━━┳━━╮╭━━┳╮╭┳━╮╭━╯┃
//┃╭╮┃╰╯┃┃┃┃╭╮┃╭╮┃┃╭━┫╰╯┃╭╮┫╭╮┃
//┃╰╯┃┃┃┃┃╰┫╰╯┃╰╯┃┃╰━┫┃┃┃┃┃┃╰╯┃
//╰━━┻┻┻╯╰━┻━━┻━╮┃╰━━┻┻┻┻╯╰┻━━╯
//╱╱╱╱╱╱╱╱╱╱╱╱╭━╯┃
//╱╱╱╱╱╱╱╱╱╱╱╱╰━━╯



client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var iiMo = new Discord.RichEmbed()
        .setColor(0xffffff)
        .setTimestamp()
        .setTitle('**I have received a new DM !**')
        .setThumbnail(`${message.author.avatarURL}`)
        .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
        .setFooter(`From **${message.author.tag} (${message.author.id})**`)
        
    client.channels.get("409331710359109642").send({embed:iiMo});
    }
});


//╱╱╱╱╱╱╱╱╱╭╮╱╱╱╱╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//╱╱╱╱╱╱╱╱╭╯╰╮╱╱╱╱╭╯╰╮╱╱╱╱╱╱╱╱╱╱╱┃┃
//╭━━┳━━┳━╋╮╭╋━━┳━┻╮╭╯╭━━┳╮╭┳━╮╭━╯┃
//┃╭━┫╭╮┃╭╮┫┃┃╭╮┃╭━┫┃╱┃╭━┫╰╯┃╭╮┫╭╮┃
//┃╰━┫╰╯┃┃┃┃╰┫╭╮┃╰━┫╰╮┃╰━┫┃┃┃┃┃┃╰╯┃
//╰━━┻━━┻╯╰┻━┻╯╰┻━━┻━╯╰━━┻┻┻┻╯╰┻━━╯


client.on('message', message => {
  
if(message.content.split(' ')[0] == '-sug'){
    if (message.author.bot) return;
  
                        let args = message.content.split(' ').slice(1).join(' ');
                             if (!args) return message.reply("You Have To Write A Msg !");

  let embed = new Discord.RichEmbed()
                                                .setAuthor(message.author.username, message.author.avatarURL)
                                                .setDescription('**__:mailbox_with_mail: Suggestion Sent !__**')
                                                .setThumbnail(message.author.avatarURL)
                                                .addField("**-Sent By :**", message.author.username)
                                                    .addField("**-Sender ID :**", message.author.id)
                                                .addField("**-Suggest :**", args)
                                                .setColor("FF0000")
                                                .setFooter(message.author.username, message.author.avatarURL)
                                               
                                                
 client.channels.get("420241670865420288").send(embed)
  let embe = new Discord.RichEmbed()
                                                .setAuthor(message.author.username, message.author.avatarURL)
                                                .setDescription('**__:mailbox_with_mail: Suggestion Sent Successfully !__**')
                                                .setThumbnail(message.author.avatarURL)
                                                                                                .setColor("FF0000")

                                                .setFooter(message.author.username, message.author.avatarURL)
                                                message.channel.sendEmbed(embe);
           
                                  
}
});

client.on('message', message => {
  
if(message.content.split(' ')[0] == '-bug'){
    if (message.author.bot) return;
                        let args = message.content.split(' ').slice(1).join(' ');
                             if (!args) return message.reply("You Have To Write A Msg !");

  let embed = new Discord.RichEmbed()
                                                .setAuthor(message.author.username, message.author.avatarURL)
                                                .setDescription('**__:mailbox_with_mail: Bug Sent !__**')
                                                .setThumbnail(message.author.avatarURL)
                                                .addField("**-Sent By :**", message.author.username)
                                                    .addField("**-Sender ID :**", message.author.id)
                                                .addField("**-Bug :**", args)
                                                                                                .setColor("FF0000")

                                                .setFooter(message.author.username, message.author.avatarURL)
                                            
                                                
 client.channels.get("423566731236212740").send(embed)
  let embe = new Discord.RichEmbed()
                                                .setAuthor(message.author.username, message.author.avatarURL)
                                                .setDescription('**__:mailbox_with_mail: The Bug Sent Successfully !__**')
                                                .setThumbnail(message.author.avatarURL)
                                                                                                .setColor("FF0000")

                                                .setFooter(message.author.username, message.author.avatarURL)
                                                message.channel.sendEmbed(embe);
           
                                  
}
});

client.on('message', message => {
  
if(message.content.split(' ')[0] == '-contact'){
    if (message.author.bot) return;
                        let args = message.content.split(' ').slice(1).join(' ');
                        if (!args) return message.reply("You Have To Write A Msg !");

  let embed = new Discord.RichEmbed()
                                                .setAuthor(message.author.username, message.author.avatarURL)
                                                .setDescription('**__:mailbox_with_mail: Suggestion Sent !__**')
                                                .setThumbnail(message.author.avatarURL)
                                                .addField("**-Sent By :**", message.author.username)
                                                    .addField("**-Sender ID :**", message.author.id)
                                                .addField("**-Message :**", args)
                                                                                                .setColor("FF0000")

                                                .setFooter(message.author.username, message.author.avatarURL)
                                            
                                                
 client.channels.get("423083675861647360").send(embed)
  let embe = new Discord.RichEmbed()
                                                .setAuthor(message.author.username, message.author.avatarURL)
                                                .setDescription('**__:mailbox_with_mail: Suggestion Sent Successfully !__**')
                                                .setThumbnail(message.author.avatarURL)
                                                                                                .setColor("FF0000")

                                                .setFooter(message.author.username, message.author.avatarURL)
                                                message.channel.sendEmbed(embe);
           
                                  
}
});


//╭━━━┳╮╭╮╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//┃╭━━┫┃┃┃╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
//┃╰━━┫┃┃╰━╮╭━━┳╮╭┳━╮╭━╯┣━━╮
//┃╭━━┫┃┃╭╮┃┃╭━┫╰╯┃╭╮┫╭╮┃━━┫
//┃┃╱╱┃╰┫┃┃┃┃╰━┫┃┃┃┃┃┃╰╯┣━━┃
//╰╯╱╱╰━┻╯╰╯╰━━┻┻┻┻╯╰┻━━┻━━╯


//اذكار --------------------------------------------------------------------------------
const adkar = [
  '**اذكار  | **اللَّهُمّ�� اكْفِنِي بِحَلَ��لِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ.',
  '**اذكار  |  **اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى. ',
  '**اذكار  ‏|  **اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ، دِقَّهُ، وَجِلَّهُ، وَأَوَّلَهُ، وَآخِرَهُ، وَعَلَانِيَتَهُ، وَسِرَّهُ. ',
  '**‏اذكار  |  **أستغفر الله .',     
  '**‏اذكار  | **الْلَّهُ أَكْبَرُ',
  '**‏اذكار  |  **لَا إِلَهَ إِلَّا اللَّ��ُ',
  '**اذكا��  |  **اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ , وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ , اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ.',
  '**اذكار  |  **سُبْحَانَ الْلَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا الْلَّهُ، وَالْلَّهُ أَكْبَرُ',
  '**اذكار  | **لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلُّ شَيْءِ قَدِيرِ.',
  '**اذكار  | **أسْتَغْفِرُ اللهَ وَأتُوبُ إلَيْهِ',
  '**‏اذكار  | **سُبْحـانَ اللهِ وَبِحَمْـدِهِ. ',
  '‏**اذكار**|  لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ.',
  '**اذكار  ‏|   **اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُت��قَبّ��لًا.',
  '**اذكار  | ‏ **يَا رَبِّ , لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ , وَلِعَظِيمِ سُلْطَانِكَ.',
  'اذكار    |  **أسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لاَ إلَهَ إلاَّ هُوَ، الحَيُّ القَيُّومُ، وَأتُوبُ إلَيهِ.**',
  '**‏اذكار  |  **اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ.',
  '**‏اذكار  |  **اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحمَّد. ',
  '**‏اذكار  |  **أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق.',
  '**اذكار  |  **يَا حَيُّ يَا قيُّومُ ب��رَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْنٍ. ',
  '**اذكار  |  **اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر ، وَالفَـقْر ، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر ، لا إلهَ إلاّ أَنْـتَ.',
  '**‏اذكار  |  **اللّهُـمَّ عاف��ـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ.',
  '**‏اذكار  |  **سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه. ',
  '**‏اذكار  |  **اللّهُـمَّ بِكَ أَصْـبَحْنا وَبِكَ أَمْسَـينا ، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ النُّـشُور.',
  '**‏اذكار  |  **بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم. ',
  '**‏اذكار  |  **حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم.',
  '**اذكار  |  **اللّهُـمَّ ما أَصْبَـَحَ بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر.',
  '**‏اذكار  |  **اللّهُـمَّ إِنِّـي أَصْبَـحْتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك',
  '**‏اذكار  |  **رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى الله عليه وسلم نَبِيّـاً',
  '**‏اذكار  |  **اللهم إني أعوذ بك من العجز، والكسل، والجبن، والبخل، والهرم، وعذاب القبر، اللهم آت نفسي تقواها، وزكها أنت خير من زكاها. أنت وليها ومولاها. اللهم إني أعوذ بك من علم لا ينفع، ومن قلب لا يخشع، ومن نفس لا تشبع، ومن دعوة لا يستجاب لها',
  '**‏اذكار  |  **اللهم إني أعوذ بك من شر ما عملت، ومن شر ما لم أعمل',
  '**‏اذكار  |  **اللهم مصرف القلوب صرف قلوبنا على طاعتك',
]
client.on('message', message => {
if (message.author.bot) return;
if (message.content.startsWith('-اذكار')) {
  if(!message.channel.guild) return;
var client= new Discord.RichEmbed()
.setTitle("اذكار")
.setThumbnail('https://static-s.aa-cdn.net/img/ios/914318093/10dec544bb3e64219e85757e09608f55?v=1')
.setColor('RANDOM')
.setDescription(`${adkar[Math.floor(Math.random() * adkar.length)]}`)
               .setTimestamp()
message.channel.sendEmbed(client);

}
});


//╭━━━╮╱╱╱╱╱╱╱╱╱╱╱╭━━━╮╱╱╱╱╱╱╱╭╮
//┃╭━╮┃╱╱╱╱╱╱╱╱╱╱╱┃╭━╮┃╱╱╱╱╱╱╱┃┃
//┃┃╱╰╋━━┳╮╭┳━━┳━━┫┃╱╰╋╮╭┳━╮╭━╯┃
//┃┃╭━┫╭╮┃╰╯┃┃━┫━━┫┃╱╭┫╰╯┃╭╮┫╭╮┃
//┃╰┻━┃╭╮┃┃┃┃┃━╋━━┃╰━╯┃┃┃┃┃┃┃╰╯┃
//╰━━━┻╯╰┻┻┻┻━━┻━━┻━━━┻┻┻┻╯╰┻━━╯

const games = JSON.parse(fs.readFileSync('./Dreams/Storage/games/games.json', "utf8"));
client.on("message", message => {
    if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;

  if (!games[message.author.id]) games[message.author.id] = {
    wins: 0,
    loses: 0,
  };
fs.writeFile('./Dreams/Storage/games/games.json', JSON.stringify(games), (err) => {
if (err) console.error(err);

})

});



client.on("message", message => {

 if(message.content.startsWith('-احصاء')) {
     
     const embed = new Discord.RichEmbed()
.setColor(0xffffff)
.setTitle(`** احصاءات الالعاب :chart_with_upwards_trend:  **`)
.addField('**عدد مرات اللعب :**',
games[message.author.id].loses  + games[message.author.id].wins
,true)

.addField('**عدد مرات الفوز :**',
`
 ${games[message.author.id].wins}
 `
,true)

.addField('**عدد مرات الخسارة :**',
`
 ${games[message.author.id].loses}
 `
,true)

.addField('**مجموع الكريدت الي فزت فيه  :**',
`
 ${games[message.author.id].wins}` * 25
 
,true)
.setFooter(message.author.username, message.author.avatarURL)
message.channel.sendEmbed(embed);
     
     
     
 }

});



const q = JSON.parse(fs.readFileSync('./Dreams/Storage/games/ques.json', 'utf8'));
client.on('message', message => {
  if(!message.channel.guild) return;

const w = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","aa","bb","cc","dd","ee","ff","gg","hh","ii","jj","kk","ll","mm","nn","oo"]
var c = `${w[Math.floor(Math.random() * w.length)]}`


   if(message.content.startsWith('-عواصم')) {
         
           
                    
const embed = new Discord.RichEmbed()
     .setColor('0bbaba')
.setTitle(q[c].ques)
.setFooter(`امامك 8 ثواني فقط !`)
message.channel.sendEmbed(embed);
           
       const filter = m => m.content.startsWith(q[c].ans);
message.channel.awaitMessages(filter, { max: 1, time: 8000, errors: ['time'] })
 .then(collected => {
const embed = new Discord.RichEmbed()
.setColor(0xffffff)
.setTitle(`** :first_place: اجابة صحيحة  **`)
.setDescription(`**,تم اضافة 25$ لرصيدك :dollar: **`)
.setFooter(message.author.username, message.author.avatarURL)
message.channel.sendEmbed(embed);
games[message.author.id].wins += 1
  points[message.author.id].credits += 25; })
 .catch(collected => {
     games[message.author.id].loses += 1
 const embed = new Discord.RichEmbed()
.setColor(0xff0000)
.setTitle(`** :stopwatch: ! انتهى الوقت **`)
.setDescription(`** :ballot_box_with_check:  الإجابة الصحيحة هي __${q[c].ans}__ **`)
.setFooter(message.author.username, message.author.avatarURL)
message.channel.sendEmbed(embed);
 
 });   
       
       
   }
});

// امثال --------------------------------------------------------------------------------

const a = JSON.parse(fs.readFileSync('./Dreams/Storage/games/amthal.json', 'utf8'));
client.on('message', message => {
  if(!message.channel.guild) return;

const w = ["a","b","c","d","e","f","g","h","i","j","k","l","n","o","p","q","r","s","t","u","v","w","x","y","z","aa","bb","cc","dd"]
var c = `${w[Math.floor(Math.random() * w.length)]}`


   if(message.content.startsWith('-امثال')) {
       
       
         
const embed = new Discord.RichEmbed()
     .setColor('0bbaba')
.setTitle(`**__:older_man: اكمل المثال التالي __**`)
.setDescription(`** ${a[c].ques} **`)
.setFooter(`امامك 8 ثواني فقط !`)
message.channel.sendEmbed(embed);
          
       const filter = m => m.content.startsWith(a[c].ans);
message.channel.awaitMessages(filter, { max: 1, time: 8000, errors: ['time'] })
 .then(collected => {
     

const embed = new Discord.RichEmbed()
.setColor(0xffffff)
.setTitle(`** :first_place: اجابة صحيحة  **`)
.setDescription(`**,تم اضافة 25$ لرصيدك :dollar: **`)
.setFooter(message.author.username, message.author.avatarURL)
message.channel.sendEmbed(embed);

games[message.author.id].wins += 1
  points[message.author.id].credits += 25; })
 .catch(collected => {
     
 const embed = new Discord.RichEmbed()
.setColor(0xff0000)
.setTitle(`** :stopwatch: ! انتهى الوقت **`)
.setDescription(`** :ballot_box_with_check:  الإجابة الصحيحة هي __${a[c].ans}__ **`)
.setFooter(message.author.username, message.author.avatarURL)
message.channel.sendEmbed(embed);

      games[message.author.id].loses += 1
 });  
       
       
   }
});


// امثال --------------------------------------------------------------------------------

const b = JSON.parse(fs.readFileSync('./Dreams/Storage/games/a3lam.json', 'utf8'));
client.on('message', message => {
  if(!message.channel.guild) return;

const w = ["a","b","c","d","e","f","g","h","i","j","k","l","n","o","p","q","r","s","t","u","v","w","x","y","z","aa","bb","cc","dd"]
var c = `${w[Math.floor(Math.random() * w.length)]}`

if(message.content.startsWith('-اعلام')) {
    
const embed = new Discord.RichEmbed()
     .setColor('0bbaba')
.setTitle(`** :arrow_heading_down: حدد دولة العلم التالي **`)
.setDescription(`** ${b[c].ques} **`)
.setFooter(`امامك 10 ثواني فقط !`)
message.channel.sendEmbed(embed);

       const filter = m => m.content.startsWith(b[c].ans);
message.channel.awaitMessages(filter, { max: 1, time: 10000, errors: ['time'] })
 .then(collected => {
const embed = new Discord.RichEmbed()
.setColor(0xffffff)
.setTitle(`** :first_place: اجابة صحيحة  **`)
.setDescription(`**,تم اضافة 25$ لرصيدك :dollar: **`)
.setFooter(message.author.username, message.author.avatarURL)
message.channel.sendEmbed(embed);

games[message.author.id].wins += 1
  points[message.author.id].credits += 25; })
 .catch(collected => {
     
 const embed = new Discord.RichEmbed()
.setColor(0xff0000)
.setTitle(`** :stopwatch: ! انتهى الوقت **`)
.setDescription(`** :ballot_box_with_check:  الإجابة الصحيحة هي __${b[c].ans}__ **`)
.setFooter(message.author.username, message.author.avatarURL)
message.channel.sendEmbed(embed);
      games[message.author.id].loses += 1
 });  
       
       
   }
});


// امثال --------------------------------------------------------------------------------

const e = JSON.parse(fs.readFileSync('./Dreams/Storage/games/emoji.json', 'utf8'));
client.on('message', message => {
  if(!message.channel.guild) return;

const w = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","aa","bb","cc","dd","ee","ff","gg","hh","ii","jj","kk","ll","mm","nn","oo","pp","qq","rr","ss","tt","uu","vv","ww","xx","yy","zz"]
var c = `${w[Math.floor(Math.random() * w.length)]}`


   if(message.content.startsWith('-ايموجي')) {
        
const embed = new Discord.RichEmbed()
     .setColor('0bbaba')
.setTitle(`** ابحث عن الايموجي القادم ! :mag_right:  **`)
.setDescription(`** ${e[c].ques} **`)

.setFooter(`امامك 18 ثانية فقط !`)

message.channel.sendEmbed(embed);


       const filter = m => m.content.startsWith(e[c].ans);
message.channel.awaitMessages(filter, { max: 1, time: 18000, errors: ['time'] })
 .then(collected => {
const embed = new Discord.RichEmbed()
.setColor(0xffffff)
.setTitle(`** :first_place: اجابة صحيحة  **`)
.setDescription(`**,تم اضافة 25$ لرصيدك :dollar: **`)
.setFooter(message.author.username, message.author.avatarURL)
message.channel.sendEmbed(embed);

games[message.author.id].wins += 1
  points[message.author.id].credits += 25; })
 .catch(collected => {
     
 const embed = new Discord.RichEmbed()
.setColor(0xff0000)
.setTitle(`** :stopwatch: ! انتهى الوقت **`)
.setDescription(`** :ballot_box_with_check:  الإجابة الصحيحة هي __${e[c].ans}__ **`)
.setFooter(message.author.username, message.author.avatarURL)
message.channel.sendEmbed(embed);
      games[message.author.id].loses += 1
 });  
       
       
   }
});
//كت تويت --------------------------------------------------------------------------------
client.on('message', message => {
    const w = ["a","b","c","d","e","f","g","h","i","j","k","l","m"]
var c = `${w[Math.floor(Math.random() * w.length)]}`
    const f = JSON.parse(fs.readFileSync('./Dreams/Storage/games/fkk.json', 'utf8'));
   if(message.content.startsWith('-فكك')) {
         if(!message.channel.guild) return;

const w = ['./Dreams/img/fkk.png'];
var Canvas = require('canvas')
var jimp = require('jimp')
        let Image = Canvas.Image,
            canvas = new Canvas(500, 300),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';

        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 500, 300);

})
                let url = message.author.displayAvatarURL.endsWith(".webp") ? message.author.displayAvatarURL.slice(20, 20) + ".png" : message.author.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);

                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
                        ava.src = buf;
                        ctx.drawImage(ava, -100 , -100, 75, 75);

                     
                       ctx.font='bold 30px Arial';
                        ctx.fontSize = '30px';
                        ctx.fillStyle = "#392a47";
                        ctx.textAlign = "center";
                        ctx.fillText(`${f[c].ques}`, 128 , 97  );
   
                   
message.channel.sendFile(canvas.toBuffer())

        })
    })


       const filter = m => m.content.startsWith(`${f[c].ans}`);
message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
 .then(collected => {
     
const embed = new Discord.RichEmbed()
.setColor(0xffffff)
.setTitle(`** :first_place: اجابة صحيحة  **`)
.setDescription(`**,تم اضافة 25$ لرصيدك :dollar: **`)
.setFooter(message.author.username, message.author.avatarURL)
message.channel.sendEmbed(embed);

games[message.author.id].wins += 1
  points[message.author.id].credits += 25; })
 .catch(collected => {
     
 const embed = new Discord.RichEmbed()
.setColor(0xff0000)
.setTitle(`** :stopwatch: ! انتهى الوقت **`)
.setDescription(`** :ballot_box_with_check:  الإجابة الصحيحة هي __${f[c].ans}__ **`)
.setFooter(message.author.username, message.author.avatarURL)
message.channel.sendEmbed(embed);
      games[message.author.id].loses += 1
 });  
       
               
   } 
});
//كت تويت --------------------------------------------------------------------------------

 const cuttweet = [
     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
     'كت تويت | الحرية لـ ... ؟',
     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
     'كت تويت ‏| كلمة للصُداع؟',
     'كت تويت ‏| ما الشيء الذي يُفارقك؟',
     'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
     'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
     '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
     '‏كت تويت | وش يفسد الصداقة؟',
     '‏كت تويت | شخص لاترفض له طلبا ؟',
     '‏كت تويت | كم مره خسرت شخص تحبه؟.',
     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
     '‏كت تويت |أقوى كذبة مشت عليك ؟',
     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
     '‏كت تويت | مطلبك الوحيد الحين ؟',
     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]

 client.on('message', message => {
   if (message.content.startsWith("-كت تويت")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor(0xd3d0c4)
      .setFooter(`©  Dream™ `)
   .setThumbnail(message.author.avatarURL) 
 .addField('لعبه كت تويت' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);

    }
});

client.on('message', message => {
    if (message.content.startsWith("-p")) return;
     if(!message.channel.guild) return;
    if (message.content.startsWith(prefix)) { // The start of commands.
	console.log(`[${message.guild.name}] ${message.author.tag} >> ${message.content}`);
}
});

//صراحه --------------------------------------------------------------------------------
const Sra7a = [
     'صراحه  |  صوتك حلوة؟',
     'صراحه  |  التقيت الناس مع وجوهين؟',
     'صراحه  |  شيء وكنت تحقق اللسان؟',
     'صراحه  |  أنا شخص ضعيف عندما؟',
     'صراحه  |  هل ترغب في إظه����ر حبك ومرفق لشخص أو رؤية هذا الضعف؟',
     'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
     'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
     'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
     'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
     'صراحه  |  أشجع شيء حلو في حياتك؟',
     'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
     'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
     'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
     'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
     'صراحه  |  نظرة و يفسد الصداقة؟',
     'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون رد���� فعلك؟',
     'صراحه  |  شخص معك بالحلوه والمُره؟',
     'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
     'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
     'صراحه  |  وش تتمنى الناس تعرف عليك؟',
     'صراحه  |  ابيع المجرة عشان؟',
     'صراحه  |  أحيانا احس ان الناس ، كمل؟',
     'صراحه  |  مع مين ودك تنام اليوم؟',
     'صراحه  |  صدفة العمر الحلوة هي اني؟',
     'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
     'صراحه  |  صفة تحبها في نفسك؟',
     'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
     'صراحه  |  تصلي صلواتك الخمس كلها؟',
     'صراحه  |  ‏تجامل أحد على راحتك؟',
     'صراحه  |  اشجع شيء سويتة بحياتك؟',
     'صراحه  |  وش ناوي تسوي اليوم؟',
     'صراحه  |  وش شعورك لما تشوف المطر؟',
     'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
     'صراحه  |  ما اكثر شي ندمن عليه؟',
     'صراحه  |  اي الدول تتمنى ان تزورها؟',
     'صراحه  |  تقيم حظك ؟ من عشره؟',
      'صراحه  |  هل تعتقد ان حظك سيئ؟',
     'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
     'صراحه  |  كلمة تود سماعها كل يوم؟',
     'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
     'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
     'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
     'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
     '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
     'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
     '‏صراحه | هل تحب عائلتك ام تكرههم؟',
     '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
     '‏صراحه  |  هل خجلت من نفسك من قبل؟',
     '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
     '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
     '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
      '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
     '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
     '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
     'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
     '‏صراحه  |  ما هو عمرك الحقيقي؟',
     '‏صراحه  |  ما اكثر شي ندمن عليه؟',
     'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
   client.on('message', message => {
 if (message.content.startsWith('-صراحه')) {
     if(!message.channel.guild) return message.reply('** This command only for servers **');
  var client= new Discord.RichEmbed()
  .setTitle("لعبة صراحة ..")
    .setFooter(`©  Dream™ `)
  .setColor(0xd3d0c4)
  .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
  .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                  .setTimestamp()

   message.channel.sendEmbed(client);

 }
});


//عقاب  --------------------------------------------------------------------------------

const Za7f = [
    "**صورة وجهك او رجلك او خشمك او يدك**.",
    "**اصدر اي صوت يطلبه منك الاعبين**.",
    "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
    "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
    "**قول نكتة اذا و لازم احد الاعبين يضحك اذا م����������������د ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
    "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
    "**ذي المرة لك لا تعيدها**.",
    "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
    "**صور اي شيء يطلبه منك الاعبين**.",
    "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
    "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
    "**سو مشهد تمثيلي عن مصرية بتولد**.",
    "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت ��لك��**.",
    "**��ي المرة ��ك لا تعيدها**.",
    "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
    "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
    "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
    "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
    "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
    "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
    "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
    "**اتصل على امك و قول لها انك تحبها :heart:**.",
    "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
    "**قل لواحد ماتعرفه عطني كف**.",
    "**منشن الجميع وقل انا اكرهكم**.",
    "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
    "**روح المطبخ و اكسر صحن او ك��ب**.",
    "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
    "**قول لاي بنت موجود في الروم كلمة حلوه**.",
    "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
    "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من السيرفر**.",
    "**قول قصيدة **.",
    "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
    "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
    "**اول واحد تشوفه عطه كف**.",
    "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
    "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
    "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
    "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
    "**تاخذ عقابين**.",
    "**قول اسم امك افتخر بأسم امك**.",
    "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",
    "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
    "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
    "**تتصل على الوالده  و تقول لها خطفت شخص**.",
    "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
    "**����تصل على الوالده  و تقول لها  احب وحده**.",
      "**تتصل على شرطي تقول له عندكم مطافي**.",
      "**خلاص سامحتك**.",
      "** تصيح في الشارع انا  مجنوون**.",
      "** تروح عند شخص ��قول له احبك**.",
  
]


 client.on('message', message => {
   if (message.content.startsWith("-عقاب")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor(0xd3d0c4)
   .setThumbnail(message.author.avatarURL) 
   .setFooter(`©  Dream™ `)
 .addField('عقاب' ,
  `${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
  message.channel.sendEmbed(embed);
    }
});


//لوخيروك--------------------------------------------------------------------------------

 var prefix = "-";
var rebel = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'لو خيروك')) {
         var cat = new Discord.RichEmbed()
.setImage(rebel[Math.floor(Math.random() * rebel.length)])
 .setColor(0xd3d0c4)
   .setFooter(`©  Dream™ `)
message.channel.sendEmbed(cat);

    }
});
//خواطر --------------------------------------------------------------------------------

const secreT = [
  "**الحياة بكل ما فيها تقف دائمًا على حد الوسطية بين اتزان المعنى وضده من حب وكره وحق وباطل وعدل وظلم**.",
  "**كى تعيش عليك ان تتقن فن التجاهل باحتراف**.",
  "**لا تحزن على من اشعرك بان طيبتك غباء امام وقاحته**.",
  "**هناك من يحلم بالنج��ح وهن��ك من يستيقظ باكرا لتحقيقه**.",
  "**ان تعالج ألمك بنفسك تلك هى القوة**.", 
  "**الجميع يسمع ما تقول والاصدقاء ينصتون لما تقول وافضل الاصدقاء ينصتون لما اخفاه سكوتك**.", 
  "**انتهى زمن الفروسية ، لم تنقرض الخيول بل انقرض الفرسان**.", 
  "**ان تكون اخرسا عاقلا خير من ان تكون نطوقا جهولا**.", 
  "**المناقشات العقيمة لا تنجب افكارا**.", 
  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
]


 client.on('message', message => {
   if (message.content.startsWith("-خواطر")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  
   .setThumbnail(message.author.avatarURL) 
 .addField('لعبه خواطر' ,
  `${secreT[Math.floor(Math.random() * secreT.length)]}`)
   .setColor(0xd3d0c4)
     .setFooter(`©  Dream™ `)
  message.channel.sendEmbed(embed);
    }
});


//حب --------------------------------------------------------------------------------

const Love = [  "**احبك / عدد قطرات المـــطر والشجر وامواج البحر والنجوم الي تتزاحم مبهورة في جمال القمر**.",  "**ساعزفك وساجعلك لحنا تغني عليه جميع قصائد العشــق**.",  "**احبك موت... لاتسألني ما الدليل ارأيت رصاصه تسأل القتيل؟**.",  "**ربما يبيع الانسان شيئا قد شراه لاكن لا يبيع قلبا قد هواه**.",  "**و ما عجبي موت المحبين في الهوى ........... و لكن بقاء العاشقين عجيب**.",   "**حلفت / لاحشـــد جيوش الحب واحتلك مسكين ربي بلاك بعـــاشق ارهـــابي**.",   "**العيــن تعشق صورتك ... والقلب يجري فيه دمك وكل مااسمع صوتك ...شفايفي تقول احبك**.",   "**ياحظ المكان فيك..ياحظ من هم حواليك ...ياحظ الناس تشوفك ... وانا مشتاق اليك**.",   "**لو كنت دمعة داخل عيوني بغمض عليك وصدقي ما راح افتح...ولو كان الثمن عيوني**.",   "**سهل اموت عشانك لكن الصعب اعيش بدونك سهل احبك لكن صعب انساك**.",   "**أخشى ان انظر لعيناك وأنا فى شوق ولهيب لرؤياك**.",   "**أتمنى ان اكون دمعة تولد بعينيك واعيش على خديك واموت عند شفتيك**.",   "**أحياناً أرى الحياة لا تساوى إبتسامة لكن دائماً إبتسامتك هى كيانى**.",   "**من السهل أن ينسى الانسان نفسه .. لكن من الصعب ان ينسى نفساً سكنت نفسه !**.",   "**نفسى أكون نجمة سماك .. همسة شفاك .. شمعة مساك .. بس تبقى معايا وانا معاك**.",   "**أهنئ قلبى بحبك وصبر عينى فى بعدك وأقول إنك نور عينى يجعل روحى فدى قلبك**.", ]


 client.on('message', message => {
   if (message.content.startsWith("-حب")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor(0xd3d0c4)
     .setFooter(`©  Dream™ `)
   .setThumbnail(message.author.avatarURL) 
 .addField('حب' ,
  `${Love[Math.floor(Math.random() * Love.length)]}`)
  message.channel.sendEmbed(embed);
    }
});

//╭╮╱╱╱╱╭╮╱╱╱╱╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//┃┃╱╱╱╱┃┃╱╱╱╱╱╱┃┃╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
//┃╰━┳┳━╯┣━━╮╭━━┫╰━┳━━┳╮╭╮╭╮╭━━┳╮╭┳━╮╭━╯┣━━╮
//┃╭╮┣┫╭╮┃┃━┫┃━━┫╭╮┃╭╮┃╰╯╰╯┃┃╭━┫╰╯┃╭╮┫╭╮┃━━┫
//┃┃┃┃┃╰╯┃┃━┫┣━━┃┃┃┃╰╯┣╮╭╮╭╯┃╰━┫┃┃┃┃┃┃╰╯┣━━┃
//╰╯╰┻┻━━┻━━╯╰━━┻╯╰┻━━╯╰╯╰╯╱╰━━┻┻┻┻╯╰┻━━┻━━╯


client.on('message', message => {
   
      if(message.content === prefix + "hidechannel") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**You Dont Have Perms :x:**');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: false
 })
              message.channel.send('**Channel Hided Successfully ! :white_check_mark:  **')            
 }
});


client.on('message', message => {
   
      if(message.content === prefix + "showchannel") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**You Dont Have Perms :x:**');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: true
 })
              message.channel.send('**Channel Showed Successfully ! :white_check_mark:  **')            
 }
});




//╭╮╱╱╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//┃┃╱╱╱╱┃┃╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
//┃┃╭┳━╮┃┃╭╮╭━━┳╮╭┳━╮╭━╯┣━━╮
//┃┃┣┫╭╮┫╰╯╯┃╭━┫╰╯┃╭╮┫╭╮┃━━┫
//┃╰┫┃┃┃┃╭╮╮┃╰━┫�����┃┃┃┃┃╰╯┣━━┃
//╰━┻┻╯╰┻╯╰╯╰━━┻┻┻┻╯╰┻━━┻━━╯



client.on('message', message => {
    if (message.content.startsWith("-link")) {
        
  message.channel.createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 86400
    }).then(invite =>  
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
   .setColor('RANDOM')
        .setDescription(":white_check_mark: Invite Linke Sent In DM Successfully ")
       
      message.channel.sendEmbed(embed)
    }
});


// ╱╱╱╱╱╱╱╱╭╮╱╱╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//╱╱╱╱╱╱╱╱┃┃╱╱╱╱┃┃╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
//╭━━┳━┳━━┫╰━┳━━┫╰━╮╭━━┳╮╭┳━╮╭━╯┣━━╮
//┃━━┫╭┫╭╮┃╭╮┃╭╮┃╭╮┃┃╭━┫╰╯┃╭╮┫╭╮┃━━┫
//┣━━┃┃┃╭╮┃┃┃┃╭╮┃┃┃┃┃╰━┫┃┃┃┃┃┃╰╯┣━━┃
//╰━━┻╯╰╯╰┻╯╰┻╯╰┻╯╰╯╰━━┻┻┻┻╯╰┻━━┻━━╯
  
  client.on('message', message => {
  
if(message.content.split(' ')[0] == '-srh'){
       if (message.author.bot) return;
     if(!message.channel.guild) return;
                       
let args = message.content.split(' ').slice(1).join(' ');
let arg = message.content.split(' ').slice(2).join(' ');
if(!args) return message.reply ("**Mention A member please** :dove: ");
  if(!arg) return message.reply ("**Write A Message** :dove: ");


 
 
 var user = message.mentions.users.first();

       
        if(user === message.author) return; 
          let em  = new Discord.RichEmbed()
.setAuthor("Sarahah", "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Sarahah_logo.png/250px-Sarahah_logo.png")
.addField("◆ Msg : " , arg)

 .setThumbnail("https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Sarahah_logo.png/250px-Sarahah_logo.png")
                 message.delete()                                    
client.guilds.get(message.guild.id).members.get(user.id).sendEmbed(em)
           

 let embed = new Discord.RichEmbed()
 .setAuthor("Sarahah", "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Sarahah_logo.png/250px-Sarahah_logo.png")
 .setDescription(':dove: شكرا لصراحتك')
 .setColor("10bbb3")
.setThumbnail("https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Sarahah_logo.png/250px-Sarahah_logo.png")
  message.channel.sendEmbed(embed);
}
});


client.on('message', message => {
  
if(message.content.split(' ')[0] == '-srh1'){
       if (message.author.bot) return;
     if(!message.channel.guild) return;
                       
let args = message.content.split(' ').slice(1).join(' ');
let arg = message.content.split(' ').slice(2).join(' ');
if(!args) return message.reply ("**Mention A member please** :dove: ");
  if(!arg) return message.reply ("**Write A Message** :dove: ");


 
 
 var user = message.mentions.users.first();

       
        if(user === message.author) return; 
          let e  = new Discord.RichEmbed()
.setAuthor("Sarahah", "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Sarahah_logo.png/250px-Sarahah_logo.png")
.addField("◆ Sent By :" , message.author.tag)
.addField("◆ Msg : " , arg)

 .setThumbnail("https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Sarahah_logo.png/250px-Sarahah_logo.png")
    message.delete()                                           
client.guilds.get(message.guild.id).members.get(user.id).sendEmbed(e)
                                  



 let embed = new Discord.RichEmbed()
 .setAuthor("Sarahah", "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Sarahah_logo.png/250px-Sarahah_logo.png")
 .setDescription(':dove: شكرا لصراحتك')
 .setColor("10bbb3")
.setThumbnail("https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Sarahah_logo.png/250px-Sarahah_logo.png")
  message.channel.sendEmbed(embed);
}
});



client.on('message', message => {
  
if(message.content.split(' ')[0] == '-sr7'){
       if (message.author.bot) return;
     if(!message.channel.guild) return;
                       if(user === message.author) return;  
let args = message.content.split(' ').slice(1).join(' ');
let arg = message.content.split(' ').slice(2).join(' ');
if(!user) return message.reply ("**Mention A member please** :dove: ");
  if(!arg) return message.reply ("**Write A Message** :dove: ");


 
 var user = message.mentions.users.first();

       
      

const w = ['./Dreams/img/sarahah.png'];
var Canvas = require('canvas')
var jimp = require('jimp')

              
        let Image = Canvas.Image,
            canvas = new Canvas(500, 500),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
  
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 500, 500);

})
 

                let url = message.author.displayAvatarURL.endsWith(".webp") ? message.author.displayAvatarURL.slice(20, 20) + ".png" : message.author.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);

                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
                        ava.src = buf;
                        ctx.drawImage(ava, -100 , -100, 70, 70);
                                             
    
                       
                  
                      
                        ctx.font = 'Bold 28px Arial ';
                        ctx.fontSize = '28px';
                        ctx.fillStyle = "#000000";
                        ctx.textAlign = "center";
                        ctx.fillText(arg, 242 , 201 );





            // when someone calls this command, it also adds 1 earlier at the same, but since this is fetching the previous value, we need to add 1 to the answer, even thought it will be updated
            // seconds after this.
   

    message.delete()                                           
client.guilds.get(message.guild.id).members.get(user.id).sendFile(canvas.toBuffer())
                                  
     })
    })




 let embed = new Discord.RichEmbed()
 .setAuthor("Sarahah", "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Sarahah_logo.png/250px-Sarahah_logo.png")
 .setDescription(':dove: شكرا لصراحتك')
 .setColor("10bbb3")
.setThumbnail("https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Sarahah_logo.png/250px-Sarahah_logo.png")
  message.channel.sendEmbed(embed);
}
});



client.on('message', message => {
     if (message.content === "-sarahah") {
           if(!message.channel.guild) return message.reply('** This command only for servers**');
 const embed = new Discord.RichEmbed()
         .setDescription(`** 「:dove: | SARAHAH COMMANDS」**`)
         .addField("`-sr7`",
         "	لارسال صراحة بالصورة")
.addField("`-srh`",
         "لارسال صراحة بدون اسم")

.addField("`-srh1`",
         "لارسال صراحة باسم ")
         
         .addField("`مثال`",
         "**-srh @OSmix Single Or Taken ?** ")



.setColor("10bbb3")
.setFooter(`©  Dreams™ `)
message.channel.sendEmbed(embed);

    }
});





//╭━━━┳━━━┳━╮╱╭┳���╱╱╭┳━━━┳━━━╮╭━━━┳━╮╭━┳━╮╱╭┳━━━┳━━━╮
//┃╭━╮┃╭━╮┃┃╰╮┃┃╰╮╭╯┃╭━╮┃╭━╮┃┃╭━���┃┃╰╯┃┃┃╰╮┃┣╮╭╮┃╭━╮┃
//┃┃╱╰┫┃╱┃┃╭╮╰╯┣╮┃┃╭┫┃╱┃┃╰━━╮┃┃╱╰┫╭╮╭╮┃╭╮╰╯┃┃┃┃┃╰━━╮
//┃┃╱╭┫╰━╯┃┃╰╮┃┃┃╰╯┃┃╰━╯┣━━╮┃┃┃╱╭┫┃┃┃┃┃┃╰╮┃┃┃┃┃┣━━╮┃
//┃╰━╯┃╭━╮┃┃╱┃┃┃╰╮╭╯┃╭━╮┃╰━╯┃┃╰━╯┃┃┃┃┃┃┃╱┃┃┣╯╰╯┃╰━╯┃
//╰━━━┻╯╱╰┻╯╱╰━╯╱╰╯╱╰╯╱╰┻━━━╯╰━━━┻╯╰╯╰┻╯╱╰━┻━━━┻━━━╯



   
const Canvas = require('canvas');
const jimp = require('jimp');
let points = JSON.parse(fs.readFileSync("./userdata.json", "utf8"));

//╭╮╱╱╱╱╱╱╱╱╱╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//┃┃╱╱╱╱╱╱╱╱╱╱╱┃┃╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
//┃┃╱╱╭━━┳╮╭┳━━┫┃╭┳━━╮╭━━┳╮╭┳━╮╭━╯┣━━╮
//┃┃╱╭┫┃━┫╰╯┃┃━┫┃┣┫╭╮┃┃╭━┫╰╯┃╭╮┫╭╮┃━━┫
//┃╰━╯┃┃━╋╮╭┫┃━┫╰┫┃╰╯┃┃╰━┫┃┃┃┃┃┃╰╯┣━━┃
//╰━━━┻━━╯╰╯╰━━┻━┻┻━╮┃╰━━┻┻┻┻╯╰┻━━┻━━╯
//╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭━╯┃
//╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╰━━╯



client.on("message", message => {
  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;

  if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
    level: 0,
    credits: 0,
    reps: 0,
    lastdaily: "null",
     lastdailyr: "null",
    statu: "",
    
  };
  let userData = points[message.author.id];
  userData.points++;
var Canvas = require('canvas')
var jimp = require('jimp')
  let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
  if (curLevel > userData.level) {
    // Level up!
    userData.level = curLevel;
    let Image = Canvas.Image,
    
            canvas = new Canvas(84, 120),
            ctx = canvas.getContext('2d');       
        fs.readFile('./Dreams/img/levll.png', function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 84, 120);
})

                let url = message.author.displayAvatarURL.endsWith(".webp") ? message.author.displayAvatarURL.slice(5, -20) + ".png" : message.author.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                        
                        //Avatar
                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
                        ava.src = buf;
                        ctx.drawImage(ava, 21, 25, 40, 40);  
                        
                        //level
                        ctx.font = '20px Arial';
                        ctx.fontSize = '19px';
                        ctx.fillStyle = "#909090";
                        ctx.textAlign = "center";
                        ctx.fillText(curLevel, 48, 110);    
                        
message.channel.sendFile(canvas.toBuffer())
message.channel.send(`:up:  | ${message.author.username}, leveled up!`)

})
})

  }

  if (message.content.startsWith(prefix + "level")) {
    message.channel.send(`** :cool:  ${message.author.username}, You are currently level ${userData.level}, with ${userData.points} points.**`);
  }
  
if(message.content.startsWith(prefix + 'credits')) {
    
    
        var mentionned = message.mentions.users.first();

        
if (!points[message.author.id]) userData = {}
if (!userData.credits) userData.credits = 1000;

fs.writeFile("./userdata.json", JSON.stringify(points), (err) => {
if (err) console.error(err);

})
        
    
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
      
       if(!points[x5bzm.id])return message.channel.send("**This User Doesn't Have Account ! :warning: **");

      if  (!points[x5bzm.id]) points[x5bzm.id] = {}
      if (!points[x5bzm.id].credits) points[x5bzm.id].credits = 1000;
         
    
      
           message.channel.send("**:credit_card:  | **" + '`' + x5bzm.username + '`' + "** , you have a balance of :yen: **" + '`' + points[x5bzm.id].credits + '`' + "** credits!**")


}


    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);
    
    
    
    if(message.content.startsWith(prefix + 'transfer')) {
      
          if (!args[0]) {


message.channel.send(`**-transfer <sum> <user>**`)
            return;
        }

        // We should also make sure that args[0] is a number
        if (isNaN(args[0])) {
            message.channel.send(`**Not a valid number :x:**`);
            return; // Remember to return if you are sending an error message! So the rest of the code doesn't run.
        }
        
        
        
                let defineduser = '';
            let firstMentioned = message.mentions.users.first();
            defineduser = (firstMentioned)
            if (!defineduser) return message.channel.send(`**You Have To Mention The Receiver :warning: **`);
        
                var mentionned = message.mentions.users.first();

        if(!points[defineduser.id])return message.channel.send("**This User Doesn't Have Account ! :warning: **");
if (!points[message.author.id]) points[message.author.id] = {}
if (!userData.credits) userData.credits = 500;

fs.writeFile('./userdata.json', JSON.stringify(points), (err) => {
if (err) console.error(err);

})
      
      var mando = message.mentions.users.id;
      
      if  (!points[defineduser.id]) points[defineduser.id] = {}
      if (!points[defineduser.id].credits) points[defineduser.id].credits = 500;
      
      
      points[defineduser.id].credits += (+args[0]);
      
      points[message.author.id].credits += (-args[0]);
      
      
              let dr = message.author.username
      
message.channel.send(`**:moneybag: | ${dr}, has transferred ${args[0]} to ${mentionned.username}**`)
      
   fs.writeFile('./userdata.json', JSON.stringify(points), (err) => {
if (err) console.error(err);

})

}

 if(message.content.startsWith(prefix + 'daily')) {
     
if (userData.lastdaily != moment().format('L')) {
    userData.lastdaily = moment().format('L')
          userData.credits += 500; 
message.channel.send(`**:atm:  | ${message.author.username}, you received your :yen: 500 daily credits!**`)
} else {
message.channel.send(`**:stopwatch: |  ${message.author.username}, your daily :yen: credits refreshes in **` + `${moment().endOf('day').fromNow()}`  )
  
}
}

fs.writeFile('./userdata.json', JSON.stringify(points), (err) => {
if (err) console.error(err);

})


if(message.content.startsWith(prefix + 'rep')) {
      var mentionned = message.mentions.users.first();
                 if(!mentionned)return message.reply("**Please __Mention__ A Member To Give A __rep__ :warning: **");
          if (mentionned === message.author)return message.reply("**You Can't Rep Your Self ! :x: **"); 
        if(!points[mentionned.id])return message.channel.send("**This User Doesn't Have Account ! :warning: **");   
if (userData.lastdailyr != moment().format('L')) {
    userData.lastdailyr = moment().format('L')
          points[mentionned.id].reps += 1; 
message.channel.send(`** :up:  |  ${message.author}, has given ${mentionned.username} a reputation point!**`)
} else {
message.channel.send(`** :stopwatch: |  ${message.author}, you can award more reputation **` + `${moment().endOf('day').fromNow()}`  )
  
}

fs.writeFile('./userdata.json', JSON.stringify(points), (err) => {
if (err) console.error(err);

})

}

if(message.content.startsWith(prefix + 'setinfo')) {
if (!userData.statu) userData.statu = 'Here';

var mard = userData.statu
let args = message.content.split(' ').slice(1).join(' ');
  if(!args)return message.reply("**Write A Status :warning: **")

userData.statu = args ;

message.channel.send(`**Status Sets to __${args}__ ! :white_check_mark:  **`);
  
fs.writeFile('./userdata.json', JSON.stringify(points), (err) => {
if (err) console.error(err);

})


}


   if (message.content.startsWith("-profile")) {
     
    

if(!message.channel.guild) return;

let args = message.content.split(' ').slice(1).join(' ');

        let defineduser = '';
        if (!args[1]) { // If they didn't define anyone, set it to their own.
            defineduser = message.author;
        } else { // Run this if they did define someone...
            let firstMentioned = message.mentions.users.first();
            defineduser = firstMentioned;
        }

const w = ['./Dreams/img/profil.png'];
var Canvas = require('canvas')
var jimp = require('jimp')

         
              
        let Image = Canvas.Image,
            canvas = new Canvas(300, 300),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';

        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 300, 300);

})
   var mentionned = message.mentions.users.first();

    var client;
      if(mentionned){
          var client = mentionned;
      } else {
          var client = message.author;
          
      }

                let url = message.author.displayAvatarURL.endsWith(".webp") ? message.author.displayAvatarURL.slice(20, 20) + ".png" : message.author.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);

                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
                        ava.src = buf;
                        ctx.drawImage(ava, 110 , 59, 78, 78);

     
  
    
                       
                        ctx.font = 'Bold 15px Arial';
                        ctx.fontSize = '15px';
                        ctx.fillStyle = "#ffffff";
                        ctx.textAlign = "center";
                        ctx.fillText(`${message.author.username}`, 150   , 165 );

   if (!points[message.author.id].statu) {
       ctx.fontSize = '10px ';
        ctx.font = 'Bold 10px Arial ';
                        ctx.fillStyle = "#ffffff";
                        ctx.textAlign = "center";
                        ctx.fillText(`-setinfo`, 150   , 205  );

    } else if (points[message.author.id]) {
           ctx.font = 'Bold 10px Arial ';
                        ctx.fontSize = '10px';
                        ctx.fillStyle = "#ffffff";
                        ctx.textAlign = "center";
                        ctx.fillText(points[message.author.id].statu, 150   , 203  ); 
    }
    
    if (!points[message.author.id].reps) {
   
       ctx.fontSize = '20px';
        ctx.font = 'lighter 20px Arial';
                        ctx.fillStyle = "#ffffff";
                        ctx.textAlign = "center";
                    
                        ctx.fillText(`❤0`, 71   , 88  );

    } else {
           ctx.font = 'lighter 20px Arial ';
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#ffffff";
                        ctx.textAlign = "center";
                 
                        ctx.fillText(`❤${userData.reps}`, 71   , 88  ); 
    }

                        ctx.font = 'Bold 10px Arial';
                        ctx.fontSize = '10px';
                        ctx.fillStyle = "#ffffff";
                        ctx.textAlign = "center";
                        ctx.fillText(`${userData.points}`, 150   , 240);

              

                        ctx.font = 'Bold 20px Arial';
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#ffffff";
                        ctx.textAlign = "center";
                        ctx.fillText(`${userData.level}`, 228  , 88 );
                     
                        ctx.font = 'lighter 20px Arial';
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#ffffff";
                        ctx.textAlign = "center";
                        ctx.fillText(`${userData.credits}`, 228  , 139 );
   
                   
message.channel.send(` :pencil: | Showing your Profile ${message.author.username}`)
message.channel.sendFile(canvas.toBuffer())

        })
    })



  
}


});
 
//╱╱╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╭╮
//╱╱╱╱┃┃╱╱╱╱╱╱╱╱╱╱╱┃┃
//╭┳┳━╯┃╭━━┳╮╭┳━╮╭━╯┣━━╮
//┣╋┫╭╮┃┃╭━┫╰╯┃╭╮┫╭╮┃━━┫
//┃┃┃╰╯┃┃╰━┫┃┃┃┃┃┃╰╯┣━━┃
//╰┻┻━━╯╰━━┻┻┻┻╯╰┻━━┻━━╯


client.on('message', message => {
   if(message.content == ('-هويتي')) {    

            if (message.channel.type === 'dm') return message.reply('This Command Is Not Avaible In Dm\'s :x:');   
           var Canvas = module.require('canvas');
           var jimp = module.require('jimp');
   
    const w = ['./Dreams/img/ID1.png','./Dreams/img/ID2.png','./Dreams/img/ID3.png','./Dreams/img/ID4.png','./Dreams/img/ID5.png'];
   
            let Image = Canvas.Image,
                canvas = new Canvas(802, 404),
                ctx = canvas.getContext('2d');
            ctx.patternQuality = 'bilinear';
            ctx.filter = 'bilinear';
            ctx.antialias = 'subpixel';
            ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
            ctx.shadowOffsetY = 2;
            ctx.shadowBlur = 2;
            fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                if (err) return console.log(err);
                let BG = Canvas.Image;
                let ground = new Image;
                ground.src = Background;
                ctx.drawImage(ground, 0, 0, 802, 404);
   
    })
                               let user = message.mentions.users.first();
         var men = message.mentions.users.first();
            var heg;
            if(men) {
                heg = men
            } else {
                heg = message.author
            }
          var mentionned = message.mentions.members.first();
             var h;
            if(mentionned) {
                h = mentionned
            } else {
                h = message.member
            }
            var ment = message.mentions.users.first();
            var getvalueof;
            if(ment) {
              getvalueof = ment;
            } else {
              getvalueof = message.author;
            }//ما خصك ,_,
                                          let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                                            jimp.read(url, (err, ava) => {
                                                if (err) return console.log(err);
                                                ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                                                    if (err) return console.log(err);
                           
                                                                                          //Avatar
                                                            let Avatar = Canvas.Image;
                                                            let ava = new Avatar;
                                                            ava.src = buf;
                                                            ctx.beginPath();
                                                          ctx.drawImage(ava, 335, 3, 160, 169);
                                                                           //wl
                                                    ctx.font = '35px Arial Bold';
                                                    ctx.fontSize = '40px';
                                                    ctx.fillStyle = "#dadada";
                                                    ctx.textAlign = "center";
                                                   
                           
                                                    ctx.font = '30px Arial Bold';//Name ,_,
                                                    ctx.fontSize = '30px';
                                                    ctx.fillStyle = "#ffffff";
                                                                            ctx.fillText(`${getvalueof.username}`,655, 170);
                                                                           
                                                                       
                                                         moment.locale('ar-ly');        
                                           
                                           
                                                                   ctx.font = '30px Arial';
                                                    ctx.fontSize = '30px';
                                                    ctx.fillStyle = "#ffffff";
                                                                            ctx.fillText(`${moment(h.joinedAt).fromNow()}`,150, 305);
                                                             
                                                             
                                                                                                    ctx.font = '30px Arial';
                                                    ctx.fontSize = '30px';
                                                    ctx.fillStyle = "#ffffff";
                                                                ctx.fillText(`${moment(heg.createdTimestamp).fromNow()}`,150, 170); 
                           
                                                      let status;
    if (getvalueof.presence.status === 'online') {
        status = 'اون لاين';
    } else if (getvalueof.presence.status === 'dnd') {
        status = 'مشغول';
    } else if (getvalueof.presence.status === 'idle') {
        status = 'خارج النطاق';
    } else if (getvalueof.presence.status === 'offline') {
        status = 'اوف لاين';
    }
    
    
                                         ctx.cont = '35px Arial';
                                         ctx.fontSize = '30px';
                                         ctx.filleStyle = '#ffffff'
                                         ctx.fillText(`${status}`,655,305)
                 
                                                                  ctx.font = 'regular 30px Cairo';
                                                                  ctx.fontSize = '30px';
                                                                  ctx.fillStyle = '#ffffff'
                                                        ctx.fillText(`${h.presence.game === null ? "لا يلعب" : h.presence.game.name}`,390,390);
                           
                              ctx.font = '35px Arial';
                                                                  ctx.fontSize = '30px';
                                                                  ctx.fillStyle = '#ffffff'
                                                                  ctx.fillText(`#${heg.discriminator}`,390,260)
                           
                                ctx.beginPath();
                                ctx.stroke();
                              message.channel.sendFile(canvas.toBuffer());
                           
                           
                         
                           
                            })
                           
                            })
}
});



const dateFormat = require('dateformat');


client.on('message', message => {
    
   if (message.content.startsWith ("-id")) {

if(!message.channel.guild) return;

let args = message.content.split(' ').slice(1).join(' ');

        let defineduser = '';
        if (!args[1]) { // If they didn't define anyone, set it to their own.
            defineduser = message.author;
        } else { // Run this if they did define someone...
            let firstMentioned = message.mentions.users.first();
            defineduser = firstMentioned;
        }

 const w = ['./Dreams/img/id1.png','./Dreams/img/id2.png','./Dreams/img/id3.png','./Dreams/img/id4.png','./Dreams/img/id5.png'];
var Canvas = require('canvas')
var jimp = require('jimp')

         const millis = new Date().getTime() - defineduser.createdAt.getTime();
const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy');
const stats2 = ['online', 'Low', 'Medium', 'Insane'];
const days = millis / 1000 / 60 / 60 / 24;
          dateFormat(now, 'dddd, mmmm dS, yyyy');
              let time = `${dateFormat(defineduser.createdAt)}`
              
        let Image = Canvas.Image,
            canvas = new Canvas(300, 300),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
  
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 300, 300);

})
   var mentionned = message.mentions.users.first();

    var client;
      if(mentionned){
          var client = mentionned;
      } else {
          var client = message.author;
          
      }

 var men = message.mentions.users.first();
            var heg;
            if(men) {
                heg = men
            } else {
                heg = message.author
            }
                let url = defineduser.displayAvatarURL.endsWith(".webp") ? defineduser.displayAvatarURL.slice(20, 20) + ".png" : defineduser.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);

                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
                        ava.src = buf;
                        ctx.drawImage(ava, 112 , 40, 75, 75);
                        
                        
                        
                        
                        var status;
    if (defineduser.presence.status === 'online') {
        status = 'ONLINE';
ctx.fillStyle = `#2ce032`;
ctx.beginPath();
ctx.arc(179, 107, 10, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
  
    } else if (defineduser.presence.status === 'dnd') {
        status = 'DND';
        ctx.fillStyle = `#ff0000`;
ctx.beginPath();
ctx.arc(179, 107, 8, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
    } else if (defineduser.presence.status === 'idle') {
        status = 'IDLE';
        ctx.fillStyle = `#f4d32e`;
ctx.beginPath();
ctx.arc(179, 107, 10, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
    } else if (defineduser.presence.status === 'offline') {
        status = 'INVISIABLE';
        ctx.fillStyle = `#898988`;
ctx.beginPath();
ctx.arc(179, 107, 10, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
    }
                        
                        
                                              var time2;
      if(mentionned){
          var time2 = `${dateFormat(message.mentions.users.first.joinedAt)}`;
      } else {
          var time2 = `${dateFormat(message.member.joinedAt)}`;
          
      }  
                           
    
                        ctx.font = 'Bold 15px Arial ';
                        ctx.fontSize = '15px';
                        ctx.fillStyle = "#ffffff";
                        ctx.textAlign = "center";
                        ctx.fillText(status, 70 , 108 );
                        
                         ctx.font = 'Bold 13px Arial';
                        ctx.fontSize = '13px';
                        ctx.fillStyle = "#ffffff";
                        ctx.textAlign = "center";
                        ctx.fillText(`${message.author.presence.game === null ? "No Status" : message.author.presence.game.name}`, 150.00   , 180  );

                       
                        ctx.font = 'Bold 20px Arial ';
                        ctx.fontSize = '15px';
                        ctx.fillStyle = "#ffffff";
                        ctx.textAlign = "center";
                        ctx.fillText(`${defineduser.username}`, 150.50 , 140);


                        ctx.font = 'Bold 15px Arial';
                        ctx.fontSize = '15px';
                        ctx.fillStyle = "#ffffff";
                        ctx.textAlign = "center";
                        ctx.fillText(`#${defineduser.discriminator}`, 227  , 108);

                        var time2;
      if(mentionned){
          var time2 = `${dateFormat(message.mentions.users.first.joinedAt)}`;
      } else {
          var time2 = `${dateFormat(message.member.joinedAt)}`;
          
      }
           
                                                //wl
                        ctx.font = 'Bold 13px Arial ';
                        ctx.fontSize = '13px';
                        ctx.fillStyle = "#ffffff";
                        ctx.textAlign = "center";
                        ctx.fillText(`${moment(defineduser.createdTimestamp).fromNow()}`, 179 , 226 );
                        
                        
     
           
                                                //wl
                        ctx.font = 'Bold 13px Arial ';
                        ctx.fontSize = '13px';
                        ctx.fillStyle = "#ffffff";
                        ctx.textAlign = "center";
                        ctx.fillText(`${moment(heg.joinedAt).fromNow()}`, 179 , 253);
                        
message.channel.sendFile(canvas.toBuffer())

            // when someone calls this command, it also adds 1 earlier at the same, but since this is fetching the previous value, we need to add 1 to the answer, even thought it will be updated
            // seconds after this.
        })
    })




}

})


//╱╭╮╱╱╱╱╱╱╱╱╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//╭╯╰╮╱╱╱╱╱╱╱╱╭╯╰╮╱╱╱╱╱╱╱╱╱╱╱┃┃
//╰╮╭┫╭╮╭┳━━┳━┻╮╭╯╭━━┳╮╭┳━╮╭━╯┣━━╮
//╱┃┃╰╯╰╯┃┃━┫┃━┫┃╱┃╭━┫╰╯┃╭╮┫╭╮┃━━┫
//╱┃╰╮╭╮╭┫┃━┫┃━┫╰╮┃╰━┫┃┃┃┃┃┃╰╯┣━━┃
//╱╰━┻╯╰╯╰━━┻━━┻━╯╰━━┻┻┻┻╯╰┻━━┻━━╯


		client.on('message', function (message, member) {

			//var mess = message.content.toLowerCase();
			
			if(message.content.startsWith(prefix + 'tweet')) {
			      let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

				var Canvas = require('canvas')
				var jimp = require('jimp')

				var Canvas = require('canvas')
				var jimp = require('jimp')
				
const w = ['./Dreams/img/img.png']

        let Image = Canvas.Image,
            canvas = new Canvas(802, 404),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 802, 404);

})



 var mentionned = message.mentions.users.first();
          var getvalueof;
          var bot;
          if(mentionned) {
            getvalueof = mentionned;
          } else {
            getvalueof = message.author;
          }

    ctx.font = '45px Impact';
    //ctx.rotate(.1);
    ctx.fillText(getvalueof.username, 60, 180);
    ctx.fillText('tweets :', 160, 310);
    ctx.fillStyle = 'blue';
    //ctx.drawImage(img, 70, 320)
   // var te = ctx.measureText(message.author.username);
    
        //var img = new Image;
    //img.url = message.author.avatarURL;




                        
                                        let url = message.author.avatarURL.endsWith(".webp") ? message.author.avatarURL.slice(5, -20) + ".png" : message.author.avatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);

                                //Avatar
                                let Avatar = Canvas.Image;
                                let ava = new Avatar;
                                ava.src = buf;
                                ctx.save();

                                ctx.beginPath();
                                ctx.arc(75, 75, 60, 0, Math.PI*2, true); 
                                ctx.closePath();
                                ctx.clip();
                                ctx.drawImage(ava, 0, 0, 150, 150);
                                ctx.restore();
                                               //wl
                        ctx.font = '35px Arial Bold';
                        ctx.fontSize = '40px';
                        ctx.fillStyle = "#dadada";
                        ctx.textAlign = "center";
                        ctx.fillText(`@${message.author.username}`, 250, 75);

                      //ur name
                        ctx.font = '35px Arial';
                        ctx.fontSize = '30px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(args.join("  "), 445, 185);


    ctx.beginPath();
    //ctx.lineTo(50, 102);
    //ctx.lineTo(50 + te.width, 102);
    ctx.stroke();


  message.channel.sendFile(canvas.toBuffer());


})
})

}

		});
		


//╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮
//╱╱┃┃╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃
//╭━╯┣━┳━━┳╮╭╮╭╮╭━━┳╮╭┳━╮╭━╯┣━━╮
//┃╭╮┃╭┫╭╮┃╰╯╰╯┃┃╭━┫╰╯┃╭╮┫╭╮┃━━┫
//┃╰╯┃┃┃╭╮┣╮╭╮╭╯┃╰━┫┃┃┃┃┃┃╰╯┣━━┃
//╰━━┻╯╰╯╰╯╰╯╰╯╱╰━━┻┻┻┻╯╰┻━━┻━━╯



client.on('message', message => {
    var prefix = "-"
    let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);


if(command == "draw") {
     if(message.channel.type === "dm") return;
    var Canvas = require('canvas')
  , Image = new Canvas.Image
  , canvas = new Canvas(450, 170)
  , ctx = canvas.getContext('2d');
  ctx.font = '30px Impact';
  let args = message.content.split(" ").slice(1);
  
Image.src = canvas.toBuffer();

    console.log(Image);
ctx.drawImage(Image, 0, 0, Image.width / 470, Image.height / 170);
ctx.fillText(args.join("  "),110, 70);


ctx.beginPath();
ctx.lineTo(50, 102);
ctx.stroke();

message.channel.sendFile(canvas.toBuffer());
}
});




//╭╮╱╭╮╱╱╭╮╱╱╱╱╭━━━╮╱╱╱╱╱╱╱╭╮
//┃┃╱┃┃╱╱┃┃╱╱╱╱┃╭━╮┃╱╱╱╱╱╱╱┃┃
//┃╰━╯┣━━┫┃╭━━╮┃┃╱╰╋╮╭┳━╮╭━╯┣━━╮
//┃╭━╮┃┃━┫┃┃╭╮┃┃┃╱╭┫╰╯┃╭╮┫╭╮┃━━┫
//┃┃╱┃┃┃━┫╰┫╰╯┃┃╰━╯┃┃┃┃┃┃┃╰╯┣━━┃
//╰╯╱╰┻━━┻━┫╭━╯╰━━━┻┻┻┻╯╰┻━━┻━━╯
//╱╱╱╱╱╱╱╱╱┃┃
//╱╱╱╱╱╱╱╱╱╰╯




client.on('message', message => {
   		if(message.content.startsWith(prefix + 'enhelp')) {
      if(!message.channel.guild) return;
      var args = message.content.split(' ').slice(1).join(' ');
   const q = new Discord.RichEmbed()
     .setImage("https://cdn.discordapp.com/attachments/409331262025891841/421426082475147264/Dreams-bot-help.png")
  const a = new Discord.RichEmbed()
        .setDescription(`  ** 「💎 | GENERAL COMMANDS」**`)
 .addField("`-timer`",
" To Start A Timer .")
 .addField("`-short`",
" To Short Any Link With Google Shortner .")
 .addField("`-google`",
" To Search In Google .")
  .addField("`-translate`",
" To translate a sentence from & to differnt langs **Ex:** -translate hola to arabic ")
.addField("`-discrim`",
" To Find People With the Same discriminator .")
 .addField("`-flip`",
" To Flip A Coin (TAILS Or HEADS) .")
 .addField("`-sicon`",
" To Preview The Server Icon  .")
 .addField("`-embed`",
" To Send Your Message In Embed  .")
 .addField("`-rpoll`",
" To Start A Reaction Poll .")
 .addField("`-poll`",
" To Start A Random Poll .")

 .addField("`-avatar`",
"  To Preview Member's Avatar")

 .addField("`-dt`",
" To preview Time & Date In 3 Diffrent Countries  .")
.setColor("RANDOM")
.setFooter(`©  Dreams™ `)

const b = new Discord.RichEmbed()
         .setDescription(`** 「💫| SPECIAL COMMANDS」**`)
               
                   .addField("`-wlc`",
" To Active Welcome & Leave In Your Server .")
 .addField("`-iwlc`",
" To Active image Welcome In Your Server **Command :**  -iwlc toggle  .")
 .addField("`-as`",
" To Preview Auto-Responding Settings")
.addField("`-rainbow`",
" To Change A Role Color Automaticly **Ex** -rainbow @rainbow_role .")
 .addField("`-voice set`",
"  To Create A Voice Channel Named With Voice Online Members   .")
 .addField("`-logset`",
" To Active Log Channel For Server Actions .")
 .addField("`-seen`",
" To See Member's Last Activity in Server  .")
.setColor("RANDOM")
.setFooter(`©  Dreams™ `)

const c = new Discord.RichEmbed()
                .setDescription(`** 「🌈 | COLORS COMMANDS」**`)
         
.addField("`-ccolors`",
" To Create 25 Random Colors ")
 .addField("`-colors`",
" To Preview The 25 Selected Colors")
 .addField("`-dcolors`",
" To Delete Colors Roles  .")
 .addField("`-color`",
" To Pick A color  .")
.setColor("RANDOM")
.setFooter(`©  Dreams™ `)

  const d = new Discord.RichEmbed()
 .setDescription(`** 「💵** | BANK COMMANDS」**`)
 
.addField("`-daily`",
" To Get Your Salary Every 10 min   .")
.addField("`-credits`",
" To Check Your Credits  .")
.addField("`-transfer`",
" To Transfer Credits To Another Account  .")
.addField("`-profile`",
" To Preview Your Profile  .")
.addField("`-level`",
" To Check Your Level  .")


.setColor("RANDOM")
.setFooter(`©  SOKA™ `)

const e = new Discord.RichEmbed()
          .setDescription(` ** 「🛠 | ADMINS COMMANDS」**`)
.addField("`-bc`",
" To Broadcast A msg To All Server Members  .")
.addField("`-obc`",
" To Broadcast A msg To All Online Server Members  .")
.addField("`-autorole`",
" To Preview AutoRoles Setting   .")
.addField("`-antilink`",
" To Activate AntiLink .")
.addField("`-clear`",
" To Delete x of messages Or All Messages **Ex:** -clear 5  .")
.addField("`-cv`",
" To Create A Voice Room  .")
.addField("`-ct`",
" To Create A Text Room  .")
.addField("`-del`",
" To Delete A Voice Room   .")
.addField("`-names`",
" To Preview Member's previous Names   .")
.addField("`-rename`",
" To Change a Member's Nickname   .")
.addField("`-mutechannel`",
" To Lock A Text Channel   .")
.addField("`-unmutechannel`",
" To Unlock A Text Channel   .")

.setColor("RANDOM")
.setFooter(`©  SOKA™ `)
  
  const f = new Discord.RichEmbed()
         .setDescription(`** 「🛡| MOD COMMANDS 」**`)
.addField("`-ban`",
" To Ban A Member From Server   .")
.addField("`-softban`",
" To Kick A User, deleting 1 day worth of messages.   .")
.addField("`-kick`",
" To Kick A member From Server   .")
.addField("`-warn`",
" To Warn A Member 3 Times Then Kick Him Automatic **Ex:** -warn @OS    .")
.addField("`-mute`",
" To Chat Mute Any Member   .")
.addField("`-unmute`",
" To unmute A Member   .")
.addField("`-crole`",
" To Create A role   .")
.addField("`-editrole`",
" To Edit A role By Commands    .")
.addField("`-rename`",
" To Change a Member's Nickname   .")
.addField("`-v2m`",
" To Create Voice Channel With 2 Min Timeout   .")
.addField("`-hidechannel`",
" To Hide A Text Channel   .")
.addField("`-showchannel`",
" To Unhide A Text Channel   .")
.setColor("RANDOM")
.setFooter(`©  SOKA™ `)

const h = new Discord.RichEmbed()
         .setDescription(` ** 「️️️��| MUSIC COMMANDS」**`)
.addField("`-mplay`",
" To Play A ( Youtube Link / Song By Name )   .")
.addField("`-msearch`",
" To Search A video In Youtube and play it by choose it   .")
.addField("`-mqueue`",
" To  See The Wating Music List   .")
.addField("`-mnowplaying`",
" To Display the current song in chat   .")
.addField("`-mskip`",
" To Skip The Current Song .")
.addField("`-mvolume`",
" To Change Volume Ratio   .")
.addField("`-mshuffle`",
" To Shuffles the playlist     .")
.addField("`-mrepeat`",
" To Loop The Queue   .")
.setColor("RANDOM")
.setFooter(`©  SOKA™ `)

const i = new Discord.RichEmbed()
       .setDescription(`** 「🖼 | Image COMMANDS」**`)
.addField("`-gif`",
" To GiF Search By Command   .")
.addField("`-imgur`",
" To Image Search In Imgur **EX:** -imgur random cats   .")

.setColor("RANDOM")
.setFooter(`©  SOKA™ `)

const z = new Discord.RichEmbed()
          .setDescription(`** 「:video_game: | GAMES COMMANDS」**`)
.addField("`-xo`",
" To Play XO With Comp   .")
.addField("`-chess`",
"  Chess Game For 2 players    .")
.addField("`-sarahah`",
" Sarahah Commands    .")
 .addField("`-rps`",
" To Start A Reaction PollTo Play (Rock , Paper , scissors) ")

.setColor("RANDOM")
.setFooter(`©  SOKA™ `)

const j = new Discord.RichEmbed()
       .setDescription(`  ** 「👤 | INFO COMMANDS」**`)
                 
               
                 .addField("`-ping`",
" To Preview Bot's Ping .")
 .addField("`-id`",
" To Preview Member's Id .")
 .addField("`-هويتي`",
" لعرض بطاقة الهوية .")
.addField("`-userinfo`",
" To Preview Information About user   .")
.addField("`-serverinfo`",
" To preview Information About Server .")
.addField("`-roles`",
"To preview Server Roles .   .")
.addField("`-members`",
"  To Preview Member's Status   .")
.setColor("RANDOM")
.setFooter(`©  SOKA™ `)

const k = new Discord.RichEmbed()
          .setDescription(` ** 「🔧 | BOT INFO」**`)
                
.addField("`-invite`",
"  To Invite Bot To Your Server  .")
.addField("`-support`",
"   To Join Our Support Server   .")
.addField("`-info`",
"  To preview Info About Bot   .")
.addField("`-stats`",
"  To preview Bots Stats   .")
.setColor("RANDOM")
.setFooter(`© SOKA™`)



    let pages = [q,a,b,c,d,e,f,h,i,z,j,k,l];
    let page = 1;

message.channel.send("**:arrow_down:  Use __Emojis__`👈👉` To Move From Pages **")
    message.channel.send(pages [page-1]).then(msg => {
                msg.react('👈').then( r => {
                msg.react('👉')
             const backwardsFilter = (reaction, user) => reaction.emoji.name === '👈' && user.id === message.author.id;
             const fotwardsFilter = (reaction, user) => reaction.emoji.name === '👉' && user.id === message.author.id;
             
             const backwards = msg.createReactionCollector(backwardsFilter, { time:90000 });
             const forwards = msg.createReactionCollector(fotwardsFilter, { time:90000 });
             
             backwards.on('collect', r => {
               if (page === 1) return;  
               page--;
              
               msg.edit(pages [page-1])
             })
             
             forwards.on('collect', r => {
               if (page === pages.length) return;  
               page++;
               
               msg.edit(pages [page-1])
                 
             })

})
})
  }
  });
  
  
  
  
client.on('message', message => {
		if(message.content.startsWith(prefix + 'enhelp')) {      
		   
    const embed = new Discord.RichEmbed()
                   .setColor("ffffff")
                .setFooter(` ©  SOKA™ `)
                    .setAuthor("SOKA" ,"https://cdn.discordapp.com/attachments/409331262025891841/428511194832437251/Untitled-1_converted.png" )
.setDescription(`
**SPEED RESPONSE** :comet:️
**ONLINE PER DAY** :clock330:
**SAFE & VERFIED** :shield:
`)
 .addField(":bar_chart:  **| Servers :**   ",`${client.guilds.size} Server`, true)
  .addField(":ping_pong:  **| Ping :**   ",`${Date.now() - message.createdTimestamp}` + ' ms', true)
   .addField(":globe_with_meridians:  **| Users :**   ",`${client.users.size} User`, true)
.addField(`🔎** | DETAILED COMMANDS **️`,
"  `-help general ` `-help special` `-help bank` `-help admin ` `-help mod ` `-help colors ` `-help music` `-help image` `-help info` `-help bot`")

  .addField(`💎** | GENERAL COMMANDS **️`,
"  `-timer` `-short` `-google` `-translate` `-flip` `-yt` `-sicon` `-embed` `-rpoll` `-poll`   `-avatar`  `-dt` ")

.addField(`💫** | SPECIAL COMMANDS **️`,
" `-iwlc` `-wlc` `-as` `-voice set` `-logset` `-rainbow` `-seen` ")

.addField(`💵** | BANK COMMANDS **️`,
"`-credits` `-daily` `-transfer` `-profile` `-level`  ")

  .addField(`🛠** | ADMINS COMMANDS **️`,
" `-bc` `-obc` `-autorole` `-antilink` `-cv` `-ct` `-del` `-names`  `-rename` `-mutechannel` `-unmutechannel` ")

.addField(`🛡** | MOD COMMANDS **️`,
" `-ban`  `-kick` `-warn` `-mute` `-unmute` `-crole` `-softban` `-clear` `-v2m` `-hidechannel` `-showchannel` ")

.addField(`🌈** | COLORS COMMANDS **️`,
" `-ccolors` `-dcolors` `-color` ")

.addField(`🕋 **| ISLAMIC COMMANDS**`,
 " `-quran ` `-stop` `-اذكار`  " )

 .addField(`️️🎶 **| MUSIC COMMANDS**`,
 " `-mnowplaying` `-mplay` `-mplaylists` `-mrepeat` `-mqueue` `-msearch` `-mscsearch` `-mshuffle` `-mskip`  " )

.addField(`🖼** | IMAGE COMMANDS **️`,
"  `-gif` `-imgur`")

.addField(`️️🎯** | FUN COMMANDS **`,
"  `-roll` `-dick` `-kill` `-marry` `-fuckyou` `-cat` `-draw` ")

.addField(`:video_game:** | GAMES COMMANDS **`,
"`-xo` `-عواصم` `-sarahah` `-فكك` `-rps` `-امثال` `.` `-اعلام` `.` `-احصاء` `.` `ايموجي-`")

.addField(`🕹** | FLH COMMANDS **`,
" `حب` `-صراحه` `-كت تويت` `-لو خيروك` `-عقاب`")

.addField(`👤 **| INFO COMMANDS **`,
" `-ping` `-id ` `-هويتي` `-userinfo` `-serverinfo`  `-roles` `-members` ")

 .addField(`🔧 **| BOT INFO**`,
" `-invite` `-support` `-info` `-stats` ")

 .addField("🌍 **| OWNER :**   ",
" `-contact` `-sug` `-bug` ")
.addField("**:globe_with_meridians: | WEBSITE :**","https://dreamsbot.wixsite.com/dreams")
 .addField('🔗 **| INVITE** :' , " https://goo.gl/s8AwxX")
 .addField('🔗 **| SUPPORT SERVER** :' , " https://discordapp.com/invite/gP6q8tY")
  .setFooter(`©  Dream™ `)
message.react("📮")
 
message.author.sendEmbed(embed);
    }
});


//help general ----------------------------------------------------------------------------------------------------------------------------------------------

client.on('message', message => {
     if (message.content === "-help general") {
           if(!message.channel.guild) return message.reply('** This command only for servers**');
 const embed = new Discord.RichEmbed()
         .setDescription(`  ** 「💎 | GENERAL COMMANDS」**`)
 .addField("`-timer`",
" To Start A Timer .")
 .addField("`-short`",
" To Short Any Link With Google Shortner .")
.addField("`-google`",
" To Search In Google .")
  .addField("`-translate`",
" To translate a sentence from & to differnt langs **Ex:** -translate english arabic hi")
.addField("`-discrim`",
" To Find People With the Same discriminator .")
 .addField("`-flip`",
" To Flip A Coin (TAILS Or HEADS) .")
 .addField("`-sicon`",
" To Preview The Server Icon  .")
 .addField("`-embed`",
" To Send Your Message In Embed  .")
 .addField("`-rpoll`",
" To Start A Reaction Poll .")
 .addField("`-poll`",
" To Start A Random Poll .")

 .addField("`-avatar`",
"  To Preview Member's Avatar")
 
 .addField("`-dt`",
" To preview Time & Date In 3 Diffrent Countries  .")

.setColor("RANDOM")
.addField("🌍 **| OWNER :**   ",
" `-contact` ")
.setFooter(`©  SOKA™ `)
message.react("💎")
message.author.sendEmbed(embed);

    }
});


//help special ----------------------------------------------------------------------------------------------------------------------------------------------

client.on('message', message => {
     if (message.content === "-help special") {
           if(!message.channel.guild) return message.reply('** This command only for servers**');
 const embed = new Discord.RichEmbed()
         .setDescription(`** 「💫| SPECIAL COMMANDS」**`)
               
                   .addField("`-wlc`",
" To Active Welcome & Leave In Your Server .")
 .addField("`-iwlc`",
" To Active image Welcome In Your Server **Command :**  -iwlc toggle  .")
 .addField("`-as`",
" To Preview Auto-Responding Settings")
.addField("`-rainbow`",
" To Change A Role Color Automaticly **Ex** -rainbow @rainbow_role .")
 .addField("`-voice set`",
"  To Create A Voice Channel Named With Voice Online Members   .")
 .addField("`-logset`",
" To Active Log Channel For Server Actions **Command :**   -log set .")
 .addField("`-seen`",
" To See Member's Last Activity in Server  .")

.setColor("RANDOM")
.addField("🌍 **| OWNER :**  ",
" `-contact` ")
.setFooter(`©  SOKA™ `)
message.react("💫")
message.author.sendEmbed(embed);

    }
});

//help general ----------------------------------------------------------------------------------------------------------------------------------------------

client.on('message', message => {
     if (message.content === "-help colors") {
           if(!message.channel.guild) return message.reply('** This command only for servers**');
 const embed = new Discord.RichEmbed()
         .setDescription(`** 「🌈 | COLORS COMMANDS」**`)
         
.addField("`-ccolors`",
" To Create 25 Random Colors ")
 .addField("`-colors`",
" To Preview The 25  Colors")
 .addField("`-dcolors`",
" To Delete Colors Roles  .")
 .addField("`-color`",
" To Pick A color  .")
.setColor("RANDOM")
.addField("🌍 **| OWNER :**   ",
" `-contact` ")
.setFooter(`©  SOKA™ `)
message.react("🌈")
message.author.sendEmbed(embed);

    }
});

//help bank----------------------------------------------------------------------------------------------------------------------------------------------

client.on('message', message => {
     if (message.content === "-help bank") {
           if(!message.channel.guild) return message.reply('** This command only for servers**');
 const embed = new Discord.RichEmbed()
    .setDescription(`** 「💵** | BANK COMMANDS」**`)
.addField("`-daily`",
" To Get Your Salary Every 10 min   .")
.addField("`-credits`",
" To Check Your Credits  .")
.addField("`-transfer`",
" To Transfer Credits To Another Account  .")
.addField("`-profile`",
" To Preview Your Profile  .")
.addField("`-level`",
" To Check Your Level  .")

.setColor("RANDOM")
.addField("🌍 **| OWNER :**  ",
" `-contact`")
.setFooter(`©  SOKA™ `)
message.react("💵")
message.author.sendEmbed(embed);

    }
});

//help admin ----------------------------------------------------------------------------------------------------------------------------------------------

client.on('message', message => {
     if (message.content === "-help admin") {
           if(!message.channel.guild) return message.reply('** This command only for servers**');
 const embed = new Discord.RichEmbed()
         .setDescription(` ** 「🛠 | ADMINS COMMANDS」**`)
.addField("`-bc`",
" To Broadcast A msg To All Server Members  .")
.addField("`-obc`",
" To Broadcast A msg To All Online Server Members  .")
.addField("`-autorole`",
" To Preview AutoRoles Setting   .")
.addField("`-antilink`",
" To Activate AntiLink  .")
.addField("`-clear`",
" To Delete x of messages Or All Messages **Ex:** -clear 5  .")
.addField("`-cv`",
" To Create A Voice Room  .")
.addField("`-ct`",
" To Create A Text Room  .")
.addField("`-delete`",
" To Delete A Voice Room   .")
.addField("`-names`",
" To Preview Member's previous Names   .")
.addField("`-rename`",
" To Change a Member's Nickname   .")
.addField("`-mutechannel`",
" To Lock A Text Channel   .")
.addField("`-unmutechannel`",
" To Unlock A Text Channel   .")

.setColor("RANDOM")
.addField("���� **| OWNER :**  ",
" `-contact`")
.setFooter(`©  SOKA™ `)
message.react("🛠")
message.author.sendEmbed(embed);

    }
});

//help mod--------------------------------------------------------------------------------------------------------------------------------------------

client.on('message', message => {
     if (message.content === "-help mod") {
           if(!message.channel.guild) return message.reply('** This command only for servers**');
           
 const embed = new Discord.RichEmbed()
         .setDescription(`** 「🛡| MOD COMMANDS 」**`)
.addField("`-ban`",
" To Ban A Member From Server   .")
.addField("`-softban`",
" To Kick A User, deleting 1 day worth of messages.   .")
.addField("`-kick`",
" To Kick A member From Server   .")
.addField("`-warn`",
" To Warn A Member 3 Times Then Kick Him Automatic **Ex:** -warn @OS    .")
.addField("`-mute`",
" To Chat Mute Any Member   .")
.addField("`-unmute`",
" To unmute A Member   .")
.addField("`-crole`",
" To Create A role   .")
.addField("`-editrole`",
" To Edit A role By Commands    .")
.addField("`-rename`",
" To Change a Member's Nickname   .")
.addField("`-v2m`",
" To Create Voice Channel With 2 Min Timeout   .")
.addField("`-hidechannel`",
" To Hide A Text Channel   .")
.addField("`-showchannel`",
" To Unhide A Text Channel   .")
.setColor("RANDOM")
.addField("🌍 **| OWNER :**   ",
" `-contact`")
.setFooter(`©  SOKA™ `)
message.react("🛡")
message.author.sendEmbed(embed);

    }
});

//help music ----------------------------------------------------------------------------------------------------------------------------------------------

client.on('message', message => {
     if (message.content === "-help music") {
           if(!message.channel.guild) return message.reply('** This command only for servers**');
           
 const embed = new Discord.RichEmbed()
         .setDescription(` ** 「️️️🎶| MUSIC COMMANDS」**`)
.addField("`-mplay`",
" To Play A ( Youtube Link / Song By Name )   .")
.addField("`-msearch`",
" To Search A video In Youtube and play it by choose it   .")
.addField("`-mqueue`",
" To  See The Wating Music List   .")
.addField("`-mnowplaying`",
" To Display the current song in chat   .")
.addField("`-mskip`",
" To Skip The Current Song .")
.addField("`-mvolume`",
" To Change Volume Ratio   .")
.addField("`-mshuffle`",
" To Shuffles the playlist     .")
.addField("`-mrepeat`",
" To Loop The Queue   .")
.setColor("RANDOM")
.addField("🌍 **| OWNER :**  ",
" `-contact`")
.setFooter(`©  SOKA™ `)
message.react("️️️🎶")
message.author.sendEmbed(embed);

    }
});



//help image ----------------------------------------------------------------------------------------------------------------------------------------------

client.on('message', message => {
     if (message.content === "-help games") {
           if(!message.channel.guild) return message.reply('** This command only for servers**');
 const embed = new Discord.RichEmbed()
 .setDescription(`** 「:video_game: | GAMES COMMANDS」**`)
.addField("`-xo`",
" To Play XO With Comp   .")
.addField("`-chess`",
"  Chess Game For 2 players    .")
.addField("`-sarahah`",
" Sarahah Commands    .")
.addField("`-rps`",
" To Start A Reaction PollTo Play (Rock , Paper , scissors) ")

.setColor("RANDOM")
.addField("🌍 **| OWNER :**  ",
" `-contact`")
.setFooter(`©  SOKA™ `)
message.react("🖼")
message.author.sendEmbed(embed);

    }
});


//help Games ----------------------------------------------------------------------------------------------------------------------------------------------


client.on('message', message => {
     if (message.content === "-help image") {
           if(!message.channel.guild) return message.reply('** This command only for servers**');
 const embed = new Discord.RichEmbed()
 .setDescription(`** 「🖼 | Image COMMANDS」**`)
.addField("`-gif`",
" To GiF Search By Command   .")
.addField("`-imgur`",
" To Image Search In Imgur **EX:** -imgur random cats   .")

.setColor("RANDOM")
.addField("🌍 **| OWNER :**  ",
" `-contact`")
.setFooter(`©  SOKA™ `)
message.react("🖼")
message.author.sendEmbed(embed);

    }
});

//help info ----------------------------------------------------------------------------------------------------------------------------------------------

client.on('message', message => {
     if (message.content === "-help info") {
           if(!message.channel.guild) return message.reply('** This command only for servers**');
 const embed = new Discord.RichEmbed()
         .setDescription(`  ** 「👤 | INFO COMMANDS」**`)
                 
               
                 .addField("`-ping`",
" To Preview Bot's Ping .")
.addField("`-id`",
" To Preview Member's Id .")
 .addField("`-هويتي`",
" لعرض بطاقة الهوية .")
.addField("`-userinfo`",
" To Preview Information About user   .")
.addField("`-serverinfo`",
" To preview Information About Server .")
.addField("`-roles`",
"To preview Server Roles .   .")
.addField("`-members`",
"  To Preview Member's Status   .")

.setColor("RANDOM")
.addField("🌍 **| OWNER :**  ",
" `-contact`")
.setFooter(`©  SOKA™ `)
message.react("👤")
message.author.sendEmbed(embed);

    }
});

//help bot ------------------------------------------------------------------------------------------------------------------------------------

client.on('message', message => {
     if (message.content === "-help bot") {
 const embed = new Discord.RichEmbed()
         .setDescription(` ** 「🔧 | BOT INFO」**`)
                
.addField("`-invite`",
"  To Invite Bot To Your Server  .")
.addField("`-support`",
"   To Join Our Support Server   .")
.addField("`-bot`",
"  To preview Info About Bot   .")
.addField("`-stats`",
"  To preview Bots Stats   .")

.setColor("RANDOM")
.addField("🌍 **| OWNER :**  ",
" `-contact`")
.setFooter(`©  SOKA™ `)
message.react("🔧")
message.author.sendEmbed(embed);

    }
});
  
//help bot ------------------------------------------------------------------------------------------------------------------------------------

client.on('message', message => {
     if (message.content === "-as") {
 const embed = new Discord.RichEmbed()
.setTitle(` ** 「:recycle:  | Auto Responding」**`)
                
.addField("`-asadd`",
`  To Add A AS Command  
لاضافة امر رد تلقائي 
-asadd back Welcome`)

.addField("`-asedit`",
`   To Edit A AS exists Command  
للتعديل على امر موجود مسبقا .
-asedit back Wlc`)

.addField("`-asdelete`",
`  To Delete A AS Command
لمسح امر رد تلقائي.
-asdelete back `)

.addField("`-aslist`",
`  To preview AS Commands List  
لعرض قائمة اوامر الردود التلقائية.`)

.setColor("ffffff")

.setFooter(`©  SOKA™ `)

message.channel.sendEmbed(embed);
}
});

//help bot ------------------------------------------------------------------------------------------------------------------------------------
  
  client.on('message', message => {
     if (message.content === "-help") {
         var embed = new Discord.RichEmbed()
          .setAuthor("Dreams" ,"https://cdn.discordapp.com/attachments/409331262025891841/428511194832437251/Untitled-1_converted.png" )
          .addField("**:flag_us: | English Help **" , "`-enhelp`" )
               .addField("**:flag_sa: | للمساعدة باللغة العربية ** ", "`-arhelp`" )
          .setColor('0bbaba')
  message.channel.sendEmbed(embed).then(msg => msg.delete(15000));
     }
});
  client.on('message', message => {
     if (message.content === "-arhelp") {
         
         
      var dm = new Discord.RichEmbed()
.setDescription(":ballot_box_with_check: | تم ارسال المساعدة في الخاص")
   .setColor('0bbaba')
message.channel.sendEmbed(dm).then(msg => msg.delete(5000));
message.react("📩")
var embed = new Discord.RichEmbed()
 .setAuthor("SOKA" ,"https://cdn.discordapp.com/attachments/499213385750282244/502842976095961099/no_u.png" )
.setThumbnail(client.user.avatarURL)
.setDescription(`
** :robot:  ميزات البوت  :robot: **
**:zap:  أوامر السرعة  :zap:**
** :pick:  كل يوم التحديثات  :pick: **
**:radio_button: 24 ساعة اونلاين :100:**
**:flag_sa:   ندعم اللغة العربية و الانكليزية  :flag_us: **

**امر البوت** -
:bar_chart: **عدد السيرفرات** ${client.guilds.size} 
:ping_pong: **بينق البوت** ${Date.now() - message.createdTimestamp}
:globe_with_meridians: **عدد الاعضاء** ${client.users.size} 



 `)
 .setColor('0bbaba')
message.author.sendEmbed(embed)
var embed = new Discord.RichEmbed()
.setDescription(`
💎** | ألأوأمر ألعأمة **

 -timer
   └─ لعمل مؤقت لمدة
 -short
   └─ لأنشاء اختصار رابط
 -google 
   └─ للبحث في Google
 -translate
   └─ لترجمة الكلام
   -discrim
   └─ لعرض اشخاص نفس تاقك
 -yt
   └─ للبحث في اليوتيوب
 -sicon
   └─ لعرض صورة السيرفر
 -embed 
   └─ ألبوت يكرر كلأمك في صورة امبد
 -flip 
   └─ صورة ولا كتابة 
 -avatar 
   └─ لأظهأر صورة العرض الخاصة بك
 -dt 
   └─ لأظهار ألوقت ألأن
 -rpoll
   └─ لعمل تصويت بالايموجي
 -poll
   └─ لعمل تصويت كتابي
   
   `)
   .setColor('0bbaba')
message.author.sendEmbed(embed)
var embed = new Discord.RichEmbed()
.setDescription(`
💫** | الاوامر المميزة **


 -iwlc
   └─ امر تثبيت الترحيب بالصورة
 -wlc
   └─ امر تثبيت الترحيب الكتابي
 -as
   └─ امر الرد التلقائي
 -voice set
   └─ لانشاء روم عدد الاعضاء في الرومات الصوتية
 -logset
   └─ امر تثبيت شات لوق لعرض احداث السيرفر كاملة
 -rainbow
   └─ امر تغيير لون رتبة تلقائيا
 -seen
   └─ لمعرفة اخر ظهور لعضو في السيرفر
 `)
 .setColor('0bbaba')
message.author.sendEmbed(embed)
var embed = new Discord.RichEmbed()
.setDescription(`
💵** | اوامر البنك **️

 -credits
   └─ لمعرفة رصيدك في البنك
 -daily
   └─ لاخذ راتبك اليومي من البنك
 -transfer
   └─ لتحويل مبلغ معين لحساب اخر
 -profile
   └─ لعرض البطاقة الشخصية الخاصة بك
 -level
   └─ لعرض المستوى 
 -xp
   └─ لمعرفة نقاطتك
 `)
 .setColor('0bbaba')
message.author.sendEmbed(embed)
var embed = new Discord.RichEmbed()
.setDescription(`
🛠** | الاوامر الادارية **️

 -bc
   └─ لارسال رسالة الي جميع اعضاء السيرفر
 -obc
   └─ لارسال رسالة لاعضاء البوت الاونلاين فقط
 -autorole
   └─ امر تثبيت رتبة تعطى تلقائيا عن دخول عضو للسيرفر
 -antilink
   └─ امر منع نشر الروابط
 -cv
   └─ امر انشاء روم صوتي
 -ct
   └─ امر انشاء روم كتابي
 -del
   └─ لمسح روم معين 
 -names
   └─ لمعرفة اخر اسماء لعضو معين
 -rename 
   └─ التغيير النك نيم الخاص بعضو معين
 -mutechannel
   └─ لعمل ميوت كتابي لشات معين
 -unmutechannel
   └─ لفك الميوت الكتابي لشات معين 
 `)
 .setColor('0bbaba')
message.author.sendEmbed(embed)
var embed = new Discord.RichEmbed()
.setDescription(`
🛡** | اوامر المراقبة **️

 -ban
   └─ لتبنيد عضو من السيرفر
 -kick
   └─ لطرد عضو من السيرفر
 -warn
   └─ اعطاء تحذير لعضو من ثم يطرد العضو تلقائيا بعد ثلاث تحذيرات
 -mute
   └─ ميوت كتابي بوقت
 -unmute
   └─ فك الميوت الكتابي
 -crole
   └─ امر انشاء رتبة 
 -softban
   └─ تبنيد عضو مع مسح رسائل يوم كامل
 -clear
   └─ مسح شات كامل او عدد رسائل محددة
 -v2m
   └─ انشاء روم صوتي لمدة دقيقتين فقط
 -hidechannel
   └─ لاخفاء شات من جميع الاعضاء
 -showchannel
   └─ لاظهار الشات لجميع الاعضاء
 `)
 .setColor('0bbaba')
message.author.sendEmbed(embed)
var embed = new Discord.RichEmbed()
.setDescription(`
🌈** | اوامر الالوان **

 -color
   └─ لاختيار لون من الوان السيرفر ان وجد الوان
 -ccolors
   └─ لانشاء 25 لون تلقائي
 -dcolors
   └─ لمسح الالوان 
 -colors
   └─ لعرض ال 25 لون المنشئة
    `)
    .setColor('0bbaba')
message.author.sendEmbed(embed)
var embed = new Discord.RichEmbed()
.setDescription(`
🖼** | اوامر الصور **

 -gif
   └─ للبحث عن صورة متحركة 
 -imgur
   └─ للبحث عن صور
 `)
 .setColor('0bbaba')
message.author.sendEmbed(embed)
var embed = new Discord.RichEmbed()
.setDescription(`
:video_game:** | اوامر الالعاب **

 -xo
   └─ للعب اكس او مع البوت
 -عواصم
   └─ اسئلة شيقة عن عواصم دول العالم
 -sarahah
   └─ لارسال رسالة مجهولة لشخص معين
 -فكك
   └─ فكك الكلمات ف اسرع وقت 
 -rps
   └─ للعب حجر ورقة مقص مع البوت
 -امثال
   └─ امثال و انت تكملها 
 -اعلام
   └─ اعرف الدولة عن طريق العلم
   -ايموجي
   └─ ابحث عن الايموجي المطلوب في اسرع وقت
 -احصاء
   └─ يقولك لعبت كام مرة و فزت و خسرت و الكريديت الي كسبته 
    `)
    .setColor('0bbaba')
message.author.sendEmbed(embed)
var embed = new Discord.RichEmbed()
.setDescription(`
👤 **| اوامر المعلومات **

 -id 
   └─ لعرض هويتك باللغة الانجليزية بالصورة
 -هويتي
   └─ هويتي باللغة العربية بالصورة
 -userinfo
   └─ لعرض معلوماتك بالسيرفر
 -serverinfo
   └─ لعرض معلومات السيرفر 
 -roles
   └─ لعرض رتب السيرفر
 -members
   └─ لعرض حالة اعضاء السيرفر
    `)
    .setColor('0bbaba')
message.author.sendEmbed(embed)
var embed = new Discord.RichEmbed()
.setDescription(`
🔧 **| معلومات البوت**
   
 -Ping
   └─ لعرض بينق البوت
 -inv
   └─ لدعوة البوت لسيرفرك
 -support
   └─ لعرض معلوماتك بالسيرفر
 -info
   └─ لعرض معلومات البوت
 -stats
   └─ لعرض احصاءات عن البوت
 `)
 .setColor('0bbaba')
message.author.sendEmbed(embed)
 var embed = new Discord.RichEmbed()
.setDescription(`
 :comet:  **| اوامر التواصل**
   
 -contact
   └─ لارسال رسالة لمطورين البوت
 -sug
   └─ لارسال اقتراح للبوت
 -bug
   └─ للابلاغ عن اي عطل في الاوامر



🔗 **| سيرفر الدعم و المساعدة** :  https://discord.gg/ArGwWfH
`)
.setColor('0bbaba')
  .setFooter(`©  SOKA™ `)
message.author.sendEmbed(embed)
    
}
});



//╭━━━┳━━━┳╮╱╱╭━━━┳━━━┳━━━╮╭━━━┳━╮╭━┳━╮╱╭┳━━━┳━━━╮
//┃╭━╮┃╭━╮┃┃╱╱┃╭━╮┃╭━╮┃╭━╮┃┃╭━╮┃┃╰╯┃┃┃╰╮┃┣╮╭╮┃╭━╮┃
//┃┃╱╰┫┃╱┃┃┃╱╱┃┃╱┃┃╰━╯┃╰━━╮┃┃╱╰┫╭╮╭╮┃╭╮╰╯���┃┃┃┃╰━━╮
//┃┃╱╭┫┃╱┃┃┃╱╭┫┃╱┃┃���╮╭┻━━╮┃┃┃╱╭┫┃┃┃┃┃┃╰╮┃┃┃┃┃┣━━╮┃
//┃╰━╯┃╰━╯┃╰━╯┃╰━╯┃┃┃╰┫╰━╯┃┃╰━╯┃┃┃┃┃┃┃╱┃┃┣╯╰╯┃╰━╯┃
//╰━━━┻���━━┻━━━┻━━━┻╯╰━┻━━━╯╰━━━┻╯╰╯╰┻╯╱╰━┻━━━┻━━━╯


 
    client.on('message', function(message) {
    if (message.content ===  '-ccolors'){
              if (!message.member.hasPermission("MANAGE_ROLES"))  return;
                      
                         if(message.guild.roles.find("name","5")) return message.reply("You're Already Have Colors ! :art:");
                           if(message.guild.roles.find("name","10")) return message.reply("You're Already Have Colors ! :art:");
                             if(message.guild.roles.find("name","15")) return message.reply("You're Already Have Colors ! :art:");
                               if(message.guild.roles.find("name","20")) return message.reply("You're Already Have Colors ! :art:");
                                 if(message.guild.roles.find("name","25")) return message.reply("You're Already Have Colors ! :art:");
        if(!message.channel.guild) return message.reply('** This command only for servers **');
        
      
                setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 1; x < 26; x++){
            message.guild.createRole({name:x,
            color: "RANDOM"})
            }
            
          message.channel.send(":white_check_mark: | Working On Colors")
   

    }
});


// delete colors--------------------------------------------------------------------------------

client.on('message', function(message) {
    if (message.content ===  '-dcolors'){
         if(!message.guild.roles.find("name","1")) return message.reply("You Don't Have Any Colors Or Its Incomplete To Delete It ❌ ");
     if(!message.guild.roles.find("name","2")) return message.reply("You Don't Have Any Colors Or Its Incomplete To Delete It ❌ ");
     if(!message.guild.roles.find("name","3")) return message.rmessage.reply("You Don't Have Any Colors Or Its Incomplete To Delete It ❌ ");
     if(!message.guild.roles.find("name","4")) return message.reply("You Don't Have Any Colors Or Its Incomplete To Delete It ❌ ");
     if(!message.guild.roles.find("name","5")) return message.reply("You Don't Have Any Colors Or Its Incomplete To Delete It ❌ ");
     if(!message.guild.roles.find("name","6")) return message.reply("You Don't Have Any Colors Or Its Incomplete To Delete It ❌ ");
     if(!message.guild.roles.find("name","7")) return message.reply("You Don't Have Any Colors Or Its Incomplete To Delete It ❌ ");
     if(!message.guild.roles.find("name","8")) return message.reply("You Don't Have Any Colors Or Its Incomplete To Delete It ❌ ");
     if(!message.guild.roles.find("name","9")) return message.reply("You Don't Have Any Colors Or Its Incomplete To Delete It ❌ ");
     if(!message.guild.roles.find("name","10")) return message.reply("You Don't Have Any Colors Or Its Incomplete To Delete It ❌ ");
     if(!message.guild.roles.find("name","11")) return message.reply("You Don't Have Any Colors Or Its Incomplete To Delete It ❌ ");
     if(!message.guild.roles.find("name","12")) return message.reply("You Don't Have Any Colors Or Its Incomplete To Delete It ❌ ");
     if(!message.guild.roles.find("name","13")) return message.reply("You Don't Have Any Colors Or Its Incomplete To Delete It ❌ ");
     if(!message.guild.roles.find("name","14")) return message.reply("You Don't Have Any Colors Or Its Incomplete To Delete It ❌ ");
     if(!message.guild.roles.find("name","15")) return message.reply("You Don't Have Any Colors Or Its Incomplete To Delete It ❌ ");
     if(!message.guild.roles.find("name","16")) return message.reply("You Don't Have Any Colors Or Its Incomplete To Delete It ❌ ");
     if(!message.guild.roles.find("name","17")) return message.reply("You Don't Have Any Colors Or Its Incomplete To Delete It ❌ ");
     if(!message.guild.roles.find("name","18")) return message.reply("You Don't Have Any Colors Or Its Incomplete To Delete It ❌ ");
     if(!message.guild.roles.find("name","19")) return message.reply("You Don't Have Any Colors Or Its Incomplete To Delete It ❌ ");
     if(!message.guild.roles.find("name","20")) return message.reply("You Don't Have Any Colors Or Its Incomplete To Delete It ❌ ");
     if(!message.guild.roles.find("name","21")) return message.reply("You Don't Have Any Colors Or Its Incomplete To Delete It ❌ ");
     if(!message.guild.roles.find("name","22")) return message.reply("You Don't Have Any Colors Or Its Incomplete To Delete It ❌ ");
     if(!message.guild.roles.find("name","23")) return message.reply("You Don't Have Any Colors Or Its Incomplete To Delete It ❌ ");
     if(!message.guild.roles.find("name","24")) return message.reply("You Don't Have Any Colors Or Its Incomplete To Delete It ❌ ");
     if(!message.guild.roles.find("name","25")) return message.reply("You Don't Have Any Colors Or Its Incomplete To Delete It ❌ ");
      
        if(!message.channel.guild) return message.reply('** This command only for servers **');
        message.channel.send("**Deleting Colors | :white_check_mark:**").then(msg => msg.delete(2000));
message.guild.roles.find("name", "1").delete();
message.guild.roles.find("name", "2").delete();
message.guild.roles.find("name", "3").delete();
message.guild.roles.find("name", "4").delete();
message.guild.roles.find("name", "5").delete();
message.guild.roles.find("name", "6").delete();
message.guild.roles.find("name", "7").delete();
message.guild.roles.find("name", "8").delete();
message.guild.roles.find("name", "9").delete();
message.guild.roles.find("name", "10").delete();
message.guild.roles.find("name", "11").delete();
message.guild.roles.find("name", "12").delete();
message.guild.roles.find("name", "13").delete();
message.guild.roles.find("name", "14").delete();
message.guild.roles.find("name", "15").delete();
message.guild.roles.find("name", "16").delete();
message.guild.roles.find("name", "17").delete();
message.guild.roles.find("name", "18").delete();
message.guild.roles.find("name", "19").delete();
message.guild.roles.find("name", "20").delete();
message.guild.roles.find("name", "21").delete();   
message.guild.roles.find("name", "22").delete();
message.guild.roles.find("name", "23").delete();
message.guild.roles.find("name", "24").delete();
message.guild.roles.find("name", "25").delete();
message.channel.send("**Colors Deleted | :white_check_mark:**").then(msg => msg.delete(5000));
    }
});

//preview colors--------------------------------------------------------------------------------


client.on('message', message => {
   if (message.content.startsWith("-colors")) {
     if(!message.guild.roles.find("name","1")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","2")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","3")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","4")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","5")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","6")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","7")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","8")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","9")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","10")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","11")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","12")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","13")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","14")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","15")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","16")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","17")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","18")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","19")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","20")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","21")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","22")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","23")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","24")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
     if(!message.guild.roles.find("name","25")) return message.reply("You Don't Have Any Colors Or Its Incomplete ! Try To Create Colors By `-ccolors` :art: ");
if(!message.channel.guild) return;
const w = ['./Dreams/img/colors.png'];
var Canvas = require('canvas')
var jimp = require('jimp')
     let Image = Canvas.Image,
            canvas = new Canvas(500, 200),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
  
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 500, 200);

})
 

                let url = message.author.displayAvatarURL.endsWith(".webp") ? message.author.displayAvatarURL.slice(20, 20) + ".png" : message.author.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);

                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
                        ava.src = buf;
                        ctx.drawImage(ava, -100 , -100, 70, 70);
                                   
ctx.fillStyle = `${message.guild.roles.find("name","1").hexColor}`;
  ctx.fillRect(52, 68, 30, 30);
  
ctx.fillStyle = `${message.guild.roles.find("name","2").hexColor}`;
  ctx.fillRect(88, 68, 30, 30);
  
  ctx.fillStyle = `${message.guild.roles.find("name","3").hexColor}`;
  ctx.fillRect(124, 68, 30, 30);
  
ctx.fillStyle = `${message.guild.roles.find("name","4").hexColor}`;
  ctx.fillRect(160, 68, 30, 30);
  
  ctx.fillStyle = `${message.guild.roles.find("name","5").hexColor}`;
  ctx.fillRect(196, 68, 30, 30);
  
ctx.fillStyle = `${message.guild.roles.find("name","6").hexColor}`;
  ctx.fillRect(232, 68, 30, 30);
  
ctx.fillStyle = `${message.guild.roles.find("name","7").hexColor}`;
  ctx.fillRect(268, 68, 30, 30);
  
  ctx.fillStyle = `${message.guild.roles.find("name","8").hexColor}`;
  ctx.fillRect(304, 68, 30, 30);
  
ctx.fillStyle = `${message.guild.roles.find("name","9").hexColor}`;
  ctx.fillRect(340, 68, 30, 30);
  
  ctx.fillStyle = `${message.guild.roles.find("name","10").hexColor}`;
  ctx.fillRect(376, 68, 30, 30);
  
  ctx.fillStyle = `${message.guild.roles.find("name","11").hexColor}`;
  ctx.fillRect(412, 68, 30, 30);
  
ctx.fillStyle = `${message.guild.roles.find("name","12").hexColor}`;
  ctx.fillRect(52, 105, 30, 30);
  
  ctx.fillStyle = `${message.guild.roles.find("name","13").hexColor}`;
  ctx.fillRect(88, 105, 30, 30);
  
ctx.fillStyle = `${message.guild.roles.find("name","14").hexColor}`;
  ctx.fillRect(124, 105, 30, 30);
  
  ctx.fillStyle = `${message.guild.roles.find("name","15").hexColor}`;
  ctx.fillRect(160, 105, 30, 30);
  
  ctx.fillStyle = `${message.guild.roles.find("name","16").hexColor}`;
  ctx.fillRect(196, 105, 30, 30);
  
ctx.fillStyle = `${message.guild.roles.find("name","17").hexColor}`;
  ctx.fillRect(232, 105, 30, 30);
  
  ctx.fillStyle = `${message.guild.roles.find("name","18").hexColor}`;
  ctx.fillRect(268, 105, 30, 30);
  
ctx.fillStyle = `${message.guild.roles.find("name","19").hexColor}`;
  ctx.fillRect(304, 105, 30, 30);
  
  ctx.fillStyle = `${message.guild.roles.find("name","20").hexColor}`;
  ctx.fillRect(340, 105, 30, 30);
  
  ctx.fillStyle = `${message.guild.roles.find("name","21").hexColor}`;
  ctx.fillRect(376, 105, 30, 30);
  
ctx.fillStyle = `${message.guild.roles.find("name","22").hexColor}`;
  ctx.fillRect(412, 105, 30, 30);
  
  ctx.fillStyle = `${message.guild.roles.find("name","23").hexColor}`;
  ctx.fillRect(52, 142, 30, 30);
  
ctx.fillStyle = `${message.guild.roles.find("name","24").hexColor}`;
  ctx.fillRect(88, 142, 30, 30);
  
  ctx.fillStyle = `${message.guild.roles.find("name","25").hexColor}`;
  ctx.fillRect(124, 142, 30, 30);
  

 ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("1", 67.5  , 88 );

 ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("2", 103.5  , 88 );

 ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("3", 139.5  , 88 );

 ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("4", 175.5  , 88 );

 ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("5", 211.5  , 88 );

 ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("6", 247.5  , 88 );

 ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("7", 283.5  , 88 );

 ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("8", 319.5  , 88 );

 ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("9", 355.5  , 88 );

 ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("10", 391.5  , 88 );

 ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("11", 427.5  , 88 );
  
   ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("12", 67.5  , 125 );

 ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("13", 103.5  , 125 );

 ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("14", 139.5  , 125 );

 ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("15", 175.5  , 125 );

 ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("16", 211.5  , 125 );

 ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("17", 247.5  , 125 );

 ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("18", 283.5  , 125 );

 ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("19", 319.5  , 125 );

 ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("20", 355.5  , 125 );

 ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("21", 391.5  , 125 );

 ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("22", 427.5  , 125 );
  
   ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("23", 67.5  , 162 );

 ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("24", 103.5  , 162 );

 ctx.font = '15px Bold';
ctx.fontSize = '15px';
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("25", 139.5  , 162 );  
                      
message.channel.sendFile(canvas.toBuffer())

            
        })
    })

}

})


//colors----------------------------------------------------------------------------------------------------

client.on('message', message => {
          let args = message.content.split(' ').slice(1);
   if(message.content.split(' ')[0] == '-color'){
       	const embedd = new Discord.RichEmbed()
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**There's No Color With This Number ** :x: `)
   .setColor(`ff0000`)

	if(!isNaN(args) && args.length > 0)
	

if	(!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);


       var a = message.guild.roles.find("name",`${args}`)
                if(!a)return;
const embed = new Discord.RichEmbed()
            		
 	.setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**Color Changed To Successfully** :white_check_mark: `)
 
   .setColor(`${a.hexColor}`)
  message.channel.sendEmbed(embed);
          if (!args)return;
setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 1; x < 201; x++){
           
            message.member.removeRole(message.guild.roles.find("name",`${x}`))
          
            }
            	message.member.addRole(message.guild.roles.find("name",`${args}`));
        
            
    }
});



client.login(process.env.BOT_TOKEN);
