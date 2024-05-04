import '@/client-components/client-components-styles/UbicacionMenu.css'
import { clientContext } from '@/conetxt/ClientContext'
import { useContext, useState } from 'react'


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

export default function UbicacionMenu() {

    const { mostrarUbicacion, setUbicacionName, cerrarMenuPorFuera } = useContext(clientContext)
    const [selectedOptionProvincia, setSelectedOptionProvincia] = useState('');
    const [selectedOptionMunicipio, setSelectedOptionMunicipio] = useState('');
    const [isOpen, setIsOpen] = useState(true)


    const cerrarMenu = () => {
        setIsOpen(!isOpen)
    }

    const stopPropagation = (e) => {
        e.stopPropagation()
    }

    const handleSelectedProvincia = (e) => {
        setSelectedOptionProvincia(e.target.value);
        setSelectedOptionMunicipio("")
    }

    const handleSelectedMunicipio = (e) => {
        setSelectedOptionMunicipio(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            "provincia": selectedOptionProvincia,
            "municipio": selectedOptionMunicipio
        }
        mostrarUbicacion()
        console.log(data);
    }


    return (
        <div className="opacity" onClick={cerrarMenuPorFuera}>
            <form className="ubicacion-container animate__animated animate__bounceInDown" onClick={stopPropagation} onSubmit={handleSubmit}>
                <div className="titulo">
                    <h3>Lugar de entrega</h3>
                    <button className='btn-closed' onClick={mostrarUbicacion}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="rgb(80,80,80)" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z" /></svg>
                    </button>
                </div>
                <div className="ubicacion-opciones">
                    <div className="provincia">
                        <h4>Provincia</h4>
                        <select className='select'
                            data-id='provincias'
                            value={selectedOptionProvincia}
                            onChange={handleSelectedProvincia}
                            required>
                            <option value='' disabled selected>Seleccione</option>
                            {Provincias.map(element => <option key={element.id}>{element.nombre}</option>)}
                        </select>
                    </div>
                    <div className="municipio">
                        <h4>Municipio</h4>
                        <select className='select'
                            data-id='municipios'
                            value={selectedOptionMunicipio}
                            onChange={handleSelectedMunicipio}
                            required>
                            <option value='' disabled>Seleccione</option>
                            {Provincias.map((element) => {
                                if (element.nombre === selectedOptionProvincia && element.municipios) {
                                    setUbicacionName(selectedOptionProvincia)
                                    return element.municipios.map((element, index) => <option key={index} selected>{element}</option>)
                                }
                            })}
                        </select>
                    </div>
                </div>
                <div className="btn-container">
                    <button type='submit'>Aceptar</button>
                </div>
            </form>
        </div>
    )
}