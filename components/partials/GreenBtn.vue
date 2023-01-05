<template>
  <NuxtLink :to="url" class="green__btn">
    <img src="~/assets/img/btn.svg" width="46" height="46"> {{ title }}
  </NuxtLink>
</template>

<script>
export default {
  name: "GreenBtn",
  props: {
    url: {
      default: '/'
    },
    title: {
      default: 'Find a Donor'
    }
  }
}
</script>

<style lang="scss" scoped>
.green__btn {
  height: 60px;
  background: $green;
  padding: 7px 14px;
  display: inline-flex;
  width: fit-content;
  align-items: center;
  color: white!important;
  font-size: 18px;
  line-height: 30px;
  border-radius: 80px;
  transition: 0.3s;
  &:hover {
    background: $green-hover;
  }

  img {
    margin-right: 16px;
  }
}
@media screen and (max-width: 700px){
  .green__btn{
    height: 44px;
    font-size: 14px;
    line-height: 30px;
    padding: 4px 18px 4px 7px;
    img{
      width: 36px;
      height: 36px;
      margin-right: 9px;
    }
  }
}
</style>
