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
      const [active, setActive] = useState(true)

      // Create a function to process clicks on the game board
      const processClick = (location) => {
            alert("Click detected on: " + location)
            let tempBoard = [...board]
            tempBoard[location] = "🌲"
            setBoard(tempBoard)
      }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="gameboard">
            {board.map((value, index) => <Square show={value} key={index} index={index} processClick={processClick}/>)}
      </div>
    </>
  )
}

export default App
