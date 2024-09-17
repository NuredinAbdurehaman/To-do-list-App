const taskList = document.getElementById('taskList');
let tasks = [];

document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');

    if (taskInput.value.trim() === '') return;

    const task = {
        text: taskInput.value,
        date: new Date()
    };

    tasks.push(task);
    renderTasks();
    taskInput.value = '';
});

document.getElementById('sortAlphabetical').addEventListener('click', function() {
    tasks.sort((a, b) => a.text.localeCompare(b.text));
    renderTasks();
});

document.getElementById('sortDate').addEventListener('click', function() {
    tasks.sort((a, b) => b.date - a.date);
    renderTasks();
});

function renderTasks() {
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = `${task.text} (Created on: ${task.date.toLocaleString()})`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            tasks = tasks.filter(t => t !== task);
            renderTasks();
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}