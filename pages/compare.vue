<template>
  <div class="compare__page">
    <PartialsBreadcrumbs/>
    <div class="container">
      <div class="page__head">
        <div class="welcome">
          Hi, Jony Doel
        </div>
        <div class="consult">
          <div class="title">Need a consultation?</div>
          <a href="" class="consult__btn">Submit</a>
        </div>

      </div>
      <div class="compare__wrapper">
        <div class="section__header">
          Donor Comparison
        </div>
        <div class="compare__grid">
          <div class="col head__col"></div>
          <div class="col items__col">
            <div uk-slider="finite:true" class="compare__slider main__slider" ref="main__slider">

              <div class="uk-slider-container">
                <ul class="uk-slider-items ">
                  <li class="slider__item" v-for="(item, index) in 4">
                    <div class="item__wrapper">
                      <div class="labels">
                        <a href="" class="remove__btn">
                          <img src="/img/remove.svg" width="20" height="20" alt="">
                        </a>
                        <div class="info">
                           <span class="pass__icon">
<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path
  d="M5.12671 9.84849C5.01721 9.97576 4.82781 9.98547 4.70584 9.87005L0.0950729 5.50611C-0.0268975 5.39068 -0.0322006 5.19647 0.0831582 5.07449L1.55218 3.52221C1.6676 3.40024 1.86182 3.39494 1.98379 3.5103L4.50247 5.89399C4.62444 6.00942 4.81383 5.99971 4.92334 5.87243L9.84396 0.155114C9.95346 0.0278406 10.1473 0.0133089 10.2745 0.122883L11.8942 1.51697C12.0215 1.62647 12.036 1.82028 11.9264 1.94755L5.12671 9.84849Z"
  fill="#89CBC4"/>
</svg>
      </span>
                          <img src="/img/fda-label.svg" width="30" height="12" alt="">
                          <img src="/img/info.svg" width="16" height="16" class="info__icon" alt="">
                          <div uk-drop=" pos: bottom-center; offset: 15; delay-hide: 0" class="info__drop">
                            On each donor profile, you may find FDA icon (
                            <svg style="margin-right: 5px;" width="12" height="10" viewBox="0 0 12 10" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M5.12671 9.84849C5.01721 9.97576 4.82781 9.98547 4.70584 9.87005L0.0950729 5.50611C-0.0268975 5.39068 -0.0322006 5.19647 0.0831582 5.07449L1.55218 3.52221C1.6676 3.40024 1.86182 3.39494 1.98379 3.5103L4.50247 5.89399C4.62444 6.00942 4.81383 5.99971 4.92334 5.87243L9.84396 0.155114C9.95346 0.0278406 10.1473 0.0133089 10.2745 0.122883L11.8942 1.51697C12.0215 1.62647 12.036 1.82028 11.9264 1.94755L5.12671 9.84849Z"
                                fill="#89CBC4"/>
                            </svg>
                            <img src="/img/fda-label.svg" width="30" height="12" alt=""> ) which means that Egg Donor
                            passed all necessary
                            medical tests at FDA certified lab and is an FDA-eligible Donor.
                          </div>

                        </div>


                      </div>
                      <div class="item__image">
                        <img src="/img/donor.png" height="180" width="180" alt="">
                      </div>
                      <div class="donor__title">
                        Donor
                      </div>
                      <div class="donor__id">
                        id326338
                      </div>
                      <div class="availability">
                        <div class="info__icon">
                          <img src="/img/info.svg" width="16" height="16" alt="">
                        </div>
                        <div class="title">Immediate shipping available</div>
                        <div class="flag">
                          <img src="/img/us.svg" width="24" height="24" alt="">
                        </div>

                      </div>

                    </div>

                  </li>
                </ul>
              </div>
              <a href="#" uk-slider-item="previous" class="slider__nav nav__prev">
                <img src="/img/compare__prev.svg" width="6" height="10" alt="">
              </a>
              <a href="#" uk-slider-item="next" class="slider__nav nav__next">
                <img src="/img/compare__next.svg" width="6" height="10" alt="">
              </a>

            </div>
          </div>
        </div>
        <div class="section__header">
          Physical characteristics
        </div>
        <div class="compare__grid">
          <div class="col head__col">
            <div class="list__wrapper">
              <div class="row">
                <div class="title">
                  Race
                </div>
              </div>
              <div class="row">
                <div class="title">
                  Ethnic Origin
                </div>
              </div>
              <div class="row">
                <div class="title">
                  Age
                </div>
              </div>
            </div>
          </div>
          <div class="col items__col">
            <div uk-slider="draggable:false" class="compare__slider" ref="char__slider">
              <div class="uk-slider-container">
                <ul class="uk-slider-items ">
                  <li class="slider__item" v-for="(item, index) in 4">
                    <div class="list__wrapper">
                      <div class="row">
                        <div class="title" style="display: none;">
                          Race
                        </div>
                        <div class="data">
                          Race
                        </div>
                      </div>
                      <div class="row">
                        <div class="title" style="display: none;">
                          Ethnic Origin
                        </div>
                        <div class="data">
                          Ethnic Origin
                        </div>
                      </div>
                      <div class="row">
                        <div class="title" style="display: none;">
                          Age
                        </div>
                        <div class="data">
                          Age
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
        <div class="section__header">
          Other details
        </div>
        <div class="compare__grid">
          <div class="col head__col">
            <div class="list__wrapper">
              <div class="row">
                <div class="title">
                  Marital status
                </div>
              </div>
              <div class="row">
                <div class="title">
                  Children
                </div>
              </div>
              <div class="row">
                <div class="title">
                  Twins in family?
                </div>
              </div>
            </div>
          </div>
          <div class="col items__col">
            <div uk-slider="draggable:false" class="compare__slider other__slider" ref="other__slider">
              <div class="uk-slider-container">
                <ul class="uk-slider-items ">
                  <li class="slider__item" v-for="(item, index) in 4">
                    <div class="list__wrapper">
                      <div class="row">
                        <div class="title" style="display: none;">
                          Marital status
                        </div>
                        <div class="data">
                          Marital status
                        </div>
                      </div>
                      <div class="row">
                        <div class="title" style="display: none;">
                          Children
                        </div>
                        <div class="data">
                          Children
                        </div>
                      </div>
                      <div class="row">
                        <div class="title" style="display: none;">
                          Twins in family?
                        </div>
                        <div class="data">
                          Twins in family?
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
        <div class="section__header">
          Medical information
        </div>
        <div class="compare__grid">
          <div class="col head__col">
            <div class="list__wrapper">
              <div class="row">
                <div class="title">
                  Marital status
                </div>
              </div>
              <div class="row">
                <div class="title">
                  Children
                </div>
              </div>
              <div class="row">
                <div class="title">
                  Twins in family?
                </div>
              </div>
            </div>
          </div>
          <div class="col items__col">
            <div uk-slider="draggable:false" class="compare__slider medical__slider" ref="medical__slider">
              <div class="uk-slider-container">
                <ul class="uk-slider-items ">
                  <li class="slider__item" v-for="(item, index) in 4">
                    <div class="list__wrapper">
                      <div class="row">
                        <div class="title" style="display: none;">
                          Marital status
                        </div>
                        <div class="data">
                          Marital status
                        </div>
                      </div>
                      <div class="row">
                        <div class="title" style="display: none;">
                          Children
                        </div>
                        <div class="data">
                          Children
                        </div>
                      </div>
                      <div class="row">
                        <div class="title" style="display: none;">
                          Twins in family?
                        </div>
                        <div class="data">
                          Twins in family?
                        </div>
                      </div>
                    </div>
                    <div class="view__wrapper">
                      <NuxtLink to="" class="view__btn">
                        View profile
                      </NuxtLink>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "compare",
  mounted() {
    this.$UIkit.util.on(this.$refs.main__slider, 'itemshow', (e, a) => {
      console.log(a.index)
      this.$UIkit.slider(this.$refs.char__slider).show(a.index)
      this.$UIkit.slider(this.$refs.other__slider).show(a.index)
      this.$UIkit.slider(this.$refs.medical__slider).show(a.index)
    });

  }
}
</script>

<style lang="scss" scoped>
.compare__page {
  .page__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    .welcome {
      @include page-header;
      text-transform: initial;
      margin-bottom: 0;
    }

    .consult {
      display: flex;
      align-items: center;

      .title {
        font-size: 22px;
        line-height: 30px;
        margin-right: 34px;
      }

      .consult__btn {
        padding: 15px 40px;
        color: white !important;
        border-radius: 80px;
        background-color: $green;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        transition: 0.3s;

        &:hover {
          background-color: $green-hover;
        }
      }
    }

  }

  .compare__wrapper {
    .section__header {
      text-align: center;
      background: #FAFCFD;
      border: 1px solid #CDE4F0;
      border-radius: 12px;
      padding: 15px;
      font-size: 22px;
      line-height: 24px;
      margin-bottom: 25px;
    }

    .compare__grid {
      display: grid;
      grid-template-columns: 305px 1fr;
      margin-bottom: 25px;

      .list__wrapper {
        padding: 0 30px;
        border-right: 1px solid #CDE4F0;

        .row {


          .title {
            font-size: 18px;
            line-height: 36px;

            color: #979797;
          }

          .data {
            font-size: 18px;
            line-height: 36px;
          }
        }
      }

      .compare__slider.main__slider {
        .uk-slider-container {

        }

        .uk-slider-items {
          margin-left: -15px !important;

          .slider__item {
            padding-left: 15px;

            .item__wrapper {
              position: relative;

              .labels {
                position: absolute;
                z-index: 5;
                top: 13px;
                left: 15px;
                right: 15px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .info__drop {
                  background: white;
                  padding: 20px;
                  width: 370px;
                  border: 1px solid #CDE4F0;
                  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
                  border-radius: 12px;

                  &.uk-open {
                    z-index: 4;
                  }
                }
              }
            }
          }
        }
      }

      .compare__slider {
        position: relative;

        .slider__nav {
          z-index: 20;
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: $green;
          transition: 0.3s;
          width: 10px;
          height: 975px;
          top: 0;

          &:hover {
            background-color: $green-hover;
          }
        }

        .nav__prev {
          left: 0;
        }

        .nav__next {
          right: 0;
        }

        .view__wrapper {
          margin: 25px auto 0;
          display: flex;
          justify-content: center;

          .view__btn {
            font-size: 18px;
            line-height: 30px;
            max-width: 234px;
            width: 100%;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #89CBC4;
            border-radius: 80px;
            color: $green !important;
            transition: 0.3s;

            &:hover {
              color: $green-hover !important;
              border-color: $green-hover;
            }
          }
        }

        .uk-slider-items {
          margin-left: -11px !important;

          .slider__item {
            width: 33%;

            &:last-child {
              .list__wrapper {
                border-right: none;
              }
            }

            .item__wrapper {
              border: 1px solid #CDE4F0;
              border-radius: 12px;
              padding-top: 25px;

              .item__image {
                width: 180px;
                height: 180px;
                border-radius: 100%;
                overflow: hidden;
                margin: 0 auto 10px;
              }

              .donor__title {
                text-align: center;
                font-size: 18px;
                line-height: 30px;
                color: $green;
              }

              .donor__id {
                font-size: 18px;
                line-height: 20px;
                text-align: center;
                margin-bottom: 20px;
              }

              .availability {
                padding: 9px 10px;
                background: #CDE4F0;
                border-radius: 0px 0px 12px 12px;
                display: flex;
                align-items: center;
                justify-content: center;

                .title {
                  font-size: 16px;
                  line-height: 30px;
                  color: #687C87;
                }

                .info__icon {
                  margin-right: 6px;

                  img {
                    width: 16px;
                    height: 16px;
                  }
                }

                .flag {
                  margin-left: 6px;

                  img {
                    width: 16px;
                    height: 16px;
                  }
                }
              }
            }


          }
        }
      }
    }
  }
}

@media screen and (max-width: 1150px) {
  .compare__page {
    .compare__wrapper {
      .compare__grid {
        grid-template-columns: 1fr;

        .head__col {
          display: none;
        }

        .list__wrapper {
          .row {
            .title {
              display: block !important;
            }
          }
        }

      }
    }
  }

}

@media screen and (max-width: 850px) {
  .compare__page {
    .compare__wrapper {
      .compare__grid {
        .compare__slider.main__slider {
          .uk-slider-items {
            margin-left: 0 !important;

            .slider__item {
              padding: 0;
            }
          }
        }

        .compare__slider {
          .slider__nav {
            height: 600px;
          }

          .uk-slider-items {
            .slider__item {
              width: 50%;


              .item__wrapper {
                border-radius: 0;
                border-right-color: #B3CFDD;
                .item__image {
                  margin-bottom: 5px;
                  width: 100%;
                  border-radius: 0;
                  height: initial;
                  display: flex;
                  justify-content: center;

                  img {
                    width: 120px;
                    height: 120px;
                    border-radius: 100%;
                    overflow: hidden;
                  }
                }

                .donor__title, .donor__id {
                  font-size: 14px;
                  line-height: 24px;
                }

                .donor__id {
                  margin-bottom: 11px;
                }
                .availability{
                  display: grid;
                  grid-template-rows: 1fr 1fr;
                  grid-template-columns: 1fr 1fr;
                  border-radius: 0;
                  .title{
                    grid-row-start: 2;
                    grid-row-end: 3;
                    grid-column-start: 1;
                    grid-column-end: 3;
                    text-align: center;
                    font-size: 14px;
                    line-height: 18px;
                  }
                  .info__icon, .flag{
                    grid-row-start: 1;
                    grid-row-end: 2;
                    justify-self: end;
                  }
                  .flag{
                    justify-self: start;
                  }


                }


                .labels {
                  .info__drop {
                    font-size: 14px;
                    line-height: 20px;
                    width: 250px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .compare__page {
    .page__head {
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 30px;

      .welcome {
        margin-bottom: 10px;
      }

      .consult {
        flex-direction: column;
        align-items: flex-start;

        .title {
          font-size: 18px;
          line-height: 30px;
          margin-right: 0;
          margin-bottom: 15px;


        }

        .consult__btn {
          padding: 7px 45px;
          font-size: 18px;
          line-height: 30px;
        }
      }
    }

    .compare__wrapper {
      .section__header {
        padding: 18px;
        font-size: 18px;
        line-height: 24px;
        margin-bottom: 20px;
      }

      .compare__grid {
        .list__wrapper{
            padding: 0 5px;
          .row{
            margin-bottom: 5px;
            text-align: center;
            .title, .data{
              font-size: 14px;
              line-height:20px;
            }
          }
        }
        .compare__slider {
          .view__wrapper{
            .view__btn{
              font-size: 14px;
              line-height: 24px;
              max-width: 135px;
              height: 44px;
            }
          }
          &.main__slider {
            .uk-slider-items {
              .slider__item {
                .item__wrapper {
                  .item__image {

                  }

                  .labels {
                    top: 3px;

                    .remove__btn {
                      img {
                        width: 14px;
                        height: 14px;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
