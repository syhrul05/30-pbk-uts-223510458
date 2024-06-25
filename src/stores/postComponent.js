import { defineStore } from 'pinia';

export const usePostComponentStore = defineStore('postComponent', {
  state: () => ({
    users: [],
    posts: [],
    selectedUserId: null,
    selectedUserName: '',
  }),
  actions: {
    async fetchUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        this.users = await response.json();
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    async fetchPostsByUser(userId) {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        this.posts = await response.json();
        this.selectedUserName = this.users.find(user => user.id === userId).name;
        this.selectedUserId = userId;
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    },
  },
});
