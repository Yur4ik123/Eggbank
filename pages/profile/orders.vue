<template>
  <div class="orders">
    <div class="orders__nav">
      <NuxtLink to="/profile/orders" class="orders__link">
        <span class="title">Donors</span>
        <span class="count">1</span>
      </NuxtLink>
      <NuxtLink to="/profile/orders/reservations" class="orders__link">
        <span class="title">Reservations</span>
        <span class="count">1</span>
      </NuxtLink>
      <NuxtLink to="/profile/orders/invoices" class="orders__link">
        <span class="title">Invoices</span>
        <span class="count" v-if="false">1</span>
      </NuxtLink>
    </div>
    <div class="orders__content">
      <NuxtChild></NuxtChild>
    </div>

  </div>
</template>

<script>
export default {
  name: "orders"
}
</script>

<style lang="scss" scoped>
.orders__nav {
  padding-bottom: 8px;
  margin-bottom: 30px;
  display: flex;
  border-bottom: 1px solid #CDE4F0;

  .orders__link {
    margin-right: 60px;
    display: flex;
    align-items: center;

    &.nuxt-link-exact-active  {
      .title {
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
    }


    .title {
      font-size: 18px;
      line-height: 24px;
      margin-right: 7px;
      position: relative;
    }

    .count {
      width: 24px;
      height: 24px;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #E8BDD8;
      font-size: 16px;
      line-height: 16px;
      color: white;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}

@media screen and (max-width: 768px) {
  .orders__nav {
    margin-bottom: 10px;

    .orders__link {
      margin-right: 50px;

      .title {
        font-size: 14px;
        line-height: 24px;
        margin-right: 3px;
      }

      .count {
        width: 18px;
        height: 18px;
        font-size: 14px;
        line-height: 24px;
      }
    }
  }
}
</style>
