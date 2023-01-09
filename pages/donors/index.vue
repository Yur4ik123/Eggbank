<template>
  <div class="donors__category">
    <PartialsBreadcrumbs/>
    <div class="container">
      <div class="page__layout">
        <Filters/>
        <div class="page__content">
          <!--          TODO check user login-->
          <div class="not__login" v-if="true">
            <div class="page__header">
              Egg Donor Search
            </div>
            <div class="page__subtitle">
              ADONIS Egg Bank Database showcases each donor's personality, physical attributes, and medical history.
              Please Sig in or Create an Account to see full donor profile and use all advantages of A.EggBank Database
            </div>
            <div class="donors__count">
              Donors Registered: <span>225</span>
            </div>

          </div>
          <!--          TODO check user login-->
          <div class="categories__wrapper" v-if="false">
            <a href="" class="category__btn all">All Donors (145)</a>
            <a href="" class="category__btn favorite">
              <FavIcon/>
              My favorite donors (4)</a>
            <a href="" class="category__btn available">Available now</a>
            <a href="" class="category__btn request">Availability on request</a>
          </div>
          <div class="filter__btn-wrapper" style="display: none;">
            <a href="#filters_sidebar" uk-toggle class="filter__btn">
              <FilterIcon/>
            </a>
          </div>
          <div class="donors__wrapper">
            <CategoryDonorCard/>
            <CategoryDonorCard/>
            <CategoryDonorCard/>
<!--            <CategoryDonorCard/>-->
<!--            <CategoryDonorCard/>-->
<!--            <CategoryDonorCard/>-->
          </div>
          <!--          TODO check auth-->
          <div class="not__login-footer" v-if="true">
            <div class="donors__count">
              Opened <span>3</span> (Total <span>225</span>)
            </div>
            <div class="login__btn">
              <PartialsGreenBtn title="Receive A Full Access"/>

            </div>
          </div>
        </div>

      </div>
    </div>
    <CategoryDonorImages/>
  </div>
</template>

<script>
import FavIcon from '~/assets/img/heart-b.svg?inline'
import FilterIcon from '~/assets/img/filter.svg?inline'

export default {
  name: "DonorsPage",
  components: {
    FavIcon,
    FilterIcon
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

  .not__login {
    .page__header {
      font-size: 54px;
      line-height: 64px;
      color: black;
      text-align: center;
      margin-bottom: 25px;
    }

    .page__subtitle {
      font-size: 18px;
      line-height: 30px;
      text-align: center;
      color: black;
      margin-bottom: 20px;
    }

  }

  .donors__count {
    text-align: center;
    font-size: 18px;
    line-height: 30px;
    color: black;

    span {
      color: $green;
    }
  }

  .not__login-footer {
    margin-top: 25px;

    .donors__count {
      margin-bottom: 25px;
    }

    .login__btn {
      display: flex;
      justify-content: center;
    }

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

@media screen and (max-width: 1200px) {
  .donors__category {
    .page__layout {
      grid-template-columns: 1fr;
    }

    .filter__btn-wrapper {
      display: flex !important;
      justify-content: flex-end;

      .filter__btn {
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $green;
        border-radius: 100%;
      }
    }
  }

}

@media screen and (max-width: 992px) {
  .donors__category {
    .categories__wrapper {
      .category__btn {
        font-size: 14px;
        line-height: 24px;
      }
    }

    .donors__wrapper {
      grid-template-columns: 1fr 1fr;
    }
  }
}

@media screen and (max-width: 768px) {
  .donors__category {
    .categories__wrapper {
      flex-wrap: wrap;
      column-gap: 12px;

      .category__btn {
        margin-bottom: 20px;
        margin-right: 0;

        padding: 10px 15px;

        svg {
          margin-right: 5px;
        }
      }
    }

    .donors__wrapper {
      grid-gap: 10px;
    }
    .not__login{
      .page__header{
        font-size: 30px;
        line-height: 36px;
        margin-bottom: 15px;
      }
      .page__subtitle{
        font-size: 14px;
        line-height: 24px;
      }
      .donors__count{
        display: none;
      }
    }
    .donors__count{
      font-size: 14px;
      line-height: 24px;
    }
  }
}
</style>
