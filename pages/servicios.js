import React from "react";
import Navigation from "../components/navigation";
import styles from "../styles/servicios.module.css";

const servicios = () => {
  return (
    <div>
      <Navigation title="SERVICIOS - FACTURO"></Navigation>
      <body className={styles.body}>
        <h1 className={styles.title}>Servicios </h1>
        <div className={styles.contorno}>
          <h1 className={styles.integraciones}>Integraciones</h1>
          <ol className={styles.viñetas1}>
            <li>
              Contamos con integraciones para E-Commerce WordPress, Prestashop
            </li>
            <br></br>
            <li>
              Integramos a tus sistemas contables o financieros. CONSULTANOS
            </li>
            <h1 className={styles.precios}>PRECIOS</h1>
            <li>Integración ERP $500</li>
            <br></br>
            <li>Integración E-Commerce $500</li>
          </ol>
          <br></br>
          <img className={styles.bann1} src="imagenes/Bann1.png"></img>
          <img className={styles.btnpagos} src="imagenes/botonpagos.webp"></img>
          <div className={styles.txtPagos}>
            <ol className={styles.viñetas}>
              <li>
                Vende y factura desde tu móvil en todo tiempo, sistema muy fácil
                de utilizar para todo tipo de negocio.
              </li>
              <li>
                Contamos con integración de pasarelas de cobro de tarjetas de
                crédito: BOTON PAGOS
                <br></br>
                <a href="www.botonpagos.com">www.botonpagos.com</a>
              </li>
            </ol>
          </div>
        </div>
      </body>
    </div>
  );
};
export default servicios;
