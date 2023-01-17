<template>
  <div class="invoices">
    <div class="invoices__wrapper">
      <div class="invoices__header">
        <div class="col">№</div>
        <div class="col" style="text-align: left">Donor</div>
        <div class="col">Cost</div>
        <div class="col">Status</div>
        <div class="col">Invoice</div>
      </div>
      <div class="invoice__item">
        <div class="col num">1</div>
        <div class="col" style="text-align: left">Reservation # 11231233</div>
        <div class="col">$9,680.00</div>
        <div class="col">processed</div>
        <div class="col"><img src="/img/invoice.svg" alt=""></div>
      </div>
      <div class="invoice__item">
        <div class="col num">1</div>
        <div class="col" style="text-align: left">Reservation # 11231233</div>
        <div class="col">$9,680.00</div>
        <div class="col">processed</div>
        <div class="col"><img src="/img/invoice.svg" alt=""></div>
      </div>
      <div class="invoice__item">
        <div class="col num">1</div>
        <div class="col" style="text-align: left">Reservation # 11231233</div>
        <div class="col">$9,680.00</div>
        <div class="col">processed</div>
        <div class="col"><img src="/img/invoice.svg" alt=""></div>
      </div>
      <div class="invoice__item">
        <div class="col num">1</div>
        <div class="col" style="text-align: left">Reservation # 11231233</div>
        <div class="col">$9,680.00</div>
        <div class="col">processed</div>
        <div class="col"><img src="/img/invoice.svg" alt=""></div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "invoices"
}
</script>

<style lang="scss" scoped>
.invoices {
  .invoices__wrapper {
    .invoices__header {
      display: grid;
      grid-template-columns: 53px 1fr 140px 140px 140px;
      background: #89CBC4;
      border: 1px solid #A0BAC8;
      border-radius: 12px;
      padding: 13px 0;
      margin-bottom: 25px;

      .col {
        padding: 0 7px;
        text-align: center;
        color: white;
        font-size: 16px;
        line-height: 24px;
        border-right: 1px solid #7DBDB6;

        &:last-child {
          border-right: none;
        }
      }
    }

    .invoice__item {
      margin-bottom: 10px;
      display: grid;
      grid-template-columns: 53px 1fr 140px 140px 140px;

      .col {
        padding: 0 7px;
        text-align: center;
        font-size: 18px;
        line-height: 24px;

        &.num {
          color: #979797;
        }
      }
    }

  }
}

@media screen and (max-width: 768px) {
  .invoices {
    max-width: calc(100vw - 30px);
    .invoices__wrapper {
      display: flex;
      flex-direction: row;
      overflow-y: auto;
      .invoices__header {
        grid-template-columns: 90px;
        grid-template-rows: 42px 68px 44px 44px 44px;
        padding: 0 8px;
        height: fit-content;
        position: sticky;
        left: 0px;
        z-index: 5;
        .col {
          text-align: center !important;
          align-self: center;
          border-right: none;
          padding: 15px 0;
          border-bottom: 1px solid #7DBDB6;
          font-size: 14px;
          line-height: 18px;

          &:last-child {
            border-bottom: none;
          }
        }
      }
      .invoice__item{
        grid-template-columns: 90px;
        grid-template-rows: 42px 68px 44px 44px 44px;
        padding: 0 15px;
        border-right: 1px solid #B8DDF1;

        &:last-child {
          border-right: none;
        }

        .col {
          justify-content: center !important;
          font-size: 14px;
          line-height: 24px;
        }
      }

    }
  }
}
</style>
