import React from 'react'
import '@/client-components/client-components-styles/CartProduct.css'
import Image from 'next/image'

export default function CartProduct({ element, productos, setProductos }) {
    const eliminarUno = (id) => {
        let nuevosProductos = productos.filter(producto => producto.id !== id)
        setProductos(nuevosProductos)
    }

    return (
        <div className='cart-product-box'>
            <div className="imagen-box">
                <Image className="img-card" src={element.image} alt={element.title} width={100} height={100} />
            </div>
            <div className="info-cart-product">
                <div className="datos-cart-product">
                    <p className="description-card">Nombre: <i>{element.title}</i></p>
                    <p className="price-card">Precio: <i><strong>{element.price}</strong></i></p>
                </div>
                <div className="panel-buttons">
                    <button>Comprar</button>
                    <button onClick={() => eliminarUno(element.id)}>Eliminar</button>
                </div>
            </div>
        </div>
    )
}
