import React, { useState } from "react"
import Square from "./components/Square"
import "./App.css"

const App = () => {
      // Create state to manage the gameboard values
      const [board, setBoard] = useState([
            "?",
            "?",
            "?",
            "?",
            "?",
            "?",
            "?",
            "?",
            "?"
      ])
      // Create state to track game status
      const [active, setActive] = useState(true)

      // Create state to track remaining guesses
      const [tries, setTries] = useState(5)

      // Create a function to process clicks on the game board
      const processClick = (location) => {
            if(!active || tries === 0){
                  alert("Sorry, the game is over")
            }else if(board[location] === "?"){
                  let guesses = board.filter(value => value === "?").length
                  let randomNum = Math.floor(Math.random() * guesses)
                  let newChar = "?"

                  switch (randomNum) {
                        case 0:
                              newChar = "⭐️"
                              setActive(false)
                              alert("You win!")
                              break
                        case 1:
                              newChar = "☄️"
                              setActive(false)
                              alert("You lose!")
                              break
                        default:
                              setTries(tries - 1)
                              newChar = "🔭"
                  }

                  let tempBoard = [...board]
                  tempBoard[location] = newChar
                  setBoard(tempBoard)
            }
      }

      // Create a function to restart the game
      const restartGame = () => {
            setBoard([
                  "?",
                  "?",
                  "?",
                  "?",
                  "?",
                  "?",
                  "?",
                  "?",
                  "?"
            ])
            setActive(true)
            setTries(5)
      }

  return (
    <>
      <div className="header">
            <h1>Space Hunt Game</h1>
            <h2>You have {tries} tries remaining.</h2>
            <button onClick={restartGame}>Restart Game</button>
      </div>
      <div className="gameboard">
            {board.map((value, index) => <Square show={value} key={index} index={index} processClick={processClick}/>)}
      </div>
    </>
  )
}

export default App
