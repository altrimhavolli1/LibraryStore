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
    components: {
        appHeader: AdminHeader
    }
}
</script>

<style scoped>
    
</style>