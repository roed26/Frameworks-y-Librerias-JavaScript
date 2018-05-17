function reiniciarContadorTiempo(){
    clearInterval(cronometro);
}

function inciarContadorTiempo() {
    tiempo = document.getElementById("timer");
    segundos = 59;
    minutos = 1;
    terminarPartida = false;

    cronometro = setInterval(function () {

        if (terminarPartida == false) {
            segundos--;
            if (segundos == 0 && minutos == 1) {
                minutos--;
                segundos = 59;
            } else if (segundos == 0 && minutos == 0) {
                terminarPartida = true;
            }
        }
        if (segundos < 10) {
            tiempo.innerHTML = "0" + minutos + ":0" + segundos;
        } else {
            tiempo.innerHTML = "0" + minutos + ":" + segundos;
        }
    }, 1000);

}