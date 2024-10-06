//select elements
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//add event listener to the button
todoButton.addEventListener('click', addTask);

//add event listener to the task list (for event delegation)
todoList.addEventListener('click', handleTaskAction);

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

//function to handle task actions (complete and delete)
function handleTaskAction(e){
    const item = e.target;

    //Delete task
    if (item.classList.contains('delete-btn')){
        const task = item.parentElement;
        task.remove(); //remove the task item
    }

    //mark task as complete
    if (item.tagName == 'LI'){
        item.classList.toggle('compeleted'); //toggle the 'completed' class
    }
}