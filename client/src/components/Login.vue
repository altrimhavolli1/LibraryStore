<template>
  <div>
      <br><br><br>
      <b-container class="form">
          <b-row class="justify-content-md-center mt-4">
              <b-col col md="6">
                  <b-card
                    header="Account Login"
                    header-bg-variant="info"
                    header-text-variant="white"
                  >
                    <b-card-text>
                        <div v-if="error" class="alert alert-danger">{{error}}</div>
                        <b-form action="#" @submit.prevent = "submit">
                            <b-form-group>
                                <b-form-input
                                    id="input-1"
                                    type="email"
                                    placeholder="Enter Email"
                                    required
                                    autofocus
                                    v-model="form.email"
                                    size="lg"
                                ></b-form-input>
                            </b-form-group>
                            <b-form-group>
                                <b-form-input
                                    id="input-2"
                                    type="password"
                                    v-model="form.password"
                                    :state="passwordState"
                                    placeholder="Enter Password"
                                    required
                                    size="lg"
                                ></b-form-input>
                            </b-form-group>
                            <b-form-group align="right">
                                <b-button 
                                    type="submit" 
                                    pill 
                                    variant="outline-info" 
                                    size="lg"
                                >Login</b-button>
                            </b-form-group>
                        </b-form>
                    </b-card-text>
                  </b-card>
              </b-col>
          </b-row>
      </b-container>
      <br><br><br><br><br><br>
  </div>
</template>

<script>
import firebase from 'firebase';
import router from '@/router';

export default {
    data() {
      return {
          form:{
            email: '',
            password: '',
          },
          error: null
      }
    },
    computed: {
        passwordState() {
            return this.form.password.length >= 6 ? true : false
        },
    },
    methods: {
        submit() {
            firebase
            .auth()
            .signInWithEmailAndPassword(this.form.email, this.form.password)
            .then(data => {
                router.push({name: "home",})
            })
            .catch(err => {
                this.error = err.message
            })
        }
    }
};
</script>

<style scoped>
    
</style>
