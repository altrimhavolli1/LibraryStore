<template>
  <div>
    <app-header></app-header>
    <div class="form">
      <b-container>
        <b-row class="justify-content-md-center mt-4">
        <b-col col md="10">
         <b-form @submit.prevent="onSubmit" class="books" enctype="multipart/form-data" v-model="valid">
            <h2>Add Book</h2>
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <b-form-group>
              <b-form-file
                type="file"
                v-model="book.image"
                :rules="photoRules"
                required
                placeholder="Choose a file or drop it here..."
                size="lg"
              ></b-form-file>
            </b-form-group>
            <b-form-group>
              <b-form-input
                type="text"
                placeholder="Enter ISBN"
                :rules="isbnRules"
                required
                size="lg"
                v-model="book.isbn"
              ></b-form-input>
            </b-form-group>
            <b-form-group>
              <b-form-input
                type="text"
                placeholder="Enter Title"
                :rules="titleRules"
                required
                size="lg"
                v-model="book.title"
              ></b-form-input>
            </b-form-group>
            <b-form-group>
              <b-form-input
                type="text"
                placeholder="Enter Author"
                :rules="authorRules"
                required
                size="lg"
                v-model="book.author"
              ></b-form-input>
            </b-form-group>
            <b-form-group>
              <b-form-textarea
                v-model="book.description"
                placeholder="Enter Description"
                :rules="descriptionRules"
                required
                size="lg"
              >{{book.description}}</b-form-textarea>
            </b-form-group>
            <b-form-group>
              <b-form-input
                type="text"
                placeholder="Enter Published Year"
                :rules="publishedYearRules"
                required
                size="lg"
                v-model="book.published_Year"
              ></b-form-input>
            </b-form-group>
            <b-form-group>
              <b-form-input
                type="text"
                placeholder="Enter price"
                :rules="priceRules"
                size="lg"
                v-model="book.price"
              ></b-form-input>
            </b-form-group>
            <b-button
              variant="info"
              size="lg"
              pill
              to="/admin/books"
            >Go Back</b-button>
            <b-button
              type="submit"
              pill
              class="float-right"
              size="lg"
              variant="success"
            >Save</b-button>
          </b-form>
        </b-col>
      </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import AdminHeader from '../AdminHeader.vue';
import axios from 'axios';
import router from '@/router';

export default {
  name: 'CreateBook',
  data () {
    return {
      valid: false,
      success: false,
      error: false,

      book: {},
      
      isbnRules: [
        v => !!v || "Isbn is required",
        v => (v && v.length > 1) || "Isbn must be greater than 10 character"
      ],
      titleRules: [
        v => !!v || "Title is required",
        v => (v && v.length > 1) || "Title must be greater than 1 character"
      ],
      authorRules: [
        v => !!v || "Author is required",
        v => (v && v.length > 1) || "Author must be greater than 1 character"
      ],
      descriptionRules: [
        v => !!v || "Description is required",
        v => (v && v.length > 15) || "Description must be greater than 15 characters"
      ],
      publishedYearRules: [
        v => !!v || "Published Year is required",
        v => (v && v.length >= 4) || "Published Year must be at least 4 characters"
      ],
      priceRules: [
        v => !!v || "Price is required",
        v => (v && v.length >= 1) || "Price must be at least 1 characters"
      ],
      photoRules: [v => !!v || "Photo is required"],
    }
  },
  components: {
    appHeader: AdminHeader,
  },
  methods: {
    async onSubmit() {
      
      this.$refs.form.validate();
      if(this.valid){
        
        const formData = new FormData();
        formData.append("image", this.book.image);
        formData.set("isbn", this.book.isbn);
        formData.set("title", this.book.title);
        formData.set("author", this.book.author);
        formData.set("description", this.book.description);
        formData.set("published_Year", this.book.published_Year);
        formData.set("price", this.book.price);
        
        await axios.post(`http://localhost:3000/books`, formData)
          .then(res => {
            this.$refs.form.reset()
            router.push({
            name: 'books',
          })
        })
        .catch(err => {
          this.error = err.message;
        })
      }
      
    }
  }
}
</script>

<style scoped>

  .form {
    background-image: url('../../../assets/images/admin-background.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 10rem 0;
  }
  .books{
    background: #f3f3f3;
    padding: 3rem;
    border-radius: 25px;
  }

  h2 {
    text-align: center;
    padding-bottom: 1.5rem;
  }
</style>>