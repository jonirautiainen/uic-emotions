import Public from './layouts/Public'
import Private from './layouts/Private'
import Login from './views/Login'
import Signup from './views/Signup'
import Account from './views/Account'
import Home from './views/Home'
import Summary from './views/Summary'

import SentimentVerySatisfiedRoundedIcon from '@material-ui/icons/SentimentVerySatisfiedRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

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
    title: 'Home',
    icon: HomeRoundedIcon
  },
  {
    component: Summary,
    layout: Private,
    authRequired: true,
    path: '/summary',
    title: 'Summary',
    icon: SentimentVerySatisfiedRoundedIcon
  },
  {
    component: Account,
    layout: Private,
    authRequired: true,
    path: '/account',
    title: 'Account',
    icon: PersonRoundedIcon
  }
]
