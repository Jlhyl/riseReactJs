// Es un agrupador de components de Item.js 
// El componente recibe un prop items

import React from 'react'
import Item from './Item'

function ItemList({products}) {
  return (
    
    products( p => 
      <Item 
      id = {p.id}
      nombre = {p.nombre}
      image = {p.image}
      key = {p.id}
      />

    )
    
  )
}
export default ItemList