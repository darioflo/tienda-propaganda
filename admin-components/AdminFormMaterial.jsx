import '@/admin-components/admin-components-styles/AdminFormMaterial.css'
import { useState } from 'react';
import { estadoInicialMaterial } from '@/constants/constants';

const AdminFormMaterial = () => {
    const [formularioMaterial, setFormularioMaterial] = useState(estadoInicialMaterial);

    const manejarCambio = (e) => {
        setFormularioMaterial({
            ...formularioMaterial,
            [e.target.name]: e.target.value
        });
    };

    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log(formularioMaterial);
        setFormularioMaterial(estadoInicialMaterial);
    };

    return (
        <form onSubmit={manejarEnvio} className='form-material'>
            <div className="encabezado">
                <h3>Agregar Material:</h3>
            </div>
            <div className="material">
                <div className="datos">
                    <select name="material" onChange={manejarCambio} value={formularioMaterial.material} required>
                        <option value="">Seleccione un material</option>
                    </select>
                </div>
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default AdminFormMaterial;