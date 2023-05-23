import React, { useEffect, useState } from 'react'
import { AvisoComponent } from './AvisoComponent';

export const PruebasComponent = () => {

    const [usuario, setUsuario] = useState("Elías Cando");
    const [fecha, setFecha] = useState("01-01-1999");
    const [contador, setContador] = useState(0);

    const modificarUsuario = e => {
        setUsuario(e.target.value);
    }

    //Este useEffect solo se carga una vez, solo al cargar el componente
    useEffect(()=>{
        console.log("Has cargado el componente");
    }, []);

    const cambiarFecha = e =>{
        setFecha(new Date().toLocaleDateString());
    }
    //Este se ejecuta solo si cambia el usuario
    useEffect(() => {
        setContador(contador+1);
        console.log("Has modificado el usuario: "+contador);
    }, [usuario, fecha]);

  return (
    <div>  
        <h1>El efecto - Hook useEffect</h1>
        <strong className={contador >= 10 ? 'label label-green': 'label'}>{usuario}</strong>
        <strong>{fecha}</strong>

        <p>
            <input 
                type='text' 
                onChange={modificarUsuario}
                placeholder='Cambia el nombre'
            />
            <button onClick={cambiarFecha}>Cambiar fecha</button>
        </p>

        {usuario === "Elías" && <AvisoComponent/>}
    </div>
  )
}