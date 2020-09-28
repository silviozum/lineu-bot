const axios = require('axios');

async function getAccountLol () {
	let account = ''
	await axios.get('https://beta.iesdev.com/api/lolapi/br1/accounts/name/'+'Bibim'+'?force=false')
	.then(function(response){
		account = response.data.data.accountId
	})
	return account
}
async function matchList (accountLol) {
	let matchlist = []
	await axios.get('https://beta.iesdev.com/api/lolapi/br1/matchlist/'+ accountLol)
	.then(function(response){
		matchlist = response.data.matches
	})
	return matchlist
}
async function postMatch (gameId) {
	let post = []
	await axios.get('https://beta.iesdev.com/api/lolapi/br1/post-match/' + gameId)
	.then(function(response){
		post = response.data.participants
	})
	return post
}




module.exports = {
	getAccountLol,
	matchList,
	postMatch
}