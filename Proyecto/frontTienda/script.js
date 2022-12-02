fetch("http://localhost:9011/")
.then(response => response.json())
.then(data => {
    let codigo = ""
    data.forEach(element => {
        codigo+=`<div class="col-3">
                    <div class="card" style="width: 16rem; height:20rem;">
                        <img src="../img/`+element.categoriaId+`.jpg" class="card-img-top" alt="..." height="160rem" >
                            <div class="card-body">
                                <h5 class="card-title">`+ element.nombre +` - $`+element.precio+`</h5>
                                <p class="card-text">`+element.descripcion+`.</p>
                                <!--<a href="#" class="btn btn-primary">Go somewhere</a>-->
                            </div>
                    </div>
                </div>
            `
    });
    document.getElementById("productos").innerHTML = codigo;
})