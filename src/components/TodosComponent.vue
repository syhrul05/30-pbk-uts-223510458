<template>
  <div class="todos">
    <h2>{{ title }}</h2>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <q-item clickable tag="label">
          <q-item-section>
            <q-checkbox v-model="todo.completed" @change="toggleTodoCompletion(todo)" />
          </q-item-section>
          <q-item-section :class="{ 'text-grey-7': todo.completed }">
            {{ todo.text }}
          </q-item-section>
        </q-item>
      </li>
    </ul>
    <q-form @submit.prevent="addTodo" class="todo-form">
      <q-input v-model="newTodo" placeholder="Add a new todo" dense />
      <q-btn type="submit" color="primary" label="Add" dense />
    </q-form>
    <slot></slot> <!-- Default slot -->
  </div>
</template>

<script>
import { useTodosStore } from '../stores/todos';

export default {
  name: 'TodosComponent',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup() {
    const todosStore = useTodosStore();
    return {
      todos: todosStore.todos,
      newTodo: todosStore.newTodo,
      addTodo: todosStore.addTodo,
      toggleTodoCompletion: todosStore.toggleTodoCompletion
    };
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
  margin-bottom: 0.5em;
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

</style>
