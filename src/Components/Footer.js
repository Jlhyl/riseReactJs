import Nav from './Nav';
const Footer = ()=> {
    return (
        <>
        <footer className='Footer'>
                <p id='DerechosAutor' >Copyright &copy;</p>
            <Nav inHeader={false}
             cabecera = {["Facebook", "Instagram", "Youtube"]}
             laClase = 'navbar-footer'
             />
        </footer>        
    </>
    )
}

 export default Footer 