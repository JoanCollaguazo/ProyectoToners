//IMPORTANCION DE LINK PARA PODER PODER DIRECCIONAR A PAGINAS
import Link from "next/link";
import styles from "../styles/navigation.module.css";
import head from "next/head";

const Navigation = ({ title }) => {
  return (
    //TITLE DE CADA PAGINA VA EN HEAD
    <header className = {styles.container}>
      <head>
        <title>{title}</title>
      </head>

          <Link href="/planes">
            <a>PLANES</a>
          </Link>
        

        
          <Link href="/servicios">
            <a>SERVICIOS</a>
          </Link>
        

        
          <Link href="/inicio">
          <img className={styles.img} src="imagenes/LogoFacturo2.jpeg"/>
          </Link>
        

        
          <Link href="/contacto">
            <a>CONTACTO</a>
          </Link>
        
        
          <Link href="/registro">
            <a>REGISTRO</a>
          </Link>
        
      
    </header>
  );
};

//TEXTO POR DEFECTO EN CASO QUE DE UNA PAGINA NO ESTE CONFIGURADO CON TITLE
Navigation.defaultProps = {
  title: "FACTURO",
};
export default Navigation;
