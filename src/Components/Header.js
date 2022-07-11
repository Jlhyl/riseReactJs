import Nav from "./Nav"
const Header = () => {
    return(
      <>
      <header>
        <h1> Revoluciona tú Mente</h1>
          <p>Dale sin miedo, no estás solo.</p>
        <Nav
         inHeader={true}
         cabecera={["Acceso inicial", "Ya conozco esto", "Enserio estoy perdido"]}
         laClase ='navbar-header' 
        />
      </header>
      </>
    )
  }

export default Header

  