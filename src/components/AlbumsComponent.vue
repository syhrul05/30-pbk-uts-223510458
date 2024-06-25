<template>
    <div>
      <h1>Albums</h1>
      <div v-if="loading" class="loading">Loading...</div>
      <div v-if="error" class="error">{{ error }}</div>
      <div v-if="albums.length">
        <div class="q-pa-md" >
          <q-list bordered separator>
            <q-item 
              v-for="album in albums" 
              :key="album.id" 
              clickable 
              v-ripple 
              @click="goToAlbum(album.id)"
            >
              <q-item-section>{{ album.title }}</q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        albums: [],
        loading: false,
        error: null
      }
    },
    methods: {
      async fetchAlbums() {
        this.loading = true;
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/albums');
          this.albums = await response.json();
        } catch (error) {
          this.error = error.message;
        } finally {
          this.loading = false;
        }
      },
      goToAlbum(albumId) {
        this.$router.push({ name: 'album-photos', params: { id: albumId } });
      }
    },
    created() {
      this.fetchAlbums();
    }
  }
  </script>
  
  <style>
  .album {
    margin-bottom: 20px;
    cursor: pointer;
  }
  
  .loading, .error {
    text-align: center;
    font-size: 18px;
    color: #00796b;
  }
  h1{
    text-align: center;
  }
  </style>
  