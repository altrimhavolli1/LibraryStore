import Home from '@/components/Home.vue';
import Shop from '@/components/Shop.vue';
import About from '@/components/About.vue';
import AdminPanel from '@/components/admin/Admin.vue';
import Login from '@/components/Login.vue';
import Register from '@/components/Register.vue';
import VueRouter from 'vue-router';
import firebase from 'firebase';
import router from './index';

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/shop', component: Shop },
        { path: '/about', component: About },
        { path: '/admin', component: AdminPanel,
        meta:{
            requiredAuth: true
        }
    },
        { path: '/login', name: 'login', component: Login},
        { path: '/register', component: Register},
    ]
})

router.beforeEach(async (to, from, next) => {
    const requiredAuth = to.matched.some(record => record.meta.requiredAuth);
    if(requiredAuth && !await firebase.getCurrentUser()){
        next('login');
    } else {
        next();
    }
});