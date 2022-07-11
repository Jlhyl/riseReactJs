import { useState } from "react"

const ItemCount =() => {
    
    const [contador, setCambioContador] =  useState (0)
    console.log(contador)
    
    const aumentaContador = () => {
        console.log(aumentaContador)   
        setCambioContador(contador + 1)
    }

    const disminuyeContador = () => {
        if (contador > 0) {
            console.log(disminuyeContador)
            setCambioContador(contador - 1)
            
        }
        
    }

    return (
        <>
            <h6> Agregar al carrito</h6>
            <p>Productos adquiridos para confirmar la compra : {contador}</p>
            <button onClick={aumentaContador}>Uno más</button>
            <button onClick={disminuyeContador}>Quitale uno :D</button>
            <p>Listo para confirmar?.</p>
            
        </>
    )
}
export default ItemCount