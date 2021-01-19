<template>
    <nav class="navbar-header">
        <div class="header-logo">
            <img src="../assets/logo.png">
            <router-link to="/" class="navbar-logo" tag="li"><a>Library Store</a></router-link>
        </div>
        <nav class="main-nav">
            <ul class="navbar-items">
                <router-link class="navbar-item" to="/" tag="li"><a>Home</a></router-link>
                <router-link class="navbar-item" to="/shop" tag="li"><a>Shop</a></router-link>
                <router-link class="navbar-item" to="/about" tag="li"><a>About</a></router-link>
                <router-link class="navbar-item" to="/contact" tag="li"><a>Contact</a></router-link>
            </ul>
        </nav>
        <nav class="right-nav">
            <ul class="navbar-right">
                <router-link class="navbar-right-item" to="/signup" tag="li"><a>Sign up</a></router-link> 
                <router-link class="navbar-right-item" to="/login" tag="li"><a>Login</a></router-link>
                <router-link class="navbar-right-item" to="/cart" tag="li"><a>Cart</a></router-link>
            </ul>
        </nav>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    body {
        margin: 0;
        padding: 0;
    }

    .navbar-header {
        width: 100%;
        height: 80px;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);
    }

    .header-logo{
        display: flex;
        align-items: center;
    }

    .header-logo img {
        width: 4rem;
        height: 4rem;
        margin-left: 80px;
    }

    .navbar-logo {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
    }

    .navbar-logo a {
        text-decoration: none;
        text-transform: uppercase;
        color: #006622;
        font-size: 18px;
        font-weight: 700;
        padding: 0.2rem 0;
    }

    .main-nav{
        justify-content: space-around;
    }

    .navbar-items{
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
    }

    .navbar-item{
        margin: 0 1rem;
    }

    .navbar-item a {
        text-decoration: none;
        color: #2b2b2b;
        font-size: 14px;
        font-weight: 700;
        padding: 0.2rem 0;
    }

    .right-nav{
        justify-content: space-around;
    }

    .navbar-right {
        margin: 0;
        padding: 0;
        list-style: none;
        margin-right: 2px;
        display: flex;
        margin-right: 80px;
    }

    .navbar-right-item{
        margin: 0 1rem;
    }

    .navbar-right-item a{
        text-decoration: none;
        color: #2b2b2b;
        font-size: 14px;
        font-weight: 700;
        padding: 0.2rem 0;
    }
</style>