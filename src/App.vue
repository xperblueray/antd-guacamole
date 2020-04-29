<template>
  <div id="app">
    <GlobalLayout msg="终端"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import GlobalLayout from './components/layout/globallayout.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    GlobalLayout
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
