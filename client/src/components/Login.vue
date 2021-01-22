<template>
  <div>
    <b-form class="form">
        <h3>Account <span>Login</span></h3>
        <b-form-group class="form-group">
            <b-form-input
                id="input-1"
                type="email"
                placeholder="Enter Email"
                required
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
            ></b-form-input>
        </b-form-group>

      <b-button type="submit" variant="primary">LogIn</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
    computed: {
        passwordState() {
            return this.password.length >= 8 ? true : false
        }
    },
    data() {
      return {
          password: '',
      }
    },
};
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
