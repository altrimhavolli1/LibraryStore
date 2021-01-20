<template>
    <div>
        <div class="product-overwiew">
            <h1>Featured Books of the</h1>
            <span>February</span>
            <button>See More</button>
            <div class="image-header"></div>
        </div>
        <br><br><br><br><br><br><br>
        <div>
            <h1 class="bestselling-books">Bestselling Books</h1>
            <app-books></app-books>
            <router-link 
                class="see-more-btn"
                to="/shop"
            >See More in Shop</router-link>
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
        width: 100%;
    }

    .product-overwiew h1 {
        display: block;
        font-size: 56px;
        color: #161619;
        font-weight: 400;
        margin: 0;
        padding-top: 130px;
        padding-left: 80px;
    }   

    .product-overwiew span {
        display: block;
        font-size: 56px;
        color: #161619;
        font-weight: 700;
        padding-left: 80px;
    }

    .product-overwiew button {
        color: #fff;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.5;
        cursor: pointer;
        background-color: #161619;
        border-color: #161619;
        padding: 0.75rem 3rem;
        margin-left: 80px;
    }

    .image-header {
        position: absolute;
        background: url("../assets/images/Fullstack-Vue-The-Complete-Guide-to-Vue.js.png") center/cover no-repeat border-box;
        background-size: 40%;
        width: 50%;
        height: 70%;
        z-index: 1;
        top: 100px;
        right: 1%;
    }

    .bestselling-books{
        font-size: 46px;
        color: #161619;
        font-weight: 400;
        text-align: center;
        margin: 0;
        padding: 80px 0 60px 0;
    }

    .see-more-btn{
        color: #000;
        font-weight: 500;
        font-size: 18px;
        line-height: 1.5;
        text-decoration: none;
        cursor: pointer;
        background-color: #41B883;
        border: none;
        padding: 0.75rem 3rem;
        margin-left: 38.5rem;
    }
</style>