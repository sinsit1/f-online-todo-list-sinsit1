'use strict';

const addTaskButton = document.getElementById('add__task');
const date = document.getElementById('date');
const modal = document.getElementById('modal');
const taskInputValue = document.getElementById('task_value');
const itemsList = document.getElementById('itemsList');

let taskNumber = 1;
const taskArray = [];
const taskArrayDisabled = [];


function addTask(param) {

    taskArray[taskNumber] = {
        value: param,
        order: taskNumber,
        disabled: false
    }

    console.log(taskArray);
    paintTask();
    taskNumber++;
}


function paintTask(){
    console.log('repinto', taskNumber);
    itemsList.innerHTML = '';
    taskArray.map(task => {

            if (task.disabled === false) {

                const taskcontainer = document.createElement('li');
                const falseCheckBox = document.createElement('div');
                const valueParraf = document.createElement('p');

                taskcontainer.classList.add('task__container');
                taskcontainer.id = taskNumber;
                falseCheckBox.type = 'checkbox';
                falseCheckBox.classList.add('falseCheckbox');
                valueParraf.innerHTML = task.value;

                itemsList.appendChild(taskcontainer);
                taskcontainer.addEventListener('click', disableTask);
                taskcontainer.appendChild(falseCheckBox);
                taskcontainer.appendChild(valueParraf);
                taskInputValue.value = '';
            }
        }
    );


    taskArray.map(task => {

        if (task.disabled === true) {

            const taskcontainer = document.createElement('li');
            const falseCheckBox = document.createElement('div');
            const valueParraf = document.createElement('p');

            taskcontainer.classList.add('task__container');
            taskcontainer.id = task.order;
            falseCheckBox.type = 'checkbox';
            falseCheckBox.classList.add('falseCheckbox');
            valueParraf.innerHTML = task.value;

            itemsList.appendChild(taskcontainer);
            valueParraf.classList.add('disableTaskP');

            taskcontainer.addEventListener('click', ableTask);
            taskcontainer.appendChild(falseCheckBox);
            taskcontainer.appendChild(valueParraf);
            taskInputValue.value = '';
        }
    }
);



}

function disableTask(e) {
    console.log('id current target', e.currentTarget);
    taskArray[this.id-1].disabled = true;
    paintTask();

}

function ableTask() {
    console.log(this.id);
    taskArray[this.id+1].disabled = false;
    paintTask();

}

function showModal() {
    modal.classList.toggle('hidden');
}

function saveTask() {
    let task_value = this.value;
    console.log('value', this.value);
    modal.classList.toggle('hidden');

    addTask(task_value);
}

function getDate() {
    var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
        "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
    var diasSemana = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");
    var f = new Date();
    document.write('<p class="date" id="date">' + diasSemana[f.getDay()] + ", " + f.getDate() + meses[f.getMonth()] + f.getFullYear() + '</p>');
}

addTaskButton.addEventListener('click', showModal);
taskInputValue.addEventListener('change', saveTask);
getDate();