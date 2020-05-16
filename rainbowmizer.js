const interval = 60; //Interval in seconds
const username = "your name"
const oAuth = "your oauth key"
const isTurbo = false; //If you have Twitch turbo or prime, change this to true

let irc = require('tmi.js');
let color = '';
let hexVal = '';
const twitchDefaultColours = ['Blue', 'BlueViolet', 'CadetBlue', 'Chocolate', 'Coral', 'DodgerBlue', 'Firebrick', 'GoldenRod', 'Green', 'HotPink', 'OrangeRed', 'Red', 'SeaGreen', 'SpringGreen', 'YellowGreen'];

let OPTIONS = {
  options: {
    debug: true
  },
  connection: {
    random: 'chat',
    reconnect: true
  },
  identity: {
    username: username,
    password: oAuth
  },
  channels: []
};

let client = new irc.client(OPTIONS);

// Connect the client to the server..
client.connect();
// Initial function call
callfunction();
setInterval(function() {
  // Invoke function every 10 minutes
  callfunction();
}, interval * 1000);

function callfunction() {
  if (isTurbo) {
    hexVal = (Math.floor(Math.random() * 16777215)).toString(16).padStart(0, 6);
    color = '#' + '000000'.substr(0, 6 - color.length) + color;
  } else {
    color = twitchDefaultColours[randomIntInc(twitchDefaultColours.length)]
  }
  client.color(color);
}

//random number generator
function randomIntInc(high) {
  return Math.floor(Math.random() * high);
}
