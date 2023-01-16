import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f2a168b6 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _30a15d10 = () => interopDefault(import('../pages/become-donor.vue' /* webpackChunkName: "pages/become-donor" */))
const _caf06a90 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _da97a036 = () => interopDefault(import('../pages/cost.vue' /* webpackChunkName: "pages/cost" */))
const _713485a8 = () => interopDefault(import('../pages/donors/index.vue' /* webpackChunkName: "pages/donors/index" */))
const _864872a4 = () => interopDefault(import('../pages/faq.vue' /* webpackChunkName: "pages/faq" */))
const _5b3df120 = () => interopDefault(import('../pages/guarantee.vue' /* webpackChunkName: "pages/guarantee" */))
const _4ec3a550 = () => interopDefault(import('../pages/knowledge-base.vue' /* webpackChunkName: "pages/knowledge-base" */))
const _63e08c2c = () => interopDefault(import('../pages/licenses.vue' /* webpackChunkName: "pages/licenses" */))
const _77989dc3 = () => interopDefault(import('../pages/partners.vue' /* webpackChunkName: "pages/partners" */))
const _1b21da5e = () => interopDefault(import('../pages/registration.vue' /* webpackChunkName: "pages/registration" */))
const _27bf9e3f = () => interopDefault(import('../pages/steps.vue' /* webpackChunkName: "pages/steps" */))
const _4d863982 = () => interopDefault(import('../pages/steps/index.vue' /* webpackChunkName: "pages/steps/index" */))
const _d023ba94 = () => interopDefault(import('../pages/steps/payment.vue' /* webpackChunkName: "pages/steps/payment" */))
const _795d1ac7 = () => interopDefault(import('../pages/steps/preparation.vue' /* webpackChunkName: "pages/steps/preparation" */))
const _63d0391a = () => interopDefault(import('../pages/steps/shipment.vue' /* webpackChunkName: "pages/steps/shipment" */))
const _5064e49f = () => interopDefault(import('../pages/terms.vue' /* webpackChunkName: "pages/terms" */))
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
    path: "/become-donor",
    component: _30a15d10,
    name: "become-donor"
  }, {
    path: "/contact",
    component: _caf06a90,
    name: "contact"
  }, {
    path: "/cost",
    component: _da97a036,
    name: "cost"
  }, {
    path: "/donors",
    component: _713485a8,
    name: "donors"
  }, {
    path: "/faq",
    component: _864872a4,
    name: "faq"
  }, {
    path: "/guarantee",
    component: _5b3df120,
    name: "guarantee"
  }, {
    path: "/knowledge-base",
    component: _4ec3a550,
    name: "knowledge-base"
  }, {
    path: "/licenses",
    component: _63e08c2c,
    name: "licenses"
  }, {
    path: "/partners",
    component: _77989dc3,
    name: "partners"
  }, {
    path: "/registration",
    component: _1b21da5e,
    name: "registration"
  }, {
    path: "/steps",
    component: _27bf9e3f,
    children: [{
      path: "",
      component: _4d863982,
      name: "steps"
    }, {
      path: "payment",
      component: _d023ba94,
      name: "steps-payment"
    }, {
      path: "preparation",
      component: _795d1ac7,
      name: "steps-preparation"
    }, {
      path: "shipment",
      component: _63d0391a,
      name: "steps-shipment"
    }]
  }, {
    path: "/terms",
    component: _5064e49f,
    name: "terms"
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
