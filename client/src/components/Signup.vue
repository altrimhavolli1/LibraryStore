<template>
    <div>
        <b-form class="form">
        <h3>Account <span>Sign up</span></h3>
        <b-form-group class="form-group">
            <b-form-input
                id="input-1"
                placeholder="First Name"
                required
            ></b-form-input>
        </b-form-group>
        <b-form-group class="form-group">
            <b-form-input
                id="input-2"
                placeholder="Last Surname"
                required
            ></b-form-input>
        </b-form-group>
        <b-form-group class="form-group">
            <b-form-input
                id="input-3"
                placeholder="Address, House No. & Street Name"
                required
            ></b-form-input>
        </b-form-group>
        <b-form-group class="form-group">
            <b-form-input
                id="input-4"
                type="email"
                placeholder="Email"
                required
            ></b-form-input>
        </b-form-group>
        <b-form-group>
            <b-form-input
                id="input-5"
                v-model="password"
                :state="passwordState"
                aria-describedby="input-live-feedback"
                type="password"
                placeholder="Password 8 characters"
                trim
            ></b-form-input>
        </b-form-group>
        <b-form-group>
            <b-form-input
                id="input-6"
                v-model="retypePassword"
                :state="retypePasswordState"
                type="password"
                placeholder="Retype Password"
                required
            ></b-form-input>
        </b-form-group>
      <b-button type="submit" variant="primary">Sign up</b-button>
    </b-form>
    </div>
</template>

<script>
export default {
    computed: {
      passwordState() {
        return this.password.length >= 8 ? true : false
      },
      retypePasswordState() {
          return (this.retypePassword.length !== this.password.length) ? false : true
      }
    },
    data() {
      return {
        password: '',
        retypePassword: '',
      }
    }

}
</script>

<style scoped>
    .form {
        margin: 109px 0;
        padding: 50px;
        background-color: #f2f2f2;
        border-radius: 20px;
    }
    .form {
        width: 35%;
        margin-left: 32.5%;
    }

    .form h3 {
        text-align: center;
        padding-bottom: 20px;
        color: #34495E;
    }
    .form h3 span {
        color: #41B883;
    }
</style>