//----------- Pre-Entrega1 Gentile -----------//

const stamina = () => Math.ceil(Math.random()*7)
let staminaJorge = stamina();
let staminaIvan = stamina();
let vueltas = 0;
let fatiga = 1;


while(staminaJorge>0 && staminaIvan>0){
vueltas +=1;
staminaJorge -= fatiga;
staminaIvan -= fatiga;
console.log('---- N° De Vueltas ' + vueltas + ' ----');
console.log('El Aguante de jorge es de ' + staminaJorge);
console.log('El Aguante de Ivan es de ' + staminaIvan);
}

if(staminaJorge>staminaIvan) {
console.log('Ivan no puede Continuar');
console.log('------------------------')
console.log('Jorge Consigue la victoria!!');

}else if (staminaJorge == staminaIvan){
console.log('Es un Empate')
}else {
console.log('Jorge no puede Continuar');
console.log('------------------------')   
console.log('Ivan Consigue la victoria!!');
}



