import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";
import UbicacionMenu from "./UbicacionMenu";
import HamburguerMenu from "./HamburguerMenu";
import { useContext } from "react";
import { clientContext } from "@/conetxt/ClientContext";
import '@/client-components/client-components-styles/ClientApp.css'
import Slider from "./Slider";
import ProductsPagination from "./Pagination";
import Footer from "./Footer";
import { ENDPIONTS } from "@/constants/constants";

function ClientApp({ idTienda }) {
    return (
        <div className="app">
            <NavsMenu />
            <Slider />
            <ProductsPagination title={'Agregados recientemente'} url={`${ENDPIONTS.productos_recientes}/${idTienda}`} />
            <ProductsPagination title={'Productos por Categoria'} url={`${ENDPIONTS.productos_cliente}/${idTienda}`} />
            <ProductsPagination title={'Productos por Material'} url={`${ENDPIONTS.productos_cliente}/${idTienda}`} />
            <Footer />
        </div>
    )
}

export default ClientApp

function NavsMenu() {
    const { hamburguerMenuVisible, ubicacionMenuVisible } = useContext(clientContext);

    return (
        <>
            <HeaderTop />
            {ubicacionMenuVisible && <UbicacionMenu />}
            <HeaderBottom />
            {hamburguerMenuVisible && <HamburguerMenu />}
        </>
    );
}