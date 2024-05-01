import '@/client-components/client-components-styles/FormAuth.css'
import { useState } from 'react'


const initialStateLogin = {
    nombre: '',
    apellidos: '',
    correo: '',
    usuario: '',
    clave: '',
    confirmarClave: '',
}

function FormAuth({ select }) {

    const [formAuth, setFormAuth] = useState(initialStateLogin)

    const handleChange = (e) => {
        setFormAuth({
            ...formAuth,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formAuth);
        handleReset()
    }

    const handleReset = () => {
        setFormAuth(initialStateLogin)
    }


    return (
        <form action="" className='form-2' onSubmit={handleSubmit}>
            <div className="title box">
                <h2 className='login-h2'>Logearse</h2>
            </div>
            <div className="inputs box">
                <input type="text"
                    name="nombre"
                    placeholder='Nombre'
                    value={formAuth.nombre}
                    onChange={handleChange} />
                <input type="text"
                    name="apellidos"
                    placeholder='Apellidos'
                    value={formAuth.apellidos}
                    onChange={handleChange} />
                <input type="email"
                    name="correo"
                    placeholder='Correo electronico'
                    value={formAuth.correo}
                    onChange={handleChange} />
                <input type="text"
                    name="usuario"
                    placeholder='Nombre de usuario'
                    value={formAuth.usuario}
                    onChange={handleChange} />
                <input type="password"
                    name="clave"
                    id='inp-relative'
                    placeholder='Contraseña'
                    value={formAuth.clave}
                    onChange={handleChange} />
                <input type="password"
                    name="confirmarClave"
                    id='inp-relative'
                    placeholder='Confirmar contraseña'
                    value={formAuth.confirmarClave}
                    onChange={handleChange} />
            </div>
            <div className="buttons box">
                <button type='submit'>Entrar</button>
                <div className="change-form" onClick={select}>Iniciar sesion</div>
                <button type='button' onClick={handleReset}>Cancelar</button>
            </div>
        </form>
    )
}

export default FormAuth