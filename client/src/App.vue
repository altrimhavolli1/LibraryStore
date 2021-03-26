<template>
  <div id="app">
      <router-view></router-view>
      <app-footer></app-footer>
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    appFooter: Footer
  },
  computed: {
  },
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
