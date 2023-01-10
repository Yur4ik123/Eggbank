<template>
  <div class="availability" :class="{'now': status=='now', 'request':status=='request'}">
    <template v-if="status=='now'">
      <div class="status">
        Available Now
      </div>
      <div class="ship">
        <img src="/img/info.svg" width="16" height="16" class="info__icon" alt="">
        <span>Immediate shipping available</span>
        <img src="/img/flag.png" width="16" height="16" alt="" class="flag">
      </div>
    </template>
    <template v-if="status=='request'">
      <div class="status">
        Availability on request
        <img src="/img/info.svg" width="16" height="16" class="info__icon" alt="">
      </div>
      <div class="ship">
        <img src="/img/info.svg" width="16" height="16" class="info__icon" alt="">
        <span>2-3 month shipping timeline</span>
        <img src="/img/flag.png" width="16" height="16" alt="" class="flag">
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "Availability",
  props: {
    status: {
      default: 'now' //request
    }
  }
}
</script>

<style lang="scss" scoped>
.availability {
  padding: 10px 15px;
  margin: 0 -15px 15px;
  background: #CDE4F0;
&.request{
  background-color: #FFEBC5;
}
  .status {
    font-size: 16px;
    line-height: 30px;
    text-align: center;
  }

  .ship {
    display: flex;
    align-items: center;
    font-size: 16px;
    line-height: 30px;
    color: #687C87;
    justify-content: space-between;
  }
}
</style>
