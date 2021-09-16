
    function mostrar1() {
        
    var a = document.getElementById("pregunta1").value;

    switch (a) {
        case "1053 Pokemon":
           document.getElementById("respuesta1").innerHTML="Su respuesta fue: "+a+", y es Incorrecto";
        break;
        case "725 Pokemon":
            document.getElementById("respuesta1").innerHTML="Su respuesta fue: "+a+", y es Incorrecto";
        break;
        case "898 Pokemon":
            document.getElementById("respuesta1").innerHTML="Su respuesta fue: "+a+", y es Correcto";
        break;

    }



    document.getElementById('bloque1').style.display = 'none';
    document.getElementById('bloque2').style.display = 'inline';
    document.getElementById('btn_sig1').style.display = 'none';
    document.getElementById('btn_sig2').style.display = 'inline';
    }

   
function mostrar2() {
    var pregunta2 = document.getElementById("pregunta2").value;

    switch (pregunta2) {
        case "Bicho, Dragon, Normal y Tierra":
           document.getElementById("respuesta2").innerHTML="Su respuesta fue: "+pregunta2+", y es Incorrecto";
        break;
        case "Acero, Hielo, Planta y Bicho":
            document.getElementById("respuesta2").innerHTML="Su respuesta fue: "+pregunta2+", y es Correcto";
        break;
        case "Hielo, Tierra, Normal y Fantasma":
            document.getElementById("respuesta2").innerHTML="Su respuesta fue: "+pregunta2+", y es Incorrecto";
        break;
    }   


    document.getElementById('bloque2').style.display = 'none';
    document.getElementById('bloque3').style.display = 'inline';
    document.getElementById('btn_sig2').style.display = 'none';
    document.getElementById('btn_sig3').style.display = 'inline';

   
}

function mostrar3() {
    var pregunta3 = document.getElementById("pregunta3").value;

    switch (pregunta3) {
        case "Jessie, James y Meowth":
            document.getElementById("respuesta3").innerHTML="Su respuesta fue: "+pregunta3+", y es Correcto";
        break;
        case "Misty, Brook y Pikachu":
            document.getElementById("respuesta3").innerHTML="Su respuesta fue: "+pregunta3+", y es Incorrecto";
        break;
        case "Lance y Cynthia":
            document.getElementById("respuesta3").innerHTML="Su respuesta fue: "+pregunta3+", y es Incorrecto";
        break;
    }   
    
    document.getElementById('bloque3').style.display = 'none';
    document.getElementById('bloque4').style.display = 'inline';
    document.getElementById('btn_sig3').style.display = 'none';
    document.getElementById('btn_sig4').style.display = 'inline';

}

function mostrar4() {

    var pregunta4 = document.getElementById("pregunta4").value;

    switch (pregunta4) {
        case "Garurumon":
            document.getElementById("respuesta4").innerHTML="Su respuesta fue: "+pregunta4+", y es Correcto";
        break;
        case "Dunsparce":
            document.getElementById("respuesta4").innerHTML="Su respuesta fue: "+pregunta4+", y es Incorrecto";
        break;
        case "Felarigart":
            document.getElementById("respuesta4").innerHTML="Su respuesta fue: "+pregunta4+", y es Incorrecto";
        break;
    } 

    document.getElementById('bloque4').style.display = 'none';
    document.getElementById('bloque5').style.display = 'inline';
    document.getElementById('btn_sig4').style.display = 'none';
    document.getElementById('btn_sig5').style.display = 'inline';

}

function mostrar5() {
    var pregunta5 = document.getElementById("pregunta5").value;

    switch (pregunta5) {
        case "En temporada 1":
            document.getElementById("respuesta5").innerHTML="Su respuesta fue: "+pregunta5+", y es Incorrecto";
        break; 
        case "Nunca evoluciona":
            document.getElementById("respuesta5").innerHTML="Su respuesta fue: "+pregunta5+", y es Correcto";
        break;
        case "En la ultima temporada":
            document.getElementById("respuesta5").innerHTML="Su respuesta fue: "+pregunta5+", y es Incorrecto";
        break;
    }   

    document.getElementById('bloque5').style.display = 'none';
    document.getElementById('bloquefinal').style.display = 'inline';
    document.getElementById('btn_sig5').style.display = 'none';


    
}

//definicion funciones anonimas    
//linea para detectar el evento del select


