<template>
  <div class="share__page">
    <PartialsBreadcrumbs/>
    <div class="container">
      <div class="user">
        Hi, Jony Doel
      </div>
      <div class="share__nav">
        <NuxtLink class="share__link" to="/share">Favorite Donors (4)</NuxtLink>
        <NuxtLink class="share__link" to="/share/my-selections">My Selections (2)</NuxtLink>
      </div>
    </div>
    <div class="share__wrapper">
      <div class="container">
        <NuxtChild></NuxtChild>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "share"
}
</script>

<style lang="scss" scoped>
.share__page {
  .user {
    @include page-header;
    text-align: start;
    text-transform: initial;
    margin-bottom: 18px;
  }

  .share__nav {

    padding-bottom: 8px;
    display: flex;
    border-bottom: 1px solid #CDE4F0;
    margin-bottom: 30px;

    .share__link {
      margin-right: 60px;

      display: flex;
      align-items: center;
      font-size: 18px;
      line-height: 24px;
      position: relative;

      &.nuxt-link-exact-active {
        &:before {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -8px;
          background: #89CBC4;
          border-radius: 2px 2px 0px 0px;
          height: 4px;
        }
      }


      &:last-child {
        margin-right: 0;
      }

    }
  }

}

@media screen and (max-width: 768px) {
  .share__page {
    .user {
      margin-bottom: 20px;
    }

    .share__nav {
      margin-bottom: 20px;

      .share__link {
        margin-right: 50px;
        font-size: 14px;
        line-height: 24px;


      }
    }
  }
}

</style>
