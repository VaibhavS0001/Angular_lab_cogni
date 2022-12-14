class Task {
    constructor(task) {
        this.task = task
    }
}

class UI {
    addTaskToList(Task) {
        const list = document.getElementById("task-list");

        const row = document.createElement('tr');
        row.innerHTML = `<td>${Task.task}</td>
                       <td><a href="#" class='delete'>X</a></td>`;

        list.appendChild(row);
    }

    clearFormFields() {
        document.getElementById('task').value = '';
    }

    showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const constainer = document.querySelector('.container');
        const form = document.querySelector('#task-form');
        constainer.insertBefore(div, form);
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    deleteTask(target) {
        if (target.className === 'delete')
            target.parentElement.parentElement.remove();
    }

    filterTasks(searchTerm) {
        document.getElementById("task-list").children.display = "table-row"
        let n = document.getElementById("task-list").children.length
        if (!searchTerm) {
            for (let i = 0; i < n; i++) {
                document.getElementById("task-list").children[i].style.display = "table-row"
            }
        }else{
            for (let i = 0; i < n; i++) {
                console.log(document.getElementById("task-list").children[i])
                if (!(document.getElementById("task-list").children[i].firstChild.textContent === searchTerm)) {
                    document.getElementById("task-list").children[i].style.display = "none"
                }
            }
        }        
    }
}

let storage = window.localStorage
class Store {
    static getTask() {
        let tasks;
        if (storage.getItem('tasks') === null) {
            tasks = [];
        }
        else {
            tasks = JSON.parse(storage.getItem('tasks'));
        }
        return tasks;

    }

    static displayTasks() {
        const tasks = Store.getTask();
        tasks.forEach((task) => {
            const ui = new UI;
            ui.addTaskToList(task);
        });
    }

    static addTask(task) {
        const tasks = Store.getTask();
        tasks.push(task);
        storage.setItem('tasks', JSON.stringify(tasks));
    }

    static removeTask(t) {
        const tasks = Store.getTask();
        tasks.forEach((task, index) => {
            if (task.task === t) {
                tasks.splice(index, 1)
            }
        });
        storage.setItem('tasks', JSON.stringify(tasks));
    }
}

document.addEventListener('DOMContentLoaded', Store.displayTasks);

document.getElementById('task-form').addEventListener('submit', e => {
    e.preventDefault();
    const task = document.getElementById('task').value
    const taskL = new Task(task);
    Store.addTask(taskL);
    const ui = new UI();
    if (task === "") {
        ui.showAlert('Please populate fields', 'error');
    } else {
        ui.addTaskToList(taskL);
        ui.showAlert('Your Task has been added', 'success');
        ui.clearFormFields();
    }
})

document.getElementById('task-list').addEventListener('click', e => {
    const ui = new UI();
    ui.deleteTask(e.target);
    Store.removeTask(e.target.parentElement.previousElementSibling.textContent);
    ui.showAlert('Your task has been removed', 'success');
    e.preventDefault();
})

document.getElementById('tasktext').addEventListener('keypress', e => {
    if(!e.target.value){
        document.getElementById("click").style.display = 'block';
    }else{
        document.getElementById("click").style.display = 'none';
    }
    const ui = new UI();
    if (e.key === "Enter") {
        console.log(e.target.value)
        ui.filterTasks(e.target.value);
    }
    // ui.deleteAllTask(e.target);
})

document.getElementById('tasktext').addEventListener('blur', e => {
    const ui = new UI();
        console.log(e.target.value)
        ui.filterTasks(e.target.value);
    // ui.deleteAllTask(e.target);
})