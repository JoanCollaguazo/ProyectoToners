//IMPORTANCION DE LINK PARA PODER PODER DIRECCIONAR A PAGINAS
import Link from "next/link";
import styles from "../styles/navigation.module.css";
import head from "next/head";

const Navigation = ({ title }) => {
  return (
    //TITLE DE CADA PAGINA VA EN HEAD
    <div className = {styles.container}>
      <head>
        <title>{title}</title>
      </head>
      <ul>
        <li>
          <Link href="/planes">
            <a> Planes</a>
          </Link>
        </li>

        <li>
          <Link href="/servicios">
            <a>Servicios</a>
          </Link>
        </li>

        <li>
          <Link href="/inicio">
            <a>Inicio</a>
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
    </div>
  );
};

//TEXTO POR DEFECTO EN CASO QUE DE UNA PAGINA NO ESTE CONFIGURADO CON TITLE
Navigation.defaultProps = {
  title: "FACTURO",
};
export default Navigation;
