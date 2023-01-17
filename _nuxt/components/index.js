export { default as BecomeForm } from '../../components/BecomeForm.vue'
export { default as ContactForm } from '../../components/ContactForm.vue'
export { default as CookiePopup } from '../../components/CookiePopup.vue'
export { default as Filters } from '../../components/Filters.vue'
export { default as FirstScreen } from '../../components/FirstScreen.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Header } from '../../components/Header.vue'
export { default as LangSwitcher } from '../../components/LangSwitcher.vue'
export { default as LoginModal } from '../../components/LoginModal.vue'
export { default as Menu } from '../../components/Menu.vue'
export { default as PartnerForm } from '../../components/PartnerForm.vue'
export { default as ProfileDropdown } from '../../components/ProfileDropdown.vue'
export { default as RegistrationForm } from '../../components/RegistrationForm.vue'
export { default as SearchModal } from '../../components/SearchModal.vue'
export { default as BlogPost } from '../../components/blog/Post.vue'
export { default as CategoryDonorCard } from '../../components/category/DonorCard.vue'
export { default as CategoryDonorGallery } from '../../components/category/DonorGallery.vue'
export { default as CategoryDonorImages } from '../../components/category/DonorImages.vue'
export { default as CategoryOrderModal } from '../../components/category/OrderModal.vue'
export { default as PartialsAddToWishlist } from '../../components/partials/AddToWishlist.vue'
export { default as PartialsAvailability } from '../../components/partials/Availability.vue'
export { default as PartialsBlogSearch } from '../../components/partials/BlogSearch.vue'
export { default as PartialsBreadcrumbs } from '../../components/partials/Breadcrumbs.vue'
export { default as PartialsDiagram } from '../../components/partials/Diagram.vue'
export { default as PartialsGreenBtn } from '../../components/partials/GreenBtn.vue'
export { default as PartialsRanges } from '../../components/partials/Ranges.vue'
export { default as FormBirth } from '../../components/form/Birth.vue'
export { default as FormInput } from '../../components/form/Input.vue'
export { default as FormSelect } from '../../components/form/Select.vue'
export { default as FormTextarea } from '../../components/form/Textarea.vue'

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
