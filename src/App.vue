<template>
  <div id="app">
    <Navi></Navi>
    <hr style="clear: both">
    <BlogList></BlogList>
    <img alt="Vue logo" src="./assets/logo.png">
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Footer></Footer>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Navi from "./components/Navi";
import Footer from "./components/Footer";
import BlogList from "./components/BlogList";

export default {
  name: 'app',
  components: {
    Footer,
    // HelloWorld,
    Navi,
    BlogList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
