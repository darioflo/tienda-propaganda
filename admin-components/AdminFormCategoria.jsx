import '@/admin-components/admin-components-styles/AdminFormCategoria.css'
import { useState } from 'react';
import { estadoInicialCategoria } from '@/constants/constants';
import { useContext } from 'react';
import { asyncContext } from '@/conetxt/AdminAsyncContext';
import { ENDPIONTS } from '@/constants/constants';
import axios from 'axios';
import AccionCompleta from './AccionCompleta';
import { useEffect } from 'react';

const AdminFormCategoria = () => {
    const [formularioCategoria, setFormularioCategoria] = useState(estadoInicialCategoria);
    const { accionCompletada, setAccionCompletada, respuesta, setRespuesta, wasError, setWasError } = useContext(asyncContext)
    const [tiendas, setTiendas] = useState([])

    const manejarCambio = (e) => {
        setFormularioCategoria({
            ...formularioCategoria,
            [e.target.name]: e.target.value
        });
    };


    const manejarEnvio = async (e) => {
        e.preventDefault();
        console.log(formularioCategoria);
        try {
            const response = await axios.post(`${ENDPIONTS.agregar_categoria}/${formularioCategoria.tienda}`, formularioCategoria)
            console.log(response.data);
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

        setFormularioCategoria(estadoInicialCategoria);
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
            <form onSubmit={manejarEnvio} className='form-categoria animate__animated animate__bounceInDown'>
                <div className="encabezado">
                    <h3>Agregar Categoría:</h3>
                </div>
                <div className="categoria">
                    <div className="datos">
                        <input type='text' name="categoria" placeholder='Agregue una categoría' onChange={manejarCambio} value={formularioCategoria.categoria} required />
                        <select name="tienda" placeholder="A Tienda" value={formularioCategoria.tienda} onChange={manejarCambio}>
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

export default AdminFormCategoria;