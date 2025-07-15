const inputField = document.getElementById('task-input');
const addButton = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

function getTasks() {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : initialTasks;
}

function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function display() {
    const tasks = getTasks();
    taskList.innerHTML = '';
    tasks.forEach(task => {
    const li = createTaskElement(task);
    taskList.appendChild(li);
    });
}

function createTaskElement(task) {
    const li = document.createElement('li');
    li.className = 'task-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => toggleTask(task.id));

    const span = document.createElement('span');
    span.textContent = task.name;
    if (task.completed) span.classList.add('completed');

    const removeBtn = document.createElement('button');
    removeBtn.textContent = '×';
    removeBtn.className = 'remove';
    removeBtn.addEventListener('click', () => removeTask(task.id));

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(removeBtn);

    return li;
}

// Add a new task
function addTask() {
    const taskName = inputField.value.trim();
    if (taskName === '') {
    alert('You must write something!');
    return;
    }

    const tasks = getTasks();
    const newTask = {
    id: Date.now(),
    name: taskName,
    completed: false
    };
    tasks.push(newTask); 
    saveTasks(tasks);
    inputField.value = '';
    display();
}

function toggleTask(id) {
    const tasks = getTasks();
    const updated = tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
    );
    saveTasks(updated);
    display();
}

// Remove a task
function removeTask(id) {
    const tasks = getTasks();
    const filtered = tasks.filter(task => task.id !== id);
    saveTasks(filtered);
    display();
}
addButton.addEventListener('click', addTask);

window.onload = display;
