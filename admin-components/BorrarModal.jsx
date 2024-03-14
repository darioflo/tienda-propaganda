import '@/admin-components/admin-components-styles/BorrarModal.css'
import { useContext } from 'react'
import { asyncContext } from '@/conetxt/AdminAsyncContext'


export default function BorrarModal({ borrarDato }) {

    const { setBorrar, borrarFila } = useContext(asyncContext)

    console.log(borrarDato);

    return (
        <div className="modal">
            <div className="modal-box">
                <div className="txt">
                    <p>Esta seguro que desea eliminar este elemento</p>
                </div>
                <div className="btns">
                    <button className='delete-btn' onClick={() => borrarFila(borrarDato)}>Aceptar</button>
                    <button className='cancel' onClick={() => setBorrar(false)}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}
