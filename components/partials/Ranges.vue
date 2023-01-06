<template>
  <div class="ranges__wrapper">
    <div class="ranges__inputs">
      <div class="col from">
        <span>From:</span>
        <input type="text" v-model.trim="from">
      </div>
      <div class="col to">
        <span>Up to:</span>
        <input type="text" v-model.trim="to">
      </div>
    </div>

    <div class="range__wrapper">

    </div>
  </div>
</template>

<script>

export default {
  name: "Ranges",
  data() {
    return {
      from: 160,
      to: 186,
      min: 50,
      max: 250,
      step:1,
      minValue: 0,
      maxValue: 0
    }
  },
  methods:{

  },

}
</script>

<style lang="scss" scoped>
.ranges__wrapper {
  .ranges__inputs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;

    .col {
      display: flex;
      align-self: center;
      span{
        margin-right: 5px;
        font-size: 16px;
        line-height: 30px;
        color: #89CBC4;
      }
      input{
        width: 67px;
        height: 34px;
        font-size: 16px;
        font-family: Avenir, sans-serif;
        text-align: center;
        border:1px solid white;
        background-color: transparent;
      }
    }
  }
}
</style>
