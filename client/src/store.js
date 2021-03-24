import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import Auth from './Warehouse/Auth';
import Products from './Warehouse/Products';

Vue.use(Vuex);

export default new Vuex.Store({
    namespaced: true,
    state: {
        products: [],
    },

    getters: {
        products: state => state.products
    },

    actions: {
        async getProducts({ commit }) {
            await axios.get("http://localhost:3000/books")
            .then(response => {
                commit("SET_PRODUCTS", response.data);
            })
        }
    },

    mutations: {
        SET_PRODUCTS(state, products){
            state.products = products;
        }
    },
});