import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import store from '@/store'
import iView from 'iview'
import { setToken, getToken, canTurnTo, setTitle } from '@/libs/util'
import config from '@/config'
const { homeName } = config

Vue.use(Router)
const router = new Router({
  routes,
  mode: 'history'
})
const LOGIN_PAGE_NAME = 'login'

const turnTo = (to, access, next) => {
  if (canTurnTo(to.name, access, routes)) next() // Have access, access
  else next({ replace: true, name: 'error_401' }) // No permission, redirect to 401 page
}

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  const token = getToken()
  if (!token && to.name !== LOGIN_PAGE_NAME) {
    // The page that is not logged in and wants to jump is not the login page
    next({
      name: LOGIN_PAGE_NAME //Jump to the login page
    })
  } else if (!token && to.name === LOGIN_PAGE_NAME) {
    // The page that is not logged in and wants to jump is the login page.
    next() // Jump
  } else if (token && to.name === LOGIN_PAGE_NAME) {
    // The page that has been logged in and wants to jump is the login page
    next({
      name: homeName // redirect to homeName Page
    })
  } else {
    if (store.state.user.hasGetInfo) {
      turnTo(to, store.state.user.access, next)
    } else {
      store.dispatch('getUserInfo').then(user => {
        // Pull user information, determine whether there is permission to access by user permission and the name of the page to jump; access must be an array, such as: ['super_admin'] ['super_admin', 'admin']
        turnTo(to, user.access, next)
      }).catch(() => {
        setToken('')
        next({
          name: 'login'
        })
      })
    }
  }
})

router.afterEach(to => {
  setTitle(to, router.app)
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router
