<template>
  <div>
    <app-header></app-header>
    <div class="form">
      <b-container>
        <b-row class="justify-content-md-center mt-4">
          <b-col col md="6">
            <b-card
              header="Account Login"
              header-bg-variant="info"
              header-text-variant="white"
            >
              <b-card-text>
                <div v-if="error" class="alert alert-danger">{{ error }}</div>
                <b-form>
                  <b-form-group>
                    <b-form-input
                      id="input-1"
                      type="text"
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
                      required
                      placeholder="Enter Password"
                      size="lg"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group align="right">
                    <b-button
                      type="submit"
                      pill
                      variant="outline-info"
                      size="lg"
                      @click.prevent="submit"
                      >Login</b-button
                    >
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
import Header from "./Header.vue";
import axios from "axios";
import router from "@/router";

// import { createNamespacedHelpers } from 'vuex';
// const { mapGetters, mapActions, mapMutations } = createNamespacedHelpers('Auth');

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      error: null,
    };
  },
  // computed: {
  //     ...mapGetters(['error_message'])
  // },
  components: {
    appHeader: Header,
  },
  methods: {
    // ...mapActions(['login', 'getProfile']),
    // loginUser(){
    //     const user = {
    //         email: this.form.email,
    //         password: this.form.password
    //     };
    //     this.login(user)
    //         .then(res => {
    //             if(res.data.success){
    //                 console.log('Login success');
    //                 this.getProfile()
    //                     .then(res => {
    //                         if(res.data.success){
    //                             router.push({ name: 'home' });
    //                         }
    //                     })
    //                     .catch(err => console.log(err))
    //             } else {
    //                 console.log('Login failed!');
    //             }
    //         })
    //         .catch(err => console.log('error'))
    // }
    async submit() {
      let user = {
        email: this.form.email,
        password: this.form.password,
      };
      await axios.post("http://localhost:3000/login", user).then((res) => {
          if (res.data.role === "User") {
            localStorage.setItem("token", res.data.token);
            router.push({ name: "home" });
          } else if (res.data.role === "Admin") {
            localStorage.setItem("token", res.data.token);
            router.push({ name: "admin" });
          }
        }, err => {
          this.error = err.message;
        })
    },
  },
};
</script>

<style scoped>
.form {
  background-image: url("../assets/images/backgroung-Login.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 15rem 0;
}
</style>
