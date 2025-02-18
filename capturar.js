let numeroAleatorio = generarNumero();

console.log(numeroAleatorio);

function asignarTexto (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function intentoDeJuego(){
    alert("Esta tratando de iniciar");
}
function verificarIntento(){
    
}


function generarNumero(){
    return Math.floor(Math.random()*10)+1;
}

