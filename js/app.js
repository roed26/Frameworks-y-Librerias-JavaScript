    var partidaInicida = false;
    var terminarPartida = false;
    var cronometro;
    $(document).ready(function () {
        function animacionColor() {
            if ($('h1').css('color') == 'rgb(220, 255, 14)') {
                $('h1').css({
                    'color': "#fff"
                });
            } else {
                $('h1').css({
                    'color': "#DCFF0E"
                });
            }
        }
        setInterval(animacionColor, 800);

    });


    function iniciarPartida() {
        if (partidaInicida) {
            location.reload();
            partidaInicida = false;
        } else {
            inciarContadorTiempo();
            $('button').text("Reiniciar");
            partidaInicida = true;
            llenarTablero();
            setInterval(function(){
                console.log("entro "+ terminarPartida);
                if(terminarPartida){
                    terminarPartidaIniciada();
                }
            },1000);

            $('.elemento').draggable(
                { axis: "x" }
              );
              
        }

    }

    function llenarTablero() {
        var columna1 = '';
        var columna2 = '';
        var columna3 = '';
        var columna4 = '';
        var columna5 = '';
        var columna6 = '';
        var columna7 = '';

        for (var i = 1; i < 50; i++) {
            if (i >= 1 && i <= 7) {
                columna1 += '<img id="img-col-1" class="elemento" src="image/' + imagenAleatoria() + '.png"></img>';
            }
            if (i >= 8 && i <= 14) {
                columna2 += '<img id="img-col-2" class="elemento" src="image/' + imagenAleatoria() + '.png"></img>';
            }
            if (i >= 15 && i <= 21) {
                columna3 += '<img id="img-col-3" class="elemento" src="image/' + imagenAleatoria() + '.png"></img>';
            }
            if (i >= 22 && i < 29) {

                columna4 += '<img id="img-col-4" class="elemento" src="image/' + imagenAleatoria() + '.png"></img>';
            }
            if (i >= 29 && i < 36) {

                columna5 += '<img id="img-col-5" class="elemento" src="image/' + imagenAleatoria() + '.png"></img>';
            }
            if (i >= 36 && i < 43) {

                columna6 += '<img id="img-col-6" class="elemento" src="image/' + imagenAleatoria() + '.png"></img>';
            }
            if (i >= 43 && i < 50) {

                columna7 += '<img id="img-col-7" class="elemento" src="image/' + imagenAleatoria() + '.png"></img>';
            }
        }
        
        document.getElementById('col-1').innerHTML = columna1;
        document.getElementById('col-2').innerHTML = columna2;
        document.getElementById('col-3').innerHTML = columna3;
        document.getElementById('col-4').innerHTML = columna4;
        document.getElementById('col-5').innerHTML = columna5;
        document.getElementById('col-6').innerHTML = columna6;
        document.getElementById('col-7').innerHTML = columna7;

        
        
    }

    function terminarPartidaIniciada(){
        $('#panel-tablero').animate({height: 'toggle'});
        terminarPartida=false;
    }

    function imagenAleatoria() {

        var numeroImagen = Math.floor((Math.random() * 4) + 1);
        return numeroImagen;


    }