import '@/client-components/client-components-styles/UbicacionMenu.css'
import { clientContext } from '@/conetxt/ClientContext'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { ENDPIONTS } from '@/constants/constants'

export default function UbicacionMenu() {

    const { mostrarUbicacion, setUbicacionName, cerrarMenuPorFuera, setIdTienda } = useContext(clientContext)
    const [selectedOptionProvincia, setSelectedOptionProvincia] = useState('');
    const [selectedOptionTienda, setSelectedOptionTienda] = useState('');
    const [isOpen, setIsOpen] = useState(true)
    const [provincias, setProvincias] = useState([])


    const cerrarMenu = () => {
        setIsOpen(!isOpen)
    }

    const stopPropagation = (e) => {
        e.stopPropagation()
    }

    const handleSelectedProvincia = (e) => {
        setSelectedOptionProvincia(e.target.value);
        setSelectedOptionTienda("")
    }

    const handleSelectedTienda = (e) => {
        setSelectedOptionTienda(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            "provincia": selectedOptionProvincia,
            "tienda": selectedOptionTienda
        }
        mostrarUbicacion()
        console.log(data);
        setUbicacionName(data.provincia)
        setIdTienda(data.tienda)
    }

    const getProvincias = async () => {
        try {
            let response = await axios.get(ENDPIONTS.obtenerProvincias)
            setProvincias(response.data)
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProvincias()
    }, [])


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
                            {provincias.map(element => <option key={element.id}>{element.provincia}</option>)}
                        </select>
                    </div>
                    <div className="municipio">
                        <h4>Municipio</h4>
                        <select className='select'
                            data-id='tienda'
                            value={selectedOptionTienda}
                            onChange={handleSelectedTienda}
                            required>
                            <option value='' disabled>Seleccione</option>
                            {provincias.map((element) => {
                                if (element.provincia === selectedOptionProvincia) {
                                    return <option key={element.id} value={element.id}>{element.nombre}</option>
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
