# 💰 React Treasure Hunt Game

As a developer, you are tasked with creating a treasure hunt game. The user will see a game board on the page and be able to select various squares on the board. Hidden behind one square is a treasure that will win the game and hidden behind another square is a bomb that will lose the game. All other squares will reveal a neutral image. The user will be given a particular number of clicks to find the treasure that will win the game.

### 🤔 Remember

- Pseudocode!!
- Ask clarifying questions

### 📚 User Stories

- As a user, I can see a page with a three by three grid board game with a question mark in each square.
      - Create a division with class gameboard to place all game squares
      - Within the gamebox, use board.map to populate squares
      - Limit width of gamebox to force 3x3 grid
      - Pass value as a prop to each element of square
      - Modify App.css settings to center content within each square
- As a user, when I click on one of the question marks an alert appears with the index position of that question mark in the array.
      - Create a function under App.js to process clicks
            - The function takes an index as an argument
            - The function calls the alert and provides a message indicating the index
      - Pass the function to the Square component via props
      - Establish an onClick within the square's div that calls the function to process clicks
- As a user, when I click on one of the question marks instead of the alert the question mark turns into a tree emoji.
      - Within the function to process a click, set the value in the state based upon a click within that state
      - Use deconstructed and reconstructed array to copy values vice pointer
- As a user, if I select the winning square the question mark will become a treasure emoji and if I select the losing square the question mark will become a bomb emoji.
      - Create playing state to track whether the game is active
      - Stop processing clicks when game is no longer active
      - Determine win/loss conditions within main gameplay function
      - Use conditional check to determine if the click is in an undescovered box
      - Randomize win/loss check for new boxes
      - Use switch/case to process wins, losses, and continued gameplay
      - Display bomb emoji for losses, provide alert notification, and set active state to false
      - Display treasure emoji for wins, provide alert notification, and set active state to false
- As a user, I can click on a “Play Again” button that will restart the game.
      - Create a play again button above the boxes
      - Use onClick to call a function restartGame
      - Create a function restartGame to set conditions for board and playing
- As a user, I can see a counter that shows how many guesses I have left. The counter starts at five and decrements one every time I click on a square that is not the treasure nor the bomb.
- As a user, I can see a message informing me that I won the game if I select the square that contains the treasure.
- As a user, I can see a message informing me that I lost the game if I select the square that contains the bomb.
- As a user, I cannot continue to play the game after I win or lose.
- As a user, I can see a message informing me that I lost the game when I run out of turns (the counter reaches zero).

### 🏔 Stretch Goals

- Consider how to handle a situation where the bomb and the treasure are at the same index.

### 👩‍💻 Developer Stretch Goals

- As a developer, I have a well commented application.
- As a developer, I have well written README file with instructions on how to access my repository.
- As a developer, my variables are all named semantically.
- As a developer, I have refactored and efficient code.
- As a developer, I have my application [deployed as a live website](https://render.com/docs/deploy-create-react-app).
