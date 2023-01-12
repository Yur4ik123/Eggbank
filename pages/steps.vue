<template>
  <div class="steps__page">
    <PartialsBreadcrumbs></PartialsBreadcrumbs>

    <div class="first__screen">
      <div class="container">
        <div class="page__title">
          <h1 class="page__header">
            Series Of steps of Donor’s Selection
          </h1>
          <div class="page__subheader">
            Our Egg Banks Located In USA And In Ukraine
          </div>
        </div>
        <div class="img__wrapper">
          <img src="/img/steps.svg" width="869" height="488" alt="">
        </div>
      </div>
    </div>
    <div class="page__grid">
      <img src="/img/steps_abs.png" width="189" height="466" loading="lazy" alt="" class="abs__img">
      <div class="container">
        <div class="sidebar__wrapper">
          <div class="sidebar">
            <div class="sidebar__header">
              In Case You Order Eggs Of The Donor
              Form Egg Bank Located In USA
            </div>

            <simplebar data-simplebar-auto-hide="false">
              <ul class="sidebar__menu">
                <li class="sidebar__item" :class="{'have__child':true}">
                  <NuxtLink to="/steps" class="sidebar__link">
                    <span class="step">STEP 1:</span>
                    <span class="title">
                       EGG DONOR SELECTION
                    </span>
                  </NuxtLink>
                  <ul class="submenu" v-if="true">
                    <li class="submenu__item">
                      <a href="" class="submenu__anchor active">
                        Egg Donor Booking
                      </a>
                    </li>
                    <li class="submenu__item">
                      <a href="" class="submenu__anchor">
                        Order Details And Finnal Approval
                      </a>
                    </li>
                    <li class="submenu__item">
                      <a href="" class="submenu__anchor">
                        Changing In Reservation
                      </a>
                    </li>
                    <li class="submenu__item">
                      <a href="" class="submenu__anchor">
                        Special Egg Donors Tab

                      </a>
                    </li>
                    <li class="submenu__item">
                      <a href="" class="submenu__anchor">
                        Help With An Order
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="sidebar__item" :class="{'have__child':false}">
                  <NuxtLink to="/steps/payment" class="sidebar__link">
                    <span class="step">STEP 2:</span>
                    <span class="title">
                     PAYMENT
                    </span>
                  </NuxtLink>
                </li>
                <li class="sidebar__item" :class="{'have__child':false}">
                  <NuxtLink to="/steps/preparation" class="sidebar__link">
                    <span class="step">STEP 3:</span>
                    <span class="title">
                       THE DONOR’S EGGS PREPARATION
FOR TRANSPORTATION
                    </span>
                  </NuxtLink>
                </li>

                <li class="sidebar__item" :class="{'have__child':false}">
                  <NuxtLink to="/steps/shipment" class="sidebar__link">
                    <span class="step">STEP 4:</span>
                    <span class="title">
                      SHIPMENT PERFORMED
                    </span>
                  </NuxtLink>
                </li>


              </ul>
            </simplebar>


          </div>
        </div>
        <div class="page__content">
          <h2 class="content__header">
            In Case You Order Eggs Of The Donor Form Egg Bank Located In USA
          </h2>
          <NuxtChild/>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import simplebar from 'simplebar-vue'

export default {
  name: "Steps",
  components: {
    simplebar
  }
}
</script>

<style lang="scss">
.first__screen {
  margin-bottom: 25px;
  overflow-x: hidden;

  .container {
    position: relative;
  }

  .page__header {
    @include page-header;
    text-align: start;
    margin-bottom: 25px;
  }

  .page__subheader {
    font-size: 22px;
    line-height: 36px;
    color: black;
  }

  .page__title {
    padding: 140px 0 170px;
    max-width: 580px;
    position: relative;
    z-index: 2;
  }

  .img__wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    right: -120px;
    z-index: 1;

    img {
      width: 100%;
      object-fit: contain;
    }
  }

}

.page__grid {
  background: #CDE4F0;
  border-radius: 60px 60px 0 0;
  padding: 55px 0 70px;
  position: relative;

  .abs__img {
    position: absolute;
    left: 0;
    top: 100px;
    z-index: 0;
  }

  .container {
    display: grid;
    grid-template-columns: 387px 1fr;
    grid-gap: 40px;
    position: relative;
    z-index: 1;

    .sidebar__wrapper {
      .sidebar {
        border-radius: 12px;
        overflow: hidden;
        position: sticky;
        top: 100px;

        .sidebar__header {
          padding: 15px;
          background-color: $green;
          color: white;
          font-size: 22px;
          line-height: 30px;

        }

        .simplebar-wrapper {
          max-height: 750px;
        }

        .sidebar__menu {
          background-color: white;

          .sidebar__item {
            &:first-child {
              .sidebar__link {
                border-top-color: transparent;
              }
            }

            &.have__child {
              .sidebar__link {
                padding-right: 30px;

                &:after {
                  content: '';
                  position: absolute;
                  right: 15px;
                  top: 50%;
                  transform: translateY(-50%);
                  width: 12px;
                  height: 7px;
                  background: url("/img/sub_arr.svg") no-repeat center/cover;
                }
              }
            }

            .sidebar__link {
              padding: 15px;
              display: grid;
              grid-template-columns: 65px 1fr;

              border-top: 1px solid #CDE4F0;
              position: relative;

              .title, .step {
                font-size: 18px;
                line-height: 34px;
              }

              .step {
                color: $green;
                margin-right: 3px;
              }


            }

            .sidebar__link.nuxt-link-exact-active + .submenu {
              max-height: 2000px;
              visibility: visible;

            }

            .submenu {
              max-height: 0;
              visibility: hidden;


              .submenu__anchor {
                display: flex;
                padding: 5px 15px 5px 80px;
                font-size: 18px;
                line-height: 30px;

                &.active {
                  background-color: #E1F0F8;
                }
              }
            }
          }
        }
      }
    }

    .page__content {

      .content__header {
        font-size: 36px;
        line-height: 54px;
        margin-bottom: 15px;
      }

      .step__content {
        .step__header {
          font-size: 18px;
          line-height: 30px;
          margin-bottom: 11px;
        }

        .booking__btn {
          font-size: 18px;
          line-height: 30px;
          display: inline-block;
          color: white !important;
          background-color: $green;
          padding: 8px 10px;
          transition: 0.3s;
          margin-bottom: 24px;
          border-radius: 12px;

          &:hover {
            background-color: $green-hover;
          }
        }

        .text {
          @include default-text;

        }
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .first__screen {
    .img__wrapper {
      right: -300px;
    }
  }
}

@media screen and (max-width: 880px) {
  .first__screen {
    .container {

    }

    .page__title {
      padding: 26px 0 11px;
      max-width: 100%;

      .page__header {
        text-align: center;
      }

      .page__subheader {
        text-align: center;
      }
    }

    .img__wrapper {
      position: relative;
      right: initial;
      top: initial;
      bottom: initial;
      margin: 0 -40px;
    }

  }
  .page__grid {
    .container {
      grid-template-columns: 1fr;
    }
  }
}

@media screen and (max-width: 768px) {
  .first__screen {
    padding: 26px 0 70px;

    .page__title {
      .page__header {
        margin-bottom: 15px;
      }

      .page__subheader {
        font-size: 18px;
        line-height: 30px;
      }
    }
  }
  .page__grid {

    padding: 15px 0 50px;
    border-radius: 12px;

    .abs__img {
      display: none;
    }

    .container {
      grid-gap: 30px;

      .sidebar__wrapper {
        .sidebar {
          .sidebar__header {
            font-size: 18px;
            line-height: 30px;
          }

          .sidebar__menu {
            .sidebar__item {
              .sidebar__link {
                padding: 10px 15px;

                .step, .title {
                  font-size: 14px;
                  line-height: 24px;
                }
              }

              .submenu {
                .submenu__anchor {
                  font-size: 14px;
                  line-height: 24px;
                }
              }
            }
          }
        }
      }

      .page__content {
        .content__header {
          font-size: 30px;
          line-height: 36px;
          margin-bottom: 15px;
        }

        .step__content {
          .step__header {
            font-size: 14px;
            line-height: 24px;
            margin-bottom: 10px;
          }
          .booking__btn{
            font-size: 14px;
            line-height: 24px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 576px) {
  .first__screen {
    .img__wrapper {
      margin-right: -50px;
    }
  }
}
</style>
