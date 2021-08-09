import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/views/Dashboard'
import GridSystem from '@/views/GridSystem'
import GridListPage from '@/views/GridListPage'
import BreakPoints from '@/views/BreakPoints'
import Tables from '@/views/Tables'
import Forms from '@/views/Forms'
import Buttons from '@/views/Buttons'
import Icons from '@/views/Icons'
import SignIn from '@/views/authentication/SignIn'
import SignUp from '@/views/authentication/SignUp'
import ProductList from '@/views/page/ProductList'
import DefaultLayout from '@/layouts/default/Index'
import PageLayout from '@/layouts/default/Index'
import AuthenticationLayout from '@/layouts/authentication/Index'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
      },
      {
          path: '/grid-system',
          name: 'GridSystem',
          component: GridSystem
      },
      {
        path: '/grid-list-page',
        name: 'GridListPage',
        component: GridListPage
      },
      {
        path: '/breakpoints',
        name: 'BreakPoints',
        component: BreakPoints
      },
      {
        path: '/tables',
        name: 'Tables',
        component: Tables
      },
      {
        path: '/forms',
        name: 'Forms',
        component: Forms
      },
      {
        path: '/buttons',
        name: 'Buttons',
        component: Buttons
      },
      {
        path: '/icons',
        name: 'Icons',
        component: Icons
      }
    ]
  },
  {
    path: '/authentication',
    component: AuthenticationLayout,
    children: [
      {
        path: '/sign-in',
        name: 'SignIn',
        component: SignIn
      },
      {
        path: '/sign-up',
        name: 'SignUp',
        component: SignUp
      }
    ]
  },
  {
    path: '/page',
    component: PageLayout,
    children: [
      {
        path: '/product-list',
        name: 'ProductList',
        component: ProductList
      }
    ]
  },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
