<template>
  <div id="app">
    <div class="container">
      <header>
        <nav>
          <ul>
            <li><router-link to="/weather"><div class="component-box">Weather</div></router-link></li>
            <li><router-link to="/location"><div class="component-box">Location</div></router-link></li>
            <li><router-link to="/stopwatch"><div class="component-box">Stopwatch</div></router-link></li>
            <li><router-link to="/tictactoe"><div class="component-box">Tic Tac Toe</div></router-link></li>
            <li><router-link to="/photo"><div class="component-box">Photo</div></router-link></li>
          </ul>
        </nav>
      </header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: darkcyan;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f5f5f5;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

header {
  background: aquamarine;
  padding: 20px;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  font-family: monospace;
  font-size: 1.5rem;
}

nav li {
  display: inline-block;
  margin-right: 10px;
}

nav a {
  font-weight: bold;
  color: grey;
  color: #fff;
  text-decoration: none;
  padding: 5px 10px;
}

nav a.router-link-exact-active {
  color: #42b983;
}

nav a:hover {
  text-decoration: underline;
}

.component-box {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s ease;
  color: #333; /* Ubah warna tulisan pada kotak komponen */
}

.component-box:hover {
  background-color: #f5f5f5;
}
</style>
