const GameList = ({games}) => {
  return (
    <div>
        <h2>Previous Games</h2>
        {games.map((game) => (
            <div className="header">
                <h3>{game.player1} vs {game.player2}</h3>
                <h3>{game.winner} won</h3>
            </div>
        ))}
    </div>
  )
}

export default GameList