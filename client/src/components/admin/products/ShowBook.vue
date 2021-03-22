<template>
<div>
    <app-header></app-header>
    <div class="form">
      <b-container>
        <b-row>
          <b-col cols="12">
            <h2 style="text-align: center">Are you sure you want to delete this book?</h2>
            <b-jumbotron>
              <template>
                <h2>ISBN: {{book.isbn}}</h2>
                <h5>Title: {{ book.title }}</h5>
                <h5>Author: {{ book.author}}</h5>
                <h5>Description: {{book.description}}</h5>
                <h5>Published Year: {{book.published_Year}}</h5>
                <h5>Price: ${{book.price}}</h5>
              </template>
              <hr class="my-4">
              <p>Updated Date: {{ book.updated_date }}</p>
              <b-btn variant="info" to="/admin/books">Go Back</b-btn>
              <b-btn variant="danger" @click.stop="deletebook(book._id)">Delete</b-btn>
            </b-jumbotron>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
/* eslinit-disable */
import AdminHeader from '../AdminHeader.vue';
import axios from 'axios'
import router from '@/router';

export default {
  name: 'ShowBook',
  data () {
    return {
      book: []
    }
  },
  components: {
    appHeader: AdminHeader,
  },
  created () {
    axios.get(`http://localhost:3000/books/` + this.$route.params.id)
    .then(response => {
      this.book = response.data
    })
    .catch(err => {
      this.error = err.message
    })
  },
  methods: {
    deletebook (bookid) {
      axios.delete('http://localhost:3000/books/' + bookid)
      .then((result) => {
        router.push({
          name: 'books'
        })
      })
      .catch(err => {
        this.error = err.message;
      })
    }
  }
}
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
  .form {
    background-image: url('../../../assets/images/admin-background.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 10rem 0;
  }
</style>
