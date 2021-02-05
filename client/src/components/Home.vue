<template>
    <div class="container">
        <div class="product-overwiew">
            <h1>Featured Books of the</h1>
            <span>February</span>
            <b-button
                type="button"
                to="/shop"
                variant="outline-dark"
                size="lg"
            >See more</b-button>
        </div>
        <br><br>
        <div>
            <h1 class="bestselling-books">Bestselling Books</h1>
            <app-books></app-books>
            <br><br>
            <div class="text-center">
                <b-button
                    type="button"
                    size="lg"
                    to="/shop"
                    pill
                    variant="outline-info"
                >See more in Shop</b-button>
            </div>
        </div>
        <br><br><br><br>
    </div>
</template>

<script>
    import Books from './books/Books.vue';
    export default {
        components: {
            appBooks: Books,
        }
    }
</script>

<style scoped>
    .product-overwiew{
        padding: 10rem 0 5rem 0;
        width: 100%;
        background: url("../assets/images/Fullstack-Vue-The-Complete-Guide-to-Vue.js.png") right/cover no-repeat border-box;
        background-size: 20rem;

    }

    .product-overwiew h1 {
        font-size: 50px;
        color: #161619;
        font-weight: 500;
        padding-top: 130px;
    }   

    .product-overwiew span {
        display: block;
        font-size: 56px;
        color: #161619;
        font-weight: 700;
    }

    .bestselling-books{
        font-size: 46px;
        color: #161619;
        font-weight: 400;
        text-align: center;
        margin: 0;
        /* padding: 80px 0 60px 0; */
    }

    @media screen and (max-width: 1096px) {
        .product-overwiew{
            background-size: 15rem;
            padding: 0 0 30rem 0;
            background-position: bottom center;
        }
        .product-overwiew h1{
            font-size: 40px;
            padding-top: 70px;
        }
        .product-overwiew span{
            font-size: 50px;
        }
    }
</style>