import Public from './layouts/Public'
import Private from './layouts/Private'
import Login from './views/Login'
import Signup from './views/Signup'
import Account from './views/Account'
import Home from './views/Home'
import Summary from './views/Summary'

export default [
  {
    component: Login,
    layout: Public,
    authRequired: false,
    path: '/login',
    title: 'Login'
  },
  {
    component: Signup,
    exact: true,
    layout: Public,
    authRequired: false,
    path: '/signup',
    title: 'Signup'
  },
  {
    component: Home,
    layout: Private,
    authRequired: true,
    path: '/',
    exact: true,
    title: 'Home'
  },
  {
    component: Summary,
    layout: Private,
    authRequired: true,
    path: '/summary',
    title: 'Summary'
  },
  {
    component: Account,
    layout: Private,
    authRequired: true,
    path: '/account',
    title: 'Account'
  }
]
