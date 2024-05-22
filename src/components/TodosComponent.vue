<template>
    <div class="todos">
      <h2>{{ title }}</h2>
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          <label>
            <input type="checkbox" v-model="todo.completed" />
            <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
          </label>
        </li>
      </ul>
      <form @submit.prevent="addTodo" class="todo-form">
        <input v-model="newTodo" placeholder="Add a new todo" class="todo-input" />
        <button type="submit" class="todo-button">Add</button>
      </form>
      <slot></slot> <!-- Default slot -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'TodosComponent',
    props: {
      title: {
        type: String,
        required: true
      },
      todos: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        newTodo: ''
      };
    },
    methods: {
      addTodo() {
        if (this.newTodo.trim() === '') return;
        this.todos.push({
          id: this.todos.length + 1,
          text: this.newTodo,
          completed: false
        });
        this.newTodo = '';
      }
    }
  };
  </script>
  
  <style scoped>
  .todos {
    border: 1px solid #ccc;
    padding: 1em;
    margin: 1em 0;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .todos h2 {
    margin-bottom: 0.5em;
    color: #333;
  }
  
  .todos ul {
    list-style: none;
    padding: 0;
  }
  
  .todos li {
    display: flex;
    align-items: center;
    margin-bottom: 0.5em;
  }
  
  .todos label {
    display: flex;
    align-items: center;
  }
  
  .todos input[type="checkbox"] {
    margin-right: 0.5em;
  }
  
  .todos .completed {
    text-decoration: line-through;
    color: #888;
  }
  
  .todo-form {
    display: flex;
    align-items: center;
    margin-top: 1em;
  }
  
  .todo-input {
    flex-grow: 1;
    padding: 0.5em;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 0.5em;
  }
  
  .todo-button {
    padding: 0.5em 1em;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .todo-button:hover {
    background-color: #0056b3;
  }
  </style>
  