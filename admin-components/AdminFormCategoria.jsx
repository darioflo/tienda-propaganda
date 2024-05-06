import '@/admin-components/admin-components-styles/AdminFormCategoria.css'
import { useState } from 'react';
import { estadoInicialCategoria } from '@/constants/constants';
import { useContext } from 'react';
import { asyncContext } from '@/conetxt/AdminAsyncContext';
import { ENDPIONTS } from '@/constants/constants';
import axios from 'axios';
import AccionCompleta from './AccionCompleta';
import { useEffect } from 'react';
import Loader from './Loader';

const AdminFormCategoria = ({ editables }) => {
    const [formularioCategoria, setFormularioCategoria] = useState(estadoInicialCategoria);
    const { accionCompletada,
        setAccionCompletada,
        respuesta,
        setRespuesta,
        wasError,
        setWasError,
        setRenderizarProductos,
        renderizarProductos, } = useContext(asyncContext)
    const [tiendas, setTiendas] = useState([])
    const [showLoader, setShowLoader] = useState(false)

    const manejarCambio = (e) => {
        setFormularioCategoria({
            ...formularioCategoria,
            [e.target.name]: e.target.value
        });
    };


    const manejarEnvio = async (e) => {
        setShowLoader(true)
        e.preventDefault();
        console.log(formularioCategoria);
        if (editables) {
            console.log(formularioCategoria);
            try {
                const response = await axios.patch(`${ENDPIONTS.editar_categoria}/${editables.id_category}`, formularioCategoria)
                console.log(response.data);
                setAccionCompletada(true)
                setShowLoader(false)
                setRenderizarProductos(renderizarProductos + 1)
                setRespuesta(response.data)
                setWasError(false)
            } catch (error) {
                if (error.response && error.response.status >= 400) {
                    setAccionCompletada(true)
                    setRenderizarProductos(renderizarProductos + 1)
                    setShowLoader(false)
                    setRespuesta(error.response.data)
                    setWasError(true)
                }
            };
        }
        else {
            try {
                const response = await axios.post(`${ENDPIONTS.agregar_categoria}/${formularioCategoria.tienda}`, formularioCategoria)
                console.log(response.data);
                setAccionCompletada(true)
                setShowLoader(false)
                setRespuesta(response.data)
                setWasError(false)
            } catch (error) {
                if (error.response && error.response.status >= 400) {
                    setAccionCompletada(true)
                    setShowLoader(false)
                    setRespuesta(error.response.data)
                    setWasError(true)
                }
            };
        }

        setFormularioCategoria(estadoInicialCategoria);
    }
    const getTiendas = async () => {
        try {
            const respuesta = await axios.get(ENDPIONTS.tiendas)
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
        if (editables) {
            setFormularioCategoria(prevState => ({
                ...prevState,
                categoria: editables.nombre,
                tienda: editables.tienda,
            }))
        }
    }, [editables])

    useEffect(() => {
        if (accionCompletada) {
            const timer = setTimeout(() => {
                setAccionCompletada(false);
            }, 1500);
            return () => clearTimeout(timer);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [accionCompletada]);


    return (
        <>
            {accionCompletada && <AccionCompleta respuesta={respuesta} error={wasError} />}
            <form onSubmit={manejarEnvio} className='form-categoria animate__animated animate__bounceInDown'>
                <div className="encabezado">
                    <h3>{editables ? 'Editar Categoria' : "Agregar Categoria"}</h3>
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
                <div className="loader-form" style={{ display: showLoader ? "flex" : "none" }}>
                    {showLoader && <Loader />}
                </div>
                <button type="submit">Enviar</button>
            </form>
        </>
    );
};

export default AdminFormCategoria;