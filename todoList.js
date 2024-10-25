let todoList = JSON.parse(localStorage.getItem('todo'));
if (!todoList) {
  todoList= [];
}

const todoBox = document.querySelector('.js-todo-box');
const dateBox = document.querySelector('.js-date-box');
const addButton = document.querySelector('.js-add-button');
console.log(todoList)


function addTodoList() {
  let todoBoxValue = todoBox.value;
  let dateBoxValue = dateBox.value;
  todoList.push({
    todoBoxValue,
    dateBoxValue
  });
  saveToStorage();
  addedTodo();
  todoBox.value = '';
  console.log(todoList);
};
function saveToStorage() {
  localStorage.setItem('todo', JSON.stringify(todoList));
}

function addedTodo() {
  let todoListHTML = '';
todoList.forEach((todo, index) => {  
  todoListHTML += `
  <div class="todo-container js-todo-container${index}">
    <div class="name">${todo.todoBoxValue}</div>
    <div class="date">${todo.dateBoxValue}</div>
    <button class="remove-button js-remove-button" onclick="removeTodo(${index})">Delete</button>
  </div>
  `;
});
document.querySelector('.js-todo-list').innerHTML = todoListHTML;
return todoListHTML;
}
console.log(addedTodo())
document.querySelector('.js-todo-list').innerHTML = addedTodo();

function removeTodo(index) {
  todoList.splice(index, 1);

  saveToStorage();
  document.querySelector('.js-todo-list').innerHTML = addedTodo();
}