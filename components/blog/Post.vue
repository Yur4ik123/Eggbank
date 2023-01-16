<template>
  <NuxtLink to="/post/1" class="blog__link">
    <div class="image__wrapper">
      <div class="img">
        <img src="/img/blog1.png" width="387" height="245" loading="lazy" alt="">
      </div>
      <div class="label" style="background-color:#89CBC4 ">
        Fertility
      </div>
    </div>
    <div class="link__title">
      Header of the article
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: "Post"
}
</script>

<style lang="scss" scoped>
.blog__link {
  display: block;

  .image__wrapper {
    position: relative;
    margin-bottom: 35px;

    .img {
      border-radius: 15px;
      overflow: hidden;

      img {
        width: 100%;
      }
    }

    .label {
      position: absolute;
      padding: 10px 12px;
      border-radius: 12px;
      bottom: 0;
      left: 10px;
      transform: translateY(50%);

    }
  }

  .link__title {
    font-size: 22px;
    line-height: 32px;
    padding: 0 10px;
  }
}
@media screen and (max-width: 992px){
  .blog__link {
    .image__wrapper {
      .label {
        font-size: 14px;
        line-height: 24px;
      }
    }

    .link__title {
      font-size: 18px;
      line-height: 30px;
    }
  }
}
</style>
