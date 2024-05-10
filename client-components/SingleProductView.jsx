import Image from "next/image"
import '@/client-components/client-components-styles/CartProduct.css'
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
import ProductsPagination from "./Pagination";
import Footer from "./Footer";
import UbicacionMenu from "./UbicacionMenu";
import { useContext } from "react";
import { clientContext } from "@/conetxt/ClientContext";
import HamburguerMenu from "./HamburguerMenu";
import { useState } from "react";
import { ENDPIONTS } from "@/constants/constants";


function SingleProductView({ element }) {
    console.log(element);
    const { hamburguerMenuVisible, ubicacionMenuVisible, idTienda } = useContext(clientContext);

    function Estrella({ seleccionada = false, alSeleccionar = f => f }) {
        return <span className="estrellas" onClick={alSeleccionar}>{seleccionada ? '★' : '☆'}</span>;
    }

    function CalificacionEstrellas({ totalEstrellas = 5 }) {
        const [estrellasSeleccionadas, setEstrellasSeleccionadas] = useState(0);
        return (
            <>
                {[...Array(totalEstrellas)].map((n, i) => (
                    <Estrella
                        key={i}
                        seleccionada={i < estrellasSeleccionadas}
                        alSeleccionar={() => setEstrellasSeleccionadas(i + 1)}
                    />
                ))}
                <p>
                    {estrellasSeleccionadas} de {totalEstrellas} estrellas
                </p>
            </>
        );
    }
    return (
        <section className="ruta-productos">
            <HeaderTop />
            {ubicacionMenuVisible && <UbicacionMenu />}
            {hamburguerMenuVisible && <HamburguerMenu />}
            <HeaderBottom />
            {element.nombre ?
                <div className="cart-product-box dos">
                    <div className="imagen-box">
                        <Image className="img-card" src={element?.fotos[0]} alt={element.title} width={100} height={100} />
                    </div>
                    <div className="info-cart-product ">
                        <div className="datos-cart-product single-products-datos">
                            <p className="description-card"><strong>Nombre:</strong> <i>{element.nombre}</i></p>
                            <p className="price-card"><strong>Precio:</strong> <i>{element.precio}</i> CUP</p>
                            <p className="description-card"><strong>Descripción:</strong> <i>{element.descripcion}</i></p>
                            <p className="description-card"><strong>Categoría:</strong> <i>{element.categoria}</i></p>
                            <p className="description-card"><strong>Material:</strong> <i>{element.material}</i></p>
                        </div>
                        <div className="opinion">
                            <CalificacionEstrellas totalStars={5} />
                            <textarea name="" id="" cols="30" rows="10" placeholder="Deje su opinion aqui"></textarea>
                            <div className="button-product-view">
                                <button>Enviar opinion</button>
                            </div>
                        </div>
                    </div>
                </div> : null}
            <ProductsPagination title={'Agregados recientemente'} url={`${ENDPIONTS.productos_cliente}/${idTienda}`} />
            <ProductsPagination title={'Productos por Categoria'} url={`${ENDPIONTS.productos_cliente}/${idTienda}`} />
            <Footer />
        </section>
    )
}

export default SingleProductView