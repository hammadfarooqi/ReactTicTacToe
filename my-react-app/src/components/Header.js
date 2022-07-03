const Header = ( { title} ) => {
  
  // const onClick = () =>  {
  //   console.log("Clicky")
  // }

  return (
    <header className="header">
        <h1>{title}</h1>
        <h3>For Sparrow</h3>
    </header>
  )
}

Header.defaultProps = {
    title: "Test Header"    
}

export default Header