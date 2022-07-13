// Componente destinado a mostar información breve del producto que el user clickeara luego para acceder a los detalles 
// Función Item ({item}) de tipo (id title price pictureUrl)
import React from 'react'

function Item(id, name, image) {
  return (
    <div>
        <h1>{name}</h1>
        <img src="{image}" alt="name" />
    </div>
  )
}

export default Item