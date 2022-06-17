import Nav from "./Nav"
const Header = (greeting) => {
    console.log(greeting)

    const inLista = true;

    return(
      <>
      <header>
        <h1> Revoluciona tú Mente</h1>
        <p>Dale sin miedo, no estás solo.</p>
         <Nav inList={inLista}/> 
      </header>
      </>
    )
  }

  

export default Header

  