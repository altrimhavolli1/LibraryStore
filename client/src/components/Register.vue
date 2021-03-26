<template>
  <div>
      <appHeader/>
      <div class="form">
        <b-container>
            <b-row class="justify-content-md-center mt-4">
                <b-col col md="6">
                    <b-card
                      header="Account Register"
                      header-bg-variant="info"
                      header-text-variant="white"
                    >
                      <b-card-text>
                          <div v-if="error" class="alert alert-danger">{{error}}</div>
                          <b-form>
                              <b-form-group>
                                  <b-form-input
                                      id="first-name"
                                      type="text"
                                      placeholder="First Name"
                                      value
                                      autofocus
                                      v-model="name"
                                      size="lg"
                                  ></b-form-input>
                              </b-form-group>
                              <b-form-group>
                                  <b-form-input
                                      id="last-name"
                                      type="text"
                                      placeholder="Last Name"
                                      value
                                      autofocus
                                      v-model="lastName"
                                      size="lg"
                                  ></b-form-input>
                              </b-form-group>
                              <b-form-group>
                                  <b-form-input
                                      id="address"
                                      type="text"
                                      placeholder="Address, House No. & Street Name"
                                      value
                                      autofocus
                                      v-model="address"
                                      size="lg"
                                  ></b-form-input>
                              </b-form-group>
                              <b-form-group>
                                  <b-form-input
                                      id="email"
                                      type="text"
                                      placeholder="Enter Email"
                                      value
                                      autofocus
                                      v-model="email"
                                      size="lg"
                                  ></b-form-input>
                              </b-form-group>
                              <b-form-group>
                                  <b-form-input
                                      id="password"
                                      type="password"
                                      placeholder="Password must be 6 characters"
                                      value
                                      autofocus
                                      v-model="password"
                                      size="lg"
                                  ></b-form-input>
                              </b-form-group>
                              <b-form-group align="right">
                                  <b-button 
                                      type="submit" 
                                      pill 
                                      variant="outline-info" 
                                      size="lg"
                                      @click.prevent="registerUser"
                                  >Register</b-button>
                              </b-form-group>
                          </b-form>
                      </b-card-text>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
      </div>
  </div>
</template>

<script>
import Header from './Header.vue';
import router from '@/router';

export default {
    data() {
        return {
            name: '',
            lastName: '',
            address: '',
            email: "",
            password: "",
            role: "User",
            error: null,
        };
    },
    components: {
        appHeader: Header,
    },
    computed: {
    },
    methods: {
        registerUser(){
            this.$store.dispatch("register", {
                firstName: this.name,
                lastName: this.lastName,
                address: this.address,
                email: this.email,
                password: this.password,
                role: this.role,
            })
            .then(res => {
                this.$store.dispatch('getProfile')
                router.push({name: "home"})
            })
        .catch(err => {
          this.error = err.message;
        })
    }
    }
};
</script>

<style scoped>
    .form {
        background-image: url('../assets/images/backgroung-Login.svg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        padding: 15rem 0;
    }
</style>
