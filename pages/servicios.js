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
        <footer className={styles.footerCuerpo}>
          <div className={styles.container__footer}>
            <div className={styles.box__footer}>
              <div className={styles.logo}>
                <img src="imagenes/Facturo-Logo-y-Redes-W.webp" alt=""></img>
              </div>
              <div className={styles.terms}></div>
            </div>
            <div className={styles.box__footer}>
              <h2>Direcciones</h2>
              <a
                className={styles.url}
                href="https://www.google.com.ec/maps/place/Calle+16B+%26+Calle+12,+Manta+130213/@-0.9554166,-80.7442438,17z/data=!3m1!4b1!4m5!3m4!1s0x902be142219d88e7:0xde77b10df587958!8m2!3d-0.955422!4d-80.7420551?hl=es"
                target="_blank"
              >
                Manta:CALLE 12 Y CALLE 16 B
              </a>
              <a className={styles.url} href="#">
                EDIFICIO MHC OFICINA 311
              </a>
              <a className={styles.url} href="#">
                Quito:CALLE STO. DOMINGO DE
              </a>
              <a className={styles.url} href="#">
                CARRETAS Y AV.SIMON BOLIVAR CASA NO.26
              </a>
            </div>

            <div className={styles.box__footer}>
              <h2>Contactos</h2>
              <a className={styles.url} href="#">
                Manta: 052590420
              </a>
              <a className={styles.url} href="#">
                Quito: 023449064
              </a>
              <a className={styles.url} href="#">
                Celulares: 0939272554
              </a>
              <a className={styles.url} href="#">
                Email ventas: ventas@facturo.ec
              </a>
              <a className={styles.url} href="#">
                Email ventas: ventas@facturo.ec
              </a>
            </div>

            <div className={styles.box__footer}>
              <h2>Redes Sociales</h2>
              <a
                className={styles.url}
                href="https://www.facebook.com/facturoec"
                target="_blank"
              >
                <i className="fab fa-facebook-square"></i> Facebook
              </a>

              <a className={styles.url} href="https://www.instagram.com/facturoec/" target="_blank">
                <i className="fab fa-instagram-square"></i> Instagram
              </a>
            </div>
          </div>

          <div className={styles.box__copyright}>
            <hr></hr>
            <p>
              Todos los derechos reservados © 2021 <b>Facturo</b>
            </p>
          </div>
        </footer>
      </body>
    </div>
  );
};
export default servicios;
