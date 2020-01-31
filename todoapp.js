const form = document.getElementById("addform");
const list = document.getElementById("addlist");
const button = document.getElementById("button");
const todo = document.querySelector("input");

// form add event//
form.addEventListener("submit", addItem);
//

// add todo function//
function addItem(e) {
  e.preventDefault();

  if (todo.value) {
    createTodo();
  } else {
    alert("do something in your life!!");
  }
}

function createTodo() {
  const todoItem = document.createElement("li");
  const todoSpan = document.createElement("span");
  const donebutton = document.createElement("button");
  const deletebutton = document.createElement("button");
  
  donebutton.classList.add("first");
  deletebutton.innerText = "delete";
  donebutton.innerText = "complete";
  todoSpan.textContent = todo.value;
  donebutton.addEventListener("click", function(e) {
    donebutton.innerText = "done";
    todoSpan.style.textDecoration = "line-through";
  });
  deletebutton.addEventListener("click", function(e){
   
    todoItem.removeChild(todoSpan);
    todoItem.removeChild(donebutton);
    todoItem.removeChild(deletebutton);
  } )
 
  todoItem.appendChild(donebutton);
  todoItem.appendChild(deletebutton);
  todoItem.appendChild(todoSpan);
  list.appendChild(todoItem);
todo.value="";

}
