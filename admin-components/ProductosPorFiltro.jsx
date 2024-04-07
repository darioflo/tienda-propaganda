import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { ENDPIONTS } from '@/constants/constants';
import '@/admin-components/admin-components-styles/ProductosPorFiltro.css'
import TablaPorFiltro from './TablaPorFiltro';
import { asyncContext } from '@/conetxt/AdminAsyncContext';

export default function ProductosPorFiltro({ option }) {

    const [tiendas, setTiendas] = useState([]);
    const [tiendaSeleccionada, setTiendaSeleccionada] = useState('');
    const [materialCategoria, setMaterialCategoria] = useState(false)
    const [cargando, setCargando] = useState(false)
    const [mostrarTabla, setMostrarTabla] = useState(false)
    const [datosFiltrados, setDatosFiltrados] = useState([])

    const { setParaEditar } = useContext(asyncContext)

    const escogerOpcion = () => {
        let url
        let filtrado = 'Productos'

        if (option.hasOwnProperty('categoria')) {
            url = ENDPIONTS.categoria_por_tienda
            filtrado = 'Categorias'
        }
        else if (option.hasOwnProperty('material')) {
            url = ENDPIONTS.material_por_tienda
            filtrado = 'Materiales'
        }
        else {
            url = ENDPIONTS.producto_por_tienda
        }

        return [url, filtrado]
    }

    let [seleccion, filtrado] = escogerOpcion()
    console.log(filtrado);

    const getDatos = async () => {
        try {
            let res = await axios.get(`${seleccion}/${tiendaSeleccionada}`)
            setDatosFiltrados(res.data)
            setMostrarTabla(true)
            setCargando(false)
        } catch (error) {
            console.log(error);
        }
    }

    const manejarCambio = (e) => {
        setCargando(true)
        setTiendaSeleccionada(e.target.value);
    };

    const getTiendas = async () => {
        try {
            const respuesta = await axios.get(ENDPIONTS.tiendas);
            setTiendas(respuesta.data)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getTiendas();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (option.hasOwnProperty('categoria') || option.hasOwnProperty('material')) {
            setMaterialCategoria(true)
        } else {
            setMaterialCategoria(false)
        }
    }, [option]);

    useEffect(() => {
        if (tiendaSeleccionada) {
            getDatos();
            setParaEditar(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tiendaSeleccionada])

    return (
        <div className='componente-por-filtro'>
            <h3>{`${filtrado} disponibles en tiendas:`}</h3>
            <div className="select">
                <select name="tienda" value={tiendaSeleccionada} onChange={manejarCambio}>
                    <option value='' disabled>{tiendas.length ? "Escoja una Tienda" : "No existen tiendas"}</option>
                    {tiendas.map(tienda => <option key={tienda.id} value={tienda.id}>{tienda.Nombre}</option>)}
                </select>
            </div>
            {mostrarTabla && <TablaPorFiltro datos={datosFiltrados} soloNombre={materialCategoria} cargando={cargando} filtro={filtrado} />}
        </div>
    );
}


