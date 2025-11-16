// Astronomía functions moved from main.js
function ejercicioAstronomiaIF() {
    let m = parseFloat(prompt("Ingrese magnitud aparente:"));
    let r = m <= 0 ? "Extremadamente brillante" :
        m <= 2 ? "Muy brillante" :
            m <= 4 ? "Brillante" :
                m <= 6 ? "Débil" : "No visible";

    document.getElementById("resultadoAstronomia").innerText = r;
}

function ejercicioAstronomiaFOR() {
    let n = parseInt(prompt("¿Cuántas distancias registrar?"));
    let d = [];

    for (let i = 0; i < n; i++) {
        d.push(parseFloat(prompt("Distancia " + (i + 1) + " (millones km):")));
    }

    let p = (d.reduce((a, b) => a + b) / n).toFixed(2);
    document.getElementById("resultadoAstronomia").innerText =
        "Distancias: " + d.join(", ") + "\nPromedio: " + p;
}

function ejercicioAstronomiaWHILE() {
    let c = 0;
    let x;

    while ((x = parseFloat(prompt("Diámetro cráter (0 termina):"))) !== 0) {
        if (x > 50) c++;
    }

    document.getElementById("resultadoAstronomia").innerText =
        "Cráteres > 50 km: " + c;
}

function ejercicioAstronomiaSWITCH() {
    let cd = parseInt(prompt("Código (1=Estrella, 2=Planeta, 3=Cometa, 4=Asteroide, 5=Galaxia):"));
    let t;

    switch (cd) {
        case 1: t = "Estrella"; break;
        case 2: t = "Planeta"; break;
        case 3: t = "Cometa"; break;
        case 4: t = "Asteroide"; break;
        case 5: t = "Galaxia"; break;
        default: t = "Inválido";
    }

    document.getElementById("resultadoAstronomia").innerText = t;
}

function ejercicioAstronomiaDOWHILE() {
    let v = [];
    let e;

    do {
        e = prompt("Nivel luz lux ('no' termina):");
        if (e !== "no" && !isNaN(parseFloat(e))) {
            v.push(parseFloat(e));
        }
    } while (e !== "no");

    let m = v.some(n => n < 5) ? "Noche profunda detectada" : "Todos > 5 lux";
    document.getElementById("resultadoAstronomia").innerText =
        "Niveles: " + v.join(", ") + "\n" + m;
}
