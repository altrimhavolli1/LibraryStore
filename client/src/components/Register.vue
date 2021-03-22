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
                          <b-form
                          @submit.prevent = "submit">
                              <b-form-group>
                                  <b-form-input
                                      id="first-name"
                                      type="text"
                                      placeholder="First Name"
                                      value
                                      autofocus
                                      v-model="form.name"
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
                                      v-model="form.lastName"
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
                                      v-model="form.address"
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
                                      v-model="form.email"
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
                                      v-model="form.password"
                                      size="lg"
                                  ></b-form-input>
                              </b-form-group>
                              <b-form-group align="right">
                                  <b-button 
                                      type="submit" 
                                      pill 
                                      variant="outline-info" 
                                      size="lg"
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
import axios from 'axios';
import router from '@/router';

export default {
    data() {
        return {
            form: {
                role: "User"
            },
            error: null,
        };
    },
    components: {
        appHeader: Header,
    },
    computed: {
    },
    methods: {
        submit() {
            let newUser = {
                firstName: this.form.name,
                lastName: this.form.lastName,
                address: this.form.address,
                email: this.form.email,
                password: this.form.password,
                role: this.form.role
            }
            axios.post('http://localhost:3000/users', newUser)
                .then(res => {
                    router.push({name: "home"})
                }, err => {
                    let errors = err.response.data.errors;
                    if(errors){
                        if(errors.firstName && errors.lastName && errors.address && errors.email && errors.password){
                            this.error = 'Please fill all fields!'
                        }
                        else if(errors.email){
                            this.error = 'Please enter a valid email address!'
                        } else if(errors.password){
                            this.error = 'Min password length is 6 characters!'
                        }
                    }
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
