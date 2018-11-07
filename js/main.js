'use strict';

const addTaskButton =  document.getElementById('add__task');
const date = document.getElementById('date');

function addHandler() {
   
}

function addTask() {
    console.log('add task');

}

function getDate(){
    var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio",
        "Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
    var f=new Date();
    document.write('<p class="date" id="date">'+ diasSemana[f.getDay()] + ", " + f.getDate() + meses[f.getMonth()] +  f.getFullYear()+'</p>');
}

addTaskButton.addEventListener('click', addTask);
getDate();