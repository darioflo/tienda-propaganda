import '@/admin-components/admin-components-styles/AdminFormProductos.css'
import { useState } from 'react';

const estadoInicial = {
    nombre: '',
    descripcion: '',
    categoria: '',
    precio: '',
    cantidad: '',
    foto: []
}

const AdminFormProductos = () => {
    const [formulario, setFormulario] = useState(estadoInicial);

    const manejarCambio = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        });
    };

    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log(formulario);
        setFormulario(estadoInicial);
    };

    return (
        <form onSubmit={manejarEnvio} className='form-productos'>
            <div className="encabezado">
                <h3>Agregar un Producto:</h3>
            </div>
            <div className="info">
                <div className="datos">
                    <input type="text" name="nombre" placeholder="Nombre del producto" onChange={manejarCambio} required />
                    <textarea name="descripcion" placeholder="Descripción" onChange={manejarCambio} required />
                    <input type="text" name="categoria" placeholder="Categoría" onChange={manejarCambio} required />
                    <input type="number" step="0.01" name="precio" placeholder="Precio" onChange={manejarCambio} required />
                </div>
                <div className="archivos">
                    <input type="number" name="cantidad" placeholder="Cantidad de unidades" onChange={manejarCambio} required />
                    <input type="file" name="foto1" onChange={(e) => setFormulario({ ...formulario, foto: [...formulario.foto, e.target.files[0]] })} required />
                    <input type="file" name="foto2" onChange={(e) => setFormulario({ ...formulario, foto: [...formulario.foto, e.target.files[0]] })} />
                    <input type="file" name="foto3" onChange={(e) => setFormulario({ ...formulario, foto: [...formulario.foto, e.target.files[0]] })} />
                </div></div>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default AdminFormProductos;