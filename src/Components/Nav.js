import CarWidget from './CarWidget'

const Nav =(get) => {
    console.log(get.inHeader)

    if(get.inHeader === true){
        return (
            <nav>
                <a href="#">Ingreso a Plataforma</a>
                <p>access</p>
                <a href="#">Contactos  </a>
                <p>contacts</p>
                <CarWidget/>
            </nav>
        )
    }
    else if (get.inHeader === false) {
        
         return(
         <nav>
             <a href="#">Instagram</a>
           
             <a href="#">Facebook </a>
         </nav>
         )
    }
}

export default Nav