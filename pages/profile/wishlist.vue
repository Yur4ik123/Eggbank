<template>
  <div class="wishlist">
    <div class="compare__title">
      <div class="count">
        Egg Donor Selected: 3
      </div>
      <div class="title">
        To see a comparison chart of all selected egg donors, click "Compare" below.
      </div>
      <div class="btn__wrapper  ">
        <NuxtLink to="/compare" class="compare__btn">
          Comparare
        </NuxtLink>
      </div>
    </div>
    <div class="list__wrap">
      <CategoryDonorCard/>
      <CategoryDonorCard/>
      <CategoryDonorCard/>
    </div>

  </div>
</template>

<script>
export default {
  name: "wishlist"
}
</script>

<style lang="scss" scoped>
.wishlist {
  .compare__title {
    position: absolute;
    top: 0;
    right: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .count {
      font-size: 18px;
      line-height: 30px;
      color: #89CBC4;
      padding-right: 15px;
      margin-right: 15px;
      border-right: 1px solid #CDE4F0;
    }

    .title {
      max-width: 295px;
      font-size: 16px;
      line-height: 24px;
      margin-right: 25px;
    }

    .compare__btn {
      padding: 15px 30px;
      display: inline-flex;
      text-align: center;
      justify-content: center;
      border-radius: 80px;
      background-color: $green;
      transition: 0.3s;
      color: white !important;

      &:hover {
        background-color: $green-hover;
      }
    }
  }

  .list__wrap {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 15px;
  }
}

@media screen and (max-width: 1100px) {
  .wishlist {
    .compare__title {
      position: relative;
      top: initial;
      right: initial;
      margin-bottom: 15px;
    }
  }
}

@media screen and (max-width: 768px) {
  .wishlist {
    .compare__title {
      justify-content: flex-start;
      flex-direction: column;
      align-items: flex-start;

      .count {
        font-size: 14px;
        line-height: 24px;
        border-right: none;
        padding-right: 0;
        margin-right: 0;
        padding-bottom: 5px;
        margin-bottom: 15px;
        border-bottom: 1px solid #CDE4F0;
        display: block;
        width: 100%;
      }

      .title {
        max-width: 100%;
        margin-right: 0;
        margin-bottom: 15px;
        font-size: 14px;
        line-height: 24px;
      }

      .compare__btn {
        padding: 10px 15px;
        font-size: 14px;
        line-height: 24px;
      }

    }
  }
}

@media screen and (max-width: 600px) {
  .wishlist {
    .list__wrap {
      grid-template-columns: 1fr 1fr;
      grid-gap: 10px;
    }
  }
}
</style>
