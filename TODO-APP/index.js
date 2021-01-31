// selectors 
const todoInput = document.querySelector("#todo-input");
const todoButton = document.querySelector("#tudo-submit__btn");
const todoList = document.querySelector(".todo-list");

//event Listeners 
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//Functions
function addTodo(event) {
    //prevent form from submitting 
    event.preventDefault();
    //create todo DIV inside the list UL
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create LI inside the list UL
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //create a done button inside the list UL
    const doneButton = document.createElement("button");
    doneButton.innerText = "done";
    doneButton.classList.add("todo-done__btn");
    todoDiv.appendChild(doneButton);
    //create a trash button inside the list UL
    const trashButton = document.createElement("button");
    trashButton.innerText = "x";
    trashButton.classList.add("todo-trash__btn");
    todoDiv.appendChild(trashButton);
    //append to list
    todoList.appendChild(todoDiv);
    //Clear TODO input value
    todoInput.value = "";
}

function deleteCheck(event) {
    const item = event.target;
    //Delete TODO
    //if the firts item clicked is the trash button delete it
    if(item.classList[0] === "todo-trash__btn"){
        //get the parent element
        const todo = item.parentElement;
        todo.remove();
    }
    //check mark
    //if the firts item clicked is the done button it will cross the text
    if(item.classList[0] === "todo-done__btn"){
        //get the parent element
        const todo = item.parentElement;
        todo.classList.toggle("done");
    }
}
