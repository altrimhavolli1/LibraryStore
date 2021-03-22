<template>
    <div>
        <app-header></app-header>
        <h1>Admin Panel</h1>
    </div>
</template>

<script>
import AdminHeader from './AdminHeader.vue';
import router from '@/router';
export default {
    created(){
        // user is not authorized
        if(localStorage.getItem('token') === null){
            router.push('/login');
        }
    },
    components: {
        appHeader: AdminHeader
    }
}
</script>

<style scoped>
    
</style>