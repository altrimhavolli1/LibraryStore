<template>
  <div>
    <app-header></app-header>
    <div class="form">
      <b-container>
        <b-row class="justify-content-md-center mt-4">
          <b-col col md="10">
            <b-form @submit="onSubmit" class="books">
              <h2>Edit User</h2>
              <div v-if="error" class="alert alert-danger">{{error}}</div>
                <b-form-group>
                  <b-form-input
                    id="firstName"
                    type="text"
                    placeholder="Name"
                    value
                    autofocus
                    size="lg"
                    v-model.trim="user.firstName"
                  ></b-form-input>
                </b-form-group>
                <b-form-group>
                  <b-form-input
                    id="lastName"
                    type="text"
                    placeholder="Surname"
                    value
                    autofocus
                    size="lg"
                    v-model="user.lastName"
                  ></b-form-input>
                </b-form-group>
                <b-form-group>
                  <b-form-input
                    id="address"
                    type="text"
                    placeholder="Address"
                    value
                    autofocus
                    size="lg"
                    v-model="user.address"
                  ></b-form-input>
                </b-form-group>
                <b-form-group>
                  <b-form-input
                    id="email"
                    type="text"
                    placeholder="Email"
                    value
                    size="lg"
                    v-model="user.email"
                  ></b-form-input>
                </b-form-group>
                <b-form-group>
                  <b-form-input
                    id="password"
                    type="password"
                    placeholder="Password"
                    value
                    size="lg"
                    v-model="user.password"
                  ></b-form-input>
                </b-form-group>
                <b-form-group>
                  <b-form-input
                    id="role"
                    type="text"
                    placeholder="Role"
                    value
                    size="lg"
                    v-model="user.role"
                  ></b-form-input>
                </b-form-group>
                <b-button
                  variant="info"
                  size="lg"
                  pill
                  to="/admin/users"
                >Go Back</b-button>
                <b-button
                  type="submit"
                  pill
                  class="float-right"
                  size="lg"
                  variant="success"
                >Update</b-button>
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
  name: 'EditUser',
  data () {
    return {
      user: {},
      error: null
    }
  },
  created () {

    axios.get(`http://localhost:3000/users/${this.$route.params.id}`)
    .then(response => {
      this.user = response.data
    })
    .catch(err => {
      this.error = err.message
    })
  },
  components: {
    appHeader: AdminHeader
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      axios.put(`http://localhost:3000/users/` + this.$route.params.id, this.user)
      .then(response => {
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
</style>