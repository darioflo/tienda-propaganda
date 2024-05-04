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

function ClientApp() {
    return (
        <div className="app">
            <NavsMenu />
            <Slider />
            <ProductsPagination title={'Agregados recientemente'} url={'https://fakestoreapi.com/products'} />
            <ProductsPagination title={'Productos por Categoria'} url={'https://fakestoreapi.com/products'} />
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