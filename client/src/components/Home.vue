<template>
    <div>
        <app-header></app-header>
        <div class="product-overwiew">
            <div>
                <h1>Featured Books of the</h1>
            <span>February</span>
            <b-button
                class="btn-see-more"
                type="button"
                to="/shop"
                variant="outline-dark"
                size="lg"
            >See more</b-button>
            </div>
            <div class="img-header">
                <img src="../assets/images/vue-ninja.png" alt="">
            </div>
        </div>
        <div class="container">
            <br><br>
            <div>
                <h1 class="bestselling-books">Bestselling Books</h1>
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
        </div>
    </div>
</template>

<script>
    import Header from './Header.vue';
    export default {
        components: {
            appHeader: Header
        },
        mounted() {
        },
    }
</script>

<style scoped>

    .product-overwiew{
        padding: 10rem 0 5rem 0;
        width: 100%;
        background: url("../assets/HeaderBackground.jpg") no-repeat border-box;
        background-size: cover;
        display: flex;
        justify-content: space-around;
    }

    .product-overwiew h1 {
        font-size: 50px;
        color: #161619;
        font-weight: 500;
        padding-top: 200px;
    }   

    .product-overwiew span {
        display: block;
        font-size: 56px;
        color: #161619;
        font-weight: 700;
    }

    .img-header img{
        width: 600px;
        height: 600px;
    }

    .bestselling-books{
        font-size: 46px;
        color: #161619;
        font-weight: 400;
        text-align: center;
        margin: 0;
    }

    @media only screen and (max-width: 1200px) {
        .product-overwiew{
            background-size: 50rem;
            background-position: 330px 120px;
        }    
    }

    @media only screen and (max-width: 1096px) {
        .product-overwiew{
            background-size: 50rem;
            background-position: 250px 50px;
        }
        .product-overwiew h1{
            font-size: 40px;
            padding-top: 70px;
        }
        .product-overwiew span{
            font-size: 50px;
        }
    }

    @media only screen and (max-width: 991px){
        .product-overwiew{
            padding: 5rem 0 5rem 0;
            padding-bottom: 25rem;
            background-size: 50rem;
            background-position: -50px 250px;
        }

        .product-overwiew h1{
            padding-top: 20px;
            text-align: center;
        }
        .product-overwiew span{
            font-size: 50px;
            padding-left: 130px;
        }

        .btn-see-more{
            margin-left: 130px;
        }
    }

    @media only screen and (max-width: 770px){
        .product-overwiew{
            padding: 5rem 0 5rem 0;
            padding-bottom: 25rem;
            background-size: 45em;
            background-position: -100px 250px;
        }

        .product-overwiew h1{
            padding-top: 20px;
            text-align: center;
        }
        .product-overwiew span{
            font-size: 50px;
            padding-left: 40px;
        }

        .btn-see-more{
            margin-left: 40px;
        }
    }

    @media only screen and (max-width: 600px) {
        .product-overwiew{
            padding-top: 2rem;
            padding-bottom: 15rem;
            background-size: 35em;
            background-position: center bottom;
        }

        .product-overwiew h1{
            padding-top: 20px;
            text-align: center;
        }
        .product-overwiew span{
            padding-left: 0;
            font-size: 50px;
            text-align: center;
        }

        .btn-see-more{
            width: 60%;
            margin-left: 20%;
            display: flex;
            justify-content: center;
        }
    }

    
</style>