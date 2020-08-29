import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from './components/Dashboard.vue'
import Auth from '@okta/okta-vue'
import TriviaGame from "./components/TriviaGame";

Vue.config.productionTip = false
Vue.use(VueRouter)


Vue.use(Auth, {
  issuer: 'https://dev-596027.octa.com/oauth2/default',
  client_id: '{0oat8gbd80LO475Wm4x6}',
  redirect_uri: 'http://localhost:8080/implicit/callback',
  scope: 'openid profile email'
})

const routes = [
  { path: '/implicit/callback', component: Auth.handleCallback() },
  { path: '/trivia', component: TriviaGame }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(Dashboard)
}).$mount('#app')

