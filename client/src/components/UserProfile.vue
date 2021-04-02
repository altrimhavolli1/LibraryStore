<template>
    <div>
        <template v-if="userRole.user.role === 'User'">
            <appHeader/>
        </template>
        <template v-else>
            <appAdminHeader/>
        </template>
        <br>
        <div class="container">
        <b-navbar toggleable="lg">
            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item to="/">Home</b-nav-item>
            </b-navbar-nav>
            >
            <b-navbar-nav>
                <b-nav-item to="/user-profile" active>User Profile</b-nav-item>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        </div>
        <hr>
        <br><br>
        <div class="container-fluid mt-6 mb-9">
            <div class="row mt-6">
                <div class="col-md-6 mx-auto">
                    <label class="label label-ctrl">Your Name:</label>
                    <input class="form-control form-control-lg form-ctrl" placeholder="First Name" readonly v-model="user.firstName">
                    <label class="label label-ctrl">Your Surame:</label>
                    <input class="form-control form-control-lg form-ctrl" placeholder="Last Name" readonly v-model="user.lastName">
                    <label class="label label-ctrl">Your Address:</label>
                    <input class="form-control form-control-lg form-ctrl" placeholder="Address" readonly v-model="user.address">
                    <label class="label label-ctrl">Your Email:</label>
                    <input class="form-control form-control-lg form-ctrl" placeholder="Email" readonly v-model="user.email">
                    <label class="label label-ctrl">Your password:</label>
                    <input class="form-control form-control-lg form-ctrl" placeholder="Password" readonly v-model="user.password">
                </div>
            </div>
        </div>
        <br><br><br><br>
    </div>
</template>

<script>
import Header from './Header.vue';
import AdminHeader from './admin/AdminHeader.vue';
import axios from 'axios';
import { mapGetters } from 'vuex';
export default {
    data () {
        return {
            user: {}
        }
    },
    computed: {
        ...mapGetters({
            userRole: 'user'
        }),
    },
    created () {
        axios.get(`http://localhost:3000/users/${this.$route.params.id}`)
            .then(response => {
                console.log(response);
                this.user = response.data
            })
        .catch(err => {
            this.error = err.message
        })
    },
    components: {
        appHeader: Header,
        appAdminHeader: AdminHeader,
    },
}
</script>

<style scoped>
    .form-ctrl {
        width: 70%;
        margin-left: 15%;
        margin-bottom: 20px;
    }

    .label-ctrl {
        margin: 0;
        width: 70%;
        margin-left: 15%;
        font-size: 19px;
        font-weight: bold;
    }
</style>