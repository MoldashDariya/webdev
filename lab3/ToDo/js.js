const inputBox = document.getElementById('input-box');
const addTaskButton = document.querySelector('.addTask');
const listContainer = document.getElementById('list-container');

addTaskButton.addEventListener('click', addTask);

listContainer.addEventListener('click', function (event) {
    const target = event.target;
    
    if (target.classList.contains('delete-task')) {
        target.parentElement.remove(); 
    }

    if (target.type === 'checkbox') {
        const listItem = target.parentElement;
        listItem.classList.toggle('completed-task', target.checked);
    }
});


function addTask() {
    const taskText = inputBox.value.trim();

    if (taskText !== '') {
        const listItem = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';


        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-task';

        listItem.appendChild(checkbox);
        
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        listItem.appendChild(taskSpan);
        
        listItem.appendChild(deleteButton);

        listContainer.appendChild(listItem);

        inputBox.value = '';
    }
}
