import Image from "next/image"
import "@/client-components/client-components-styles/CardProducts.css"
import Loader from "./Loader";
import { useState } from "react";


function AdminCard({ element }) {

    let cant = 1
    console.log(element);

    const [loading, setLoading] = useState(true);


    return (
        <div className="segunda" style={{ width: "300px", height: 'auto' }}>
            <div className="card-header dos">
                <h3 className="card-title">{element.nombre}</h3>
            </div>
            {loading && <Loader />}
            <Image className="img-card" src={element.fotos && element.fotos[0]} alt={element.nombre} width={600} height={600} onLoad={() => setLoading(false)} />
            <div className="info-card">
                <p className="description-card"><i>Descripcion: </i>{element.descripcion}</p>
                <p className="price-card"><i>Precio: </i><strong>{element.precio}</strong></p>
                <p className="price-card"><i>Categoria: </i>{element.categoria}</p>
                <p className="price-card"><i>Material: </i>{element.material}</p>
                <p className="price-card"><i>Unidades disponibles: </i>{element.cantidad}</p>
                <p className="price-card"><i>A la venta en: </i><strong>{element && element.tienda ? element.tienda.name : "No esta disponible"}</strong></p>
            </div>
            <div className="buttons-card-product">
                <div className="cant">
                    <button className="button-cart-product" disabled={cant === 1}><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#505050" d="M19 13H5v-2h14z" /></svg></button>
                    <div className="show-cant">{cant}</div>
                    <button className="button-cart-product"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#505050" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" /></svg></button>
                </div>
                <div className="cart">
                    <button className="button-cart-product">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#505050" d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z" /></svg>
                    </button>
                </div>
                <div className="fav">
                    <button className="button-cart-product">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#505050" d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3" /></svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AdminCard