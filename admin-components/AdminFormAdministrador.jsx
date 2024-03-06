import '@/admin-components/admin-components-styles/AdminFormAdministrador.css'
import { useState } from 'react';
import { estadoInicialAdministrador } from '@/constants/constants';

const AdminFormAdministrador = () => {
    const [formulario, setFormulario] = useState(estadoInicialAdministrador);

    const manejarCambio = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        });
    };

    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log(formulario);
        setFormulario(estadoInicialAdministrador);
    };

    return (
        <form onSubmit={manejarEnvio} className='form-admin'>
            <div className="encabezado">
                <h3>Agregar Administrador:</h3>
            </div>
            <div className="info">
                <div className="datos">
                    <input type="text" name="nombre" placeholder="Nombre" value={formulario.nombre} onChange={manejarCambio} required />
                    <input type="text" name="tienda" placeholder="Tienda a gestionar" value={formulario.tienda} onChange={manejarCambio} required />
                    <input type="text" name="usuario" placeholder="Usuario" value={formulario.usuario} onChange={manejarCambio} required />
                    <input type="password" name="contrasena" placeholder="Contraseña" value={formulario.contrasena} onChange={manejarCambio} required />
                </div>
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default AdminFormAdministrador;