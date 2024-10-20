document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.getElementById('add-task-button');
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');
    const taskTitle = document.getElementById('task-title');

    addTaskButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.textContent = taskText;

            const deleteButton = document.createElement('button');
            deleteButton.innerHTML = '&times;'; // Unicode character for '×' (wrong mark)
            deleteButton.classList.add('delete-button');
            deleteButton.addEventListener('click', function() {
                li.remove();
                if (taskList.children.length === 0) {
                    taskTitle.style.display = 'none';
                }
            });

            li.appendChild(deleteButton);
            taskList.appendChild(li);

            taskInput.value = '';
            taskTitle.style.display = 'block';
        }
    }
});

