const interval = 60; //Interval in seconds
const username = "your name"
const oAuth = "your oauth key"
const isTurbo = false; //If you have Twitch turbo or prime, change this to true

let irc = require('tmi.js');
let color = '';
const colorOptions = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
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
        color = '#' + hexCaller();
    } else {
        color = twitchDefaultColours[randomIntInc(twitchDefaultColours.length)]
    }
    client.color(color);
}

function hexCaller() {
    let hexCaller = '';
    for (let i = 0; i < 6; i++) {
        hexCaller += colorOptions[randomIntInc(colorOptions.length)];
    }
    return hexCaller;
}

//random number generator
function randomIntInc(high) {
    return Math.floor(Math.random() * high);
}