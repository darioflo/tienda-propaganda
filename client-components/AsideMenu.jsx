import { useContext } from 'react';
import "@/client-components/client-components-styles/AsideMenu.css"
import { context } from '@/conetxt/HeaderContext';

export default function AsideMenu() {

    const { cerrarMenuPorFuera } = useContext(context)

    const stopPropagation = (e) => {
        e.stopPropagation()
    }

    return (
        <div className="opacity" onClick={cerrarMenuPorFuera}>
            <div className="aside-menu animate__animated animate__bounceInLeft" onClick={stopPropagation}>
                <h3>Menu</h3>
                <div className="options">

                </div>
            </div>
            <div className="no-visible"></div>
            <div className="no-visible"></div>
            <div className="no-visible"></div>
            <div className="no-visible"></div>
        </div>
    )
}