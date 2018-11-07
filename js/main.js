'use strict';

const addTaskButton =  document.getElementById('add__task');
const date = document.getElementById('date');
const modal = document.getElementById('modal');
const taskInputValue = document.getElementById('task_value');
const itemsList = document.getElementById('itemsList');


function addTask(param) {
    
    const taskcontainer = document.createElement('li');
    const falseCheckBox = document.createElement('div');
    const valueParraf = document.createElement('p');
    falseCheckBox .type = 'checkbox';
    valueParraf.innerHTML= param;

    itemsList.appendChild(taskcontainer);
    taskcontainer.appendChild(falseCheckBox);
    taskcontainer.appendChild(valueParraf);
    taskInputValue.value='';
}

function showModal(){
    modal.classList.toggle('hidden');
}

function saveTask() {
    let task_value = this.value;
    console.log('value',this.value);
    modal.classList.toggle('hidden');

    addTask(task_value);
}

function getDate(){
    var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio",
        "Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
    var f=new Date();
    document.write('<p class="date" id="date">'+ diasSemana[f.getDay()] + ", " + f.getDate() + meses[f.getMonth()] +  f.getFullYear()+'</p>');
}

addTaskButton.addEventListener('click', showModal);
taskInputValue.addEventListener('change', saveTask);
getDate();