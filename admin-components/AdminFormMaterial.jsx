import '@/admin-components/admin-components-styles/AdminFormMaterial.css'
import { useEffect, useState } from 'react';
import { estadoInicialMaterial } from '@/constants/constants';
import { useContext } from 'react';
import { asyncContext } from '@/conetxt/AdminAsyncContext';
import { ENDPIONTS } from '@/constants/constants';
import axios from 'axios';
import AccionCompleta from './AccionCompleta';

const AdminFormMaterial = () => {
    const [formularioMaterial, setFormularioMaterial] = useState(estadoInicialMaterial);
    const { accionCompletada, setAccionCompletada, respuesta, setRespuesta, wasError, setWasError } = useContext(asyncContext)
    const [tiendas, setTiendas] = useState([])

    const manejarCambio = (e) => {
        setFormularioMaterial({
            ...formularioMaterial,
            [e.target.name]: e.target.value
        });
    };

    const manejarEnvio = async (e) => {
        e.preventDefault();
        console.log(formularioMaterial);

        try {
            const response = await axios.post(`${ENDPIONTS.agregar_material}/${formularioMaterial.tienda}`, formularioMaterial)
            setAccionCompletada(true)
            setRespuesta(response.data)
            setWasError(false)
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setAccionCompletada(true)
                setRespuesta(error.response.data)
                setWasError(true)
            }
        };
        setFormularioMaterial(estadoInicialMaterial);
    }

    const getTiendas = async () => {
        try {
            const respuesta = await axios.get(ENDPIONTS.tiendas)
            console.log(respuesta.data);
            if (respuesta.data.length === 0) {
                setFormularioMaterial(prevState => ({ ...prevState, tienda: "No hay tiendas" }));
            }
            setTiendas(respuesta.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getTiendas()
    }, [])

    useEffect(() => {
        if (accionCompletada) {
            const timer = setTimeout(() => {
                setAccionCompletada(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [accionCompletada]);

    return (
        <>
            {accionCompletada && <AccionCompleta respuesta={respuesta} error={wasError} />}
            <form onSubmit={manejarEnvio} className='form-material animate__animated animate__bounceInDown'>
                <div className="encabezado">
                    <h3>Agregar Material:</h3>
                </div>
                <div className="material">
                    <div className="datos">
                        <input type='text' placeholder='Agregue un material' name="material" onChange={manejarCambio} value={formularioMaterial.material} required />
                        <select name="tienda" placeholder="A Tienda" value={formularioMaterial.tienda} onChange={manejarCambio}>
                            <option value='' disabled>{tiendas.length ? "Escoja una Tienda" : "No existen tiendas"}</option>
                            {tiendas.length ? <option value='all'>Agregar a todas las tiendas</option> : null}
                            {tiendas.map(tienda => <option key={tienda.id} value={tienda.id}>{tienda.Nombre}</option>)}
                        </select>
                    </div>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </>
    );
};

export default AdminFormMaterial;