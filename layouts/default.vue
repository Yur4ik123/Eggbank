<template>
  <div id="app" class="uk-link-reset">
    <Header/>
    <div class="content">
      <transition name="routing" mode="out-in">
      <Nuxt/>
      </transition>
    </div>
    <Footer/>
<!--    <CookiePopup></CookiePopup>-->
  </div>
</template>

<script>
export default {
  name: "default",
  components: {}
}
</script>

<style scoped>

</style>
