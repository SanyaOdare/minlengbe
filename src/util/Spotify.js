const clientId = '4397fa1a79msh966cd1fb421cdbfp11e759jsn1dcc1faf07aa';
const redirectUri = 'http://localhost:3000';

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    // check for access token match
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      // This clears the parameters, allowing us to grab a new access token when it expires
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri${redirectUri}`;
      window.location = accessUrl;
    }
  }
}

export default Spotify;


var unirest = require("unirest");

var req = unirest("POST", "https://spotifystefan-skliarovv1.p.rapidapi.com/addTracksToPlaylist");

req.headers({
	"content-type": "application/x-www-form-urlencoded",
	"x-rapidapi-key": "4397fa1a79msh966cd1fb421cdbfp11e759jsn1dcc1faf07aa",
	"x-rapidapi-host": "Spotifystefan-skliarovV1.p.rapidapi.com",
	"useQueryString": true
});

req.form({
	"uris": "undefined",
	"userId": "undefined",
	"accessToken": "undefined",
	"playlistId": "undefined"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});