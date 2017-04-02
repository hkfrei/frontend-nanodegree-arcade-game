# Classic Arcade Game Clone

A classic arcade game, built upon the template provided by UDACITY in it's Front-End Web Developer Nanodegree.

## Prerequisites

The only thing you need to run the game is WebBrowser with javascript enabled.
If you have one, a local Web-Server would help to test the game under real world conditions, but it is not necessary.

## Installing

Download a copy of the Game either by:
- Downloading the .zip File from [https://github.com/hkfrei/frontend-nanodegree-arcade-game](https://github.com/hkfrei/frontend-nanodegree-arcade-game) or
- by cloning the git repo to your local machine: `git clone git@github.com:hkfrei/frontend-nanodegree-arcade-game.git`.

## Start the game
- open **index.html** in a Web Browser und you can start playing the game.
- if you want to play the game in a Web-Server context, start a local Webserver from the root directory of the project.
- If you have php installed and your root directory is under _~/Sites/UDACITY/frontend-nanodegree-arcade-game_ you can use these commands in your console:
```bash
#change to root directory
cd ~/SITES/UDACITY/frontend-nanodegree-arcade-game
#start the web-server
php -S localhost:8000
```
open [http://localhost:8000/index.html](http://localhost:8000/index.html) in your Browser.

## Play the game
- Use the arrow keys of your keyboard to move te player around.
- The goal is to reach the water zone at the top of the playground.
- Try to collect all the stars, they give you additional points.
- Avoid colliding with the bugs, they will kill you and the game is over.
- every time you make it to the water area, the bugs move a bit faster and therefore the game gets more difficult.
- If you reach a score over 60 points, a 4th bug appears on the screen.


## Authors
* **UDACITY** - *providing a template and the game loop* - [https://github.com/udacity/frontend-nanodegree-arcade-game](https://github.com/udacity/frontend-nanodegree-arcade-game)
* **Hanskaspar Frei** - *programming various functions to make a playable game from the template.*

## License

This project currently doesn't have a license.
