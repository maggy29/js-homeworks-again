"use strict";

const todos = {
  todos: [],
  add(text) {
    const todo = {
      id: Date.now(),
      text,
    };
    this.todos.push(todo);
    return todo;
  },
  remove(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  },
};

const refs = {
  editor: document.querySelector(".js-editor"),
  todoList: document.querySelector(".js-todo-list"),
};

refs.editor.addEventListener("submit", hanldeTodoAdd);
refs.todoList.addEventListener("click", handleTodoRemove);

function hanldeTodoAdd(e) {
  e.preventDefault();
  const todoText = e.currentTarget.elements.text.value;
  const todo = todos.add(todoText);
  const todoMarkup = makeTodoMarkup(todo);
  appendTodoMarkup(refs.todoList, todoMarkup);
  e.currentTarget.reset();
}

function makeTodoMarkup(item) {
  return `
<li class="todo-list__item" data-id="${item.id}">
  <div class="todo">
    <p class="todo__text">${item.text}</p>
    <div class="todo__actions">
      <button class="button" type="button">Удалить</button>
    </div>
  </div>
</li>
`;
}

function appendTodoMarkup(parentEL, todoMarkup) {
  parentEL.insertAdjacentHTML("beforeend", todoMarkup);
}

function handleTodoRemove(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }
  const parentLi = e.target.closest("li.todo-list__item");
  const idToRemove = parentLi.dataset.id;
  todos.remove(idToRemove);
  parentLi.remove();
}
