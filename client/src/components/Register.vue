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
                        <b-form>
                            <b-form-group>
                                <b-form-input
                                    id="first-name"
                                    type="text"
                                    placeholder="First Name"
                                    required
                                    size="lg"
                                ></b-form-input>
                            </b-form-group>
                            <b-form-group>
                                <b-form-input
                                    id="last-name"
                                    type="text"
                                    placeholder="Last Name"
                                    required
                                    size="lg"
                                ></b-form-input>
                            </b-form-group>
                            <b-form-group>
                                <b-form-input
                                    id="address"
                                    type="text"
                                    placeholder="Address, House No. & Street Name"
                                    required
                                    size="lg"
                                ></b-form-input>
                            </b-form-group>
                            <b-form-group>
                                <b-form-input
                                    id="email"
                                    type="email"
                                    placeholder="Enter Email"
                                    required
                                    size="lg"
                                ></b-form-input>
                            </b-form-group>
                            <b-form-group>
                                <b-form-input
                                    id="password"
                                    type="password"
                                    v-model="password"
                                    :state="passwordState"
                                    placeholder="Password must be 8 characters"
                                    required
                                    size="lg"
                                ></b-form-input>
                            </b-form-group>
                            <b-form-group>
                                <b-form-input
                                    id="retype-password"
                                    type="password"
                                    v-model="retypePassword"
                                    :state="retypePasswordState"
                                    placeholder="Retype Password"
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
export default {
    data() {
      return {
          password: '',
          retypePassword: '',
      }
    },
    computed: {
        passwordState() {
            return this.password.length >= 8 ? true : false
        },
        retypePasswordState() {
          return (this.retypePassword.length !== this.password.length) ? false : true
      }
    },
};
</script>

<style scoped>
    
</style>
