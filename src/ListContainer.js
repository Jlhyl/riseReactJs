const ListContainer =(greeting) => {
    console.log (greeting)

    if(greeting.inList){
        return (
            <nav>
                {/* <a href="#">Producto_1</a>
                <a href="#">Producto_2</a>
                <a href="#">Producto_3</a>
                 */}
            </nav>
        )
    }
    else{
        return(
            <nav>
                {/* <a href="#">Producto_4</a>
                <a href="#">Producto_5</a>
                <a href="#">Producto_6</a>
                                 */}
            </nav>
        )
    }
}
export default ListContainer