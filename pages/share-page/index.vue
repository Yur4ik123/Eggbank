<template>
  <div class="share__page">
    <div class="share__container">
      <div class="share__page-header">
        Jony Doel
      </div>
      <div class="share__items">
        <CategoryDonorCard/>
        <CategoryDonorCard/>
        <CategoryDonorCard/>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  layout: 'share',
}
</script>

<style lang="scss" scoped>
.share__page {
  padding: 50px 0;

  .share__page-header {
    @include page-header;
    text-transform: initial;
    margin-bottom: 50px;
  }

  .share__items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
  }
}

.share__container {
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
}

@media screen and (max-width: 560px) {
  .share__page {
    .share__items {
      grid-template-columns: 1fr 1fr;
      grid-gap: 10px;
    }
  }
}
</style>
