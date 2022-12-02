fetch("http://localhost:9011/")
.then(response => response.json())
.then(data => {
    let codigo = ""
    data.forEach(element => {
        codigo+=`
                              <tr>
                                <th scope="row">`+element.id+`</th>
                                <td>`+element.nombre+`</td>
                                <td>$`+element.precio+`</td>
                                <td><button>Editar</button></td>
                              </tr>
            `
    });
    document.getElementById("tabla").innerHTML = codigo;
})