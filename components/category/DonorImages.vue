<template>
  <div id="donor__images" ref="donor__images" uk-modal class="uk-flex-top donor__images">
    <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
      <button class="uk-modal-close" type="button"><img src="/img/close-modal.png" width="29" height="29" alt="">
      </button>
      <client-only>
        <div class="modal__title">
          Donor id326338
        </div>
        <div class="slider__wrapper">
          <div class="nav__slider">
            <button class="slide__prev slider__nav" @click="slidePrev">
              <SlidePrevIcon/>
            </button>
            <hooper ref="carousel" :settings="hooperSettings">
              <slide v-for="(item, index) in items" :key="index" :index="index"
                     :class="{'active': activeSlide == index}">
                <div class="img__wrapper" @click="checkImg(index)">
                  <img :src="item" alt="">
                </div>
              </slide>
              <hooper-pagination slot="hooper-addons"></hooper-pagination>
            </hooper>
            <button class="slide__next slider__nav" @click="slideNext">
              <SlideNextIcon/>
            </button>
          </div>
          <div class="img__slider">
            <div uk-slider="animation: slide;draggable: false" ref="slideshow">
              <ul class="uk-slider-items uk-child-width-1-1@s">
                <li v-for="(img, idx) in items" :key="idx">
                  <img :src="img" alt="">
                </li>
              </ul>
            </div>
          </div>

        </div>
      </client-only>
    </div>
  </div>
</template>

<script>
import {Hooper, Slide, Pagination as HooperPagination} from 'hooper';
import 'hooper/dist/hooper.css';
import SlidePrevIcon from '~/assets/img/slide__prev.svg?inline'
import SlideNextIcon from '~/assets/img/slide__next.svg?inline'

export default {
  name: "DonorImages",
  data() {
    return {
      items: [],
      activeSlide: 0,
      hooperSettings: {

        centerMode: false,
        itemsToShow: 3,
        vertical: false,
        itemsToSlide: 1,
        trimWhiteSpace: true,
        shortDrag: false,
        infiniteScroll: true,
        breakpoints: {
          700: {
            itemsToShow: 5,
            vertical: true,
          },
        }
      }
    }
  },
  mounted() {
    this.$nuxt.$on('show-images', this.openModal);
  },
  methods: {
    openModal(data) {
      this.items = data;
      this.$UIkit.modal(this.$refs.donor__images).show();
      console.log(data)
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
    SlideNextIcon
  }
}
</script>

<style lang="scss">
.donor__images {
  top: 90px;
  background: rgba(184, 221, 241, 0.4);
  backdrop-filter: blur(5px);

  .uk-modal-close {
    background: transparent;
    position: absolute;
    top: 20px;
    right: 20px;
  }

  .uk-modal-dialog {
    width: 640px;
    padding: 20px;
    border-radius: 12px;
    background: white;

    .modal__title {
      font-size: 22px;
      line-height: 30px;
      text-align: center;
      color: black;
      margin-bottom: 21px;
    }

    .slider__wrapper {
      display: grid;
      grid-template-columns: 86px 1fr;
      grid-gap: 20px;

      .img__slider {
        .uk-slider {


          .uk-slider-items {

            img {
              width: 100%;
              object-fit: contain;
            }
          }
        }
      }

      .nav__slider {
        text-align: center;

        .hooper {
          height: 680px;

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
  }

}

@media screen and (max-width: 700px) {
  .donor__images {
    .uk-modal-dialog {
      .slider__wrapper {
        display: flex;
        flex-direction: column-reverse;
        grid-gap: initial;

        .nav__slider {
          padding-bottom: 30px;

          .hooper {
            height: fit-content;

            .hooper-slide {
              padding-right: 28px;
            }

            .hooper-pagination {
              display: block;
              bottom: -40px;

              .hooper-indicator {
                width: 15px;
                height: 15px;
                border-radius: 100%;
                border: 1px solid #89CBC4;

                &.is-active {
                  background-color: #89CBC4;
                }

                &:hover {
                  background-color: #89CBC4;
                }
              }

            }
          }

          .slider__nav {
            display: none;
          }
        }

        .img__slider {
          margin-bottom: 15px;
        }
      }
    }
  }

}

@media screen and (max-width: 576px) {
  .donor__images {
    top: 60px;
  }
}
</style>
