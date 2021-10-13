import React from "react";
import Navigation from "../components/navigation";
import styles from "../styles/registro.module.css";

const registro = () => {
  return (
    <div className={styles.Body}>
      <Navigation title="REGISTRO - FACTURO"></Navigation>
      
      <div className={styles.general}>
        <div className={styles.slider}>
        <ul>
          <li><img src="imagenes/sliderPlanes1.png" alt=""></img></li>
          <li><img src="imagenes/sliderPlanes2.png" alt=""></img></li>
        </ul>
        </div>
        <div className={styles.Input}>
         <input placeholder={"Nombres"}></input><br></br>
         <input placeholder={"Email"}></input><br></br>
         <input placeholder={"Teléfono"}></input><br></br>
         <input placeholder={"Dirección"}></input><br></br>
         <input placeholder={"$2,99 al mes / $29 anual"}></input><br></br>
         <h3>Cargar archivos en formato pdf o jpg:</h3>
         <h3 style={{marginLeft:"20px"}}>1.Ruc actualizado</h3>
         <h3 style={{marginLeft:"20px"}}>2.Cédula</h3>
         <h3 style={{marginLeft:"20px"}}>3.Firma electrónica</h3>
         <h2 >Firma electrónica en archivo original</h2>
         <div style={{display:"flex"}}>
         <button className={styles.button}>Elegir archivos</button><p
         style={{marginLeft:"10px", marginTop:"5px",color:"black"}}>No se ha seleccionado ningún archivo</p> 
         </div>
         <button className={styles.botonFinal}>Enviar</button>
        </div>
      </div>
      <div className={styles.menuFinal}>
          <br></br>
          <p>Facturo S.A.S | Todos los derechos Reservados. |</p>
      </div>

    </div>
  );
};
export default registro;
