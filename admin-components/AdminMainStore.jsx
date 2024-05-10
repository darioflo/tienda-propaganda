import '@/admin-components/admin-components-styles/AdminMain.css'
import { adminContext } from '@/conetxt/AdminContext';
import { useContext, useEffect } from 'react';
import AdminFormInfo from './AdminFormInfo';
import AdminFormProductos from './AdminFormProductos';
import AdminFormMaterial from './AdminFormMaterial';
import AdminFormCategoria from './AdminFormCategoria';
import { estadoInicialTiendas, estadoInicialCategoria, estadoInicialMaterial } from '@/constants/constants';
import MenuResponsive from './MenuResponsive';
import ProductosPorFiltro from './ProductosPorFiltro';
import { asyncContext } from '@/conetxt/AdminAsyncContext';

export default function AdminMainStore() {
    const {
        informacion,
        categoria,
        material,
        productos,
        productosTienda,
        productosMaterial,
        productosCategoria,
        hamburgerMenu } = useContext(adminContext)

    const { tiendaAdministrada } = useContext(asyncContext)

    return (
        <section className='admin-main'>
            {hamburgerMenu && <MenuResponsive />}
            {informacion && <AdminFormInfo tiendaAdministrada={tiendaAdministrada} />}
            {material && <AdminFormMaterial tiendaAdministrada={tiendaAdministrada} />}
            {categoria && <AdminFormCategoria tiendaAdministrada={tiendaAdministrada} />}
            {productos && <AdminFormProductos tiendaAdministrada={tiendaAdministrada} />}
            {productosTienda && <ProductosPorFiltro option={estadoInicialTiendas} tiendaAdministrada={tiendaAdministrada} />}
            {productosCategoria && <ProductosPorFiltro option={estadoInicialCategoria} tiendaAdministrada={tiendaAdministrada} />}
            {productosMaterial && <ProductosPorFiltro option={estadoInicialMaterial} tiendaAdministrada={tiendaAdministrada} />}
        </section>
    )
}
