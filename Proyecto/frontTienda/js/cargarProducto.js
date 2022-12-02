let url = ("http://localhost:9011/")
function eliminar(id){
    if(confirm("¿Desea eliminar este registro?")){
        let options = {
            method : "DELETE"
        }
        fetch(url+id,options)
        .then(response => response.json())
        .then(data =>{
            if(data.msj=="ok"){
                refrest();
            }
        })
    }
}


function refrest(){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        let codigo = ""
        data.forEach(element => {
            codigo+=`
                    <tr>
                        <th scope="row">`+element.id+`</th>
                        <td>`+element.nombre+`</td>
                        <td>$`+element.precio+`</td>
                        <td><a href="editarProducto.html?id=`+element.id+`" class="btn btn-primary" role="button">Editar</a><button onclick="eliminar(`+element.id+`)">Eliminar</button></td>
                    </tr>
            `
        });
        document.getElementById("tabla").innerHTML = codigo;
    })
}

refrest();