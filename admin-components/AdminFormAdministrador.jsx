import '@/admin-components/admin-components-styles/AdminFormAdministrador.css'
import { useState } from 'react';

const estadoInicial = {
    nombre: '',
    usuario: '',
    contrasena: ''
}

const AdminFormAdministrador = () => {
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
        <form onSubmit={manejarEnvio} className='form-admin'>
            <div className="encabezado">
                <h3>Agregar un Administrador:</h3>
            </div>
            <div className="info">
                <div className="datos">
                    <input type="text" name="nombre" placeholder="Nombre" value={formulario.nombre} onChange={manejarCambio} required />
                    <input type="text" name="usuario" placeholder="Usuario" value={formulario.usuario} onChange={manejarCambio} required />
                    <input type="password" name="contrasena" placeholder="Contraseña" value={formulario.contrasena} onChange={manejarCambio} required />
                </div>
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default AdminFormAdministrador;