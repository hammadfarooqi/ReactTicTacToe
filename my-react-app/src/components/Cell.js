const Cell = ({id, text, onClick}) => {
  return (
    <button className="square" onClick={() => onClick(id)} >{text}</button>
  )
}

// onClick={onClick} style={{backgroundColor:color}} 

Cell.defaultProps = {
  text:"X"
}

export default Cell