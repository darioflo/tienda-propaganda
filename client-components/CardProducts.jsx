'use client'
import Image from "next/image"
import "@/client-components/client-components-styles/CardProducts.css"
import { useState, useContext } from "react"
import { PRODUCTOS_CESTA } from "@/constants/constants"
import { clientContext } from "@/conetxt/ClientContext"
import { useRouter } from "next/navigation"
import { ENDPIONTS } from "@/constants/constants"




function CardProducts({ element }) {

    const [cant, setCant] = useState(1)
    const [pressCart, setPressCart] = useState(false)
    const [pressFav, setPressFav] = useState(false)
    const router = useRouter()
    const { setIdProducto, estadoCliente } = useContext(clientContext)


    const addCant = () => {
        setCant(cant => cant + 1)
    }

    const handleClick = (e) => {
        if (!e.target.closest('.buttons-card-product')) {
            console.log(e.currentTarget.id);
            setIdProducto(e.currentTarget.id)
            router.push('/productos')
        }
    }

    const restCant = () => {
        setCant(cant => cant - 1)
    }
    const pressButtonCart = (id) => {
        setPressCart(!pressCart);
        console.log(id);
        if (estadoCliente !== 'Cliente') {
            window.alert("Debe crearse un perfil para agregar productos a la cesta")
            router.push('/usuario')
        }

        console.log(PRODUCTOS_CESTA);
    }


    const pressButtonFav = () => {
        setPressFav(!pressFav)
    }


    return (
        <div className="card-container" id={element.id} onClick={handleClick}>
            <div className="card-header">
                <h5 className="card-title">{element.nombre}</h5>
            </div>
            <Image className="img-card" src={element.fotos} alt={element.nombre} width={100} height={100} />
            <div className="info-card">
                <p className="description-card"><i>Descripcion: </i>{element.descripcion}</p>
                <p className="description-card"><i>Categoria: </i>{element.categoria}</p>
                <p className="description-card"><i>Material: </i>{element.material}</p>
                <p className="price-card"><i>Precio: </i><strong>{element.precio} cup</strong></p>
            </div>
            <div className="buttons-card-product">
                <div className="cant">
                    <button className="button-cart-product" onClick={restCant} disabled={cant === 1}><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#505050" d="M19 13H5v-2h14z" /></svg></button>
                    <div className="show-cant">{cant}</div>
                    <button className="button-cart-product" onClick={addCant}><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#505050" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" /></svg></button>
                </div>
                <div className="cart">
                    <button className="button-cart-product" onClick={() => pressButtonCart(element.id)}>
                        {pressCart ? <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#505050" d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25c0-.05.01-.09.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#505050" d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z" /></svg>}
                    </button>
                </div>
                <div className="fav">
                    <button className="button-cart-product" onClick={pressButtonFav}>
                        {pressFav ? <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#505050" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#505050" d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3" /></svg>}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardProducts