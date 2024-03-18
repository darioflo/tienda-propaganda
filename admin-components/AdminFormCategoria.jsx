import '@/admin-components/admin-components-styles/AdminFormCategoria.css'
import { useState } from 'react';
import { estadoInicialCategoria } from '@/constants/constants';
import { useContext } from 'react';
import { adminContext } from '@/conetxt/AdminContext';

const AdminFormCategoria = () => {
    const [formularioCategoria, setFormularioCategoria] = useState(estadoInicialCategoria);

    const manejarCambio = (e) => {
        setFormularioCategoria({
            ...formularioCategoria,
            [e.target.name]: e.target.value
        });
    };

    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log(formularioCategoria);
        setFormularioCategoria(estadoInicialCategoria);
    };

    return (
        <form onSubmit={manejarEnvio} className='form-categoria'>
            <div className="encabezado">
                <h3>Agregar Categoría:</h3>
            </div>
            <div className="categoria">
                <div className="datos">
                    <select name="categoria" onChange={manejarCambio} value={formularioCategoria.categoria} required>
                        <option value="">Seleccione una categoría</option>
                    </select>
                </div>
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default AdminFormCategoria;