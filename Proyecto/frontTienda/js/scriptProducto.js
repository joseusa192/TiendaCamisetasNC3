let url=("http://localhost:9011/");
function guardar(){
    let nombre = document.getElementById("nombre").value;
    let precio = document.getElementById("precio").value;
    let descripcion = document.getElementById("descripcion").value;
    let categoria = document.getElementById("select").value;

    let producto = {
        "id":"",
        "nombre":nombre,
        "categoriaId":categoria,
        "precio":precio,
        "descripcion":descripcion
    }

    options={
        method : "POST",
        body : JSON.stringify(producto),
        headers:{
            "Content-Type":"application/json"
        }
    }

    
    fetch(url,options)
    .then(response => response.json())
    .then(data =>{ 
        if (data.msj=="ok"){
            alert("Producto Almacenado");
            document.getElementById("nombre").value = " ";
            document.getElementById("precio").value = " ";
            document.getElementById("descripcion").value = " ";
            document.getElementById("select").value = " ";
        }else{
            alert("Error al Guardar");
        }
    })
}



//Cargar categorias de los productos
fetch("http://localhost:9011/categoria/")
    .then(response => response.json())
    .then(data => { 
        let opcion = "";
        data.forEach(element => { 
            opcion+=`
                <option value="`+element.id+`">`+element.nombre+`</option>       
            `
        });
            document.getElementById("select").innerHTML = opcion;
    })
