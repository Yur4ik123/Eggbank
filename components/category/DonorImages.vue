<template>
  <div id="donor__images" ref="donor__images" uk-modal class="uk-flex-top donor__images">
    <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
      <button class="uk-modal-close" type="button"><img src="/img/close-modal.png" width="29" height="29" alt="">
      </button>
      <div class="modal__title">
        Donor id326338
      </div>
      <div class="slider__wrapper">
        <div class="nav__slider">

        </div>
        <!--        <div class="image__slider " uk-slider>-->
        <!--          <div class="uk-slider-container">-->
        <!--            <ul class="uk-slider-items">-->
        <!--              <li v-for="item in items">-->
        <!--                <img :src="item" alt="">-->
        <!--              </li>-->
        <!--            </ul>-->
        <!--          </div>-->
        <!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "DonorImages",
  data() {
    return {
      items: [],

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
    }
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
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

    }
  }

}
</style>
