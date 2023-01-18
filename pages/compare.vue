<template>
  <div class="compare__page">
    <PartialsBreadcrumbs/>
    <div class="container">
      <div class="page__head">
        <div class="welcome">
          Hi, Jony Doel
        </div>
        <div class="consult">
          <div class="title">Need a consultation?</div>
          <a href="" class="consult__btn">Submit</a>
        </div>

      </div>
      <div class="compare__wrapper">
        <div class="section__header">
          Donor Comparison
        </div>
        <div class="comp__list">
          <div class="comp_col">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "compare"
}
</script>

<style lang="scss" scoped>
.compare__page {
  .page__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    .welcome {
      @include page-header;
      text-transform: initial;
      margin-bottom: 0;
    }

    .consult {
      display: flex;
      align-items: center;

      .title {
        font-size: 22px;
        line-height: 30px;
        margin-right: 34px;
      }

      .consult__btn {
        padding: 15px 40px;
        color: white !important;
        border-radius: 80px;
        background-color: $green;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        transition: 0.3s;

        &:hover {
          background-color: $green-hover;
        }
      }
    }

  }

  .compare__wrapper {
    .section__header {
      text-align: center;
      background: #FAFCFD;
      border: 1px solid #CDE4F0;
      border-radius: 12px;
      padding: 15px;
      font-size: 22px;
      line-height: 24px;
      margin-bottom: 25px;
    }
  }
}
</style>
