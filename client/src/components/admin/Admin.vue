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
    // mounted(){
    //     if(this.$store.getters.isLoggedIn !== ''){
    //         if(this.$store.getters.user.role === 'User'){
    //             router.push({name: "home"})
    //         } else {
    //             router.push({name: "admin"})
    //         }
    //     } else {
    //         router.push('/login');
    //     }
    // },
    components: {
        appHeader: AdminHeader
    }
}
</script>

<style scoped>
    
</style>