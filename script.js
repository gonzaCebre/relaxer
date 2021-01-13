const container = document.querySelector('.container'); //Selecciona el elemento contenedor y lo guarda en una variable
const text = document.querySelector('#text'); //Selecciona el elemento p y lo guarda en una variable

const totalTime = 7500; //Tiempo total de cada loop
const breatheTime = (totalTime / 5 ) * 2; //El tiempo de respiracion va a ser 2/5 del total
const holdTime = totalTime / 5; //El tiempo de sostener va a ser de 1/5 del total

breatheAnimation();//Inicializa la animacion

function breatheAnimation(){
    text.innerHTML = 'Respira!'; //Se renderiza en el elemento p
    container.className = 'container grow'; //Agrega una nueva clase css

    setTimeout(() => {
        text.innerText = 'Mantiene'; //Renderiza en pantalla

        setTimeout(() => { 
            text.innerText = 'Larga lentamente'; //Renderiza en pantalla
            container.className = 'container shrink';//Agrega una nueva clase css
        }, holdTime) //setTimeOut(function, time)
    }, breatheTime);
}

setInterval(breatheAnimation, totalTime); //Se va a repetir la animacion en loop cada 7,5 segundos
