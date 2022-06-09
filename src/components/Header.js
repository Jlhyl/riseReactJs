const Header = ()=> {
    return (
        <>
        <header>
            <h1>Entregable Desafio Número Dos</h1>
            <div className="card text-center">
                <div className="card-header">
                    <ul className="nav nav-pills card-header-pills">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Perfil Usuario</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link de Mercadeo</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Cerrar sesión</a>
                        </li>
                    </ul>
                </div>
                <div className="card-body">
                    <h3 className="card-title">Presentación</h3>
                    <p className="card-text">Usuario registrado en la plataforma, amante a los nuevos retos.</p>
                    <a href="#" className="btn btn-primary">Contacto</a>
                </div>
            </div>
       
        </header>
        </>
    )
}

export default Header