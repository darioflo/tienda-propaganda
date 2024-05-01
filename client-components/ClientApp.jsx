import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";
import UbicacionMenu from "./UbicacionMenu";
import HamburguerMenu from "./HamburguerMenu";
import { HeaderProvider } from "@/conetxt/HeaderContext";
import { useContext } from "react";
import { context } from "@/conetxt/HeaderContext";
import '@/client-components/client-components-styles/ClientApp.css'
import Slider from "./Slider";
import ProductsPagination from "./Pagination";
import Footer from "./Footer";

function ClientApp() {
    return (
        <div className="app">
            <HeaderProvider>
                <NavsMenu />
            </HeaderProvider>
            <Slider />
            <ProductsPagination title={'Agregados recientemente'} url={'https://fakestoreapi.com/products'} />
            <ProductsPagination title={'Productos por Categoria'} url={'https://fakestoreapi.com/products'} />
            <Footer />
        </div>
    )
}

export default ClientApp

function NavsMenu() {
    const { hamburguerMenuVisible, ubicacionMenuVisible } = useContext(context);

    return (
        <>
            <HeaderTop />
            {ubicacionMenuVisible && <UbicacionMenu />}
            <HeaderBottom />
            {hamburguerMenuVisible && <HamburguerMenu />}
        </>
    );
}