<template>
    <div>
        <appHeader/>
        <br>
        <div class="container">
        <b-navbar toggleable="lg">
            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item to="/">Home</b-nav-item>
            </b-navbar-nav>
            >
            <b-navbar-nav>
                <b-nav-item to="/shop" active>User Profile</b-nav-item>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        </div>
        <hr>
        <br><br>
        <div class="container-fluid mt-6 mb-9">
            <div class="row mt-6">
                <div class="col-md-6 mx-auto">
                    <label class="label">First Name:</label>
                    <input class="form-control form-ctrl" placeholder="First Name" v-model="user.firstName">
                    <label class="label">Last Name:</label>
                    <input class="form-control" placeholder="Last Name" v-model="user.lastName">
                    <label class="label">Your Address:</label>
                    <input class="form-control" placeholder="Address" v-model="user.address">
                    <label class="label">Your Email:</label>
                    <input class="form-control" placeholder="Email" v-model="user.email">
                    <label class="label">Your password:</label>
                    <input class="form-control" placeholder="Password" v-model="user.password">
                </div>
            </div>
        </div>
        <br><br><br><br>
    </div>
</template>

<script>
import Header from './Header.vue';
export default {
    data () {
        return {
            user: {},
            // error: null
        }
    },
    created () {
        axios.get(`http://localhost:3000/users/${this.$route.params.id}`)
            .then(response => {
            this.user = response.data
        })
        .catch(err => {
            this.error = err.message
        })
    },
    components: {
        appHeader: Header,
    },
}
</script>

<style scoped>
    .form-ctrl {
        margin-bottom: 20px;
    }
</style>