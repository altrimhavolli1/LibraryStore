<template>
  <div id="app">
    <app-header></app-header>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
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

  .slide-enter-active {
            animation: slide-in 400ms ease-out forwards;
    }

    .slide-leave-active {
        animation: slide-out 500ms ease-out forwards;
    }

    @keyframes slide-in {
        from {
            transform: translateY(-30px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(-30px);
            opacity: 0;
        }
    }
</style>
