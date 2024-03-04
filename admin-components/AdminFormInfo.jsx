import '@/admin-components/admin-components-styles/AdminFormInfo.css'
import { useState } from 'react';
import { estadoInicialInfo } from '@/constants/constants';

const AdminFormInfo = () => {
    const [formularioInfo, setFormularioInfo] = useState(estadoInicialInfo);

    const manejarCambio = (e) => {
        setFormularioInfo({
            ...formularioInfo,
            [e.target.name]: e.target.value
        });
    };

    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log(formularioInfo);
        setFormularioInfo(estadoInicialInfo);
    };

    return (
        <form onSubmit={manejarEnvio} className='form-info'>
            <div className="encabezado">
                <h3>Agregar Información:</h3>
            </div>
            <div className="info">
                <div className="datos">
                    <textarea name="servicios" placeholder="Información de servicios" onChange={manejarCambio} value={formularioInfo.servicios} required />
                    <textarea name="ayuda" placeholder="Información de ayuda" onChange={manejarCambio} value={formularioInfo.ayuda} required />
                    <textarea name="sobreNosotros" placeholder="Sobre nosotros" onChange={manejarCambio} value={formularioInfo.sobreNosotros} required />
                </div>
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default AdminFormInfo;