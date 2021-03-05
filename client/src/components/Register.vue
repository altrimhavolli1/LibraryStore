<template>
  <div>
      <br><br><br>
      <b-container class="form">
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
                        action="#"
                        @submit.prevent = "submit">
                            <b-form-group>
                                <b-form-input
                                    id="first-name"
                                    type="text"
                                    placeholder="First Name"
                                    value
                                    required
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
                                    required
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
                                    required
                                    autofocus
                                    v-model="form.address"
                                    size="lg"
                                ></b-form-input>
                            </b-form-group>
                            <b-form-group>
                                <b-form-input
                                    id="email"
                                    type="email"
                                    placeholder="Enter Email"
                                    value
                                    required
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
                                    required
                                    autofocus
                                    v-model="form.password"
                                    :state="passwordState"
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
      <br><br><br><br><br><br>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
    data() {
        return {
            form: {
                name: "",
                lastName: "",
                address: "",
                email: "",
                password: "",
            },
            error: null,
        };
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
            .createUserWithEmailAndPassword(this.form.email, this.form.password)
            .then(data => {
                data.user
                    .updateProfile({
                        displayName: this.form.name,
                        displayLastName: this.form.lastName
                    })
                    .then(() => {});

                this.$router.push({name: "home",})
            })
            .catch(err => {
                this.error = err.message;
            });
        }
    }
};
</script>

<style scoped>
    
</style>
