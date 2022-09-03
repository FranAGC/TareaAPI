

function Agregar() {
    var p = document.getElementById('spais').value;
    load(p);
}


async function load(p) {
    var obj = await (await fetch(`https://restcountries.com/v3.1/name/${p}`)).json();
    console.log(obj);


    var monedas = Object.keys(obj[0].currencies);
    for (var j=0; j<monedas.length; j++) {
        var moneda = monedas[j];
    }

    var idiomas = Object.keys(obj[0].languages);
    for (var j=0; j<idiomas.length; j++) {
        var idioma = idiomas[j];
        console.log(idioma)
    }


    Llenar(obj, moneda, idioma);
}


function Llenar(obj, moneda, idioma){
    document.getElementById('pais').innerHTML = `País: ${obj[0].name.common}`;
    var row = document.getElementsByTagName("tr");
    row[1].innerHTML = `<td>Nombre oficial</td><td>${obj[0].name.official}</td>`;
    row[2].innerHTML = `<td>Capital</td><td>${obj[0].capital}</td>`;
    row[3].innerHTML = `<td>Region</td><td>${obj[0].region}</td>`;
    row[4].innerHTML = `<td>Sub-Region</td><td>${obj[0].subregion}</td>`;
    row[5].innerHTML = `<td>Poblacion</td><td>${obj[0].population}</td>`;
    row[6].innerHTML = `<td>Area</td><td>${obj[0].area} kms^2</td>`;
    //console.log(obj[0].currencies[name])
    row[7].innerHTML = `<td>Moneda</td><td>${obj[0].currencies[moneda].name}</td>`;
    row[8].innerHTML = `<td>Zona horaria</td><td>${obj[0].timezones}</td>`;
    row[9].innerHTML = `<td>Idioma</td><td>${obj[0].languages[idioma]}</td>`;
    row[10].innerHTML = `<td>Bandera</td><td><img src="${obj[0].flags.png}" width="300"></td>`;
}

