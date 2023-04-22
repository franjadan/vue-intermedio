import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/HomeView.vue';
import Posts from './views/PostsView.vue';
import Post from './components/Post.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history', //Elimino el # de la ruta
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/posts',
            name: 'posts',
            component: Posts
        },
        {
            path: '/posts/:id',
            name: 'post',
            component: Post,
            meta: {
                auth: true,
            }
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
});

const authUser = false;

router.beforeEach((to, from, next) => {
    //Si la ruta necesita autorizacion y el usuario no está autenticado cambio la siguiente ruta, si lo está le dejo pasar
    if(to.meta.auth && !authUser)
        next('/')
    else
        next();
});

export default router;