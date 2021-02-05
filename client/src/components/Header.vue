<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    
    <b-navbar-brand href="#" class="navbar-logo">
        <router-link to="/">
            <img src="../assets/logo.png" class="d-inline-block aligin-top">Library Store
        </router-link>
    </b-navbar-brand>
    
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/shop">Shop</b-nav-item>
        <b-nav-item to="/about">About</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto" right>
        <b-navbar-nav>
            <b-nav-item to="/login">Login</b-nav-item>
            <b-nav-item to="/register">Register</b-nav-item>
        </b-navbar-nav>
      </b-navbar-nav>

      <!-- <b-navbar-nav class="ml-auto">
        <b-navbar-nav>
            <b-nav-item to="/cart">Cart</b-nav-item>
        </b-navbar-nav>
        <b-nav-item-dropdown right>
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav> -->
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
  img {
    width: 4rem;
    height: 4rem;
  }
  .navbar-logo a {
    text-decoration: none;
    text-transform: uppercase;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
  }
</style>