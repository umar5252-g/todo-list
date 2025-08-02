const todoInput = document.querySelector("#todo-input");
const dateInput = document.querySelector("#date-input");
const addBtn = document.querySelector("#add-todo-btn");
const todoList = document.querySelector(".todolist");

const addTodoItem = (todoText, dueDate) => {
  const todoItem = document.createElement("div");
  todoItem.classList.add("todo-item");
  todoItem.innerHTML = `<span>${todoText} - ${dueDate}</span><button class="delete-btn">Delete</button>`;
  todoItem.querySelector(".delete-btn").addEventListener("click", function () {
    todoItem.remove();
  });

  todoList.appendChild(todoItem);
};
addBtn.addEventListener("click", () => {
  todoText = todoInput.value;
  const dueDate = dateInput.value;
  if (todoText === "") {
    alert("please enter a todo");
    return;
  }
  addTodoItem(todoText, dueDate);
  todoInput.value = "";
  dateInput.value = "";
});
