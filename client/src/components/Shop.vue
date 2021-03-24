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
                            <b-nav-item to="/shop" active>Shop</b-nav-item>
                        </b-navbar-nav>
                    </b-collapse>
                </b-navbar>
            </div>
        <hr>
        <br><br>
        <app-book/>
        <br><br>
    </div>
</template>

<script>
import Header from './Header.vue';
import Book from './books/Book.vue';
export default {
    components: {
        appHeader: Header,
        appBook: Book,
    }
}
</script>

<style scoped>
    div {
        text-align: center
    }
</style>