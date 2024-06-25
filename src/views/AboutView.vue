<template>
  <div class="profile">
    <h1>POST</h1>
    <div class="select-user">
      <label for="users">Pilih Pengguna:</label>
      <select id="users" v-model="selectedUserId" @change="loadUserPosts">
        <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
      </select>
    </div>
    <div class="user-posts">
      <div v-if="loading" class="loading">Loading...</div>
      <div v-else>
        <div v-for="post in userPosts" :key="post.id" class="post">
          <h2>{{ post.title }}</h2>
          <p>{{ post.body }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      selectedUserId: null,
      userPosts: [],
      loading: false
    };
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
          this.users = data;
        })
        .catch(error => {
          console.error('Error fetching users:', error);
        });
    },
    loadUserPosts() {
      if (!this.selectedUserId) return;
      this.loading = true;
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.selectedUserId}`)
        .then(response => response.json())
        .then(data => {
          this.userPosts = data;
          this.loading = false;
        })
        .catch(error => {
          console.error('Error fetching user posts:', error);
          this.loading = false;
        });
    }
  }
};
</script>

<style>
.profile {
  background-color: #e0f7fa; /* Warna biru muda */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: auto;
}

.profile h1 {
  font-family: 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', sans-serif; /* Ganti font ke font sans-serif yang lebih modern */
  color: #00796b; /* Ubah warna teks judul menjadi hijau tua */
  text-align: center;
  margin-bottom: 20px;
}

.select-user {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.select-user label {
  margin-right: 10px;
  font-weight: bold;
}

.select-user select {
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #02387b;
  font-size: 16px;
}

.user-posts {
  margin-top: 20px;
}

.loading {
  text-align: center;
  color: #02387b;
  font-weight: bold;
}

.post {
  background-color: #02387b; /* Warna hijau tua */
  color: #ffffff; /* Ubah warna teks postingan menjadi putih */
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.post h2 {
  margin-top: 0;
  font-family: 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', sans-serif; /* Ganti font ke font sans-serif yang lebih modern */
}

.post p {
  font-family: 'Arial', sans-serif;
  line-height: 1.5;
}
</style>
