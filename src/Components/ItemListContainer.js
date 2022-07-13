import { useEffect } from "react"
import { useState } from "react"
import camisas from "./camisas"
import customFetch from "./customFetch"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"

const ItemListContainer =() => {
    const[items, setItems] = useState([])
    useEffect(()=> {
        customFetch(3000,camisas)
        .then(respuesta => setItems(respuesta)) 

    }, [items])
    console.log(items)
    
        return (
        <>
            <h1> Productos disponibles</h1>
            <ItemList camisas = {items}/>
            <ItemCount/>
           <p>Recuerda siempre disfrutar tu vida y nuestros productos</p>
        </>
    )
}
export default ItemListContainer