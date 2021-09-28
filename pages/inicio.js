import React from "react";
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
          <li><img src="imagenes/slider2.jpg" alt=""></img></li>
        </ul>
      </div>

      <body className={styles.body}>
        <h4 className={styles.h4}>¿QUÉ ES LA FACTURACIÓN ELECTRÓNICA?</h4>

        <img
          className={styles.img}
          src="imagenes/enlace-.webp"
          align="left"
          width="281"
          height="195"
        ></img>

        <p className={styles.p}>
          La facturación electrónica es un documento digital que sustituye la
          facturación en papel y garantiza la autenticidad e integridad de su
          contenido. En Ecuador es la nueva forma de generar comprobantes
          fiscales digitales y avalar el costo de los servicios desglosando los
          impuestos a pagar. Una factura electrónica es un Comprobante Fiscal
          Digital por Internet (el estándar es definido por el SRI.
        </p>
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
            sizes="(max-widht:800px) 100vw 400px"
            width="200"
            height="450"
          ></img>
          <img
            className={styles.plan2}
            src="imagenes/plan2.webp"
            sizes="(max-widht:800px) 100vw 400px"
            width="200"
            height="450"
          ></img>
          <img
            className={styles.plan2}
            src="imagenes/plan3.webp"
            sizes="(max-widht:800px) 100vw 400px"
            width="200"
            height="450"
          ></img>
          <img
            className={styles.plan2}
            src="imagenes/plan4.webp"
            sizes="(max-widht:800px) 100vw 400px"
            width="200"
            height="450"
          ></img>
        </div>
      </body>
    </div>
  );
};

export default inicio;
