import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import City from '../components/City.vue'
import Product from '../views/Product.vue'
import Leader from '../views/Leader.vue'
import SignUp from '../views/SignUp'
import Mine from '../components/Mine'
import Orderitem from '../views/Orderitem.vue'
import Fillin from '../views/Fillin.vue'
import HistoryTourist from '../views/HistoryTourist.vue'
import AddTourist from '../views/AddTourist.vue'
import ConfirmOrder from '../views/ConfirmOrder.vue'
import Payment from '../views/Payment.vue'
import Sucess from '../views/Sucess.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',   
    component:About
  },
  {
    path: '/mine',
    name: 'Mine',   
    component:Mine
  },
  {
    path: '/city',
    name: 'City',   
    component:City
  },
  {
    path: '/product/:id',
    name: 'Product',   
    component:Product
  },
  {
    path: '/product/:id/leader',
    name: 'Leader',   
    component:Leader
  },
  {
    path: '/product/:id/signup',
    name: 'SignUp',   
    component:SignUp
  },
  {
    path: '/product/:id/fillin',
    name: 'Fillin',   
    component:Fillin
  },
  ,
  {
    path: '/product/:id/confirm',
    name: 'ConfirmOrder',   
    component:ConfirmOrder
  },
  {
    path: '/mine/:id',
    name: 'Orderitem',   
    component:Orderitem
  },
  {
    path: '/historytourist',
    name: 'Historytourist',   
    component:HistoryTourist
  },
  {
    path: '/addtourist',
    name: 'AddTourist',   
    component:AddTourist
  },
  {
    path: '/product/:id/payment',
    name: 'Payment',   
    component:Payment
  }
  ,
  {
    path: '/product/:id/sucess',
    name: 'Sucess',   
    component:Sucess
  }
]

const router = new VueRouter({
  mode:'hash',
  routes
})

export default router
