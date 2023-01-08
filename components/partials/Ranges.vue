<template>
  <div class="ranges__wrapper">
    <div class="ranges__inputs">
      <div class="col from">
        <span>From:</span>
        <input type="text" v-model.trim="value[0]">
      </div>
      <div class="col to">
        <span>Up to:</span>
        <input type="text" v-model.trim="value[1]">
      </div>
    </div>

    <div class="range__wrapper">
      <Slider
        v-model="value"
        :min="min"
        :max="max"
        :step="step"
        :tooltips="true"
        tooltipPosition="bottom"
      />
    </div>
  </div>
</template>

<script>

import Slider from '@vueform/slider/dist/slider.vue2.js'

export default {
  name: "Ranges",
  data() {
    return {
      from: 160,
      to: 186,
      min: 50,
      max: 250,
      step: 1,
      value: [120, 186]
    }
  },
  methods: {},
  components: {
    Slider
  }
}
</script>

<style lang="scss" >
.ranges__wrapper {

  .ranges__inputs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    margin-bottom: 20px;

    .col {
      display: flex;
      align-self: center;

      span {
        margin-right: 5px;
        font-size: 16px;
        line-height: 30px;
        color: #89CBC4;
      }

      input {
        width: 67px;
        height: 34px;
        font-size: 16px;
        font-family: Avenir, sans-serif;
        text-align: center;
        border: 1px solid white;
        background-color: transparent;
      }
    }
  }

  .range__wrapper {
    padding-bottom: 30px;
    .slider-horizontal {
      height: 4px;
      .slider-base, .slider-connects {
        border-radius: 0;
        background-color: #96B0BD;
      }
    }
    .slider-connect{
      background:#FFEBC5 ;
    }
    .slider-handle{
      width: 22px;
      height: 22px;
      background: #FAFCFD;
      border: 1px solid #89CBC4;
      box-shadow: none;
      top: 50%;
      transform: translateY(-50%);

    }
    .slider-tooltip{
      color: #96B0BD;
      font-family: Avenir, sans-serif;
      font-size: 16px;
      line-height: 30px;
      background: none;
      font-weight: 400;
      border: none;
      top: 17px;
      &:before{
        display: none;
      }
    }
  }
}
</style>
