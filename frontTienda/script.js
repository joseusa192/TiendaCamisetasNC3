console.log('hola mundo')
fetch("http://localhost:9011/")
.then(response => response.json())
.then(data => {console.log(data)
    let codigo = ""
    data.forEach(element => {
        `
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
                <div class="card" style="width: 18rem;">
                    <img src="./img/1.webp" class="card-img-top" alt="..">
                    <div class="card-body">
                      <h5 class="card-title">Nombre - $00000</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <!--<a href="#" class="btn btn-primary">Go somewhere</a>-->
                    </div>
                  </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
        `
    });
})