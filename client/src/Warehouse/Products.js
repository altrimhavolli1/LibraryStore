import axios from 'axios';
import router from '../router'

const state = {
    products: [],
};

const getters = {
    products: state => state.products
};

const actions = {
    async getProducts({ commit }) {
        const response = await axios.get("http://localhost:3000/books");
        if (response.data.success) {
            commit("SET_PRODUCTS", response.data.books);
        }
        return response;
    }
};

const mutations = {
    SET_PRODUCTS(state, products){
        state.products = products;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations

}
