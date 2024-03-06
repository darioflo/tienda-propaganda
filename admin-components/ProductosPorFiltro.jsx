import '@/admin-components/admin-components-styles/ProductosPorFiltro.css'
import { useEffect } from 'react'

export default function ProductosPorFiltro({ option }) {

    const escogerOpcion = () => {
        let opcion
        if (option.hasOwnProperty('categoria')) {
            opcion = "categoria"
        }
        else if (option.hasOwnProperty('material')) {
            opcion = "material"
        }
        else {
            opcion = "tienda"
        }

        return opcion
    }

    let seleccion = escogerOpcion()
    console.log(seleccion);


    return (
        <div className='componente-por-filtro'>
            <div className="select">
                <select name={seleccion}>
                    <option value='' selected disabled>{seleccion === 'material' ? `Escoja el ${seleccion}` : `Escoja la ${seleccion}`}</option>
                </select>
            </div>
        </div>
    )
}
