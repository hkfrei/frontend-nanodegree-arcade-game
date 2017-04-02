/**
* @description Enemies our player must avoid
* @constructor
* @param {string} sprite - The path to the sprite image
* @param {string} x - The x coordinate on the canvas to place the instance
* @param {string} y - The y coordinate on the canvas to place the instance
* @param {string} speed - The speed of the instance in pixels per frame
*/
var Enemy = function(sprite, x, y, speed) {
    this.sprite = sprite;
    this.x = x;
    this.y = y;
    this.speed = speed;
};

/**
* @description Update the enemy's position, required method for game.
* @param {float} dt - a time delta between ticks
*/
Enemy.prototype.update = function(dt) {
    //make sure the enemies can not move off screen.
    if (this.x > 500) {
        this.x = -100;
    } else {
        // multiply the movement by the dt parameter ensures,
        // that the game runs at the same speed for all computers.
        (this.x += this.speed) * dt;
    }
};

/**
* @description Draw the enemy on the screen, required method for game
*/
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

/**
* @description The Player who plays the game
* @constructor
* @param {string} x - The x coordinate on the canvas to place the instance
* @param {string} y - The y coordinate on the canvas to place the instance
* @param {string} sprite - The path to the sprite image
*/
var Player = function(x, y, sprite) {
    this.x = x;
    this.y = y;
    this.highscore = 0;
    this.score = 0;
    this.sprite = sprite;
};

/**
* @description Update the players position, update score etc., required method for game.
*/
Player.prototype.update = function() {
    // don't go too much down.
    if (this.y > 400) {
        this.y = 400;
    }

    // dont't go too much left.
    if (this.x < -10) {
        this.x = -10;
    }

    // dont't go too much right.
    if (this.x > 410) {
        this.x = 410;
    }

    // success! player reached water.
    if (this.y === -20) {
        var messages = document.querySelector('.successMessage');
        messages.innerHTML = '<h1>Cool you made it!</h1><h3>next level...</h3>';
        messages.style.display = 'block';

        window.setTimeout(function() {
            messages.style.display = 'none';
        },1500);

        //increase enemy speed
        allEnemies.forEach(function(enemy) {
            enemy.speed += 1;
        });
        this.score += 5;
        this.updateHighScore();
        //move the player down starting position
        this.y = 430;

        //add new collectItems if there aren't any
        if (allCollectItems.length === 0) {
            for (var i = 0; i < 3; i++) {
                allCollectItems.push(new Collect('images/Star.png'));
                }
            }
        //add a new enemy on score higher than 60
        if (allEnemies.length < 4 && this.score > 60) {
            allEnemies.push(new Enemy('images/enemy-bug.png', 0, 340, 1));
        }
    }
};

/**
* @description Updates the players highscore.
*/
Player.prototype.updateHighScore = function() {
    if (this.highscore < this.score) {
            this.highscore = this.score;
    }
};

/**
* @description Draw the Player on the screen, required method for game
*/
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    //display the correct score and highscore.
    document.querySelector('.points').textContent = this.score;
    document.querySelector('.highscore').textContent = this.highscore;
};

/**
* @description Handle the user inputs (arrow keys)
* @param {string} keyCode - The code for the arrow key (left, right, up, down)
*/
Player.prototype.handleInput = function(keyCode) {
    switch(keyCode) {
        case 'left':
            this.x -= 35;
            break;
        case 'right':
            this.x += 35;
            break;
        case 'up':
            this.y -= 35;
            break;
        case 'down':
            this.y += 35;
            break;
        default:
            console.log('this key has no use');
            break;
    }
};

/**
* @description Collect items our player can collect to get some extra score
* @constructor
* @param {string} sprite - The path to the sprite image
*/
var Collect = function(sprite) {
    this.x = this.getRandomCoordinate(50, 400);
    this.y = this.getRandomCoordinate(50, 300);
    this.sprite = sprite;
};

/**
* @description Draw the Collect item on the screen, required method for game
*/
Collect.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

/**
* @description calculate a random coordinate
* @param {integer} min - The minimum Value to return
* @param {integer} max - The maximum Value to return
* @returns {integer} A random coordinate value between min and max
*/
Collect.prototype.getRandomCoordinate = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Instantiate the objects for the game.
var allEnemies = [
    new Enemy('images/enemy-bug.png', 0, 50, 1),
    new Enemy('images/enemy-bug.png', 0, 140, 2),
    new Enemy('images/enemy-bug.png', 0, 240, 1)
];

var player = new Player(200, 400, 'images/char-boy.png');

var allCollectItems = [
    new Collect('images/Star.png'),
    new Collect('images/Star.png')
];

/* @description Listen for key presses and sends the keys to your Player.handleInput() method. */
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});

/* @description Listen for events when user selects a player and updates the player sprite */
var playerButtons = document.querySelectorAll('.player');
playerButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        player.sprite = event.target.getAttribute('src');
    });
});