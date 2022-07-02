import {useEffect, useState } from "react"
import Header from "./components/Header"
import Display from "./components/Display"
import NameDisplay from "./components/NameDisplay"
import ChangeName from "./components/ChangeName"
import GameList from "./components/GameList"

import db from "./firebase"
import { onSnapshot, collection } from "firebase/firestore"

function App() {
  const [games, setGames] = useState([])
  
  useEffect(
    () => onSnapshot(collection(db, "games"), (snapshot) => {
      setGames(snapshot.docs.map((doc) => doc.data()))
    }), []
  )

  const [player1, setPlayer1] = useState("Player 1")
  const [player2, setPlayer2] = useState("Player 2")
  const [showNameChange, setShowNameChange] = useState(false)

  return (
    <div className="container">
      <Header title="Tic-Tac-Toe!"/>
      <NameDisplay player1={player1} player2={player2} showNameChange={showNameChange} setShowNameChange={setShowNameChange}/>
      {showNameChange && <ChangeName setPlayer1={setPlayer1} setPlayer2={setPlayer2} setShowNameChange={setShowNameChange}/>}
      <Display />
      <GameList games={games} />
    </div>
  );
}

export default App;
