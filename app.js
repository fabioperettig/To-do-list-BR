/*
 * inForm points to the form
 */
var inForm = document.getElementById('idGetUserFrm');
/*
 * IE submits the form twice
 * To avoid this the boolean isSumbitted is:
 *  1) initialized to false when the form is displayed 4 the first time
 * Remark: it is not the same event as "body load"
 */
var isSumbitted = false;

function checkEnter(e) {
  if (e && e.keyCode == 13) {
    inForm.submit();
    /*
      * 2) set to true after the form submission was invoked
      */
    isSumbitted = true;
  }
}
function onSubmit () {
  if (isSumbitted) {
    /*
    * 3) reset to false after the form submission executed
    */
    isSumbitted = false;
    return false;
  }
}


//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//Functions
function addTodo(e) {
    e.preventDefault();

    //Create Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //Create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //Check Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = "<i class='fas fa-check'></i>";
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //Trash Button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = "<i class='fas fa-trash'></i>";
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Append to List
    todoList.appendChild(todoDiv);

    //Clear Todo Input
    todoInput.value="";
}

function deleteCheck(e) {
    const item = e.target;
    //Delete Todo
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        //Animation
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function() {
            todo.remove();
        });
    }

    //Check Todo
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}
