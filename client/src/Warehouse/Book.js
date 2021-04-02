import axios from "axios";

const state = {
    books: [],
    book: {},
    error_message: null,
    success_message: null
};


const getters = {
    books: state => state.books,
    book: state => state.book,
    error_message: state => state.error_message,
    success_message: state => state.success_message
};
/*  */
const actions = {
    // Get all books actions
    async getBooks({ commit }) {
        const response = await axios.get("http://localhost:3000/books");
        if (response.data.success) {
            commit("SET_BOOKS", response.data.books);
        }
        return response;
    },

    async addBook({ commit }, book) {
        try {
            let response = await axios.post("http://localhost:3000/books", book);

            if (response.data.success) {
                commit("SET_SUCCESS_MESSAGE", response.data.msg);
                setTimeout(() => {
                    commit("SET_SUCCESS_MESSAGE", null);
                }, 3000);
            }
            return response;

        } catch (err) {
            commit("SET_ERROR_MESSAGE", err.response.data.msg.errors[0].message || err.response.data.msg );
            setTimeout(() => {
                commit("SET_ERROR_MESSAGE", null);
            }, 3000);
        }
    },

    async updateBook({ commit }, book) {
        try {
            let response = await axios.put(`http://localhost:3000/book/${book._id}`, book)
            if (response.data.success) {
                commit("SET_SUCCESS_MESSAGE", response.data.msg);
                setTimeout(() => {
                    commit("SET_SUCCESS_MESSAGE", null);
                }, 3000);
            }
            return response;

        }
        catch (err) {
            commit("SET_ERROR_MESSAGE", err.response.data.msg);
            setTimeout(() => {
                commit("SET_ERROR_MESSAGE", null);
            }, 3000);
        }
    },

    async getBookById({ commit }, id) {
        let response = await axios.get("http://localhost:3000/books/" + id);
        if (response.data.success) {
            commit("SET_BOOK");
        }
        return response;
    },

    async deleteBook({ commit }, id) {
        const response = await axios.delete(`http://localhost:3000/books/${id}`);
        if (response.data.success) {
            commit("DELETE_BOOK", id);
        }
        return response;
    }

};

const mutations = {
    SET_BOOKS(state, books) {
        state.books = books;
    },
    SET_BOOK(state, book) {
        state.book = book;
    },
    DELETE_BOOK(state, id) {
        state.books = state.books.filter(book => {
            return book._id != id;
        })
    },
    SET_SUCCESS_MESSAGE(state, msg) {
        state.success_message = msg;
    },
    SET_ERROR_MESSAGE(state, msg) {
        state.error_message = msg;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
