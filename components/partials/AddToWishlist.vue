<template>
  <a href="" class="add__to-wishlist">
    <InWishlist v-if="false"/>
    <AddWishlistIcon v-else/>
  </a>
</template>

<script>
import AddWishlistIcon from '~/assets/img/addwl.svg?inline'
import InWishlist from '~/assets/img/in_wishlist.svg?inline'

export default {
  name: "AddToWishlist",
  components: {
    AddWishlistIcon,
    InWishlist
  }
}
</script>

<style lang="scss">

</style>
