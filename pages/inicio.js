import React from "react";
import Link from "next/link";
import Navigation from "../components/navigation";
import styles from "../styles/inicio.module.css";

const inicio = () => {
  return (
    <div>
      <Navigation title="FACTURO"></Navigation>
      

      <br></br>

      <div className={styles.slider}>
        <ul>
          <li><img src="imagenes/slider1.png" alt=""></img></li>
          <li><img className={styles.img2Slider} src="imagenes/slider2.jpg" alt=""></img></li>
        </ul>
      </div>

      <body className={styles.body}>

        <div className={styles.divCentral}>
        <img
          className={styles.img}
          src="imagenes/enlace-.webp"
        ></img>

        <div className={styles.divInterior}>
         <h4 className={styles.h4}>¿QUÉ ES LA FACTURACIÓN ELECTRÓNICA?</h4>
        <p className={styles.p}>
          La facturación electrónica es un documento digital que sustituye la
          facturación en papel y garantiza la autenticidad e integridad de su
          contenido. En Ecuador es la nueva forma de generar comprobantes
          fiscales digitales y avalar el costo de los servicios desglosando los
          impuestos a pagar. Una factura electrónica es un Comprobante Fiscal
          Digital por Internet (el estándar es definido por el SRI.
        </p>
        </div>
        </div>    

        {/* DOS BANNERS */}
        <img
          className={styles.img1}
          src="imagenes/slider4footer.webp"
          
        ></img>
        <img
          className={styles.img2}
          src="imagenes/bannerplanes.webp"
          align="center"
        ></img>

        <div className={styles.planes}>
          <img
            className={styles.plan1}
            src="imagenes/plan1.webp"
          ></img>
          <img
            className={styles.plan2}
            src="imagenes/plan2.webp"
          ></img>
          <img
            className={styles.plan2}
            src="imagenes/plan3.webp"
          ></img>
          <img
            className={styles.plan2}
            src="imagenes/plan4.webp"
          ></img>
        </div>
        <div className={styles.botonesPlanes}>
            <button className={styles.boton1}><h3>Comprar</h3></button>
            <button className={styles.boton2}><h3>Comprar</h3></button>
            <button className={styles.boton3}><h3>Comprar</h3></button>
            <button className={styles.boton4}><h3>Comprar</h3></button>
      </div>

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

export default inicio;
