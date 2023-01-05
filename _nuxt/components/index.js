export const CookiePopup = () => import('../../components/CookiePopup.vue' /* webpackChunkName: "components/cookie-popup" */).then(c => wrapFunctional(c.default || c))
export const FirstScreen = () => import('../../components/FirstScreen.vue' /* webpackChunkName: "components/first-screen" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const Header = () => import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LangSwitcher = () => import('../../components/LangSwitcher.vue' /* webpackChunkName: "components/lang-switcher" */).then(c => wrapFunctional(c.default || c))
export const Menu = () => import('../../components/Menu.vue' /* webpackChunkName: "components/menu" */).then(c => wrapFunctional(c.default || c))
export const ProfileDropdown = () => import('../../components/ProfileDropdown.vue' /* webpackChunkName: "components/profile-dropdown" */).then(c => wrapFunctional(c.default || c))
export const PartialsGreenBtn = () => import('../../components/partials/GreenBtn.vue' /* webpackChunkName: "components/partials-green-btn" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
