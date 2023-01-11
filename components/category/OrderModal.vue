<template>
  <div class="order__modal uk-flex-top" id="order__modal" uk-modal>
    <div class="uk-modal-dialog uk-margin-auto-vertical">
      <button class="uk-modal-close">
        <img src="/img/close-modal.png" width="29" height="29" alt="">
      </button>
      <div class="modal__content">
        <div class="img__wrapper">
          <img src="/img/donorimg.png" width="488" height="730" alt="">

        </div>
        <div class="modal__data">
          <div class="modal__header">
            Added To Your My Order
          </div>
          <div class="order__data">
            <div class="donor">
              <div class="title">
                Donor
              </div>
              <div class="data">
                Donor Identity
              </div>
            </div>
            <div class="donor">
              <div class="title">
                Cryo Oocyte, qty
              </div>
              <div class="data">
               8
              </div>
            </div>
          </div>
          <div class="btns__wrapper">
            <NuxtLink to="" class="btn end__order">
              Finish The Reservation
            </NuxtLink>
            <button class="btn uk-modal-close">
              Continue Browsing
            </button>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderModal"
}
</script>

<style lang="scss" scoped>
.order__modal {
  .uk-modal-dialog {
    max-width: 700px !important;
    width: 100%;
    background-color: white;
    padding: 50px 30px;
    border-radius: 12px;

    .uk-modal-close {
      background-color: transparent;
      position: absolute;
      top: 10px;
      right: 10px;
    }

    .modal__content {
      display: grid;
      grid-template-columns: 178px 1fr;
      grid-gap: 20px;

      .img__wrapper {
        border: 1px solid #E3E3E3;
        border-radius: 12px;
        overflow: hidden;

        img {
          width: 100%;
          object-fit: contain;
        }

        max-height: 228px;
      }

      .modal__data {
        .modal__header {
          font-size: 22px;
          line-height: 30px;
          margin-bottom: 39px;
          text-align: center;
          text-transform: uppercase;
        }

        .order__data {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 10px;
          margin-bottom: 40px;

          .donor {
            .title, .data {
              color: #979797;
              font-size: 18px;
              line-height: 30px;
              text-align: center;
            }

            .data {
              color: black;
            }
          }
        }
      }

      .btns__wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 7px;

        .btn {
          width: 100%;
          background-color: white;
          height: 60px;
          padding: 0 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: $green;
          border: 1px solid $green;
          border-radius: 80px;
          font-size: 18px;
          line-height: 30px;
          text-decoration: none !important;
        }

        .btn.uk-modal-close {
          position: relative;
          top: initial;
          right: initial;

        }

        .btn.end__order {
          background-color: $green;
          color: white;
        }
      }
    }

  }
}

@media screen and (max-width: 768px) {
  .order__modal .uk-modal-dialog {
    padding: 30px 10px;
    .modal__content {
      grid-template-columns: 1fr;

      .img__wrapper {
        margin: 0 auto;
        max-width: 180px;

      }

      .modal__data {
        .modal__header {
          font-size: 18px;
          line-height: 24px;
          margin-bottom: 20px;
        }

        .order__data {
          .donor {
            margin-bottom: 15px;
            .title, .data {
              font-size: 14px;
              line-height: 24px;
            }
          }
        }
        .btns__wrapper{
          grid-template-columns: 1.15fr 1fr;
          grid-gap: 7px;
          .btn{
            font-size: 14px;
            line-height: 24px;
          }
        }
      }
    }
  }
}
</style>
