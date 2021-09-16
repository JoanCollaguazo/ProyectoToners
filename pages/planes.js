import React from "react";
import Navigation from "../components/navigation";
import Head from 'next/head';

//FUNCION QUE DEVUELVE LA BARRA DE NAVEGACION Y CONTENIDO
const Planes = () =>{
    return (        
        <div>
            <Head>
                <link rel="stylesheet" href="pages/estilos.css"/>
            </Head>
        <Navigation/>
        <h1 class="h1">Planesd</h1>
        </div>)
}

export default Planes;