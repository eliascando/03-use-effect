import React, { useEffect, useState } from 'react';

export const AjaxComponent = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [errores, setErrores] = useState("");
    
    const getUsuariosEstaticos = () => {
        setUsuarios([
            {
                "id": 1,
                "email": "michael.lawson@reqres.in",
                "first_name": "Michael",
                "last_name": "Lawson",
            },
            {
                "id": 2,
                "email": "lindsay.ferguson@reqres.in",
                "first_name": "Lindsay",
                "last_name": "Ferguson",
            },
            {
                "id": 3,
                "email": "tobias.funke@reqres.in",
                "first_name": "Tobias",
                "last_name": "Funke",
            },
        ]);
    }

    const getUsuariosAjaxPms = () => {
        fetch("https://reqres.in/api/users?page=1")
            .then(respuesta => respuesta.json())
            .then(resultado_final => {
                setUsuarios(resultado_final.data);
                console.log(usuarios);
            },
            error => {
                console.log(error);
            })
    }

    const getUsuariosAsync = async() => {
        setTimeout( async() => {
            try{
                const peticion = await fetch("https://reqres.in/api/users?page=1");
                const {data} = await peticion.json();
        
                console.log(data);
                setUsuarios(data);
                setCargando(false);
            }catch(error){
                console.log(error);
                setErrores(error.message);
            }
        },2000);
    }

    useEffect(()=> {
        //getUsuariosEstaticos();
        //getUsuariosAjaxPms();
        getUsuariosAsync();
    },[])

    
    if(errores !== ""){
        //Cuando hay un error
        return(
            <div className='errores'>
            Hay errores: {errores}
            </div>
        );
    }else if(cargando === true){
        //Cuando está todo cargando
        return(
            <div className='cargando'>
                Cargando datos...
            </div>
        )
    }else if(cargando === false && errores === ""){
        return (
        //Cuando todo ha ido bien
        <div>
            <h2>Listado de usuarios vía Ajax</h2>
            <ol className='usuario'>
                {
                    usuarios.map(usuario => {
                        console.log(usuario)
                        return <li key={usuario.id}>
                            <img src={usuario.avatar} width="20"></img>
                            {usuario.first_name} {usuario.last_name}</li>
                    })
                }
            </ol>
        </div>
      )
    }
}