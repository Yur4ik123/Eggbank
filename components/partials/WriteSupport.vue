<template>
  <a href="" class="write__support">
    WRITE TO SUPPORT
  </a>
</template>

<script>
export default {
  name: "WriteSupport"
}
</script>

<style lang="scss">
a.write__support{
  padding: 15px 20px;
  font-size: 18px;
  line-height: 30px;
  background-color: $green;
  color: white!important;
  transition: 0.3s;
  display: inline-flex;
  border-radius: 80px;
  &:hover{
    background-color: $green-hover;
  }
}

</style>
