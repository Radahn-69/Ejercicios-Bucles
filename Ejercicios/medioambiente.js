// Medio Ambiente functions moved from main.js
function ejercicioMedioAmbienteIF() {
    let aq = parseInt(prompt("Ingrese valor AQI:"));
    let cl = aq <= 50 ? "Bueno" :
        aq <= 100 ? "Moderado" :
            aq <= 150 ? "Dañino para grupos sensibles" :
                aq <= 200 ? "Dañino" :
                    aq <= 300 ? "Muy dañino" : "Peligroso";

    document.getElementById("resultadoMedioAmbiente").innerText = cl;
}

function ejercicioMedioAmbienteFOR() {
    let n = parseInt(prompt("¿Cuántas mediciones?"));
    let nv = [];

    for (let i = 0; i < n; i++) {
        nv.push(parseFloat(prompt("Medición " + (i + 1) + " (dB):")));
    }

    let p = (nv.reduce((a, b) => a + b) / n).toFixed(2);
    document.getElementById("resultadoMedioAmbiente").innerText =
        "Niveles: " + nv.join(", ") + "\nPromedio: " + p + " dB";
}

function ejercicioMedioAmbienteWHILE() {
    let c = 0;
    let tmp;

    while ((tmp = parseFloat(prompt("Temperatura (0 termina):"))) !== 0) {
        if (tmp > 45) c++;
    }

    document.getElementById("resultadoMedioAmbiente").innerText =
        "Focos de calor > 45°C: " + c;
}

function ejercicioMedioAmbienteSWITCH() {
    let cd = parseInt(prompt("Código residuo (1=Orgánico, 2=Plástico, 3=Papel/Cartón, 4=Vidrio):"));
    let tp;

    switch (cd) {
        case 1: tp = "Orgánico"; break;
        case 2: tp = "Plástico"; break;
        case 3: tp = "Papel/Cartón"; break;
        case 4: tp = "Vidrio"; break;
        default: tp = "Inválido";
    }

    document.getElementById("resultadoMedioAmbiente").innerText = tp;
}

function ejercicioMedioAmbienteDOWHILE() {
    let v = [];
    let e;

    do {
        e = prompt("Nivel río (metros o 'no'):");
        if (e !== "no" && !isNaN(parseFloat(e))) {
            v.push(parseFloat(e));
        }
    } while (e !== "no");

    let mx = Math.max(...v);
    let a = mx > 3 ? "⚠️ Alerta: Nivel > 3 m" : "Normal";
    document.getElementById("resultadoMedioAmbiente").innerText =
        "Niveles: " + v.join(", ") + "\n" + a;
}
