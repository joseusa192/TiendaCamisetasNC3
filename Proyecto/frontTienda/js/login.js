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
    url='http://localhost:9011/usuario/login'
    fetch(url,options)
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