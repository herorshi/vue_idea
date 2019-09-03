import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


import $ from 'jquery'

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
// import "wowjs/dist/wow.min.js";
// import "jquery.counterup/jquery.counterup.min.js";

// import "jquery.stellar/jquery.stellar.js";

// import "swipebox/src/js/jquery.swipebox.min.js";
// import "@/assets/js/settings.js";
// import "@/assets/js/jquery.min.js";
// import "@/assets/js/jquery.vopacity.js";
// import "@/assets/js/jquery.textrotater.js";
// import "@/assets/js/jquery.counterup.min.js";
// import "@/assets/js/jquery.textrotater.js";
// import "@/assets/js/jquery.stellar.js";
// import "@/assets/js/jquery.vopacity.js";
// import "@/assets/js/bootstrap.min.js";
// import "@/assets/js/waypoints.min.js";
// import "@/assets/js/wow.js";
// import "@/assets/js/masonry.min.js";
// import "@/assets/js/jquery.swipebox.js";
// import "@/assets/js/jquery.themepunch.tools.min.js";
// import "@/assets/js/jquery.themepunch.revolution.min.js";
// import "@/assets/js/settings.js";
// import "@/assets/js/scripts.js";



import "@/assets/fonts/fpslineicons.woff";
import "@/assets/fonts/jaapokkienchance-regular-webfont.woff2";
import "@/assets/fonts/Kanit-Regular.ttf";
import "@/assets/css/main.css";



// import Datetime from "vue-datetime";
// You need a specific loader for CSS files
// import "vue-datetime/dist/vue-datetime.css"
 
// Vue.use(Datetime)
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
// import "waypoints/lib/jquery.waypoints.min.js";
// import "jquery.counterup/jquery.counterup.min.js";
// import "jquery.stellar/jquery.stellar.js";



Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
