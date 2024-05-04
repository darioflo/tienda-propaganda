import '@/admin-components/admin-components-styles/BorrarModal.css'
import { useContext, useEffect } from 'react'
import { asyncContext } from '@/conetxt/AdminAsyncContext'
import Loader from '@/admin-components/Loader.jsx';

export default function BorrarElementos({ setBorrar, borrarElemento }) {

    const { loader } = useContext(asyncContext)
    console.log(loader);

    return (
        <div className="modal">
            <div className="modal-box">
                <div className="txt">
                    <p className='resp-text'>Esta seguro que desea eliminar este elemento</p>
                </div>
                <div className="btns">
                    <button className='delete-btn' onClick={() => borrarElemento()}>Aceptar</button>
                    {loader && <Loader />}
                    <button className='cancel' onClick={() => setBorrar(false)}>Cancelar</button>
                </div>
            </div>
        </div>
    )
}
