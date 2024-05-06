import '@/admin-components/admin-components-styles/AdminFormProductos.css'
import { useState, useEffect } from 'react';
import { estadoInicialProductos } from '@/constants/constants';
import axios from 'axios';
import { ENDPIONTS } from '@/constants/constants';
import { asyncContext } from '@/conetxt/AdminAsyncContext';
import { useContext } from 'react';
import AccionCompleta from './AccionCompleta';
import Loader from './Loader';

const AdminFormProductos = ({ editables }) => {
    const [formulario, setFormulario] = useState(estadoInicialProductos);
    const [tiendas, setTiendas] = useState([]);
    const [materiales, setMateriales] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [showLoader, setShowLoader] = useState(false)
    const { accionCompletada,
        setAccionCompletada,
        respuesta,
        setRespuesta,
        wasError,
        setWasError,
        setParaEditar,
        setRenderizarProductos,
        renderizarProductos,
    } = useContext(asyncContext)

    const manejarCambio = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        });
        if (e.target.name === 'tienda') {
            obtenerMaterialYCategoria(e.target.value);
        }
    };

    const manejarEnvio = async (e) => {
        setShowLoader(true)
        e.preventDefault();
        console.log(formulario);

        const datosFormulario = new FormData();
        Object.keys(formulario).forEach(key => {
            if (key === 'fotos') {
                formulario[key].forEach((foto) => {
                    datosFormulario.append(`${key}`, foto);
                });
            } else {
                datosFormulario.append(key, formulario[key]);
            }
        });

        try {
            let response;
            if (editables) {
                console.log(editables)
                console.log(formulario);
                response = await axios.patch(`${ENDPIONTS.editar_producto}/${formulario.id}`, datosFormulario, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                console.log(editables)
                console.log(formulario);
                console.log(formulario.id);
                setRenderizarProductos(renderizarProductos + 1)

            } else {
                response = await axios.post(`${ENDPIONTS.agregar_producto}/${formulario.tienda}`, datosFormulario, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                setAccionCompletada(true)
            }
            setShowLoader(false)
            setRespuesta(response.data)
            setWasError(false)
            setParaEditar(false)
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setAccionCompletada(true)
                setShowLoader(false)
                setRespuesta(error.response.data)
                setWasError(true)
            }
        }

        setFormulario(estadoInicialProductos);
        let fotos = document.querySelectorAll('input[type="file"]');
        fotos.forEach((foto) => foto.value = '')
    };
    const getTiendas = async () => {
        try {
            const respuesta = await axios.get(ENDPIONTS.tiendas)
            if (respuesta.data.length === 0) {
                setFormularioMaterial(prevState => ({ ...prevState, tienda: "No hay tiendas" }));
            }
            setTiendas(respuesta.data)
            /*if (editables) {
                setFormulario(prevState => ({ ...prevState, tienda: editables.tienda }));
            }*/
        } catch (error) {
            console.log(error);
        }
    }
    const obtenerMaterialYCategoria = async (idTienda, ids = {}) => {
        try {
            const { materialId = idTienda, categoriaId = idTienda } = ids;

            const urlMaterial = `https://0m9fgs4l-5000.usw3.devtunnels.ms/material/material/${materialId}`;
            const urlCategoria = `https://0m9fgs4l-5000.usw3.devtunnels.ms/category/category/${categoriaId}`;

            const [respuestaMaterial, respuestaCategoria] = await Promise.all([
                axios.get(urlMaterial),
                axios.get(urlCategoria)
            ]);
            setMateriales(respuestaMaterial.data);
            setCategorias(respuestaCategoria.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getTiendas()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (editables) {
            setFormulario(prevState => ({
                ...prevState,
                nombre: editables.nombre,
                id: editables.id,
                precio: editables.precio,
                cantidad: editables.cantidad,
                descripcion: editables.descripcion,
                tienda: editables.tienda._id,
                material: editables.material._id,
                categoria: editables.categoria._id,
                fotos: []
            }));
            console.log(editables.tienda._id);
            obtenerMaterialYCategoria(editables.tienda._id);
        }

    }, [editables]);

    useEffect(() => {
        if (formulario.tienda) {
            if (editables) {
                obtenerMaterialYCategoria(formulario.tienda, {
                    materialId: editables.material._id,
                    categoriaId: editables.categoria._id
                });
            } else {
                obtenerMaterialYCategoria(formulario.tienda);
            }
        }
    }, [formulario.tienda, editables]);

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
            <form onSubmit={manejarEnvio} className='form-productos'>
                <div className="encabezado">
                    <h3>{editables ? `Editar Producto` : `Agregar Producto`}</h3>
                </div>
                <div className="info">
                    <div className="datos">
                        <input type="text" name="nombre" placeholder="Nombre del producto" value={formulario.nombre} onChange={manejarCambio} required />
                        <select name="tienda" placeholder="A Tienda" value={formulario.tienda} onChange={manejarCambio}>
                            <option value='' disabled>{tiendas.length ? "Escoja una Tienda" : "No existen tiendas"}</option>
                            {tiendas.map(tienda => <option key={tienda.id} value={tienda.id}>{tienda.Nombre}</option>)}
                        </select>
                        <select name="categoria" value={formulario.categoria} onChange={manejarCambio} required>
                            <option value='' disabled>{tiendas.length ? "Escoja una categoría" : "No existen categorías"}</option>
                            {categorias.map((categoria, index) => <option key={index} value={categoria.id}>{categoria.Nombre}</option>)}
                        </select>
                        <select name="material" value={formulario.material} onChange={manejarCambio} required>
                            <option value='' disabled>{tiendas.length ? "Escoja un Material" : "No existen materiales"}</option>
                            {materiales.map((material, index) => <option key={index} value={material.id}>{material.Nombre}</option>)}
                        </select>
                        <input type="number" step="0.01" name="precio" value={formulario.precio} placeholder="Precio" onChange={manejarCambio} required />
                    </div>
                    <div className="archivos">
                        <textarea name="descripcion" placeholder="Descripción" value={formulario.descripcion} onChange={manejarCambio} required />
                        <input type="number" name="cantidad" placeholder="Cantidad de unidades" value={formulario.cantidad} onChange={manejarCambio} required />
                        <input type="file" name="fotos" onChange={(e) => setFormulario({ ...formulario, fotos: [...formulario.fotos, e.target.files[0]] })} />
                        <input type="file" name="fotos" onChange={(e) => setFormulario({ ...formulario, fotos: [...formulario.fotos, e.target.files[0]] })} />
                        <input type="file" name="fotos" onChange={(e) => setFormulario({ ...formulario, fotos: [...formulario.fotos, e.target.files[0]] })} />                </div>
                </div>
                <div className="loader-form" style={{ display: showLoader ? "flex" : "none" }}>
                    {showLoader && <Loader />}
                </div>
                <button type="submit">Enviar</button>
            </form>
        </>
    );
};

export default AdminFormProductos;