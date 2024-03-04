import '@/admin-components/admin-components-styles/AdminMain.css'
import { adminContext } from '@/conetxt/AdminContext';
import { useContext, useEffect } from 'react';
import AdminFormTiendas from './AdminFormTiendas';
import AdminFormInfo from './AdminFormInfo';
import AdminFormProductos from './AdminFormProductos';
import AdminFormAdministrador from './AdminFormAdministrador';
import AdminFormMaterial from './AdminFormMaterial';
import AdminFormCategoria from './AdminFormCategoria';
import { estadoInicialAdministrador, estadoInicialTiendas } from '@/constants/constants';
import Tabla from './Tabla';


export default function AdminMain() {

    let url = 'https://647b-212-8-250-219.ngrok-free.app/shop/shops'

    const funcion = async () => {
        try {
            let res = await fetch(url)
            let json = await res.json()

            console.log(json);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        console.log(funcion());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])


    const { administradores,
        tiendas,
        informacion,
        categoria,
        material,
        mostrarTiendas,
        verAdministradores } = useContext(adminContext)

    return (
        <section className='admin-main'>
            {tiendas && <AdminFormTiendas />}
            {administradores && <AdminFormAdministrador />}
            {informacion && <AdminFormInfo />}
            {material && <AdminFormMaterial />}
            {categoria && <AdminFormCategoria />}
            {mostrarTiendas && <Tabla thead={estadoInicialTiendas} />}
            {verAdministradores && <Tabla thead={estadoInicialAdministrador} />}
        </section>
    )
}