<template>
    <div>
        <app-header></app-header>
        <br>
        <b-container>
            <b-row class="justify-content-md-center mt-4">
                <b-col class="justify-content-md-center" cols="16">
                    <h2>User List
                        <b-button
                            variant="info" 
                            class="float-right"
                            to="/admin/add-user"
                        >Add User</b-button>
                    </h2>
                    <hr>
                    <div v-if="error" class="alert alert-danger">{{error}}</div>
                    <table class="table table-bordered table-striped">
                        <thead>
                            <tr class="text-center bg-info text-light">
                                <td>Name</td>
                                <td>Surname</td>
                                <td>Address</td>
                                <td>Email</td>
                                <td>Password</td>
                                <td>Image</td>
                                <td>Role</td>
                                <td>Edit</td>
                                <td>Delete</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="" v-for="(user, i) in users" :key="i">
                                <td>{{user.firstName}}</td>
                                <td>{{user.lastName}}</td>
                                <td>{{user.address}}</td>
                                <td>{{user.email}}</td>
                                <td>{{user.password}}</td>
                                <td><b-img v-bind="mainProps" width="60" height="60" rounded="circle" ></b-img></td>
                                <td>{{user.role}}</td>
                                <td><b-button class="btn btn-success" @click.stop="editbook(user._id)"><i class="fas fa-edit"></i></b-button></td>
                                <td><b-button class="btn btn-danger" @click.stop="deletebook(user._id)"><i class="fas fa-trash"></i></b-button></td>
                            </tr>
                        </tbody>
                    </table>
                </b-col>
            </b-row>
            <hr>
        </b-container>
        <br>
    </div>
</template>
<script>
import AdminHeader from './AdminHeader.vue';
import axios from 'axios';
import router from '@/router';

export default {
    data () {
        return {
            users: [],
            error: null
        }
    },
    components: {
        appHeader: AdminHeader,
    },
    async created () {
        
        await axios.get('http://localhost:3000/users')
            .then(response => {
                this.users = response.data
        })
        .catch(err => {
            this.error = err.msg
        })
    },
    methods: {
        editbook (userId) {
            router.push({
                name: 'edit-user',
                params: { id: userId }
            })
        },
        deletebook (userId) {
            router.push({
                name: 'show-user',
                params: { id: userId }
            })
        }
    }
}
</script>

<style scoped>
table {
  table-layout: fixed;
  width: 100%;
  text-align: center;
}
td {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: middle;
}
</style>