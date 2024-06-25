import { defineStore } from 'pinia';

export const useTodosStore = defineStore('todos', {
  state: () => ({
    todos: [
      { id: 1, text: 'Learn Vue', completed: false },
      { id: 2, text: 'Build an App', completed: false }
    ],
    newTodo: ''
  }),
  actions: {
    addTodo() {
      if (this.newTodo.trim() === '') return;
      this.todos.push({
        id: this.todos.length + 1,
        text: this.newTodo,
        completed: false
      });
      this.newTodo = '';
    },
    toggleTodoCompletion(todo) {
      todo.completed = !todo.completed;
    }
  }
});
