<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    appHeader: Header,
    appFooter: Footer,
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
  #app {
    font-family: 'Poppins', Arial, sans-serif;
    color: #2c3e50;
    padding: 0;
    margin: 0;
}
</style>
