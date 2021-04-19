const todo = {
  todos: [],
  addTodo(text) {
    const todo = {
      id: Date.now(),
      text,
    };
    this.todos.push(todo);
    this.saveTodos();
    return todo;
  },
  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.saveTodos();
  },
  markAsDone(id) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    this.saveTodos();
    return this.todos.find((todo) => todo.id === id);
  },
  saveTodos() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  },
};

console.log(localStorage.todos);

const refs = {
  form: document.querySelector(".add-form"),
  list: document.querySelector(".todo-list"),
};

refs.form.addEventListener("submit", handleTodoSubmit);
refs.list.addEventListener("click", handleTodoClick);

loadTodos();

function handleTodoSubmit(e) {
  e.preventDefault();
  const inputText = e.target.elements[0].value;
  if (!inputText) {
    return;
  }
  const newTodo = todo.addTodo(inputText);
  const newTodoMarkup = makeTodoMarkup(newTodo);
  appendTodoMarkup(newTodoMarkup);
  refs.form.reset();
}
function makeTodoMarkup(todo) {
  return `
<li class="todo-item" data-id="${todo.id}">
  <span>${todo.text}</span>
  <button>X</button>
</li>
`;
}
function appendTodoMarkup(todoMarkup) {
  refs.list.insertAdjacentHTML("afterbegin", todoMarkup);
}
function handleTodoClick(e) {
  if (e.target === e.currentTarget) {
    return;
  }

  const clickedTodo = e.target.closest("li");
  const clickedId = Number(clickedTodo.dataset.id);

  if (e.target.nodeName === "BUTTON") {
    todo.removeTodo(clickedId);
    clickedTodo.remove();
  } else {
    const clicked = todo.markAsDone(clickedId);
    markTodoAsDone(clicked);
  }
}
function markTodoAsDone(todo) {
  const todoToMark = refs.list.querySelector(
    `.todo-item[data-id="${todo.id}"]`
  );
  console.log(todoToMark);
  if (todo.done) {
    todoToMark.classList.add("done");
  } else {
    todoToMark.classList.remove("done");
  }
}
function loadTodos() {
  const persistedTodos = localStorage.getItem("todos");
  if (!persistedTodos) {
    return;
  }
  todo.todos = JSON.parse(persistedTodos);
  todo.todos.forEach((todo) => {
    appendTodoMarkup(makeTodoMarkup(todo));
    markTodoAsDone(todo);
  });
}
