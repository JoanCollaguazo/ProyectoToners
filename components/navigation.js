//IMPORTANCION DE LINK PARA PODER PODER DIRECCIONAR A PAGINAS
import Link from 'next/link';

const Navigation = () =>{
    return(
        <ul>
            <li>
                <Link href="/index">
                <a>Inicio</a>
                </Link>
            </li>
            <li>
                <Link href="/planes">
                <a>Planes</a>
                </Link>
            </li>
            <li>
                <Link href="/servicios">
                <a>Servicios</a>
                </Link>
            </li>
            <li>
                <Link href="/contacto">
                <a>Contacto</a>
                </Link>
            </li>
            <li>
                <Link href="/registro">
                <a>Registro</a>
                </Link> 
            </li>
        </ul>
    )
}

export default Navigation;