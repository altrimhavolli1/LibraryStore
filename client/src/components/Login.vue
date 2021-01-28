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
                        <b-form>
                            <b-form-group>
                                <b-form-input
                                    id="input-1"
                                    type="email"
                                    placeholder="Enter Email"
                                    required
                                    size="lg"
                                ></b-form-input>
                            </b-form-group>
                            <b-form-group>
                                <b-form-input
                                    id="input-2"
                                    type="password"
                                    v-model="password"
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
                                >LogIn</b-button>
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
          email: '',
          password: '',
      }
    },
    computed: {
        passwordState() {
            return this.password.length >= 8 ? true : false
        },
    },
};
</script>

<style scoped>
    
</style>
