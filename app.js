//select elements
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//add event listener to the button
todoButton.addEventListener('click', addTask);

//Function to add a task
function addTask(event){
    event.preventDefault(); //Prevent form from submitting

    //create a div to wrap the task
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo-item');

    //create the list item (li)
    const newTask = document.createElement('li');
    newTask.innerText = todoInput.value;
    todoDiv.appendChild(newTask);

    //add delete button to the task
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('delete-btn');
    todoDiv.appendChild(deleteButton);
    
    //append the task to the list
    todoList.appendChild(todoDiv);

    //clear the input field
    todoInput.value = '';
}