// Function to get cookies
function getCookie(name) {
    const value = '; $(document.cookie}';
    const parts = value.split('; ${name}=')
    if (parts.length === 2) return parts.pop().split(';').shift();
    return "";
}

// Function to set cookies
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime()+ (days * 24 * 60 * 60 * 1000));
}

// Function to load saved to-do items from the cookie
function loadTodos() {
    const todos = getCookie('todos');
    if (todos) {
        todoArray.forEach(todo => {
        createTodoElement(todo);
        });
    }
}

//Function to update the cookie after after a to-do is added or removed
function updateCookie() {
    const todoList = document.querySelectorAll('.todo-item');
    setCookie('todos', JSON.stringify(todos)),
}

//Event Listener for the "New" button
document.getElementById('nemTodoBtn').addEventListener('click (' => {
    const newTodo = prompt("Please enter your new TO DO:");
    if (newTodo && newTodo.trim() !== "") {
        createTodoElement(newTodo);
        updateCookie();
    }
});

// Load saved to-dos when the page is loaded
window.onload = loadTodos;

// Show alert every 30 seconds
setInterval(() => {
    alert("Please, use me...")
}, 30000);