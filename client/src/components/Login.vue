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
                      v-model="email"
                      size="lg"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group>
                    <b-form-input
                      id="input-2"
                      type="password"
                      v-model="password"
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
                      @click.prevent="loginUser"
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
import router from "@/router";

import { mapActions } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  components: {
    appHeader: Header,
  },
  methods: {
    ...mapActions(["login", "getProfile"]),
    loginUser(){
      const user = {
        email: this.email,
        password: this.password
      };
      this.login(user)
        .then(res => {
          console.log("Login success");
          this.getProfile()
            .then(res => {
              console.log(res.data.user.role)
              router.push({name: "home"});
          })
        }).catch(err => console.log(err));
    }
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
