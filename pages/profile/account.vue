<template>
  <div class="account">
    <div class="account__item">
      <div class="item__head">
        My Order
      </div>
      <div class="item__data">
        <div class="item__data-item">
          <div class="data__head">Donors</div>
          <div class="data__num">1</div>
        </div>
        <div class="item__data-item">
          <div class="data__head">Oocytes</div>
          <div class="data__num">8</div>
        </div>
        <div class="item__data-item">
          <div class="data__head">Reservations</div>
          <div class="data__num">1</div>
        </div>
      </div>
      <div class="link__wrapper">
        <NuxtLink to="/profile/orders" class="link">View All</NuxtLink>
      </div>
    </div>
    <div class="account__item">
      <div class="item__head">
        Favorite
      </div>
      <div class="item__data">
        <div class="item__data-item">
          <div class="data__head">Donors added</div>
          <div class="data__num">4</div>
        </div>

      </div>
      <div class="link__wrapper">
        <NuxtLink to="/profile/wishlist" class="link">View All</NuxtLink>
      </div>
    </div>
    <div class="account__item">
      <div class="item__head">
        Invoices
      </div>
      <div class="item__data">
        <div class="item__data-item">
          <div class="data__head">Waiting
            for payment
          </div>
          <div class="data__num">1</div>
        </div>
        <div class="item__data-item">
          <div class="data__head">Payment
            received
          </div>
          <div class="data__num">1</div>
        </div>
      </div>
      <div class="link__wrapper">
        <NuxtLink to="/profile/orders/invoices" class="link">View All</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "account"
}
</script>

<style lang="scss" scoped>
.account {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;

  .account__item {
    border: 1px solid #CDE4F0;
    border-radius: 12px;
    background-color: white;

    .item__head {
      padding: 15px;
      border-radius: 12px 12px 0 0;
      background: #CDE4F0;
      text-align: center;
      font-size: 22px;
      line-height: 30px;


    }

    .item__data {
      padding: 10px 15px 15px;
      display: flex;
      justify-content: center;
      column-gap: 10px;
    }

    .item__data-item {
      .data__head {
        color: #979797;
        font-size: 18px;
        line-height: 30px;
        margin-bottom: 15px;
        text-align: center;
        min-height: 44px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .data__num {
        text-align: center;
        font-size: 22px;
        line-height: 30px;
      }
    }

    .link__wrapper {
      padding: 0 15px 20px;
      text-align: center;

      .link {
        color: #389188 !important;
        text-decoration: underline !important;
        font-size: 18px;
        line-height: 30px;
        transition: 0.3s;

        &:hover {
          color: $green !important;
        }
      }
    }
  }
}

@media screen and (max-width: 992px) {
  .account {
    grid-gap: 10px;

    .account__item {
      .item__head {
        font-size: 18px;
        line-height: 30px;
        padding: 7px 15px;
      }

      .item__data {
        padding: 10px 15px 7px;
      }

      .item__data-item {
        .data__head {
          font-size: 14px;
          line-height: 24px;
          margin-bottom: 5px;
        }

        .data__num {
          font-size: 18px;
          line-height: 30px;
        }
      }

      .link__wrapper {
        .link {
          font-size: 14px;
          line-height: 24px;
        }
      }
    }
  }
}

@media screen and (max-width: 660px) {
  .account {
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
}
</style>
