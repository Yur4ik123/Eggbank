<template>
  <div class="breadcrumbs">
    <div class="container">
      <ul class="breadcrumb__list">
        <li class="breadcrumb__item">
          <NuxtLink to="" class="breadcrumb__link">
            Home
          </NuxtLink>
        </li>
        <li class="breadcrumb__item">
          <!--          TODO: check current-->
          <NuxtLink to="" class="breadcrumb__link" v-if="false">
            About A.EggBank
          </NuxtLink>
          <span class="breadcrumb__link" v-else>
            About A.EggBank
          </span>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name: "Breadcrumbs"
}
</script>

<style lang="scss" scoped>
.breadcrumbs {
  padding: 15px 0;

  .breadcrumb__list {
    display: flex;
    align-items: center;

    .breadcrumb__item {
      padding-right: 25px;
      margin-right: 8px;
      position: relative;

      &:after {
        content: '→';
        line-height: 16px;
        font-size: 18px;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-60%);
        color: #979797;
      }
      &:last-child{
        padding-right: 0;
        margin-right: 0;
        &:after{
          display: none;
        }
      }

      .breadcrumb__link {
        font-size: 14px;
        line-height: 16px;
        color: #979797 !important;
        transition: 0.3s;

        &:hover {
          color: #89CBC4 !important;
        }
      }

      span.breadcrumb__link {
        color: #89CBC4 !important;
      }
    }
  }
}
@media screen and (max-width: 768px){
  .breadcrumbs{
    padding: 10px 0;
    .breadcrumb__list{
      .breadcrumb__item{
        padding-right: 20px;
        margin-right: 5px;
        &:after{
          font-size: 16px;
        }
        .breadcrumb__link{
          font-size: 12px;
          line-height: 14px;
        }
      }
    }
  }
}
</style>
