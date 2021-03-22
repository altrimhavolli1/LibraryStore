<template>
<div>
    <app-header></app-header>
    <div class="form">
      <b-container>
        <b-row>
          <b-col cols="12">
            <h2 style="text-align: center">Are you sure you want to delete this contact?</h2>
            <b-jumbotron>
              <template>
                <h2>Full Name: {{contact.fullName}}</h2>
                <hr class="my-4">
                <h5>Email: {{contact.email}}</h5>
                <h5>Subject: {{contact.subject}}</h5>
                <h5>Message: {{contact.message}}</h5>
              </template>
              <hr class="my-4">
              <b-btn variant="info" to="/admin/contacts">Go Back</b-btn>
              <b-btn variant="danger" @click.stop="deleteContact(contact._id)">Delete</b-btn>
            </b-jumbotron>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
/* eslinit-disable */
import AdminHeader from './AdminHeader.vue';
import axios from 'axios'
import router from '@/router';

export default {
  name: 'ShowContact',
  data () {
    return {
      contact: []
    }
  },
  components: {
    appHeader: AdminHeader
  },
  created () {
    axios.get(`http://localhost:3000/contacts/` + this.$route.params.id)
    .then(response => {
      this.contact = response.data
    })
    .catch(err => {
      this.error = err.message
    })
  },
  methods: {
    deleteContact (contactId) {
      axios.delete('http://localhost:3000/contacts/' + contactId)
      .then((result) => {
        router.push({
          name: 'contacts'
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
    background-image: url('../../assets/images/admin-background.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 10rem 0;
  }
</style>
