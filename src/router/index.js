import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Article from '../views/Article.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/proposito',
    name: 'proposito',
    component: () => import(/* webpackChunkName: "proposito" */ '../views/About.vue'),
  },
  {
    path: '/guia-iniciante',
    name: 'guia-iniciante',
    component: () => import(/* webpackChunkName: "guia-iniciante" */ '../views/About.vue'),
  },
  {
    path: '/cursos-iniciantes',
    name: 'cursos-iniciantes',
    component: () => import(/* webpackChunkName: "cursos-iniciantes" */ '../views/About.vue'),
  },
  {
    path: '/carreira',
    name: 'carreira',
    component: () => import(/* webpackChunkName: "carreira" */ '../views/About.vue'),
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: () => import(/* webpackChunkName: "perfil" */ '../views/About.vue'),
  },
  {
    path: '/article/:id',
    name: 'article',
    component: Article,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'active',
});

export default router;
