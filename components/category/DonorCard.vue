<template>
  <div class="donor__card">
   <PartialsAddToWishlist/>
    <div class="labels drop__wrapper">
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
        <img src="/img/fda-label.svg" width="30" height="12" alt=""> ) which means that Egg Donor passed all necessary
        medical tests at FDA certified lab and is an FDA-eligible Donor.
      </div>
    </div>
    <div class="donor__img">
      <img src="/img/donor.png" width="180" height="180" alt="">
    </div>
    <div class="donor__gallery">
      <a href="" class="gallery__btn" @click.prevent="showImages">13 Photos</a>
    </div>
    <div class="availability">
      Available Now
    </div>
    <div class="shipping">
      <img src="/img/info.svg" width="16" height="16" class="info__icon" alt="">
      <span>Immediate shipping available</span>
      <img src="/img/flag.png" width="16" height="16" alt="" class="flag">
    </div>
    <div class="donor__params">
      <div class="param__row">
        <div class="param__title">
          Donor
        </div>
        <div class="param__data">
          id326338
        </div>
      </div>
      <div class="param__row">
        <div class="param__title">
          Race
        </div>
        <div class="param__data">
          Middle Eastern
        </div>
      </div>
      <div class="param__row">
        <div class="param__title">
          Natural Eye colour
        </div>
        <div class="param__data">
          Blue
        </div>
      </div>
      <div class="param__row">
        <div class="param__title">
          Natural Hair colour

        </div>
        <div class="param__data">
          Medium brown hair
        </div>
      </div>
      <div class="param__row">
        <div class="param__title">
          Education
        </div>
        <div class="param__data">
          specialized secondary
        </div>
      </div>
    </div>
    <div class="btn__wrapper">
      <NuxtLink to="/donors/1" class="profile__btn">
        View profile
      </NuxtLink>
    </div>

  </div>
</template>

<script>


export default {
  name: "DonorCard",
  methods: {
    showImages() {
      this.$nuxt.$emit('show-images',
        [
          '/img/donorimg.png',
          '/img/donorimg.png',
          '/img/donorimg.png',
          '/img/donorimg.png',
          '/img/donorimg.png',
          '/img/donorimg.png'
        ]
      )
    }
  },

}
</script>

<style lang="scss" scoped>
.donor__card {
  background: #FFFFFF;
  border: 1px solid #CDE4F0;
  border-radius: 12px;
  padding: 25px 15px;
  position: relative;
  z-index: 1;

  &:hover {
    z-index: 5;
  }

  .add__to-wishlist {
    position: absolute;
    top: 15px;
    left: 15px;
    z-index: 4;
  }

  .labels {
    position: absolute;
    top: 15px;
    right: 15px;
    display: flex;
    align-items: center;
    cursor: pointer;
    z-index: 4;

    .pass__icon {
      margin-right: 7px;
    }

    .info__icon {
      margin-left: 7px;
    }

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

  .donor__img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 180px;
    border-radius: 100%;
    overflow: hidden;
    border: 1px solid #E3E3E3;
    margin: 0 auto 10px;

    img {
      object-fit: contain;
      width: 100%;
      height: auto;
    }
  }

  .donor__gallery {
    display: flex;
    justify-content: center;

    .gallery__btn {
      font-size: 18px;
      line-height: 30px;
      text-align: center;
      text-decoration: underline !important;
      color: $green !important;
      transition: 0.3s;

      &:hover {
        color: $green-hover !important;
      }

    }
  }

  .availability {
    text-align: center;
    font-size: 18px;
    line-height: 30px;
    color: black;
    margin-bottom: 10px;
  }

  .shipping {
    margin: 0 -15px 15px;
    padding: 14px;
    background-color: #CDE4F0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    line-height: 30px;

    color: #687C87;

    .info__icon {
      margin-right: 3px;
    }

    .flag {
      margin-left: 3px;
      border-radius: 100%;
      overflow: hidden;
      width: 16px;
      height: 16px;
    }
  }

  .donor__params {
    margin-bottom: 20px;

    .param__row {
      margin-bottom: 10px;

      .param__title {
        font-size: 16px;
        line-height: 20px;
        color: #89CBC4;
      }

      .param__data {
        font-size: 18px;
        line-height: 20px;
        color: black;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .profile__btn {
    width: 100%;
    height: 48px;
    border: 1px solid #89CBC4;
    border-radius: 80px;
    color: #89CBC4 !important;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;

    &:hover {
      background-color: rgba(137, 203, 196, 0.15);
    }

  }
}

@media screen and (max-width: 768px) {
  .donor__card {
    .add__to-wishlist{
      top: 3px;
      left: 10px;
    }
    .labels {
      top: 3px;
      right: 10px;

      .info__drop {
        font-size: 14px;
        line-height: 20px;
        width: 250px;
      }
    }

    .donor__img {
      width: 120px;
      height: 120px;
      margin: 0 auto 5px;

    }

    .donor__gallery {
      .gallery__btn {
        font-size: 14px;
        line-height: 24px;
      }

      margin-bottom: 1px;
    }

    .availability {
      font-size: 14px;
      line-height: 24px;
      margin-bottom: 6px;
    }

    .shipping {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 5px;
      padding: 9px 15px;

      .info__icon {
        grid-column-start: 1;
        grid-column-end: 2;
        justify-self: flex-end;
      }

      .flag {
        grid-column-start: 2;
        grid-column-end: 3;
      }

      span {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 3;
        justify-self: center;
        text-align: center;
        font-size: 14px;
        line-height: 18px;
      }

    }

    .donor__params {
      .param__row {
        margin-bottom: 10px;

        .param__title, .param__data {
          font-size: 14px;
          line-height: 20px;
        }
      }

    }

    .btn__wrapper {
      .profile__btn {
        height: 44px;
        font-size: 14px;
      }
    }
  }

}

</style>
