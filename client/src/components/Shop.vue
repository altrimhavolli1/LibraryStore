<template>
    <div>
        <appHeader/>
        <img src="../assets/logo.png" alt="">
        <h3>This is shop</h3>
    </div>
</template>

<script>
import Header from './Header.vue';
export default {
    components: {
        appHeader: Header
    },
}
</script>

<style scoped>
    div{
        text-align: center;
    }
</style>