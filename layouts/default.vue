<template>
  <div id="app" class="uk-link-reset">
    <Header/>
    <div class="content">
      <Nuxt/>
    </div>
    <Footer/>
    <LoginModal/>
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
