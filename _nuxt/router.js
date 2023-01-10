import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f2a168b6 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _da97a036 = () => interopDefault(import('../pages/cost.vue' /* webpackChunkName: "pages/cost" */))
const _713485a8 = () => interopDefault(import('../pages/donors/index.vue' /* webpackChunkName: "pages/donors/index" */))
const _5ff7d210 = () => interopDefault(import('../pages/donors/_id.vue' /* webpackChunkName: "pages/donors/_id" */))
const _b331b32c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _f2a168b6,
    name: "about"
  }, {
    path: "/cost",
    component: _da97a036,
    name: "cost"
  }, {
    path: "/donors",
    component: _713485a8,
    name: "donors"
  }, {
    path: "/donors/:id",
    component: _5ff7d210,
    name: "donors-id"
  }, {
    path: "/",
    component: _b331b32c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
