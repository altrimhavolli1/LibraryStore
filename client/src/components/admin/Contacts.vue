<template>
    <div>
        <app-header></app-header>
        <br>
        <b-container>
            <b-row class="justify-content-md-center mt-4">
                <b-col class="justify-content-md-center" cols="16">
                    <h2>Contact List</h2>
                    <hr>
                    <div v-if="error" class="alert alert-danger">{{error}}</div>
                    <table class="table table-bordered table-striped">
                        <thead>
                            <tr class="text-center bg-info text-light">
                                <td>Full Name</td>
                                <td>Email</td>
                                <td>Subject</td>
                                <td>Message</td>
                                <td>View</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="" v-for="(contact, i) in contacts" :key="i">
                                <td>{{contact.fullName}}</td>
                                <td>{{contact.email}}</td>
                                <td>{{contact.subject}}</td>
                                <td>{{contact.message}}</td>
                                <td><b-button class="btn btn-light" @click.stop="viewContact(contact._id)"><i class="fas fa-eye"></i></b-button></td>
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
            contacts: [],
            error: null
        }
    },
    components: {
        appHeader: AdminHeader,
    },
    async created () {
        
        await axios.get('http://localhost:3000/contacts')
            .then(response => {
                this.contacts = response.data
        })
        .catch(err => {
            this.error = err.msg
        })
    },
    methods: {
        viewContact (contactId) {
            router.push({
                name: 'show-contact',
                params: { id: contactId }
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