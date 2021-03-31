import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Article from '../views/Article.vue';
import Course from '../views/Course.vue';

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
    component: () => import(/* webpackChunkName: "guia-iniciante" */ '../views/FaqGuia.vue'),
  },
  {
    path: '/cursos-iniciantes',
    name: 'cursos-iniciantes',
    component: () => import(/* webpackChunkName: "cursos-iniciantes" */ '../views/Courses.vue'),
  },
  {
    path: '/carreira',
    name: 'carreira',
    component: () => import(/* webpackChunkName: "carreira" */ '../views/FaqCarreira.vue'),
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: () => import(/* webpackChunkName: "perfil" */ '../views/Form.vue'),
  },
  {
    path: '/article/:id',
    name: 'article',
    component: Article,
  },
  {
    path: '/course/:id',
    name: 'course',
    component: Course,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'active',
});

export default router;
