import { useState } from "react"
import Game from "./Game"

const Display = () => {
    const [turn, setTurn] = useState("X")
    const [winner, setWinner] = useState("")

    return (
        <div className="header">
            <Game turn = {turn} setTurn = {setTurn} winner = {winner} setWinner = {setWinner}/>
            <h2>Turn: {turn}</h2>
            <h2>Winner: {winner}</h2>
        </div>
  )
}

export default Display