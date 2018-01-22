// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.use(router);
Vue.config.productionTip = false;

Vue.config.debug = true;


router.beforeEach(function (transition) {
  console.log(333)
    if (!sessionStorage.getItem('accessToken')) {
        next({
            path: '/login',
            query: { redirect: to.fullPath }
        })
    } else {
        next()
    }
});
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
