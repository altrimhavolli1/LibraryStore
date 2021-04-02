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
                <hr>
                <br>
                <div class="text-center">
                    <div class="container">
                        <div class="row">
                            <div
                                class="col-md-3 col-sm-6"
                                v-for="product in products"
                                :key="product.id"
                            >
                                <div>
                                    <b-card
                                        class="mb-4"
                                        :img-src="`http://localhost:3000/${product.bookImage}`"
                                        img-top
                                        tag="article"
                                        style="max-width: 20rem;"
                                    >
                                        <b-card-text class="product-grid">
                                            {{product.title}}
                                        </b-card-text>
                                        <b-card-text>
                                            ${{product.price}}
                                        </b-card-text>

                                        <b-button href="#" variant="outline-info">View More</b-button>
                                    </b-card>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <br>
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
        <div class="container about">
            <div class="row justify-content-center">
                <div class="col-md-12 col-sm-6 col-xs-12">
                    <div class=" row justify-content-center">
                        <div class="col-md-5 section-about">
                            <h2 class="aboutus-title">Learn More</h2>
                            <p class="aboutus-text">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, eaque tempore exercitationem neque assumenda impedit! 
                                Debitis distinctio veritatis unde perferendis dignissimos iure animi voluptates ab modi aliquid. Placeat, nemo velit.
                            </p>
                            <div>
                                <b-button 
                                        type="submit" 
                                        pill
                                        to="/about"
                                        variant="outline-dark" 
                                        size="md"
                                    >About Us</b-button>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <p>
                                <img src="../assets/images/undraw_laravel_and_vue_59tp.svg" alt="image" class="img-fluid">
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br>
    </div>
</template>

<script>
    import Header from './Header.vue';
    export default {
        components: {
            appHeader: Header
        },
        computed: {
            products() {
                return this.$store.state.products.slice(0, 4);
            },
        },
        mounted() {
            this.$store.dispatch("getProducts");
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

    .about{
    padding: 9rem 0;
}
.section-about{
    padding-top: 2.5rem;
    padding-right: 5rem;
}

.section-about h2 {
    padding-top: 8rem;;
    padding-bottom: 1rem;
}

.section-about p{
    color: #606060;
    font-size: 14px;
    line-height: 22px;
}

.section-about button {
    margin-top: 1rem;
}

    .bestselling-books{
        font-size: 46px;
        color: #161619;
        font-weight: 400;
        text-align: center;
        margin: 0;
    }

    .product-grid {
        font-size: 16px;
        font-weight: bold;
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