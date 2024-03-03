import '@/admin-components/admin-components-styles/AdminMain.css'
import { adminContext } from '@/conetxt/AdminContext';
import { useContext } from 'react';
import AdminFormTiendas from './AdminFormTiendas';
import AdminFormInfo from './AdminFormInfo';
import AdminFormProductos from './AdminFormProductos';
import AdminFormAdministrador from './AdminFormAdministrador';
import AdminFormMaterial from './AdminFormMaterial';
import AdminFormCategoria from './AdminFormCategoria';


export default function AdminMain() {

    const { administradores,
        tiendas,
        informacion,
        categoria,
        material } = useContext(adminContext)

    return (
        <section className='admin-main'>
            {tiendas && <AdminFormTiendas />}
            {administradores && <AdminFormAdministrador />}
            {informacion && <AdminFormInfo />}
            {material && <AdminFormMaterial />}
            {categoria && <AdminFormCategoria />}
        </section>
    )
}