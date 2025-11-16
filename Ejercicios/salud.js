// Salud functions moved from main.js
function ejercicioSaludIF() {
    let s = parseInt(prompt("Ingrese presión sistólica:"));
    let d = parseInt(prompt("Ingrese presión diastólica:"));

    let cl = s < 120 && d < 80 ? "Normal" :
        s < 130 && d < 80 ? "Elevada" :
            s < 140 || d < 90 ? "HTA grado 1" : "HTA grado 2";

    document.getElementById("resultadoSalud").innerText = cl;
}

function ejercicioSaludFOR() {
    let n = parseInt(prompt("¿Cuántos pacientes?"));
    let t = [];

    for (let i = 0; i < n; i++) {
        t.push(parseFloat(prompt("Temperatura paciente " + (i + 1) + " (°C):")));
    }

    let p = (t.reduce((a, b) => a + b) / n).toFixed(2);
    document.getElementById("resultadoSalud").innerText =
        "Temperaturas: " + t.join(", ") + "\nPromedio: " + p + " °C";
}

function ejercicioSaludWHILE() {
    let c = 0;
    let tmp;

    while ((tmp = parseFloat(prompt("Temperatura (0 termina):"))) !== 0) {
        if (tmp >= 38) c++;
    }

    document.getElementById("resultadoSalud").innerText =
        "Pacientes con fiebre (≥38°C): " + c;
}

function ejercicioSaludSWITCH() {
    let cd = parseInt(prompt("Código TRIAGE (1=Rojo, 2=Amarillo, 3=Verde, 4=Azul):"));
    let ct;

    switch (cd) {
        case 1: ct = "Rojo"; break;
        case 2: ct = "Amarillo"; break;
        case 3: ct = "Verde"; break;
        case 4: ct = "Azul"; break;
        default: ct = "Inválido";
    }

    document.getElementById("resultadoSalud").innerText = ct;
}

function ejercicioSaludDOWHILE() {
    let sp = [];
    let e;

    do {
        e = prompt("Saturación SpO2 (% o 'no'):");
        if (e !== "no" && !isNaN(parseFloat(e))) {
            sp.push(parseFloat(e));
        }
    } while (e !== "no");

    let p = (sp.reduce((a, b) => a + b) / sp.length).toFixed(2);
    document.getElementById("resultadoSalud").innerText =
        "Saturaciones: " + sp.join(", ") + "\nPromedio: " + p + "%";
}
