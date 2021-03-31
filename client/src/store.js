import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import router from './router';

Vue.use(Vuex);

export default new Vuex.Store({
    namespaced: true,
    state: {
        products: [],
        token: localStorage.getItem('token') || '',
        user: {}
    },

    getters: {
        products: state => state.products,
        isLoggedIn: state => state.token,
        user: state => state.user
    },

    actions: {
        async getProducts({ commit }) {
            await axios.get("http://localhost:3000/books")
            .then(response => {
                commit("SET_PRODUCTS", response.data);
            })
        },

        async register({ commit }, user) {
            await axios.post(`http://localhost:3000/auth/`, user)
            .then(res => {
                const token = res.data.token;

                localStorage.setItem('token', token);
                axios.defaults.headers.common['Authorization'] = token;
                commit('AUTH_SUCCESS', token);
            })
        },

        async login({ commit }, user) {
            await axios.post(`http://localhost:3000/auth/login`,  user)
            .then(res => {
                const token = res.data.token;
    
                localStorage.setItem('token', token);
                axios.defaults.headers.common['Authorization'] = token;
                commit('AUTH_SUCCESS', token);
            })
        },

        async getProfile({ commit }) {
            const res = await axios.get("http://localhost:3000/users/profile");
            const user = res.data; 
            commit('USER_PROFILE', user);
            return res;
        },

        async logout({ commit}){
            localStorage.removeItem('token');
            commit('LOGOUT');
            delete axios.defaults.headers.common['Authorization'];
            router.push('/');
            return;
        }
    },

    mutations: {
        SET_PRODUCTS(state, products){
            state.products = products;
        },
        AUTH_SUCCESS(state, token){
            state.token = token;
        },
        USER_PROFILE(state, user) {
            state.user = user;
        },
        LOGOUT(state) {
            state.token = '';
        },
    },
});