import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f2a168b6 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _30a15d10 = () => interopDefault(import('../pages/become-donor.vue' /* webpackChunkName: "pages/become-donor" */))
const _f6d4858c = () => interopDefault(import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */))
const _0a89f03d = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _2f60dde5 = () => interopDefault(import('../pages/blog/_id.vue' /* webpackChunkName: "pages/blog/_id" */))
const _7f83f8fd = () => interopDefault(import('../pages/compare.vue' /* webpackChunkName: "pages/compare" */))
const _caf06a90 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _da97a036 = () => interopDefault(import('../pages/cost.vue' /* webpackChunkName: "pages/cost" */))
const _713485a8 = () => interopDefault(import('../pages/donors/index.vue' /* webpackChunkName: "pages/donors/index" */))
const _864872a4 = () => interopDefault(import('../pages/faq.vue' /* webpackChunkName: "pages/faq" */))
const _5b3df120 = () => interopDefault(import('../pages/guarantee.vue' /* webpackChunkName: "pages/guarantee" */))
const _4ec3a550 = () => interopDefault(import('../pages/knowledge-base.vue' /* webpackChunkName: "pages/knowledge-base" */))
const _63e08c2c = () => interopDefault(import('../pages/licenses.vue' /* webpackChunkName: "pages/licenses" */))
const _77989dc3 = () => interopDefault(import('../pages/partners.vue' /* webpackChunkName: "pages/partners" */))
const _baa1787e = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _accbda42 = () => interopDefault(import('../pages/profile/account.vue' /* webpackChunkName: "pages/profile/account" */))
const _73ef6b23 = () => interopDefault(import('../pages/profile/orders.vue' /* webpackChunkName: "pages/profile/orders" */))
const _0eb9cb66 = () => interopDefault(import('../pages/profile/orders/index.vue' /* webpackChunkName: "pages/profile/orders/index" */))
const _5f35d802 = () => interopDefault(import('../pages/profile/orders/invoices.vue' /* webpackChunkName: "pages/profile/orders/invoices" */))
const _0f99fe7a = () => interopDefault(import('../pages/profile/orders/reservations.vue' /* webpackChunkName: "pages/profile/orders/reservations" */))
const _3dd807fe = () => interopDefault(import('../pages/profile/reservation.vue' /* webpackChunkName: "pages/profile/reservation" */))
const _6b1483e1 = () => interopDefault(import('../pages/profile/settings.vue' /* webpackChunkName: "pages/profile/settings" */))
const _399bdc83 = () => interopDefault(import('../pages/profile/wishlist.vue' /* webpackChunkName: "pages/profile/wishlist" */))
const _1b21da5e = () => interopDefault(import('../pages/registration.vue' /* webpackChunkName: "pages/registration" */))
const _783cfef7 = () => interopDefault(import('../pages/share.vue' /* webpackChunkName: "pages/share" */))
const _30139f8c = () => interopDefault(import('../pages/share/index.vue' /* webpackChunkName: "pages/share/index" */))
const _14753790 = () => interopDefault(import('../pages/share/my-selections.vue' /* webpackChunkName: "pages/share/my-selections" */))
const _285ae298 = () => interopDefault(import('../pages/share-page/index.vue' /* webpackChunkName: "pages/share-page/index" */))
const _27bf9e3f = () => interopDefault(import('../pages/steps.vue' /* webpackChunkName: "pages/steps" */))
const _4d863982 = () => interopDefault(import('../pages/steps/index.vue' /* webpackChunkName: "pages/steps/index" */))
const _d023ba94 = () => interopDefault(import('../pages/steps/payment.vue' /* webpackChunkName: "pages/steps/payment" */))
const _795d1ac7 = () => interopDefault(import('../pages/steps/preparation.vue' /* webpackChunkName: "pages/steps/preparation" */))
const _63d0391a = () => interopDefault(import('../pages/steps/shipment.vue' /* webpackChunkName: "pages/steps/shipment" */))
const _5064e49f = () => interopDefault(import('../pages/terms.vue' /* webpackChunkName: "pages/terms" */))
const _5ff7d210 = () => interopDefault(import('../pages/donors/_id.vue' /* webpackChunkName: "pages/donors/_id" */))
const _9b352e3a = () => interopDefault(import('../pages/post/_id.vue' /* webpackChunkName: "pages/post/_id" */))
const _9c1eaa00 = () => interopDefault(import('../pages/share-page/_id.vue' /* webpackChunkName: "pages/share-page/_id" */))
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
    path: "/blog",
    component: _f6d4858c,
    children: [{
      path: "",
      component: _0a89f03d,
      name: "blog"
    }, {
      path: ":id",
      component: _2f60dde5,
      name: "blog-id"
    }]
  }, {
    path: "/compare",
    component: _7f83f8fd,
    name: "compare"
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
    path: "/profile",
    component: _baa1787e,
    name: "profile",
    children: [{
      path: "account",
      component: _accbda42,
      name: "profile-account"
    }, {
      path: "orders",
      component: _73ef6b23,
      children: [{
        path: "",
        component: _0eb9cb66,
        name: "profile-orders"
      }, {
        path: "invoices",
        component: _5f35d802,
        name: "profile-orders-invoices"
      }, {
        path: "reservations",
        component: _0f99fe7a,
        name: "profile-orders-reservations"
      }]
    }, {
      path: "reservation",
      component: _3dd807fe,
      name: "profile-reservation"
    }, {
      path: "settings",
      component: _6b1483e1,
      name: "profile-settings"
    }, {
      path: "wishlist",
      component: _399bdc83,
      name: "profile-wishlist"
    }]
  }, {
    path: "/registration",
    component: _1b21da5e,
    name: "registration"
  }, {
    path: "/share",
    component: _783cfef7,
    children: [{
      path: "",
      component: _30139f8c,
      name: "share"
    }, {
      path: "my-selections",
      component: _14753790,
      name: "share-my-selections"
    }]
  }, {
    path: "/share-page",
    component: _285ae298,
    name: "share-page"
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
    path: "/post/:id?",
    component: _9b352e3a,
    name: "post-id"
  }, {
    path: "/share-page/:id?",
    component: _9c1eaa00,
    name: "share-page-id"
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
