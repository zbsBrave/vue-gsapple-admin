import Vue from 'vue'
import VueRouter from 'vue-router'
//import Login from '@/views/loginPage.vue'

Vue.use(VueRouter)

// 路由懒加载
const Login = () => import(/* webpackChunkName: "Login_Home_Welcome" */ '@/views/loginPage.vue')
const Home = () => import(/* webpackChunkName: "Login_Home_Welcome" */ '@/views/home.vue')

const routes = [
  { path: '/', redirect: '/login'},
  { path: '/login', component: Login},
  { path: '/home', component: Home}
]

const router = new VueRouter({
  routes
})

// 挂载路由导航守卫,to表示将要访问的路径，from表示从哪里来，next是下一个要做的操作 next('/login')强制跳转login
router.beforeEach((to, from, next) => {
  // 访问登录页，放行
  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  // 没有token, 强制跳转到登录页
  if (!tokenStr) return next('/login')
  next()
})

export default router
