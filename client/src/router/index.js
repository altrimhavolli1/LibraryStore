import Home from '@/components/Home.vue';
import Shop from '@/components/Shop.vue';
import About from '@/components/About.vue';
import ClientContact from '@/components/Contact.vue';
import UserProfile from '@/components/UserProfile.vue';

import AdminPanel from '@/components/admin/Admin.vue';

import Books from '@/components/admin/Books.vue';
import Book from '@/components/admin/products/ShowBook.vue';
import AddBook from '@/components/admin/products/AddBook.vue';
import EditBook from '@/components/admin/products/EditBook.vue';

import Users from '@/components/admin/Users.vue';
import User from '@/components/admin/users/ShowUser.vue';
import AddUser from '@/components/admin/users/AddUser.vue';
import EditUser from '@/components/admin/users/EditUser.vue';

import Contacts from '@/components/admin/Contacts.vue';
import Contact from '@/components/admin/ShowContact.vue';

import Login from '@/components/Login.vue';
import Register from '@/components/Register.vue';

import VueRouter from 'vue-router';

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/shop', name: 'shop', component: Shop },
        { path: '/about', name: 'about', component: About },
        { path: '/contact', name: 'contact', component: ClientContact},
        { path: '/user-profile/:id', name: 'user-profile', component: UserProfile},
        { path: '/admin', name: 'admin', component: AdminPanel},
        { path: '/admin/books', name: 'books', component: Books},
        { path: '/admin/show-book/:id', name: 'show-book', component: Book},
        { path: '/admin/add-book', name: 'add-book', component: AddBook },
        { path: '/admin/edit-book/:id', name: 'edit-book', component: EditBook},
        { path: '/admin/users', name: 'users', component: Users},
        { path: '/admin/show-user/:id', name: 'show-user', component: User},
        { path: '/admin/add-user', name: 'add-user', component: AddUser},
        { path: '/admin/edit-user/:id', name: 'edit-user', component: EditUser},
        { path: '/admin/contacts', name: 'admin-contacts', component: Contacts},
        { path: '/admin/show-contact/:id', name: 'show-contact', component: Contact},
        { path: '/login', name: 'login', component: Login},
        { path: '/register', name: 'register', component: Register},
    ]
})