<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="#" class="navbar-logo">
                <router-link to="/">
                    <img src="../../assets/logo.png" class="d-inline-block aligin-top">Library Store
                </router-link>
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/admin">Dashboard</b-nav-item>
                    <b-nav-item to="/admin/users">Users</b-nav-item>
                    <b-nav-item to="/admin/books">Books</b-nav-item>
                    <b-nav-item to="/admin/contacts">Contacts</b-nav-item>
                </b-navbar-nav>
                <!-- Right aligned nav items if user is logged in -->
                <!-- <template v-if="!user.loggedIn">
                    <b-navbar-nav class="ml-auto" right>
                        <b-navbar-nav>
                            <b-nav-item to="/login">Login</b-nav-item>
                            <b-nav-item to="/register">Register</b-nav-item>
                        </b-navbar-nav>
                    </b-navbar-nav>
                </template> -->
                <!-- Right aligned nav items if user is not logged in-->
                <!-- <template v-else> -->
                    <b-navbar-nav class="ml-auto" right>
                        <b-navbar-nav>
                            <b-nav-item to="/">Front End</b-nav-item>
                        </b-navbar-nav>
                        <b-nav-item-dropdown right>
                            <template #button-content>
                                <em>Admin</em>
                                <!-- <em>{{user.data.displayName}}</em>
                                <em>{{user.data.displayLastName}}</em> -->
                            </template>
                            <b-dropdown-item href="#">Profile</b-dropdown-item>
                            <b-dropdown-item href="#" @click.prevent="signOut">Sign Out</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                <!-- </template> -->
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