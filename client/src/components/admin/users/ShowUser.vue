<template>
<div>
    <app-header></app-header>
    <div class="form">
      <b-container>
        <b-row>
          <b-col cols="12">
            <h2 style="text-align: center">Are you sure you want to delete this user?</h2>
            <b-jumbotron>
              <template>
                <h2>Name: {{user.firstName}} {{user.lastName}}</h2>
                <h5>Address: {{user.address}}</h5>
                <h5>Email: {{user.email}}</h5>
                <h5>Password: {{user.password}}</h5>
                <h5>Role: {{user.role}}</h5>
              </template>
              <hr class="my-4">
              <b-btn variant="info" to="/admin/users">Go Back</b-btn>
              <b-btn variant="danger" @click.stop="deletebook(user._id)">Delete</b-btn>
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
      user: []
    }
  },
  components: {
    appHeader: AdminHeader,
  },
  created () {

    axios.get(`http://localhost:3000/users/` + this.$route.params.id)
    .then(response => {
      this.user = response.data
    })
    .catch(err => {
      this.error = err.message
    })
  },
  methods: {
    deletebook (userId) {
      axios.delete('http://localhost:3000/users/' + userId)
      .then((result) => {
        router.push({
          name: 'users'
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
