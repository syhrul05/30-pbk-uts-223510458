<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
    <div>
      <label for="user-select">Select User: </label>
      <q-select 
        id="user-select"
        v-model="selectedUserId"
        :options="usersOptions"
        @input="fetchPostsByUser"
        outlined
        dense
      />
    </div>
    <div v-if="posts.length > 0">
      <h3>Posts by {{ selectedUserName }}</h3>
      <q-list bordered class="compact-list">
        <q-item v-for="post in posts" :key="post.id" class="q-mb-xs">
          <q-item-section>{{ post.title }}</q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script>
import { usePostComponentStore } from '../stores/postComponent';

export default {
  name: 'PostComponent',
  props: {
    title: String,
    content: String,
  },
  setup() {
    const postComponentStore = usePostComponentStore();
    
    const users = postComponentStore.users;
    const posts = postComponentStore.posts;
    const selectedUserId = postComponentStore.selectedUserId;
    const selectedUserName = postComponentStore.selectedUserName;
    
    const fetchUsers = async () => {
      await postComponentStore.fetchUsers();
    };
    
    const fetchPostsByUser = async () => {
      await postComponentStore.fetchPostsByUser(selectedUserId);
    };

    const usersOptions = computed(() => users.map(user => ({ label: user.name, value: user.id })));

    onMounted(fetchUsers);

    return {
      users,
      posts,
      selectedUserId,
      selectedUserName,
      fetchUsers,
      fetchPostsByUser,
      usersOptions,
    };
  },
};
</script>

<style scoped>
.compact-list .q-item {
  font-size: 12px;
  padding: 5px 10px;
}

.q-select {
  max-width: 200px;
}

.q-mb-xs {
  margin-bottom: 4px;
}
</style>
