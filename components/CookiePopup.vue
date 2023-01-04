<template>
  <div class="cookie__popup" ref="cookie">
    <div class="cookie__popup-header">
      Сookies
    </div>
    <div class="cookie__popup-title">
      The site uses cookies. By continuing to use the site, you agree to this. Details on the processing of your data
      can be found in the
      <NuxtLink to="">privacy policy.</NuxtLink>

    </div>
    <button @click="hidePopup" class="cookie__popup-btn" type="button">
      I agree
    </button>

  </div>
</template>

<script>
export default {
  name: "CookiePopup",
  methods: {
    hidePopup() {
      this.$refs.cookie.style.display = 'none';
    }
  }
}
</script>

<style lang="scss" scoped>
.cookie__popup {
  position: fixed;
  right: 50px;
  bottom: 60px;
  padding: 20px 16px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  background: $green;
  max-width: 275px;

  &-header {
    font-size: 36px;
    line-height: 36px;
    color: white;
    margin-bottom: 5px;
    text-align: center;
  }

  &-title {
    text-align: center;
    font-size: 14px;
    line-height: 24px;
    color: white;
    margin-bottom: 20px;

    a {
      color: #25746C !important;
      text-decoration: underline !important;
    }
  }

  &-btn {
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 80px;
    color: #25746C;
  }
}
@media screen and (max-width: 576px){
  .cookie__popup{
    bottom: 0;
    left: 15px;
    right: 15px;
    max-width: 100%;
    border-radius: 12px 12px 0 0 ;
  }
}

</style>
