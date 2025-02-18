let numeroAleatorio = 0;
let intentos = 0;
console.log(numeroAleatorio);
let listaSorteada = [];
let numeroMaximo = 10;

function asignarTexto (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function intentoDeJuego(){
    alert("Esta tratando de iniciar");
}
function verificarIntento(){
    let valorUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(typeof(valorUsuario));
    console.log(valorUsuario);
    intentos++;
if(intentos<3)
    {
   
    if(valorUsuario===numeroAleatorio){
        asignarTexto('p', `Acertaste el numero en ${intentos} ${intentos===1 ? 'vez': 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else
         if(valorUsuario<numeroAleatorio){
        asignarTexto('p', 'El numero secreto es Mayor');
    }else{
        asignarTexto('p', 'El numero secreto es Menor');
    }
    
    
    }else{
        asignarTexto('p', 'Has superado la cantidad de intentos');
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    
    limpiarNumero();
    return;
}

function limpiarNumero(){
    document.querySelector('#valorUsuario').value = "";
}


function reiniciar(){
    //limpiar la caja
    limpiarNumero();

    condicionesIniciales();

}


function generarNumero(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    if(listaSorteada.length==numeroMaximo){
        asignarTexto('p','Ya se sortearon todos los nuemros posibles')
    }else{
        if(listaSorteada.includes(numeroGenerado)){
            return generarNumero();
        }else{
            listaSorteada.push(numeroGenerado);
            return numeroGenerado;
        }
    }

    
     
}

function condicionesIniciales(){
    asignarTexto("h1", "Bienvenido al Juego!");
    asignarTexto('p', `Indica el numero del 1 al ${numeroMaximo}`);
    numeroAleatorio = generarNumero();
    intentos = 0;
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}
condicionesIniciales();


