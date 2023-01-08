<template>
  <div class="donors__category">
    <PartialsBreadcrumbs/>
    <div class="container">
      <div class="page__layout">
        <Filters/>
        <div class="page__content">
          <div class="categories__wrapper">
            <a href="" class="category__btn all">All Donors (145)</a>
            <a href="" class="category__btn favorite">
              <FavIcon/>
              My favorite donors (4)</a>
            <a href="" class="category__btn available">Available now</a>
            <a href="" class="category__btn request">Availability on request</a>
          </div>
          <div class="donors__wrapper">
            <CategoryDonorCard/>
          </div>
        </div>

      </div>
    </div>
    <CategoryDonorImages/>
  </div>
</template>

<script>
import FavIcon from '~/assets/img/heart-b.svg?inline'

export default {
  name: "DonorsPage",
  components: {
    FavIcon
  }
}
</script>

<style lang="scss" scoped>
.donors__category {
  .page__layout {
    display: grid;
    grid-template-columns: 285px 1fr;
    grid-gap: 20px;
    margin-bottom: 80px;
  }

  .categories__wrapper {
    display: flex;
    align-items: center;

    .category__btn {
      padding: 9px 20px;
      font-size: 18px;
      line-height: 30px;
      color: black !important;
      border-radius: 80px;
      border: 1px solid transparent;
      display: inline-flex;
      align-items: center;
      margin-right: 20px;
      transition: 0.3s;

      &:last-child {
        margin-right: 0;
      }

      svg {
        margin-right: 7px;
      }

      &.all {
        background-color: rgba(137, 203, 196, 0.3);
        border-color: #89CBC4;

        &:hover {
          background-color: rgba(137, 203, 196, 0.5);
        }
      }

      &.favorite {
        background-color: rgba(232, 189, 216, 0.3);
        border-color: #E8BDD8;

        &:hover {
          background-color: rgba(232, 189, 216, 0.5);
        }
      }

      &.available {
        background-color: rgba(255, 235, 197, 0.3);
        border-color: #FFEBC5;

        &:hover {
          background-color: rgba(255, 235, 197, 0.5);
        }
      }

      &.request {
        background-color: rgba(184, 221, 241, 0.3);
        border-color: #B8DDF1;

        &:hover {
          background-color: rgba(184, 221, 241, 0.5);
        }
      }

    }
  }

  .donors__wrapper {
    margin-top: 25px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
  }
}
</style>
