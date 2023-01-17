<template>
  <!--  invalid-->
  <div class="input__wrapper ">
    <label class="label" v-text="label"></label>
    <input :value="value" @input="$emit('input', $event.target.value)" class="input" :type="type"
           :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    label: {
      default: 'Label'
    },
    placeholder: {
      default: ''
    },
    type: {
      default: 'text'
    },
    value: {
      default: ''
    }

  },
}
</script>

<style lang="scss" >
.input__wrapper {
  &.invalid {
    .input {
      border-color: red;
    }
  }

  .label {
    display: block;
    font-size: 18px;
    line-height: 30px;
    margin-bottom: 5px;
  }

  .input {
    width: 100%;
    padding: 0 20px;
    font-size: 18px;
    line-height: 30px;
    font-family: Avenir, sans-serif;
    height: 60px;
    background-color: white;
    border: 1px solid #CDE4F0;
    border-radius: 12px;
    margin-bottom: 25px;
  }
}

@media screen and (max-width: 768px) {
  .input__wrapper {
    .input {
      height: 52px;
      font-size: 14px;
      line-height: 24px;
      padding: 0 15px;
    }
    .label{
      font-size: 18px;
      line-height: 24px;
    }
  }
}
</style>
