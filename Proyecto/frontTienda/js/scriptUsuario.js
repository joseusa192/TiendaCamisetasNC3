let url=("http://localhost:9011/usuario/");
function guardar(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let correo = document.getElementById("correo").value;
    let contraseña = document.getElementById("contraseña").value;
    
    let usuario = {
        "id":"",
        "nombre":nombre,
        "apellido":apellido,
        "correo":correo,
        "contraseña":contraseña
    }

    options={
        method : "POST",
        body : JSON.stringify(usuario),
        headers:{
            "Content-Type":"application/json"
        }
    }


    fetch(url,options)
    .then(response => response.json())
    .then(data =>{ 
        if (data.msj=="ok"){
            alert("Usuario Almacenado");
            document.getElementById("nombre").value = " ";
            document.getElementById("apellido").value = " ";
            document.getElementById("correo").value = " ";
            document.getElementById("contraseña").value = " ";
        }else{
            alert("Error al Guardar");
        }
    })
}




//Login

function login(){
    console.log("logueando......!!!")
    const correo = document.getElementById("correo").value;
    const contraseña = document.getElementById("contraseña").value;
    console.log(correo, contraseña)
    const usuario = {
        "nombre":"",
        "correo":correo,
        "contraseña":contraseña
    }
    options={
        method : "POST",
        body : JSON.stringify(usuario),
    headers:{
        "Content-Type":"application/json"
    }
    }
    urlL='http://localhost:9011/usuario/login'
    fetch(urlL,options)
    .then(response => response.json())
    .then(data =>{ console.log(data.msj)
        if(data.msj=="ok"){
            //alert("Bienvenido...¡¡¡¡¡")
            document.location = "producto.html"
        }else{
            alert("Datos de usuario incorrecto")
        }
    })
    //.catch(error=>console.log("error"+error))
}