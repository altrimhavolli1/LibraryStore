<template>
    <div>
        <app-header></app-header>
        <br>
        <b-container>
            <b-row class="justify-content-md-center mt-4">
                <b-col class="justify-content-md-center" cols="16">
                    <h2>Book List
                        <b-button
                            variant="info" 
                            class="float-right"
                            to="/admin/add-book"
                        >Add Book</b-button>
                    </h2>
                    <hr>
                    <div v-if="error" class="alert alert-danger">{{error}}</div>
                    <table class="table table-bordered table-striped">
                        <thead>
                            <tr class="text-center bg-info text-light">
                                <td>Isbn</td>
                                <td>Title</td>
                                <td>Description</td>
                                <td>Author</td>
                                <td>Published</td>
                                <td>Price</td>
                                <td>Image</td>
                                <td>Edit</td>
                                <td>Delete</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="" v-for="(book, i) in books" :key="i">
                                <td>{{book.isbn}}</td>
                                <td style="width: 15%;">{{book.title}}</td>
                                <td height="20">{{book.description}}</td>
                                <td style="width: 15%;">{{book.author}}</td>
                                <td>{{book.published_Year}}</td>
                                <td>${{book.price}}</td>
                                <td><b-img v-bind="mainProps" width="60" height="60" rounded="circle" :src="`http://localhost:3000/${book.bookImage}`"></b-img></td>
                                <td><b-button class="btn btn-success" @click.stop="editbook(book._id)"><i class="fas fa-edit"></i></b-button></td>
                                <td><b-button class="btn btn-danger" @click.stop="deletebook(book._id)"><i class="fas fa-trash"></i></b-button></td>
                            </tr>
                        </tbody>
                    </table>
                </b-col>
            </b-row>
            <hr>
        </b-container>
        <br>
    </div>
</template>
<script>
import AdminHeader from './AdminHeader.vue';
import axios from 'axios';
import router from '@/router';

export default {
    data () {
        return {
            books: [],
            error: null
        }
    },
    components: {
        appHeader: AdminHeader
    },
    async created () {
        await axios.get(`http://localhost:3000/books`)
            .then(response => {
                this.books = response.data
        })
        .catch(err => {
            this.error = err.message
        })
    },
    methods: {
        editbook (bookId) {
            router.push({
                name: 'edit-book',
                params: { id: bookId }
            })
        },
        deletebook (bookId) {
            router.push({
                name: 'show-book',
                params: { id: bookId }
            })
        }
    }
}
</script>

<style scoped>
table {
  table-layout: fixed;
  width: 100%;
  text-align: center;
}
td {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: middle;
}
</style>