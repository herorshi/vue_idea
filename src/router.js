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
  {
    path:'/banner',
    name:'banner',
    component: () => import('./components/mainweb/banner-logo'),
  },
  {
  path:'/blog_detail',
  name:'blog_detail',
  component: () => import('./components/mainweb/blog-detail.vue'),
  },
  {
    path:'/domain',
    name:'domain',
    component: () => import('./components/mainweb/domain'),
  },
  {
  path:'/email_hosting',
  name:'emailhosting',
  component: () => import('./components/mainweb/emailhosting.vue'),
  },
  {
    path:'/facebook',
    name:'facebook',
    component: () => import('./components/mainweb/facebook_ads.vue'),
  },
  {
    path:'/google',
    name:'google',
    component: () => import('./components/mainweb/google.vue'),
  },
  {
    path:'/hosting',
    name:'hosting',
    component: () => import('./components/mainweb/hosting.vue'),
  },
  {
    path:'/linkweb',
    name:'linkweb',
    component: () => import('./components/mainweb/linkweb.vue'),
  },
  {
    path:'/webapp',
    name:'webapp',
    component: () => import('./components/mainweb/website_app.vue'),
  },

  ]
});
