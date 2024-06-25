<template>
    <div>
      <h1>Photos in Album {{ albumId }}</h1>
      <div v-if="loading">Loading...</div>
      <div v-if="error">{{ error }}</div>
      <div v-if="photos.length">
        <div class="photos">
          <img v-for="photo in photos" :key="photo.id" :src="photo.thumbnailUrl" :alt="photo.title" @click="openModal(photo)" />
        </div>
      </div>
      <!-- The Modal -->
      <div id="myModal" class="modal" :style="{ display: modalVisible ? 'block' : 'none' }">
        <div class="modal-content">
          <span class="close" @click="closeModal">&times;</span>
          <img :src="selectedPhoto.url" alt="Full size photo" style="width: 100%;" />
          <p>{{ selectedPhoto.title }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['id'],
    data() {
      return {
        photos: [],
        selectedPhoto: {},
        modalVisible: false,
        loading: false,
        error: null
      }
    },
    computed: {
      albumId() {
        return this.id;
      }
    },
    methods: {
      async fetchPhotos() {
        this.loading = true;
        try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${this.albumId}/photos`);
          this.photos = await response.json();
        } catch (error) {
          this.error = error.message;
        } finally {
          this.loading = false;
        }
      },
      openModal(photo) {
        this.selectedPhoto = photo;
        this.modalVisible = true;
      },
      closeModal() {
        this.modalVisible = false;
      }
    },
    created() {
      this.fetchPhotos();
    }
  }
  </script>
  
  <style>
  .photos {
    display: flex;
    flex-wrap: wrap;
  }
  .photos img {
    margin-right: 10px;
    margin-bottom: 10px;
    width: 100px;
    height: 100px;
    object-fit: cover;
    cursor: pointer;
  }
  
  .modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  }
  
  .modal-content {
    position: relative;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    width: 80%; /* Could be more or less, depending on screen size */
    background-color: white;
    border-radius: 10px;
  }
  
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  </style>
  