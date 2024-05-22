<template>
    <div>
      <h2>{{ title }}</h2>
      <p>{{ content }}</p>
      <div>
        <label for="user-select">Select User: </label>
        <select id="user-select" v-model="selectedUserId" @change="fetchPostsByUser">
          <option v-for="user in users" :key="user.id" :value="user.id">
            {{ user.name }}
          </option>
        </select>
      </div>
      <div v-if="posts.length > 0">
        <h3>Posts by {{ selectedUserName }}</h3>
        <ul>
          <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PostComponent',
    props: {
      title: String,
      content: String,
    },
    data() {
      return {
        users: [],
        posts: [],
        selectedUserId: null,
        selectedUserName: '',
      };
    },
    created() {
      this.fetchUsers();
    },
    methods: {
      fetchUsers() {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(data => {
            this.users = data;
          })
          .catch(error => console.error('Error fetching users:', error));
      },
      fetchPostsByUser() {
        if (this.selectedUserId) {
          fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.selectedUserId}`)
            .then(response => response.json())
            .then(data => {
              this.posts = data;
              this.selectedUserName = this.users.find(user => user.id === this.selectedUserId).name;
            })
            .catch(error => console.error('Error fetching posts:', error));
        }
      },
    },
  };
  </script>
  
  <style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  background-color: #f8f8f8;
}

nav h1 {
  margin: 0;
  font-size: 1.5em;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 1em;
  margin: 0;
  padding: 0;
}

nav li {
  margin: 0;
}

nav a {
  text-decoration: none;
  color: #333;
  font-size: 1em;
}

nav a:hover {
  color: #007bff;
}
  </style>
  