const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hora = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    if(hora < 10) hora = "0" + hora;
    if(min < 10) min = "0" + min;
    if(seg < 10) seg = "0" + seg;
    
    horas.textContent = hora;
    minutos.textContent = min;
    segundos.textContent = seg;
});

const thisday = setInterval(function date(){
    var semana = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day = document.getElementById("day");
    var d = new Date();
    day.innerHTML = semana[d.getDay()];

    /*var today = new Date();
    var thisday = today.getDate();
    day.textContent = thisday;
    */
});

