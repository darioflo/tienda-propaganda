'use client'
import '@/client-components/client-components-styles/FormLogin.css'
import { useState, useContext } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { ENDPIONTS } from '@/constants/constants'
import { useRouter } from "next/navigation"
import { clientContext } from '@/conetxt/ClientContext'

const initialStateLogin = {
    user: '',
    password: '',
}

function FormLogin({ select, invitado }) {

    const [formLogin, setFormLogin] = useState(initialStateLogin)
    const [showHidePassword, setShowHidePassword] = useState(false)
    const router = useRouter()
    const { setIdTiendaAdmin, setEstadoCliente } = useContext(clientContext)

    const handleChange = (e) => {
        setFormLogin({
            ...formLogin,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formLogin);
        try {
            let response = await axios.post(ENDPIONTS.autenticar, formLogin)
            console.log(response.data);

            if (response.data.role === "Admin") {
                router.push('/admin')
                setIdTiendaAdmin(response.data.tienda)
            }
            else if (response.data.role === "Cliente") {
                router.push('/client')
                setEstadoCliente(response.data.role)
            }
            else {
                router.push('/superadmin')
            }
        } catch (error) {
            window.alert(error.response.data);
        }
        handleReset()
    }

    const handleReset = () => {
        setFormLogin(initialStateLogin)
    }

    const showHidePass = () => {
        setShowHidePassword(!showHidePassword)
    }


    return (
        <form action="" className='form' onSubmit={handleSubmit}>
            <div className="title box">
                <h2 className='login-h2'>Iniciar sesión</h2>
            </div>
            <div className="inputs box">
                <input type="text"
                    name="user"
                    placeholder='Usuario'
                    value={formLogin.user}
                    onChange={handleChange} />
                <input type={showHidePassword ? 'text' : "password"}
                    name="password"
                    id='inp-relative'
                    placeholder='Contraseña'
                    value={formLogin.password}
                    onChange={handleChange} />
                <button className='show' type="button" onClick={showHidePass}>{showHidePassword
                    ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(80,80,80)" viewBox="0 0 16 16">
                        <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z" />
                        <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z" />
                    </svg>
                    : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(80,80,80)" viewBox="0 0 16 16">
                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                    </svg>}
                </button>
            </div>
            <div className="buttons box">
                <button type='submit'>Entrar</button>
                {invitado ?
                    <div className="change-form" style={{ color: "#007BFF", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Link href={'/client'} style={{ color: "#007BFF", textDecoration: 'none' }}><strong>Entrar como invitado</strong></Link>
                    </div>
                    :
                    <div className="change-form" onClick={select} style={{ color: "#007BFF", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        Crear perfil
                    </div>
                }
                <button type='button' onClick={handleReset}>Cancelar</button>
            </div>
        </form>
    )
}

export default FormLogin