<template>
  <div class="birth">
    <label class="label" v-text="label"></label>
  <div class="birth__wrapper">
    <FormSelect :options="month_list" v-model="month" placeholder="Month"  />
    <FormSelect :options="day_list" v-model="day" placeholder="Day" />
    <FormSelect :options="years_list" v-model="year" placeholder="Year" />
  </div>
  </div>
</template>

<script>
export default {
  name: "Birth",
  props:{
    label:{
      default: 'Date Of Birth:'
    }
  },
  data() {
    return {
      month: '',
      day: '',
      year: '',
      month_list: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
      day_list: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16'],
      years_list: ['1950', '1950','1950','1950','1950','1950','1950','1950',]
    }
  }
}
</script>

<style lang="scss" >


.birth__wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-size: 18px;
  line-height: 30px;
  grid-gap: 10px;
}
.label {
  display: block;
  font-size: 18px;
  line-height: 30px;
  margin-bottom: 5px;
}
@media screen and (max-width: 768px){
  .label {
    font-size: 18px;
    line-height: 24px;
  }
}

</style>
