import { useEffect, useState } from "react"
import Cell from "./Cell"

const Game = ( {turn, setTurn, winner, setWinner} ) => {
    const [squares, setSquares] = useState([
        {
            id: 0,
            value: ""
        },
        {
            id: 1,
            value: ""
        },
        {
            id: 2,
            value: ""
        },
        {
            id: 3,
            value: ""
        },
        {
            id: 4,
            value: ""
        },
        {
            id: 5,
            value: ""
        },
        {
            id: 6,
            value: ""
        },
        {
            id: 7,
            value: ""
        },
        {
            id: 8,
            value: ""
        },

    ])

    const checkWinner = () => {
        console.log(squares)
        //columns
        for (let i = 0; i < 3; i++) {
            if (squares[i].value !== "" && squares[i].value === squares[i+3].value && squares[i].value === squares[i+6].value) {
                return true
            }
        }
        //rows
        for (let i = 0; i <= 6; i+=3) {
            if (squares[i].value !== "" && squares[i].value === squares[i+1].value && squares[i].value === squares[i+2].value) {
                return true
            }
        }
        //diagonals
        if (squares[0].value !== "" && squares[0].value === squares[4].value && squares[0].value === squares[8].value) { 
            return true
        }
        if (squares[2].value !== "" && squares[2].value === squares[4].value && squares[2].value === squares[6].value) { 
            return true
        }

        return false
    }

    const completeTurn = (id) => {
        if (squares[id].value === "" && winner === "") {
            setSquares(squares.map((square) => square.id === id ? {...square, value: turn} : square))
            
            // if (checkWinner()) { setWinner(turn)}
            // else {
            setTurn(turn === "X" ? "O" : "X")
        }
    }

    useEffect(() => {
        if (checkWinner()) { 
            setTurn(turn === "X" ? "O" : "X")
            setWinner(turn === "X" ? "O" : "X")
        }
    }, [squares]

    )

    return (
        <div>
            <div className="board-row">
                <Cell id={squares[0].id} text={squares[0].value} onClick = {completeTurn} />
                <Cell id={squares[1].id} text={squares[1].value} onClick = {completeTurn} />
                <Cell id={squares[2].id} text={squares[2].value} onClick = {completeTurn} />
            </div>
            <div className="board-row">
                <Cell id={squares[3].id} text={squares[3].value} onClick = {completeTurn} />
                <Cell id={squares[4].id} text={squares[4].value} onClick = {completeTurn} />
                <Cell id={squares[5].id} text={squares[5].value} onClick = {completeTurn} />
            </div>
            <div className="board-row">
                <Cell id={squares[6].id} text={squares[6].value} onClick = {completeTurn} />
                <Cell id={squares[7].id} text={squares[7].value} onClick = {completeTurn} />
                <Cell id={squares[8].id} text={squares[8].value} onClick = {completeTurn} />
            </div>
        </div>
    )
}

export default Game