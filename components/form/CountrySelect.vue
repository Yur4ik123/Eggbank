<template>
  <multiselect
    v-model="sel_prop"
    :options="options"
    :placeholder="placeholder"
    :showLabels="false"
    @select="setValue"
  >
    <template slot="singleLabel" slot-scope="props">
           <span class="flag">
        <img :src="props.option.flag" width="24" height="24" alt="">
      </span>
      <span class="country">
         {{ props.option.country }}
      </span>
    </template>
    <template slot="option" slot-scope="props">
      <span class="flag">
        <img :src="props.option.flag" width="24" height="24" alt="">
      </span>
      <span class="country">
         {{ props.option.country }}
      </span>
    </template>
    <template slot="caret" slot-scope="props">
            <span class="select__icon">
            <img src="/img/select.svg" width="12" height="8" alt="">
            </span>
    </template>
  </multiselect>
</template>

<script>
export default {
  name: "CountrySelect",
  props: {
    options: {
      type: Array,
      default: () => [
        {
          flag: '/img/us.svg',
          country: 'United States'
        },
        {
          flag: '/img/us.svg',
          country: 'United States'
        },
        {
          flag: '/img/us.svg',
          country: 'United States'
        }
      ]
    },
    value: {
      default: ''
    },
    placeholder: {
      default: ''
    }

  },

  data() {
    return {
      sel_prop: '',
    }
  },
  watch: {
    value: {
      handler(newVal, oldVal) {
        this.sel_prop = newVal;
      },
      deep: true,
    }
  },
  methods: {
    setValue(selectedOption, id) {
      this.$emit("input", selectedOption);
    }
  }

}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss">
.multiselect__option--highlight {
  background-color: $green;
}

.multiselect {
  margin-bottom: 25px;
  height: 60px;

  position: relative;

  .multiselect__option, .multiselect__single {
    display: grid;
    grid-template-columns: 24px 1fr;
    grid-gap: 10px;

    .flag {

    }

    .country {
      font-size: 18px;
      line-height: 24px;
      align-self: center;
    }
  }

  &-active {
    z-index: 20;
  }

  .select__icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
    z-index: 5;
  }

  .multiselect__tags {
    height: 60px;
    background: #FFFFFF;
    border: 1px solid #CDE4F0;
    border-radius: 12px;
    padding: 5px 20px;
    display: flex;
    align-items: center;
  }

  .multiselect__placeholder {
    padding-top: 0;
    margin-bottom: 0;
    font-size: 18px;
    line-height: 30px;
  }

  .multiselect__input, .multiselect__single {
    margin: 0;
    padding: 0;
    font-size: 18px;
    line-height: 30px;
    vertical-align: initial;
  }

  .multiselect__select {

  }
}

@media screen and (max-width: 768px) {
  .multiselect {

    height: 52px;
    .multiselect__option, .multiselect__single {
      display: grid;
      grid-template-columns: 24px 1fr;
      grid-gap: 10px;
      .country {
        font-size: 14px;
        line-height: 24px;
        align-self: center;
      }
    }
    .multiselect__tags {
      height: 52px;
    }

    .multiselect__placeholder, .multiselect__input, .multiselect__single {
      font-size: 14px;
      line-height: 24px;
    }
  }
}
</style>
