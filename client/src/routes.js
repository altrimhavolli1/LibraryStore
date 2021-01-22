import Home from './components/Home.vue';
import Shop from './components/Shop.vue';
import About from './components/About.vue';
import AdminPanel from './components/admin/Admin.vue';
import Login from './components/Login.vue';
import Signup from './components/Signup.vue';


export const routes = [
    { path: '/', component: Home },
    { path: '/shop', component: Shop },
    { path: '/about', component: About },
    { path: '/admin', component: AdminPanel },
    { path: '/login', component: Login},
    { path: '/signup', component: Signup},
];