console.log('Hello World');

function addTask() {
    const taskInput = document.getElementById('todo-input');
    const taskDate = document.getElementById('todo-input');

    console.log('Task:', taskInput.value);
    console.log('Due Date:', taskDate.value);
    
    if (validateInput(taskInput.value, taskDate.value)) {
        const newTask = {
            task: taskInput.value,
            date: taskDate.value
        };
        taskDB.push(newTask);
        console.log('Task added:', newTask);
    }
}

function renderTask(){
    
}


function deleteAllTask() {

}

function validateInput(task, date) {
    if (task.trim === '' || date.trim === '') {
        alert('Please fill in both fields.');
        return false;
    }
}

