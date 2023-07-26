const stamina = () => Math.ceil(Math.random() * 10);
let staminaJorge = stamina();
let staminaIvan = stamina();
let vueltas = 0;
let fatiga = 1;

function mostrarProgreso(vueltas, aguanteJorge, aguanteIvan) {
    console.log(`---- N° De Vueltas ${vueltas} ----`);
    console.log(`El Aguante de Jorge es de ${aguanteJorge}`);
    console.log(`El Aguante de Ivan es de ${aguanteIvan}`);
}

function determinarGanador(aguanteJorge, aguanteIvan) {
    if (aguanteJorge > aguanteIvan) {
        console.log('Ivan no puede Continuar');
        console.log('------------------------');
        console.log('Jorge Consigue la victoria!!');
} else if (aguanteJorge === aguanteIvan) {
    console.log('Es un Empate');
} else {
    console.log('Jorge no puede Continuar');
    console.log('------------------------');
    console.log('Ivan Consigue la victoria!!');
}
}

function reiniciarCarrera() {
    staminaJorge = stamina();
    staminaIvan = stamina();
    vueltas = 0;
    console.log('¡Carrera reiniciada!');
    comenzarCarrera();
}
function comenzarCarrera() {
    if (staminaJorge > 0 && staminaIvan > 0) {
        vueltas++;
        staminaJorge -= fatiga;
        staminaIvan -= fatiga;
        mostrarProgreso(vueltas, staminaJorge, staminaIvan);

    // Delay de 1 segundos antes de la siguiente vuelta
    setTimeout(comenzarCarrera, 1000);
} else {
    determinarGanador(staminaJorge, staminaIvan);
}
}

comenzarCarrera();