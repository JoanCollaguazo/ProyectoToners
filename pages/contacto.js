import React from "react";
import Navigation from "../components/navigation";
import styles from "../styles/contacto.module.css";

const Contacto = () => {
  return (
    <div className={styles.entero}>
      <Navigation title="CONTACTOS - FACTURO"></Navigation>
        <div className={styles.encabezado}>
        <img src="imagenes/encabezado.png" alt=""></img>
        </div>


        <div className={styles.cuerpo}>
          <div>
            <h3 style={{fontSize:"25px", color:"#073863"}}>REDES SOCIALES</h3>
            <a href={"https://www.facebook.com/facturoec"} target={"_blank"}><img style={{marginLeft:"100px"}} src="imagenes/facebook.png" alt=""></img></a>
            <a href={"https://www.instagram.com/facturoec/"} target={"_blank"}><img src="imagenes/instagram.png" alt=""></img></a>
            <h3 style={{fontSize:"25px", color:"#073863"}}>UBICACIÓN</h3>
            <div style={{display:"flex"}}>
            <img style={{marginLeft:"100px", width:"20px", height:"20px"}}
             src="imagenes/casita.png" alt=""></img><p><b>MANTA:</b> CALLE 12 Y CALLE 16 B</p>
            </div>
            <p style={{marginLeft:"133px"}}>EDIFICIO MHC OFICINA 311</p>
            <div style={{display:"flex"}}>
            <img style={{marginLeft:"100px", width:"20px", height:"20px"}} src="imagenes/casita.png" alt=""></img><p><b>QUITO:</b> CALLE STO. DOMINGO DE</p>
            </div>
            <p style={{marginLeft:"133px"}}>CARRETERAS Y AV.SIMON BOLIVAR</p>
            <p style={{marginLeft:"133px"}}>CASA NO.26</p>
            <h3 style={{fontSize:"25px", color:"#073863"}}>TELÉFONOS</h3>
            <div style={{display:"flex"}}>
            <img style={{marginLeft:"100px", width:"20px", height:"20px"}} src="imagenes/telefono.png" alt=""></img><p><b>Manta:</b>052590420</p>
            </div>
            <div style={{display:"flex"}}>
            <img style={{marginLeft:"100px", width:"20px", height:"20px"}} src="imagenes/telefono.png" alt=""></img><p><b>Quito:</b> 023449064</p>
            </div>
            <div style={{display:"flex"}}>
            <img style={{marginLeft:"100px", width:"20px", height:"20px"}} src="imagenes/celular.png" alt=""></img><p>0939272554</p>
            </div>
            <div style={{display:"flex"}}>
            <img style={{marginLeft:"100px", width:"20px", height:"20px"}} src="imagenes/celular.png" alt=""></img><p>0984785231</p>
            </div>
            <h3 style={{fontSize:"25px", color:"#073863"}}>EMAIL</h3>
            <div style={{display:"flex"}}>
            <img style={{marginLeft:"100px", width:"20px", height:"20px"}} src="imagenes/correo.png" alt=""></img><p>info@facturo.ec</p>
            </div>
            <div style={{display:"flex"}}>
            <img style={{marginLeft:"100px", width:"20px", height:"20px"}} src="imagenes/correo.png" alt=""></img><p>ventas@facturo.ec</p>
            </div>
          </div>



          <div className={styles.cuadro}>
            <h3 style={{marginLeft:"50px", marginTop:"20px"}}>LLena la siguiente información y un asesor se comunicará contigo.</h3>
            <div style={{display:"flex"}}>
              <div style={{marginLeft:"80px", marginTop:"20px"}}>
              <h3>Nombre</h3><input></input>
              </div>
              <div style={{marginTop:"20px", marginLeft:"20px"}}>
              <h3>Email</h3><input></input>
              </div>
              <div style={{marginTop:"20px", marginLeft:"20px"}}>
              <h3>Teléfono</h3><input></input>
              </div>
            </div>
            <div style={{display:"flex"}}>
              <div style={{marginTop:"50px", marginLeft:"80px"}}>
              <h3>Elige tu plan</h3><input placeholder={"Emprendedor"}></input>
              </div>
              <div style={{marginTop:"50px", marginLeft:"20px"}}>
              <h3>Elige tu plan</h3><input placeholder={"ERP"}></input>
              </div>
              <div style={{marginTop:"50px", marginLeft:"20px"}}>
              <h3>Asunto</h3><input></input>
              </div>
            </div>
              <h3 style={{marginTop:"50px", marginLeft:"80px"}}>Tu Mensaje</h3>
              <input style={{marginLeft:"80px", width:"565px", height:"75px"}}></input><br></br>
              <button className={styles.button}><h3 style={{color:"rgb(110,154,31)"}}>ENVIAR</h3></button>
          </div>
          

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
    </div>
  );
};

export default Contacto;
