
const axios = require('axios');
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = 'NzAyNjgxNjY3MDI5OTU4Nzk2.Xw5Cvg.Ve5CEkgFK_RUwP9Dh3mg2uOf06Q';
const { remote } = require('webdriverio');
const discordTTS = require("discord-tts");
const accountServiceLol = require('./_services/lol.service.js')

bot.login(TOKEN);

bot.on('ready', () => {
	console.info(`Logged in as ${bot.user.tag}!`);
});



async function lolziba () {
  const accountLol = await accountServiceLol.getAccountLol()
  const getMatch = await accountServiceLol.matchList(accountLol)
  const dailyGames = []
  const stats = []
  const result = []
  const match = getMatch.map(async function(i, index) {
    if (index < 2) {
	  const getPostMatch = await accountServiceLol.postMatch(i.gameId)
	  result.push(getPostMatch)
	}
	return result 
  })

  Promise.all(match).then((match) => {
	match.map(function (p) {
		
	})
  });

}



lolziba()
// stats = postMatch.filter(function(o, index) {
// 	if (i.champion === o.championId) {
// 	  return o.stats
// 	}
//   })

// dailyGames.push({
// 	id: index,
// 	kills: o.stats.kills,
// 	deaths: o.stats.deaths,
// 	assists: o.stats.assists,
// 	championId: i.champion
// })

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
	if (msg.content === '/lineu disco') {
		msg.channel.send('-p https://open.spotify.com/playlist/1OcktR3dDJKoTwZGRflm6h')
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

	if(msg.content.startsWith('/lolzinho')){
		console.log('pora')
		let lolUser = msg.content.split('/lolzinho ')
		lolUser = lolUser[1]
		const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#0099ff')
		.setTitle('Some title')
		.setURL('https://discord.js.org/')
		.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
		.setDescription('Some description here')
		.setThumbnail('https://i.imgur.com/wSTFkRM.png')
		.addFields(
			{ name: 'Regular field title', value: 'Some value here' },
			{ name: '\u200B', value: '\u200B' },
			{ name: 'Inline field title', value: 'Some value here', inline: true },
			{ name: 'Inline field title', value: 'Some value here', inline: true },
		)
		.addField('Inline field title', 'Some value here', true)
		.setImage('https://i.imgur.com/wSTFkRM.png')
		.setTimestamp()
		.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

		msg.send(exampleEmbed);

	}

});
