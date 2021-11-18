document.getElementById('btn').addEventListener("click", search);
document.getElementById("input").addEventListener("keyup", search);

function search() {
    let input = document.getElementById("input").value;
    let i = input.toLowerCase();
    const xhttp = new XMLHttpRequest(); //Añadiendo el nuevo XMLHttpRequest.
    xhttp.open('GET', 'movies.json', true); //Obteniendo.
    xhttp.send(); //OK
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //console.log("Ready");
            let data = JSON.parse(this.responseText);
            let body = document.getElementById("body").innerHTML = "";
            let d = i;
            console.log(d);
            for (let e of data) {
                let movieT = e.title.toLowerCase(); //Aqui guardo el titulo de la peli, pasandola a minusculas.
                let description = e.overview;
                let URL = "https://image.tmdb.org/t/p/w300" + e.poster_path;
                if (movieT.indexOf(d) != -1) {
                    document.getElementById("body").innerHTML += `<div class="carrusel-item">
                        <img class="carrusel-item__img" src="${URL}" alt="people">
                        <div class="carrusel-item__details">
                            <div class="carrusel-item__details--plus-play">
                                <img src="https://img.icons8.com/flat_round/64/000000/play--v1.png"/>
                                <img src="https://img.icons8.com/flat_round/64/000000/plus.png"/>
                            </div>
                            <p class="carrusel-item__details--title">${movieT}</p>
                            <p class="carrusel-item__details--subtitle">${description}</p>
                        </div>
                    </div>`;
                }
            }
        }
    }
}

function read() { //Esta funcion lee y muestra las peliculas en pantalla.
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'movies.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText); //Obtengo los datos.
            document.getElementById("body").innerHTML = '';
            for (var i = 0; i < data.length; i++) {
                let title = data[i].title;
                let description = data[i].overview;
                let URL = "https://image.tmdb.org/t/p/w300" + data[i].poster_path;
                document.getElementById("body").innerHTML += `<div class="carrusel-item">
                    <img class="carrusel-item__img" src="${URL}">
                    <div class="carrusel-item__details">
                        <div>
                            <img src="https://img.icons8.com/flat_round/64/000000/play--v1.png"/>
                            <img src="https://img.icons8.com/flat_round/64/000000/plus.png"/>
                        </div>
                        <p class="carrusel-item__details--title">${title}</p>
                        <p class="carrusel-item__details--subtitle">${description}</p>
                    </div>
                </div>`;
            }
        }
    }
}
read();
