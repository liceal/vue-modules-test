<template>
  <div id="app">
    <div id="nav">
      <span v-for="(router,key) in routers" :key="key">
        <span v-if="key!==0"> | </span>
        <router-link :to="router.path">{{router.name}}</router-link>
      </span>
    </div>
    <hr>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    routers() {
      //所有路由
      return this.$router.options.routes;
    }
  }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
