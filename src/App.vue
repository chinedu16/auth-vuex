<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

input {
  height: 30px;
  width: 250px;
  border-radius: 5px;
  padding-left: 10px;
  border: 1px solid #42b983;
  margin-left: 10px;
}

button {
  height: 30px;
  width: auto;
  color: white;
  font-weight: 900;
  border-radius: 5px;
  background: #42b983;
  border: 1px solid #42b983;
  cursor: pointer;
}
</style>
