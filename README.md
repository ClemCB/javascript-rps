## Rock, Paper, Scissors

Best of 3 rounds rock, paper, scissors game for a player vs computer. You'll never be bored again!

## Tech

- JavaScript (modular-constructor pattern)
- Mocha/Chai testing
- Node.JS
- Express

## Approach

- All model code follows modular-constructor pattern and single responsibility principle, to maintain readability and extendability. Useful for future plans to bring in lizard, Spock!
- Chose to use Node.JS and Express, as these are frameworks I enjoy using and am keen to deepen my understanding of.

## Challenges

- Treating images-as-post-requests. Currently, the player choses an image of their weapon, which is treated as a Get request. This makes it easy for player to cheat by simply changing the URL of the results page once they have seen the computer score. I spent some time researching how to correct this, however, Node's handling of Post requests has been challenging to learn.
- My current design does not easily allow for Lizard, Spoke extension on the Game Rules object. I will research and adjust for this.
- I would like to use BEM methodology for CSS.
