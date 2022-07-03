import { useEffect, useState } from "react"
import ChangeName from "./components/ChangeName"
import Display from "./components/Display"
import GameList from "./components/GameList"
import Header from "./components/Header"
import NameDisplay from "./components/NameDisplay"

import { collection, onSnapshot, setDoc } from "firebase/firestore"
import db from "./firebase"



function App() {
  const [games, setGames] = useState([])

  useEffect(
    () => onSnapshot(collection(db, "games"), (snapshot) => {
      setGames(snapshot.docs.map((doc) => doc.data()))
    }), []
  )

  const sendData = () => {
    setDoc(collection(db, "games"), { player1: "Player 1", player2: "Player 2", winner: "Yechan" })
      .then(() => { alert("data added") })
      .catch((err) => { alert(err.message) })
  }

  const [player1, setPlayer1] = useState("Player 1")
  const [player2, setPlayer2] = useState("Player 2")
  const [showNameChange, setShowNameChange] = useState(false)

  return (
    <div className="container">
      <Header title="Tic-Tac-Toe!" />
      <NameDisplay player1={player1} player2={player2} showNameChange={showNameChange} setShowNameChange={setShowNameChange} />
      {showNameChange && <ChangeName setPlayer1={setPlayer1} setPlayer2={setPlayer2} setShowNameChange={setShowNameChange} />}
      <Display sendData={sendData()} />
      <GameList games={games} />
    </div>
  );
}

export default App;
