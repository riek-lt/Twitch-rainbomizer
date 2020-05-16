# Twitch-rainbomizer
Change your twitch name colour every X amount of time!

# Installation
Make sure [Nodejs](https://nodejs.org/en/download/) and NPM are installed.  
Windows users: Install [Git](https://git-scm.com/download/win) for the advanced Command Line Interface (Git Bash),

```npm install tmi.js```  

After that, open up rainbomizer.js with your favourite text editor, and in the top of the file, replace "your name" and "your oAuth key" with the correct information. You can find your oAuth key [here](http://twitchapps.com/tmi).  
If wanted, change the interval of name colour change. Default is 60 seconds.  
If you have Twitch Turbo or Twitch Prime, set this to `true` for the ultimate color freedom. Otherwise it will cycle through the 15 default colours.

# Run the program
```node rainbomizer.js```

# Created by
Riekelt [(twitter)](http://twitter.com/riek_lt) [(twitch)](http://twitch.tv/riekelt)

# Acknowledgements
The idea and name came from [Parik's Randomizer](https://github.com/Parik27/Rainbomizer).
Thanks to [Vuurvos1](https://github.com/Vuurvos1/) for optimizing the code
