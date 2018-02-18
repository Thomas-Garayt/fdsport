import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueCookies from 'vue-cookies'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueCookies);
Vue.use(BootstrapVue);

import Home from './pages/Home.vue'
import Ticketing from './pages/Ticketing'
import SingleTicketing from './pages/SingleTicketing'
import Shop from './pages/Shop'
import ManShop from './pages/ManShop'
import WomanShop from './pages/WomanShop'
import KidShop from './pages/KidShop'
import AccessoriesShop from './pages/AccessoriesShop'
import SingleProduct from './pages/SingleProduct'
import Profilling from './pages/Profilling'

const routes =  [
    {path: '/', name:'home', component: Home},
    {path: '/ticketing', name:'ticketing', component: Ticketing},
    {path: '/ticketing/:id', name:'ticketing.view', component: SingleTicketing},
    {path: '/shop', name:'shop', component: Shop},
    {path: '/shop/man', name:'manshop', component: ManShop},
    {path: '/shop/woman', name:'womanshop', component: WomanShop},
    {path: '/shop/kid', name:'kidshop', component: KidShop},
    {path: '/shop/accessories', name:'accessoriesshop', component: AccessoriesShop},
    {path: '/shop/:id', name:'shop.view', component: SingleProduct},
    {path: '/profilling', name:'profilling', component: Profilling},
    {path: '*', redirect: '/'}
];

const router = new VueRouter({
    mode: 'history',
    routes
});

// Resource Conf
Vue.http.options.root = 'http://apifdsport.tgarayt.esy.es/web/fr';
//Vue.http.options.root = 'http://localhost/FDSport/web/app_dev.php/fr';

// Resource hook after
Vue.http.interceptors.push((request, next) => {
    next((response) => {
        if(request.after) {
            request.after.call(this, response)
        }
    })
})


// filters
import moment from 'moment'
Vue.filter('frontEndDateFormat', function(date) {
    if(date){
        return moment(date, 'YYYY-MM-DDH:i:s').format('DD/MM/YYYY')
    }
})

Vue.filter('uppercase', function(value) {
    if(value){
        return value.toUpperCase()
    }
})

Vue.filter('lowercase', function(value) {
    if(value){
        return value.toLowerCase()
    }
})

Vue.filter('nl2br', function nl2br(text) {
    let reg = /\n\r/g
    if (text && text !== null) {
        let i, s = '', lines = text.split(reg), l = lines.length;

        for (i = 0; i < l; ++i) {
            s += lines[i];
            (i !== l - 1) && (s += '<br/>');
        }

        return s;
    }
    return text;
})

// Vue conf
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
