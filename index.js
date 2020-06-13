
const axios = require('axios');
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = 'NzAyNjgxNjY3MDI5OTU4Nzk2.XqDlpg.68kUaVmwftkBtNuTKngml0jH5yE';
const { remote } = require('webdriverio');

const discordTTS = require("discord-tts");

bot.login(TOKEN);

bot.on('ready', () => {
	console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
	const voiceChannel = msg.member.voiceChannel;
	
	function sounds(path){
		voiceChannel.join().then(connection =>{
			const dispatcher = connection.playFile(path)
			dispatcher.on("end", end => {
				voiceChannel.leave();
			});
		}).catch(err => console.log(err))
	}
	
	if (msg.content === 'lineu!') {
		msg.reply('pai ta on')
		msg.channel.send('<strong>bold</strong>')
	}

	if (msg.content === '/fala lineu') {

		msg.channel.send("cade o mendonça!", {
			tts: true
		})
	
	}

	if (msg.content === '/cupuaçu') {
		sounds('sons/vinho-de-cupuacu.mp3')
	}
	
	if (msg.content === '/palmas') {
		sounds('sons/aplausos.mp3')
	}

	if (msg.content === '/manga verde') {
		sounds('sons/manga-verde-com-sal.mp3')
	}

	if (msg.content === '/lineuzinho') {
		sounds('sons/1-hora-de-mendonca-falando-lineuzinho.mp3')
	}
	if (msg.content === '/chupo meu pau') {
		sounds('sons/eu-chupo-o-meu-pau.mp3')
	}

	if (msg.content === '/fatima bernardes') {
		sounds('sons/fatima-bernardes-experiencia.mp3')
	}

	if (msg.content === 'lineu solta o som') {
		sounds('sons/roundabout_demo.mp3')
	}
	
	if (msg.content.startsWith('/gartic')) {

		(async () => {
			msg.reply('pera ai meu bom')
			let urlRoom = ''
			const browser = await remote({
			 logLevel: 'trace',
			 capabilities: {
			  browserName: 'chrome'
			 }
			})
		   
			await browser.url('https://gartic.io/create')
		   
		   
			const type = await browser.$('.official')
			await type.click()
			
			const btn = await browser.$('.ic-config')
			await btn.click()
		   
			 // Execute code which takes a long time
			await browser.waitUntil(function() {
			 return browser.getUrl().then(function (url) {
			  urlRoom = url
			  if(url !== 'https://gartic.io/create'){
			   msg.reply(url)
			  }
			 })
			},
			 {
			  timeout: 30000
			 }
			)
			
			  await browser.deleteSession()
		})().catch((e) => console.error(e))
	}

	if(msg.content==="/lineu fala"){
		
		const broadcast = bot.createVoiceBroadcast();
        var channelId=msg.member.voiceChannelID;
		var channel=bot.channels.get(channelId);
		
        channel.join().then(connection => {
            broadcast.playStream(discordTTS.getVoiceStream("valoranto jogo merda", lang="it-IT"));
            const dispatcher=connection.playBroadcast(broadcast);
        });
    }

});
