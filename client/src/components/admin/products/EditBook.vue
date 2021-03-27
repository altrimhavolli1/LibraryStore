<template>
  <div>
    <app-header></app-header>
    <div class="form">
      <b-container>
        <b-row class="justify-content-md-center mt-4">
          <b-col col md="10">
            <b-form @submit="onSubmit" class="books">
              <h2>Edit Book</h2>
              <div v-if="error" class="alert alert-danger">{{ error }}</div>
              <b-form-group>
                <b-form-input
                  id="isbn"
                  type="text"
                  placeholder="Enter ISBN"
                  value
                  required
                  autofocus
                  size="lg"
                  v-model.trim="book.isbn"
                ></b-form-input>
              </b-form-group>
              <b-form-group>
                <b-form-input
                  id="title"
                  type="text"
                  placeholder="Enter Title"
                  value
                  required
                  autofocus
                  size="lg"
                  v-model="book.title"
                ></b-form-input>
              </b-form-group>
              <b-form-group>
                <b-form-input
                  id="author"
                  type="text"
                  placeholder="Enter Author"
                  value
                  required
                  autofocus
                  size="lg"
                  v-model="book.author"
                ></b-form-input>
              </b-form-group>
              <b-form-group>
                <b-form-textarea
                  id="description"
                  v-model="book.description"
                  placeholder="Enter Description"
                  value
                  required
                  size="lg"
                  >{{ book.description }}</b-form-textarea
                >
              </b-form-group>
              <b-form-group>
                <b-form-input
                  id="published_Year"
                  type="text"
                  placeholder="Enter Published Year"
                  value
                  required
                  size="lg"
                  v-model="book.published_Year"
                ></b-form-input>
              </b-form-group>
              <b-form-group>
                <b-form-input
                  id="price"
                  type="text"
                  placeholder="Enter price"
                  value
                  required
                  size="lg"
                  v-model="book.price"
                ></b-form-input>
              </b-form-group>
              <b-button variant="info" size="lg" pill to="/admin/books"
                >Go Back</b-button
              >
              <b-button
                type="submit"
                pill
                class="float-right"
                size="lg"
                variant="success"
                >Update</b-button
              >
            </b-form>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import AdminHeader from "../AdminHeader.vue";
import axios from "axios";
import router from "@/router";

export default {
  name: "EditBook",
  data() {
    return {
      book: {},
      error: null,
    };
  },
  created() {

    axios
      .get(`http://localhost:3000/books/${this.$route.params.id}`)
      .then((response) => {
        this.book = response.data;
      })
      .catch((err) => {
        this.error = err.message;
      });
  },
  components: {
    appHeader: AdminHeader,
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      axios
        .put(`http://localhost:3000/books/` + this.$route.params.id, this.book)
        .then((response) => {
          router.push({
            name: "books",
          });
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
  },
};
</script>

<style scoped>
.form {
  background-image: url("../../../assets/images/admin-background.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 10rem 0;
}
.books {
  background: #f3f3f3;
  padding: 3rem;
  border-radius: 25px;
}

h2 {
  text-align: center;
  padding-bottom: 1.5rem;
}
</style>