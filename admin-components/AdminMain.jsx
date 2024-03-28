import '@/admin-components/admin-components-styles/AdminMain.css'
import { adminContext } from '@/conetxt/AdminContext';
import { useContext, useEffect } from 'react';
import AdminFormTiendas from './AdminFormTiendas';
import AdminFormInfo from './AdminFormInfo';
import AdminFormProductos from './AdminFormProductos';
import AdminFormAdministrador from './AdminFormAdministrador';
import AdminFormMaterial from './AdminFormMaterial';
import AdminFormCategoria from './AdminFormCategoria';
import { TABLA_ADMIN, TABLA_TIENDAS, estadoInicialTiendas, estadoInicialCategoria, estadoInicialMaterial } from '@/constants/constants';
import Tabla from './Tabla';
import MenuResponsive from './MenuResponsive';
import ProductosPorFiltro from './ProductosPorFiltro';


export default function AdminMain() {

    const { administradores,
        tiendas,
        informacion,
        categoria,
        material,
        mostrarTiendas,
        verAdministradores,
        productos,
        productosTienda,
        productosMaterial,
        productosCategoria,
        hamburgerMenu } = useContext(adminContext)

    console.log(hamburgerMenu);

    return (
        <section className='admin-main'>
            {tiendas && <AdminFormTiendas />}
            {administradores && <AdminFormAdministrador />}
            {informacion && <AdminFormInfo />}
            {material && <AdminFormMaterial />}
            {categoria && <AdminFormCategoria />}
            {mostrarTiendas && <Tabla thead={TABLA_TIENDAS} />}
            {verAdministradores && <Tabla thead={TABLA_ADMIN} />}
            {productos && <AdminFormProductos />}
            {productosTienda && <ProductosPorFiltro option={estadoInicialTiendas} />}
            {productosCategoria && <ProductosPorFiltro option={estadoInicialCategoria} />}
            {productosMaterial && <ProductosPorFiltro option={estadoInicialMaterial} />}
            {hamburgerMenu && <MenuResponsive />}
        </section>
    )
}