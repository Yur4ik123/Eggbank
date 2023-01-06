<template>
  <div class="donors__category">
    <PartialsBreadcrumbs/>
    <div class="container">
      <div class="page__layout">
        <Filters/>
        <div class="page__content">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DonorsPage"
}
</script>

<style lang="scss" scoped>
.donors__category {
  .page__layout {
    display: grid;
    grid-template-columns: 285px 1fr;
    grid-gap: 20px;
    margin-bottom: 80px;
  }
}
</style>
