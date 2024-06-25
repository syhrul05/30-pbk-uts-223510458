<template>
  <q-layout view="hHh Lpr lFf">
    <!-- Header -->
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense to="/" class="text-primary">Home</q-btn>
        <q-btn flat dense to="/about" class="text-primary">Post</q-btn>
        <q-btn flat dense to="/albums" class="text-primary">Album</q-btn>
        
        <q-space />

        <q-btn flat dense round icon="menu" @click="toggleLeftDrawer" />
      </q-toolbar>
    </q-header>

    <!-- Main content -->
    <q-page-container>
      <router-view></router-view>
    </q-page-container>

    <!-- Footer -->
    <q-footer class="text-center" elevated>
      &copy; SYAHRUL RAMADHAN THIS BOUTIQUE
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: 'App',

  methods: {
    toggleLeftDrawer() {
      // Implement drawer toggling logic if needed
    }
  }
};
</script>

<style scoped>
.q-header {
  background-color: #f8f8f8;
}

.text-primary {
  color: #333;
}

.text-primary:hover {
  color: #007bff;
}

.q-footer {
  background-color: #f8f8f8;
  color: #333;
}
</style>
