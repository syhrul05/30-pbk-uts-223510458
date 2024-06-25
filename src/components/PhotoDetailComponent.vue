<template>
    <div>
      <h1>Photo Detail</h1>
      <div v-if="loading">Loading...</div>
      <div v-if="error">{{ error }}</div>
      <div v-if="photo">
        <img :src="photo.url" :alt="photo.title" class="photo-detail" />
        <p>{{ photo.title }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['id'],
    data() {
      return {
        photo: null,
        loading: false,
        error: null
      }
    },
    methods: {
      async fetchPhoto() {
        this.loading = true;
        try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${this.id}`);
          this.photo = await response.json();
        } catch (error) {
          this.error = error.message;
        } finally {
          this.loading = false;
        }
      }
    },
    created() {
      this.fetchPhoto();
    }
  }
  </script>
  
  <style>
  .photo-detail {
    width: 100%;
    height: auto;
  }
  </style>
  