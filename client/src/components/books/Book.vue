<template>
    <div class="big-panel">
        <div class="panel">
            <div class="panel-body">
                <div class="panel-body-img">
                    <img src="../../assets/images/Fullstack-Vue-The-Complete-Guide-to-Vue.js.png" alt="">
                </div>
                <div class="panel-heading">
                    <h3 class="panel-title">Fullstack Vue</h3>
                    <h3 class="panel-author">Author</h3>
                    <small>Price: 99.99$</small>
                </div>
                <div class="panel-body-btn">
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
        <div class="panel">
            <div class="panel-body">
                <div class="panel-body-img">
                    <img src="../../assets/images/Fullstack-Vue-The-Complete-Guide-to-Vue.js.png" alt="">
                </div>
                <div class="panel-heading">
                    <h3 class="panel-title">Fullstack Vue</h3>
                    <h3 class="panel-author">Author</h3>
                    <small>Price: 99.99$</small>
                </div>
                <div class="panel-body-btn">
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
        <div class="panel">
            <div class="panel-body">
                <div class="panel-body-img">
                    <img src="../../assets/images/Fullstack-Vue-The-Complete-Guide-to-Vue.js.png" alt="">
                </div>
                <div class="panel-heading">
                    <h3 class="panel-title">Fullstack Vue</h3>
                    <h3 class="panel-author">Author</h3>
                    <small>Price: 99.99$</small>
                </div>
                <div class="panel-body-btn">
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
        <div class="panel">
            <div class="panel-body">
                <div class="panel-body-img">
                    <img src="../../assets/images/Fullstack-Vue-The-Complete-Guide-to-Vue.js.png" alt="">
                </div>
                <div class="panel-heading">
                    <h3 class="panel-title">Fullstack Vue</h3>
                    <h3 class="panel-author">Author</h3>
                    <small>Price: 99.99$</small>
                </div>
                <div class="panel-body-btn">
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
        <div class="panel">
            <div class="panel-body">
                <div class="panel-body-img">
                    <img src="../../assets/images/Fullstack-Vue-The-Complete-Guide-to-Vue.js.png" alt="">
                </div>
                <div class="panel-heading">
                    <h3 class="panel-title">Fullstack Vue</h3>
                    <h3 class="panel-author">Author</h3>
                    <small>Price: 99.99$</small>
                </div>
                <div class="panel-body-btn">
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
        <div class="panel">
            <div class="panel-body">
                <div class="panel-body-img">
                    <img src="../../assets/images/Fullstack-Vue-The-Complete-Guide-to-Vue.js.png" alt="">
                </div>
                <div class="panel-heading">
                    <h3 class="panel-title">Fullstack Vue</h3>
                    <h3 class="panel-author">Author</h3>
                    <small>Price: 99.99$</small>
                </div>
                <div class="panel-body-btn">
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .big-panel {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding-bottom: 2rem;
    }

    .panel {
        display: flex;
        flex-direction: column;
        width: 20%;
        margin: 0 6rem;
        padding-bottom: 4rem;
    }

    .panel-heading {
        text-align: center;
        padding: 14px 0 ;
    }

    .panel-title {
        font-size: 18px;
        font-weight: 700;
        padding: 0;
        margin: 0;
    }

    .panel-body-img img {
        width: 60%;
        margin-left: 20%;
    }

    .panel-author {
        text-align: center;
        font-size: 18px;
        font-weight: 700;
        padding: 0;
        margin: 0;
    }

    .panel-body-btn button {
        color: #fff;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.5;
        cursor: pointer;
        background-color: #34495E;
        border: none;
        padding: 0.75rem 3rem;
        margin:0 0 2rem 60px;
    }
</style>