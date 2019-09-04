import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
  {
    path:'/',
    name:'start',
    component: () => import('./components/mainweb/start.vue'),
  },
  {
  path:'/showcase',
  name:'showcase',
  component: () => import('./components/mainweb/showcase.vue'),
  },
  {
  path:'/about',
  name:'about',
  component: () => import('./components/mainweb/about.vue'),
  },
  {
  path:'/service',
  name:'service',
  component: () => import('./components/mainweb/service.vue'),
  },
  {
    path:'/blog',
    name:'blog',
    component: () => import('./components/mainweb/blog.vue'),
  },
  {
  path:'/contact',
  name:'contact',
  component: () => import('./components/mainweb/contact.vue'),
  },

  ]
});
