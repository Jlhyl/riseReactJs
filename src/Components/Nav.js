import CarWidget from './CarWidget'

const Nav =({inHeader, cabecera, laClase} ) => {
    // console.log(get)
    // console.log(get.inHeader)
    // console.log(get.cabecera)

    if(inHeader === true){
        return (
            <nav className={laClase}  >
                <a href="#">Ingreso a Plataforma</a>
                <p></p>
                <a href="#">Contactos  </a>
                <p></p>
                <CarWidget/>
            </nav>
        )
    }
    else if (inHeader === false) {
        
         return(
         <nav className={laClase} >
             <a href="#">Instagram</a>
           
             <a href="#">Facebook </a>
         </nav>
         )
    }
}

export default Nav