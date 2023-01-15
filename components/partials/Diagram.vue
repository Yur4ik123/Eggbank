<template xmlns="http://www.w3.org/2000/svg">
  <client-only>
    <div class="wrapper">
      <svg width="189" height="189" viewBox="0 0 189 189" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="94.5" cy="94.5" r="94.5" fill="#718895"/>
        <circle
          ref="mainDiagram"
          class="front"
          :stroke-dasharray="dasharray"
          :stroke-dashoffset="0"
          :r="radius"
          cx="50%"
          cy="50%"
        />
      </svg>
      <div class="num">
        {{ percent }}%
      </div>
<!--      <div class="white__num"-->
<!--           :style="`transform: rotate(-${(100 - percent)*2}deg); top:${((100-percent)/2)+3}%;left:${((100-percent)/2)+6}%; ` ">-->
<!--        {{ 100 - +percent }}%-->
<!--      </div>-->

    </div>
  </client-only>
</template>

<script>
export default {
  name: "Diagram",
  props: {
    radius: {
      type: String,
      default: "75",
    },
    percent: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      dasharray: "0 100", // начальные данные псевдомассива отрезка
      dashoffset: "0", // Длина окружности для фигуры подложки
      circumference: 0, // Длина окружности которую вычислим позже
    };
  },
  mounted() {
    this.circumference = 2 * Math.PI * this.radius;
    const percent = ((this.percent * 100) / 100).toFixed(1);
    this.setLengthDasharray(percent, this.circumference);

  },
  methods: {
    setLengthDasharray(percent, circumference) {
      const offset = (percent / 100) * circumference;
      this.dasharray = `${offset} ${circumference}`;

    },
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  position: relative;

  svg {
    z-index: 3;
  }

  .front {
    stroke: $green;
    fill: transparent;
    stroke-width: 40px;
    transform-origin: center;
    transform: rotate(-90deg);
    transition: stroke-dasharray 1s ease;
    z-index: 10;
    position: relative;

  }

  .num {
    width: 113px;
    height: 113px;
    background-color: white;
    z-index: 5;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    font-size: 36px;
    line-height: 54px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: black;
  }

  .white__num {
    color: white;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 18px;
    line-height: 24px;

  }
}

@media screen and (max-width: 768px) {
  .wrapper {
    .num {
      width: 96px;
      height: 96px;
      font-size: 30px;
      line-height: 36px;
    }

    .white__num {
      font-size: 14px;
      line-height: 24px;
    }
  }

}
</style>
