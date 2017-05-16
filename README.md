## Rock, Paper, Scissors

Best of 3 rounds rock, paper, scissors game for a player vs computer. You'll never be bored again!

## Game in Action

### Homepage:
![Alt text](https://github.com/ClemCB/javascript-rps/blob/master/public/images/indexpage.png?raw=true)

### Play page:
![Alt text](https://github.com/ClemCB/javascript-rps/blob/master/public/images/winnerpage.png?raw=true)

## Tech

- JavaScript (modular-constructor pattern)
- Mocha/Chai testing
- Node.JS
- Express

## How to Run

- ``git clone`` this project directory
- ``npm install`` to install dependencies from within the project root
- ``npm test`` to run Mocha and Chai tests
- Run ``nodemon`` to run rock-paper-scissors locally
- Visit ``localhost:5500`` on your favourite browser and play many exciting rounds against the computer!

## Approach

- All code in the model layer follows modular-constructor pattern and single responsibility principle, to maintain readability and extendability.
- Chose to use Node.JS and Express, as these are frameworks I enjoy using and am keen to deepen my understanding of. I used Node in both my [practice](https://github.com/nryn/TallTalesTheThird) and [final](https://github.com/ClemCB/eureka-search-engine) projects at Makers. I like that it is straight forward to work to the MVC pattern and I can simply export only modules I want to use globally from each file.

## Challenges

- Treating images-as-post-requests. Currently, the player choses their weapon from an image on the index page. This action is treated as a get request. The user is unable to 'cheat' the system, as any change to the URL results in a call to the ``play`` function and therefore another round.
- The above loophole allows the game to go beyond best-of-three. If the user were unable to modify their weapon choice in the URL, the game would end only after three rounds with points scored.
- My current design does not easily allow for Lizard, Spock extension on the Game's rules object. I would like to adjust for this.
