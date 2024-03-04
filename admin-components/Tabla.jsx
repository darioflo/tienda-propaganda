import '@/admin-components/admin-components-styles/Tabla.css'

export default function Tabla({ thead }) {

    return (
        <table className="tabla">
            <thead>
                <tr>
                    {Object.entries(thead).map(([atributo, valor], index) =>
                        <th key={index}>{atributo}</th>)}
                    <th className='opciones'>Opciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {Object.entries(thead).map(([atributo, valor], index) =>
                        <td key={index}>{valor}</td>)}
                    <td className='opciones'>
                        <button className="boton-ver"><svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.5em" viewBox="0 0 24 24"><path fill="#EDEDED" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3" /></svg></button>
                        <button className="boton-editar"><svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.5em" viewBox="0 0 24 24"><path fill="#EDEDED" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75z" /></svg></button>
                        <button className="boton-eliminar"><svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.5em" viewBox="0 0 24 24"><path fill="#EDEDED" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12l1.41 1.41L13.41 14l2.12 2.12l-1.41 1.41L12 15.41l-2.12 2.12l-1.41-1.41L10.59 14zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" /></svg></button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}