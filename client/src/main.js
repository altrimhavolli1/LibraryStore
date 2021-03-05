import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App'
import router from './router'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase';
import store from './store';

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyCvCVwF-VqBUxLTvxJ8nwZ5eysfhE1AvtA",
    authDomain: "vueproject-2e23c.firebaseapp.com",
    databaseURL: "https://vueproject-2e23c.firebaseio.com",
    projectId: "vueproject-2e23c",
    storageBucket: "vueproject-2e23c.appspot.com",
    messagingSenderId: "328207620702",
    appId: "1:328207620702:web:cec009a06cac09b43bb2cf",
    measurementId: "G-1FH6EJ5KDX"
}

firebase.initializeApp(config);

firebase.firestore().settings(settings);
firebase.auth().onAuthStateChanged(user => {
    store.dispatch("fetchUser", user);
});

firebase.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      unsubscribe();
      resolve(user);
    }, reject);
  })
};

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
