<template>
  <div class="donor__gallery">
    <div class="slider__wrapper">
      <client-only>
        <template v-if="showHopper">
          <div class="nav__slider">
            <button class="slide__prev slider__nav" @click="slidePrev">
              <SlidePrevIcon/>
            </button>
            <hooper ref="carousel" :settings="hooperSettings">
              <slide v-for="(item, index) in items" :key="index" :index="index"
                     :class="{'active': activeSlide == index}">
                <div class="img__wrapper" @click="checkImg(index)">
                  <img :src="item" alt="" loading="lazy">
                </div>
              </slide>
              <hooper-pagination slot="hooper-addons"></hooper-pagination>
            </hooper>
            <button class="slide__next slider__nav" @click="slideNext">
              <SlideNextIcon/>
            </button>
          </div>
        </template>
        <template v-else>
          <div class="nav__slider">
            <div uk-slider="finite: true">
              <div class="uk-slider-container">
                <ul class="uk-slider-items">
                  <li v-for="(item, index) in items">
                    <div class="img__wrapper" @click="checkImg(index)" :class="{'active': activeSlide == index}">
                      <img :src="item" alt="" loading="lazy">
                    </div>
                  </li>
                </ul>
              </div>
              <a href="#" class="slide__prev slider__nav" uk-slider-item="previous">
                <SliderPrev/>
              </a>
              <a href="#" class="slide__next slider__nav" uk-slider-item="next">
                <SliderNext/>
              </a>
            </div>
          </div>
        </template>
      </client-only>
      <div class="img__slider">
        <PartialsAddToWishlist/>
        <div class="labels">
          <div class="label__item">
             <span class="pass__icon">
<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path
  d="M5.12671 9.84849C5.01721 9.97576 4.82781 9.98547 4.70584 9.87005L0.0950729 5.50611C-0.0268975 5.39068 -0.0322006 5.19647 0.0831582 5.07449L1.55218 3.52221C1.6676 3.40024 1.86182 3.39494 1.98379 3.5103L4.50247 5.89399C4.62444 6.00942 4.81383 5.99971 4.92334 5.87243L9.84396 0.155114C9.95346 0.0278406 10.1473 0.0133089 10.2745 0.122883L11.8942 1.51697C12.0215 1.62647 12.036 1.82028 11.9264 1.94755L5.12671 9.84849Z"
  fill="#89CBC4"/>
</svg>
      </span>
            <img src="/img/fda-label.svg" width="30" height="12" alt="">
          </div>
          <div class="label__item">
            <img src="/img/info.svg" width="16" height="16" class="info__icon" alt="">
            <!--            <div uk-drop=" pos: bottom-center; offset: 15; delay-hide: 0" class="info__drop">-->
            <!--              On each donor profile, you may find FDA icon (-->
            <!--              <svg style="margin-right: 5px;" width="12" height="10" viewBox="0 0 12 10" fill="none"-->
            <!--                   xmlns="http://www.w3.org/2000/svg">-->
            <!--                <path-->
            <!--                  d="M5.12671 9.84849C5.01721 9.97576 4.82781 9.98547 4.70584 9.87005L0.0950729 5.50611C-0.0268975 5.39068 -0.0322006 5.19647 0.0831582 5.07449L1.55218 3.52221C1.6676 3.40024 1.86182 3.39494 1.98379 3.5103L4.50247 5.89399C4.62444 6.00942 4.81383 5.99971 4.92334 5.87243L9.84396 0.155114C9.95346 0.0278406 10.1473 0.0133089 10.2745 0.122883L11.8942 1.51697C12.0215 1.62647 12.036 1.82028 11.9264 1.94755L5.12671 9.84849Z"-->
            <!--                  fill="#89CBC4"/>-->
            <!--              </svg>-->
            <!--              <img src="/img/fda-label.svg" width="30" height="12" alt=""> ) which means that Egg Donor passed all-->
            <!--              necessary-->
            <!--              medical tests at FDA certified lab and is an FDA-eligible Donor.-->
            <!--            </div>-->
          </div>
        </div>
        <div uk-slider="animation: slide;draggable: false" ref="slideshow">
          <ul class="uk-slider-items uk-child-width-1-1@s">
            <li v-for="(img, idx) in items" :key="idx" class="slider__item">
              <img :src="img" alt="" loading="lazy">
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import {Hooper, Slide, Pagination as HooperPagination} from 'hooper';
import 'hooper/dist/hooper.css';
import SlidePrevIcon from '~/assets/img/slide__prev.svg?inline'
import SlideNextIcon from '~/assets/img/slide__next.svg?inline'
import SliderPrev from '~/assets/img/slider_nav-prev.svg?inline'
import SliderNext from '~/assets/img/slider_nav-next.svg?inline'


export default {
  name: "DonorGallery",
  data() {
    return {
      showHopper: true,
      items: [
        '/img/donorimg.png',
        '/img/donorimg.png',
        '/img/donorimg.png',
        '/img/donorimg.png',
        '/img/donorimg.png',
        '/img/donorimg.png'
      ],
      activeSlide: 0,
      hooperSettings: {
        centerMode: false,
        itemsToShow: 4,
        vertical: true,
        trimWhiteSpace: false,
        shortDrag: false,
        infiniteScroll: true,
        itemsToSlide: 1,
      }
    }
  },
  mounted() {
    this.setMobile();
    window.addEventListener('resize', this.setMobile)
  },
  methods: {
    setMobile() {
      if (window.innerWidth < 1200) {
        this.showHopper = false;
      } else {
        this.showHopper = true;
      }
    },
    slidePrev() {
      this.$refs.carousel.slidePrev();
    },
    slideNext() {
      this.$refs.carousel.slideNext();
    },
    checkImg(idx) {
      this.activeSlide = idx;
      this.$UIkit.slider(this.$refs.slideshow).show(idx)
      console.log(event.target, idx)

    }
  },
  components: {
    Hooper,
    Slide,
    HooperPagination,
    SlidePrevIcon,
    SlideNextIcon,
    SliderPrev,
    SliderNext
  }
}
</script>

<style lang="scss" scoped>
.slider__wrapper {
  display: grid;
  grid-template-columns: 91px 1fr;
  grid-gap: 20px;

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

  .img__slider {
    position: relative;
    z-index: 1;

    .add__to-wishlist {
      position: absolute;
      z-index: 2;
      top: 12px;
      left: 10px;
      width: 36px;
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      border-radius: 100%;
    }

    .labels {
      position: absolute;
      z-index: 2;
      top: 12px;
      right: 10px;
      display: flex;

      .pass__icon {
        margin-right: 7px;
      }

      .label__item {
        margin-left: 5px;
        background-color: white;
        padding: 0 10px;
        border-radius: 40px;
        display: flex;
        height: 36px;
        justify-content: center;
        align-items: center;
      }
    }

    .uk-slider {


      .uk-slider-items {
        .slider__item {
          border-radius: 12px;
          overflow: hidden;

        }

        img {
          width: 100%;
          object-fit: cover;
          max-height: 630px;

        }
      }
    }
  }

  .nav__slider {
    text-align: center;

    .hooper {
      height: 575px;

      .hooper-pagination {
        display: none;
      }

      .hooper-sr-only {
        display: none;
      }

      .hooper-slide {
        .img__wrapper {
          border-radius: 12px;
          border: 1px solid transparent;
          overflow: hidden;
          cursor: pointer;


        }

      }

      .active {
        .img__wrapper {
          border: 1px solid #89CBC4;
        }
      }
    }
  }

  .slider__nav {
    margin: 0 auto;
    background: transparent;
  }

  .slide__prev {
    margin-bottom: 6px;
  }

  .slide__next {
    margin-top: 6px;
  }
}

@media screen and (max-width: 1200px) {
  .slider__wrapper {
    display: flex;
    grid-template-columns: initial;
    grid-gap: initial;
    flex-direction: column-reverse;

    .img__slider {
      margin-bottom: 15px;
    }

    .nav__slider {
      .uk-slider {
        position: relative;

        .uk-slider-container {
          margin: 0 30px;

        }

        .slider__nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          margin: 0 !important;

          &.slide__next {
            right: 0;
          }

          &.slide__prev {
            left: 0;
          }

          &.uk-invisible {
            visibility: visible !important;

            svg {
              path {
                fill: lightgray;
              }
            }
          }
        }

        .uk-slider-items {
          li {
            width: 25%;
            padding: 0 5px;
          }

          .img__wrapper {
            border: 1px solid transparent;
            border-radius: 12px;
            overflow: hidden;
            cursor: pointer;

            &.active {
              border: 1px solid $green;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 880px) {
  .slider__wrapper .img__slider .uk-slider .uk-slider-items img {
    object-fit: cover;
  }
}

@media screen and (max-width: 460px) {
  .slider__wrapper .nav__slider .uk-slider .uk-slider-container {
    margin: 0 15px;

    .uk-slider-items {
      li {
        padding: 0 3px;
      }
    }
  }
}
</style>
