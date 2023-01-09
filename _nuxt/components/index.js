export { default as CookiePopup } from '../../components/CookiePopup.vue'
export { default as Filters } from '../../components/Filters.vue'
export { default as FirstScreen } from '../../components/FirstScreen.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Header } from '../../components/Header.vue'
export { default as LangSwitcher } from '../../components/LangSwitcher.vue'
export { default as Menu } from '../../components/Menu.vue'
export { default as ProfileDropdown } from '../../components/ProfileDropdown.vue'
export { default as PartialsBreadcrumbs } from '../../components/partials/Breadcrumbs.vue'
export { default as PartialsGreenBtn } from '../../components/partials/GreenBtn.vue'
export { default as PartialsRanges } from '../../components/partials/Ranges.vue'
export { default as CategoryDonorCard } from '../../components/category/DonorCard.vue'
export { default as CategoryDonorImages } from '../../components/category/DonorImages.vue'

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
