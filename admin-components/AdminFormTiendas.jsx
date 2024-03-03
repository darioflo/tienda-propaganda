'use client'
import '@/admin-components/admin-components-styles/AdminFormTiendas.css'
import { useState } from 'react';

const Provincias = [{
    "id": "1",
    "nombre": 'Pinar del Río',
    "municipios": ["Consolación del Sur", "Guane", "La Palma", "Los Palacios", "Mantua", "Minas de Matahambre", "Pinar del Río", "San Juan y Martínez", "San Luis", "Sandino", "Viñales"]
}, {
    "id": "2",
    "nombre": 'Artemisa',
    "municipios": [
        "Alquízar", "Artemisa", "Bauta", "Caimito", "Guanajay", "Güira de Melena", "Mariel", "San Antonio de los Baños", "Bahía Honda", "San Cristóbal", "Candelaria"]
}, {
    "id": "3",
    "nombre": 'Mayabeque',
    "municipios": ["Batabanó", "Bejucal", "Güines", "Jaruco", "Madruga", "Melena del Sur", "Nueva Paz", "Quivicán", "San José de las Lajas", "San Nicolás de Bari", "Santa Cruz del Norte"]
}, {
    "id": "4",
    "nombre": 'La Habana',
    "municipios": [
        "Arroyo Naranjo", "Boyeros", "Centro Habana", "Cerro", "Cotorro", "Diez de Octubre", "Guanabacoa", "Habana del Este", "Habana Vieja", "La Lisa", "Marianao", "Playa", "Plaza", "Regla", "San Miguel del Padrón"]
}, {
    "id": "5",
    "nombre": 'Matanzas',
    "municipios": ["Calimete", "Cárdenas", "Ciénaga de Zapata", "Colón", "Jagüey Grande", "Jovellanos", "Limonar", "Los Arabos", "Martí", "Matanzas", "Pedro Betancourt", "Perico", "Unión de Reyes"]
}, {
    "id": "6",
    "nombre": 'Cienfuegos',
    "municipios": ["Abreus", "Aguada de Pasajeros", "Cienfuegos", "Cruces", "Cumanayagua", "Palmira", "Rodas", "Santa Isabel de las Lajas"]

}, {
    "id": "7",
    "nombre": 'Villa Clara',

    "municipios": ["Caibarién", "Camajuaní", "Cifuentes", "Corralillo", "Encrucijada", "Manicaragua", "Placetas", "Quemado de Güines", "Ranchuelo", "Remedios", "Sagua la Grande", "Santa Clara", "Santo Domingo"]
}, {
    "id": "8",
    "nombre": 'Sancti Spíritus',
    "municipios": [
        "Cabaigúan", "Fomento", "Jatibonico", "La Sierpe", "Sancti Spíritus", "Taguasco", "Trinidad", "Yaguajay"]
}, {
    "id": "9",
    "nombre": 'Ciego de Ávila',
    "municipio": ["Ciro Redondo", "Baraguá", "Bolivia", "Chambas", "Ciego de Ávila", "Florencia", "Majagua", "Morón", "Primero de Enero", "Venezuela"]
}, {
    "id": "10",
    "nombre": 'Camagüey',
    "municipios": [
        "Camagüey", "Carlos Manuel de Céspedes", "Esmeralda", "Florida", "Guaimaro", "Jimagüayú", "Minas", "Najasa", "Nuevitas", "Santa Cruz del Sur", "Sibanicú", "Sierra de Cubitas", "Vertientes"]
}, {
    "id": "11",
    "nombre": 'Las Tunas',
    "municipios": [
        "Amancio Rodríguez", "Colombia", "Jesús Menéndez", "Jobabo", "Las Tunas", "Majibacoa", "Manatí", "Puerto Padre"]
}, {
    "id": "12",
    "nombre": 'Holguín',
    "municipios": [
        "Antilla", "Báguanos", "Banes", "Cacocum", "Calixto García", "Cueto", "Frank País", "Gibara", "Holguín", "Mayarí", "Moa", "Rafael Freyre", "Sagua de Tánamo", "Urbano Noris"]
}, {
    "id": "13",
    "nombre": 'Santiago de Cuba',
    "municipios": [
        "Contramaestre", "Guamá", "Julio Antonio Mella", "Palma Soriano", "San Luis", "Santiago de Cuba", "Segundo Frente", "Songo la Maya", "Tercer Frente"]
}, {
    "id": "14",
    "nombre": 'Guantánamo',
    "municipios": [
        "Baracoa", "Caimanera", "El Salvador", "Guantánamo", "Imías", "Maisí", "Manuel Tames", "Niceto Pérez", "San Antonio del Sur", "Yateras"]
}, {
    "id": "15",
    "nombre": 'Isla de la Juventud'
},
{
    "id": 16,
    "nombre": "Granma",
    "municipios": [
        "Bartolomé Masó", "Bayamo", "Buey Arriba", "Campechuela", "Cauto Cristo", "Guisa", "Jiguaní", "Manzanillo", "Media Luna", "Niquero", "Pilón", "Río Cauto", "Yara"]
}]


const estadoInicial = {
    nombre: '',
    administrador: '',
    usuario: '',
    contrasena: '',
    provincia: ''
}

const AdminFormTiendas = () => {
    const [formulario, setFormulario] = useState(estadoInicial);
    const [provincia, setProvincia] = useState("")

    const manejarCambioProvincia = (e) => {
        setProvincia(e.target.value);
        setFormulario({
            ...formulario,
            provincia: e.target.value
        });
    }

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
        setProvincia("")

    };

    return (
        <form onSubmit={manejarEnvio} className='form-tiendas'>
            <h3>Agregar una Tienda:</h3>
            <input type="text" name="nombre" placeholder="Nombre de la tienda" value={formulario.nombre} onChange={manejarCambio} />
            <input type="text" name="administrador" placeholder="Administrador" value={formulario.administrador} onChange={manejarCambio} />
            <input type="text" name="usuario" placeholder="Usuario" value={formulario.usuario} onChange={manejarCambio} />
            <input type="password" name="contrasena" placeholder="Contraseña" value={formulario.contrasena} onChange={manejarCambio} />
            <select name="provincia" placeholder="Provincia" value={provincia} onChange={manejarCambioProvincia}>
                <option value='' disabled>Escoja una provincia</option>
                {Provincias.map(provincia => <option key={provincia.id}>{provincia.nombre}</option>)}
            </select>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default AdminFormTiendas;