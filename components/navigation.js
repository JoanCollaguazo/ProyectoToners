//IMPORTANCION DE LINK PARA PODER PODER DIRECCIONAR A PAGINAS
import Link from 'next/link';

const Navigation = () =>{
    return(
        <div style={{alignItems:'center', justifyContent:'center',marginLeft:'500px'}}>
        <ul style={{listStyleType:'none'}}>
            <li style={{ backgroundcolor: '#F6E3CA',
            border: '#D7C8B6 2px solid',
            float: 'left',
            marginright: '10px',
            padding: '0 4px'}}>
                <Link href="/planes">
                <a> Planes</a>
                </Link>
            </li>

            <li style={{ backgroundcolor: '#F6E3CA',
            border: '#D7C8B6 2px solid',
            float: 'left',
            marginright: '10px',
            padding: '0 4px'}}>
                <Link href="/servicios">
                <a>Servicios</a>
                </Link>
            </li>

            <li style={{ backgroundcolor: '#F6E3CA',
            border: '#D7C8B6 2px solid',
            float: 'left',
            marginright: '10px',
            padding: '0 4px'}}>
                <Link href="/inicio">
                <a>Inicio</a>
                </Link>
            </li>
            
            <li style={{ backgroundcolor: '#F6E3CA',
            border: '#D7C8B6 2px solid',
            float: 'left',
            marginright: '10px',
            padding: '0 4px'}}>
                <Link href="/contacto">
                <a>Contacto</a>
                </Link>
            </li>
            <li style={{ backgroundcolor: '#F6E3CA',
            border: '#D7C8B6 2px solid',
            float: 'left',
            marginright: '10px',
            padding: '0 4px'}}>
                <Link href="/registro">
                <a>Registro</a>
                </Link> 
            </li>
        </ul>
        </div>
    )
}

export default Navigation; 