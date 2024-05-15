<template>
  <header>
    <div class="wrapper">
      <nav>
        <h1>SYAHRUL BOUTIQUE</h1>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">Post</router-link></li>
        </ul>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
/* Add some basic styling for the navbar */
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
