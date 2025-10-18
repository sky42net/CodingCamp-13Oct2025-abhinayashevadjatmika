console.log('Hello World');
let taskDB = [];

function addTask() {
    const taskInput = document.getElementById('todo-input');
    const taskDate = document.getElementById('todo-date');

    console.log('Task:', taskInput.value);
    console.log('Due Date:', taskDate.value);
    
    if (validateInput(taskInput.value, taskDate.value)) {
        const newTask = {
            task: taskInput.value,
            date: taskDate.value,
        }
        taskDB.push(newTask);
        renderTask();
    }
}

function renderTask(){
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    taskDB.forEach((taskObj, index) => {
        taskList.innerHTML += `<li>${taskObj.task} - ${taskObj.date} <button onclick="deleteTask(${index})">Delete</button></li>`;
    });
}

function filterTask() {
    const filterDate = document.getElementById('filter-date').value;
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    if (filterDate === '') {
        // If no date selected, show all tasks
        renderTask();
        return;
    }

    const filteredTasks = taskDB.filter(taskObj => taskObj.date === filterDate);
    
    filteredTasks.forEach((taskObj, index) => {
        taskList.innerHTML += `<li>${taskObj.task} - ${taskObj.date} <button onclick="deleteTask(${index})">Delete</button></li>`;
    });
}


function deleteAllTask() {
    taskDB = [];
    renderTask();
}

function validateInput(task, date) {
    if (task.trim() === '' || date.trim() === '') {
        alert('Please fill in both fields.');
        return false;
    }
    return true;
}

