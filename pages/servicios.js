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
          <h1 className={styles.titlesfinal}>
            Ingresa los datos del consumidor
          </h1>
          <li className={styles.cuerpo}>
            Igual que cuando completas una factura en papel, pero si es un
            cliente que ya te ha comprado antes, los datos se completarán
            automáticamente y sin perder tiempo.
          </li>

          <h1 className={styles.titlesfinal}>
            Define los detalles de la venta
          </h1>
          <li className={styles.cuerpo}>
            Igual que cuando completas una factura en papel, pero si es un
            cliente que ya te ha comprado antes, los datos se completarán
            automáticamente y sin perder tiempo.
          </li>
          <h1 className={styles.titlesfinal}>
            ¡Ahora si! Emite tu factura y envíala
          </h1>
          <li className={styles.cuerpo}>
            Igual que cuando completas una factura en papel, pero si es un
            cliente que ya te ha comprado antes, los datos se completarán
            automáticamente y sin perder tiempo.
          </li>
        </div>

        {/* FOOTER */}
        <div className={styles.menuInferior}>
              <div>
                  <img style={{marginTop:"50px", marginLeft:"100px"}} src="https://i1.wp.com/www.facturo.ec/wp-content/uploads/2020/10/Facturo-Logo-y-Redes-W.png?resize=150%2C150&ssl=1"></img>
              </div>

              <div className={styles.Direcciones}>
                  <h2>Direcciones</h2>
                  <h3>Manta: CALLE 12 Y CALLE 16 B</h3>
                  <h3>EDIFICIO MHC OFICINA 311</h3>
                  <h3>Quito: CALLE STO.DOMINGO DE</h3>
                  <h3>CARRETAS Y AV.SIMON BOLIVAR</h3>
                  <h3>CASA NO.26</h3>
              </div>
                                 
              <div className={styles.Contactos}>
              <h2>Contactos</h2>
                    <h3>  Manta: 052590420</h3>
                    <h3>  Quito: 023449064</h3>
                    <h3>  Celulares: 0939272554 – 0984785231</h3>
                    <h3>  Email info: info@facturo.ec</h3>
                    <h3>  Email ventas: ventas@facturo.ec</h3>
              </div>

              <div className={styles.Planes}>
                      <h3>  PLANES</h3> 
                      <h3>  SERVICIOS</h3>
                      <h3>  CONTACTO</h3>
                      <h3>  REGISTRO</h3>
              </div>
                
            </div>

            <div className={styles.menuInferior2}>
              <br></br>
              <h3>Copyright 2021 Facturo &nbsp;  &nbsp;| &nbsp; &nbsp; Todos los derechos reservados &nbsp;  &nbsp; | &nbsp; &nbsp; Diseñado por CREAR HUB</h3>
            </div>
      </body>
    </div>
  );
};
export default servicios;
