console.log('hola mundo')
fetch("http://localhost:9011/")
.then(response => response.json())
.then(data => {console.log(data)
    let codigo = ""
    data.forEach(element => {
        codigo+=`<div class="col-3">
                    <div class="card" style="width: 17.5rem;">
                        <img src="./img/`+element.categoriaId+`.jpg" class="card-img-top" alt="..">
                            <div class="card-body">
                                <h5 class="card-title">`+ element.nombre +` - $`+element.precio+`</h5>
                                <p class="card-text">`+element.descripcion+`.</p>
                                <!--<a href="#" class="btn btn-primary">Go somewhere</a>-->
                            </div>
                    </div>
                </div>
            `
    });
    document.getElementById("productos").innerHTML = codigo
})