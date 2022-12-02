let url=("http://localhost:9011/categoria/");
function guardar(){
    let nombre = document.getElementById("nombre").value;
    
    let categoria = {
        "id":"",
        "nombre":nombre
    }
    options={
        method : "POST",
        body : JSON.stringify(categoria),
        headers:{
            "Content-Type":"application/json"
        }
    }

    
    fetch(url,options)
    .then(response => response.json())
    .then(data =>{ 
        if (data.msj=="ok"){
            alert("Categoria Almacenado");
            document.getElementById("nombre").value = " ";
        }else{
            alert("Error al Guardar");
        }
    })
}

