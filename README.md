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

## Approach

- All model code follows modular-constructor pattern and single responsibility principle, to maintain readability and extendability.
- Chose to use Node.JS and Express, as these are frameworks I enjoy using and am keen to deepen my understanding of.

## Challenges

- Treating images-as-post-requests. Currently, the player choses an image of their weapon, which is treated as a Get request. The user is not able to 'cheat' the system, however, as any change to the URL results in a new turn. I would like for the user to be unable to change their weapon in the URL.
- My current design does not easily allow for Lizard, Spock extension on the Game's rules object. I would like to adjust for this.
- I would like to use BEM methodology for CSS. Styling is currently very limited.
