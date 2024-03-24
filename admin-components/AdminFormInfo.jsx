import '@/admin-components/admin-components-styles/AdminFormInfo.css'
import { useState, useEffect } from 'react';
import { useContext, useCallback } from 'react';
import { asyncContext } from '@/conetxt/AdminAsyncContext';
import { estadoInicialInfo } from '@/constants/constants';
import axios from 'axios';
import { ENDPIONTS } from '@/constants/constants';
import AccionCompleta from './AccionCompleta';

const AdminFormInfo = () => {
    const [formularioInfo, setFormularioInfo] = useState(estadoInicialInfo);
    const { accionCompletada, setAccionCompletada, respuesta, setRespuesta, wasError, setWasError } = useContext(asyncContext)
    const [tiendas, setTiendas] = useState([])
    const [mostrarTiendasInfo, setMostrarTiendasInfo] = useState(false)
    const [tiendaParaEditar, setTiendaParaEditar] = useState({})


    const manejarCambio = (e) => {
        setFormularioInfo({
            ...formularioInfo,
            [e.target.name]: e.target.value
        });
    };

    const manejarEditarInfo = () => {
        setMostrarTiendasInfo(!mostrarTiendasInfo)
        if (mostrarTiendasInfo) {
            setFormularioInfo(estadoInicialInfo)
        }
    }

    const manejarEnvio = async (e) => {
        e.preventDefault();
        console.log(formularioInfo);
        if (mostrarTiendasInfo) {
            try {
                const response = await axios.patch(`${ENDPIONTS.editar_informacion}/${formularioInfo.tienda}`, formularioInfo)
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
        }
        else {
            try {
                const response = await axios.post(`${ENDPIONTS.agregar_informacion}/${formularioInfo.tienda}`, formularioInfo)
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
        }
        setFormularioInfo(estadoInicialInfo);
    };

    const getUnaTienda = useCallback(async (idTienda) => {
        try {
            const response = await axios.get(`${ENDPIONTS.traer_una_tienda}/${idTienda}`);
            setFormularioInfo(response.data);
            setTiendaParaEditar(response.data)
            console.log(response.data);
        } catch (error) {
            console.log(error);
            if (error.response && error.response.status === 400) {
                setAccionCompletada(true)
                setRespuesta(error.response.data)
                setWasError(true)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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

    useEffect(() => {
        if (mostrarTiendasInfo && formularioInfo.tienda) {
            getUnaTienda(formularioInfo.tienda);
            console.log(mostrarTiendasInfo, formularioInfo.tienda);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formularioInfo.tienda, mostrarTiendasInfo]);

    return (
        <>
            <nav className='nav-info'>
                <button onClick={manejarEditarInfo}>{!mostrarTiendasInfo ? "Editar Información" : "Agregar Información"}</button>
            </nav>
            {accionCompletada && <AccionCompleta respuesta={respuesta} error={wasError} />}
            <form onSubmit={manejarEnvio} className='form-info animate__animated animate__bounceInDown'>
                <div className="encabezado">
                    <h3>{mostrarTiendasInfo ? "Editar Información" : "Agregar Información"}</h3>
                </div>
                <div className="info">
                    <div className="datos">
                        <select name="tienda" placeholder="A Tienda" value={formularioInfo.tienda} onChange={manejarCambio}>
                            <option value='' disabled>{tiendas.length ? "Escoja una Tienda" : "No existen tiendas"}</option>
                            {tiendas.length ? <option value='all'>Agregar a todas las tiendas</option> : null}
                            {tiendas.map(tienda => <option key={tienda.id} value={tienda.id}>{tienda.Nombre}</option>)}
                        </select>
                        <div className="datos-input">
                            <input type="text" name='correo' placeholder='Correo' onChange={manejarCambio} value={formularioInfo.correo} required />
                            <input type="text" name='direccion' placeholder='Dirección' onChange={manejarCambio} value={formularioInfo.direccion} required />
                            <input type="number" name='telefono' placeholder='Teléfono' onChange={manejarCambio} value={formularioInfo.telefono} required />
                        </div>
                        <textarea name="servicios" placeholder="Información de servicios" onChange={manejarCambio} value={formularioInfo.servicios} />
                        <textarea name="ayuda" placeholder="Información de ayuda" onChange={manejarCambio} value={formularioInfo.ayuda} />
                        <textarea name="sobreNosotros" placeholder="Sobre nosotros" onChange={manejarCambio} value={formularioInfo.sobreNosotros} />
                    </div>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </>
    );
};

export default AdminFormInfo;