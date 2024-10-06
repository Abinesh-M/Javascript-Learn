// app.js

// Select elements
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Load existing tasks on page load
document.addEventListener('DOMContentLoaded', loadTasksFromStorage);

// Add event listener to the button
todoButton.addEventListener('click', addTask);

// Add event listener to the task list (for event delegation)
todoList.addEventListener('click', handleTaskAction);

// Function to add a task
function addTask(event) {
  event.preventDefault(); // Prevent form from submitting
  
  // Create a div to wrap the task
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo-item');
  
  // Create the list item (li)
  const newTask = document.createElement('li');
  newTask.innerText = todoInput.value;
  todoDiv.appendChild(newTask);

  // Add complete button to the task
  const completeButton = document.createElement('button');
  completeButton.innerText = 'Complete';
  completeButton.classList.add('complete-btn');
  todoDiv.appendChild(completeButton);

  // Add delete button to the task
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.classList.add('delete-btn');
  todoDiv.appendChild(deleteButton);

  // Append the task to the list
  todoList.appendChild(todoDiv);

  // Save task to LocalStorage
  saveTaskToStorage(todoInput.value);

  // Clear the input field
  todoInput.value = '';
}

// Function to handle task actions (complete and delete)
function handleTaskAction(e) {
  const item = e.target;

  // Delete Task
  if (item.classList.contains('delete-btn')) {
    const task = item.parentElement;
    task.remove();  // Remove the task item

    // Remove from LocalStorage
    removeTaskFromStorage(task.children[0].innerText);
  }

  // Mark Task as Complete
  if (item.classList.contains('complete-btn')) {
    const task = item.parentElement;
    task.classList.toggle('completed');  // Toggle the "completed" class
  }
}

// Save task to LocalStorage
function saveTaskToStorage(task) {
  let tasks = getTasksFromStorage();
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Get tasks from LocalStorage
function getTasksFromStorage() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  return tasks;
}

// Remove task from LocalStorage
function removeTaskFromStorage(taskToDelete) {
  let tasks = getTasksFromStorage();
  tasks = tasks.filter(task => task !== taskToDelete);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Load tasks from LocalStorage on page load
function loadTasksFromStorage() {
  let tasks = getTasksFromStorage();
  tasks.forEach(task => {
    // Create a div to wrap the task
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo-item');
    
    // Create the list item (li)
    const newTask = document.createElement('li');
    newTask.innerText = task;
    todoDiv.appendChild(newTask);

    // Add complete button to the task
    const completeButton = document.createElement('button');
    completeButton.innerText = 'Complete';
    completeButton.classList.add('complete-btn');
    todoDiv.appendChild(completeButton);

    // Add delete button to the task
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('delete-btn');
    todoDiv.appendChild(deleteButton);

    // Append the task to the list
    todoList.appendChild(todoDiv);
  });
}
