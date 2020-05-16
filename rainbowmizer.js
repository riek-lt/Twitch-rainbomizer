var interval = 60;
var username = "your name"
var oAuth = "your oauth key"
var isTuro = false; //If you have Twitch turbo or prime, change this to true

var irc = require("tmi.js");
var color = "";
var colorOptions = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
var twitchDefaultColours = ['Blue', 'BlueViolet', 'CadetBlue', 'Chocolate', 'Coral', 'DodgerBlue', 'Firebrick', 'GoldenRod', 'Green', 'HotPink', 'OrangeRed', 'Red', 'SeaGreen', 'SpringGreen', 'YellowGreen'];

const OPTIONS = {
  options: {
    debug: true
  },
  connection: {
    random: "chat",
    reconnect: true
  },
  identity: {
    username: username,
    password: oAuth
  },
   channels: []
};

var client = new irc.client(OPTIONS);

// Connect the client to the server..
client.connect();
  // Initial function call
  callfunction();
  setInterval(function () {
    // Invoke function every 10 minutes
    callfunction();
  }, interval * 1000);

  function callfunction () {
    if (isTuro) {
    color = "#" + hexCaller();
  } else {
    color = twitchDefaultColours[randomIntInc(14,0)]
  }
client.color(color);
  }

function hexCaller() {
  var hexCaller = "";
  for (var i = 0; i < 6; i++) {
    hexCaller += colorOptions[randomIntInc(15,0)];
  }
  return hexCaller;
}

//random number generator
function randomIntInc(high, low) {
  return Math.floor(Math.random() * (high - low + 1) + low);
}
