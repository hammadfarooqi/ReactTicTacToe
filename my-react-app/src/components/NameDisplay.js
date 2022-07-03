const NameDisplay = ( {player1, player2, showNameChange, setShowNameChange} ) => {
  return (
    <div className="header">
        <h2>{player1} vs {player2}</h2>
        <button style={{backgroundColor:"gray"}} className="btn" onClick={() => setShowNameChange(!showNameChange)}>Change Names</button>
    </div>
  )
}

export default NameDisplay