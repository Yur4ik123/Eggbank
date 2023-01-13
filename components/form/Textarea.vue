<template>
  <!--  invalid-->
  <div class="input__wrapper ">
    <label class="label" v-text="label"></label>
    <textarea :value="value" @input="$emit('input', $event.target.value)" class="textarea" :type="type"
              :placeholder="placeholder"></textarea>
  </div>
</template>

<script>
export default {
  name: "Textarea",
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

<style lang="scss" scoped>
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

  .textarea {
    width: 100%;
    padding: 20px;
    font-size: 18px;
    line-height: 30px;
    font-family: Avenir, sans-serif;
    min-height: 114px;
    background-color: white;
    border: 1px solid #CDE4F0;
    border-radius: 12px;
    margin-bottom: 25px;
    resize: none;
  }
}
@media screen and (max-width: 768px) {
  .input__wrapper {
    .textarea {
      font-size: 14px;
      line-height: 24px;
      padding: 15px;
    }
    .label{
      font-size: 18px;
      line-height: 24px;
    }
  }
}
</style>
