import React, { useEffect } from 'react'

export const AvisoComponent = () => {

  useEffect(() => {
    //Detecta cuando el componente se monta y se ejecuta una sola vez porque se pasa el array vacío []
    alert("El componente AvisoCompontent esta montado!")

    //Cuando el componente se desmonta
    return () => {
      alert("El componente se ha desmontado!");
    }
  },[]);
  return (
    <div>
        <hr/>
        <h3>Saludos Elías que tal estas?</h3>
        <button onClick={e => {
          alert("Bienvenido!")
        }}>Mostrar Alerta</button>
    </div>
  )
}