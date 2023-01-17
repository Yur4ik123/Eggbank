<template>
  <div class="reservations">
    <div class="reservation__wrapper">
      <div class="res__item">
        <div class="res__num-price">
          <div class="res__num">
            Reservation # 11231233
          </div>
          <div class="res__price">
            $9,680.00*
          </div>
        </div>
        <div class="res__status">
          Confirmed By Coordinator
        </div>
        <div class="btn__wrapper">
          <a href="#detail__modal" uk-toggle class="view__details">
            View Details
          </a>
        </div>
      </div>
      <div class="res__item">
        <div class="res__num-price">
          <div class="res__num">
            Reservation # 11231233
          </div>
          <div class="res__price">
            $9,680.00*
          </div>
        </div>
        <div class="res__status">
          Confirmed By Coordinator
        </div>
        <div class="btn__wrapper">
          <a href="#detail__modal" uk-toggle class="view__details">
            View Details
          </a>
        </div>
      </div>
    </div>
    <div class="detail__modal uk-flex-top" ref="detail__modal" id="detail__modal" uk-modal>
      <div class="uk-modal-dialog uk-margin-auto-vertical">
        <button class="uk-modal-close">
          <img src="/img/close-modal.png" width="29" height="29" alt="">
        </button>
        <div class="modal__content">
          <div class="modal__header">
            <div class="number">
              Reservation # 11231233
            </div>
            <div class="status">
              Confirmed By Coordinator
            </div>
          </div>
          <div class="res__list">
            <div class="res__header">
              <div class="col">№</div>
              <div class="col" style="text-align: left">Donor</div>
              <div class="col">Cryo
                Оocytes
              </div>
              <div class="col">Additional Oocite
                <br>
                (Request)
              </div>
              <div class="col">
                Fresh Sycle Oocite
                <br>
                (Request)
              </div>
              <div class="col">
                Cost
              </div>
            </div>
            <div class="res__item">

              <div class="col">
                <div class="checkbox__wrapper">
                  <label>
                    <input class="uk-checkbox" type="checkbox">
                    1
                  </label>
                </div>
              </div>
              <div class="col" style="justify-content: flex-start">
                <div class="donor__inf">
                  <div class="avatar">
                    <img src="/img/ord.png" alt="">
                  </div>
                  <div class="title__wrap">
                    <NuxtLink to="/donors/1" class="donor__link">
                      <span>Donor Identity</span>
                      <img src="/img/views.svg" width="14" height="10" alt="">
                    </NuxtLink>
                    <div class="title">
                      Basic Egg Package
                    </div>
                  </div>

                </div>
              </div>
              <div class="col">
                8
              </div>
              <div class="col">
                0
              </div>
              <div class="col">
                No
              </div>
              <div class="col">$9,680.00</div>
            </div>
            <div class="res__item">

              <div class="col">
                <div class="checkbox__wrapper">
                  <label>
                    <input class="uk-checkbox" type="checkbox">
                    1
                  </label>
                </div>
              </div>
              <div class="col" style="justify-content: flex-start">
                <div class="donor__inf">
                  <div class="avatar">
                    <img src="/img/ord.png" alt="">
                  </div>
                  <div class="title__wrap">
                    <NuxtLink to="/donors/1" class="donor__link">
                      <span>Donor Identity</span>
                      <img src="/img/views.svg" width="14" height="10" alt="">
                    </NuxtLink>
                    <div class="title">
                      Basic Egg Package
                    </div>
                  </div>

                </div>
              </div>
              <div class="col">
                8
              </div>
              <div class="col">
                0
              </div>
              <div class="col">
                No
              </div>
              <div class="col">$9,680.00</div>
            </div>
            <div class="res__item">

              <div class="col">
                <div class="checkbox__wrapper">
                  <label>
                    <input class="uk-checkbox" type="checkbox">
                    1
                  </label>
                </div>
              </div>
              <div class="col" style="justify-content: flex-start">
                <div class="donor__inf">
                  <div class="avatar">
                    <img src="/img/ord.png" alt="">
                  </div>
                  <div class="title__wrap">
                    <NuxtLink to="/donors/1" class="donor__link">
                      <span>Donor Identity</span>
                      <img src="/img/views.svg" width="14" height="10" alt="">
                    </NuxtLink>
                    <div class="title">
                      Basic Egg Package
                    </div>
                  </div>

                </div>
              </div>
              <div class="col">
                8
              </div>
              <div class="col">
                0
              </div>
              <div class="col">
                No
              </div>
              <div class="col">$9,680.00</div>
            </div>

          </div>
          <div class="total">
            <div class="total__title">TOTAL:</div>
            <div class="total__value">$9,680.00</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "reservations"
}
</script>

<style lang="scss" scoped>
.reservations {
  .reservation__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;

    .res__item {
      padding: 20px 20px 30px;
      background: #FFFFFF;
      border: 1px solid #CDE4F0;
      border-radius: 12px;

      .res__num-price {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;

        .res__num, .res__price {
          font-size: 22px;
          line-height: 24px;
        }
      }

      .res__status {
        font-size: 18px;
        line-height: 24px;
        color: #89CBC4;
        margin-bottom: 25px;
      }

      .btn__wrapper {
        .view__details {
          display: inline-block;
          padding: 15px 36px;
          background-color: $green;
          transition: 0.3s;
          color: white !important;
          font-size: 18px;
          line-height: 30px;
          border-radius: 80px;

          &:hover {
            background-color: $green-hover;
          }

        }
      }
    }

  }


}

.detail__modal {

  .uk-modal-close {
    position: absolute;
    top: 15px;
    right: 15px;
    background-color: transparent;
  }

  .uk-modal-dialog {
    padding: 20px 20px 35px;
    border-radius: 12px;
    max-width: 935px !important;
    width: 100%;

    .modal__content {
      .modal__header {
        margin-bottom: 20px;
        display: flex;
        align-items: center;

        .number {
          font-size: 22px;
          line-height: 24px;
          margin-right: 20px;
        }

        .status {
          font-size: 18px;
          line-height: 24px;
          color: #89CBC4;
        }
      }

      .res__list {
        margin-bottom: 35px;

        .res__header {
          background: #89CBC4;
          border: 1px solid #A0BAC8;
          border-radius: 12px;
          margin-bottom: 15px;
          display: grid;
          padding: 14px 0;
          grid-template-columns: 53px 1fr 79px 148px 154px 153px;

          .col {
            padding: 0 5px;
            text-align: center;
            border-right: 1px solid #7DBDB6;
            font-size: 16px;
            line-height: 18px;
            color: white;
            display: flex;
            justify-content: center;
            flex-direction: column;

            &:last-child {
              border-right: 0;
            }
          }
        }

        .res__item {
          display: grid;
          grid-template-columns: 53px 1fr 79px 148px 154px 153px;
          margin-bottom: 10px;

          .checkbox__wrapper {
            font-size: 18px;
            line-height: 30px;
            color: #979797;
            display: flex;
            align-items: center;
            user-select: none;

            .uk-radio:checked, .uk-checkbox:checked, .uk-checkbox:indeterminate {
              background: transparent;
              background-image: none;
            }

            label {
              cursor: pointer;
            }

            .uk-checkbox {
              width: 20px;
              height: 20px;
              border: 1px solid #89CBC4;
              border-radius: 2px;
              margin-right: 5px;
            }

            .uk-checkbox:checked {
              background: white url("/img/check.svg") no-repeat center;

            }

          }

          .col {
            display: flex;
            align-items: center;
            justify-content: center;

            .donor__inf {
              display: grid;
              grid-template-columns: 60px 1fr;
              grid-gap: 10px;

              .avatar {
                width: 60px;
                height: 60px;
                border-radius: 100%;
                overflow: hidden;
              }

              .title__wrap {
                .donor__link {
                  font-size: 18px;
                  line-height: 24px;
                  color: $green !important;
                  transition: 0.3s;

                  img {
                    margin-left: 10px;
                  }

                  &:hover {
                    color: $green-hover !important;
                  }
                }

                .title {
                  font-size: 16px;
                  line-height: 24px;
                }
              }
            }
          }
        }
      }

      .total {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        .total__title {
          font-size: 18px;
          line-height: 30px;
          padding-right: 10px;
          margin-right: 35px;
          border-right: 1px solid $green;
        }

        .total__value {
          font-size: 18px;
          line-height: 30px;
        }
      }
    }
  }
}

@media screen and (max-width: 992px) {
  .reservations {
    .reservation__wrapper {
      grid-template-columns: 1fr;

    }

  }
  .detail__modal {
    .uk-modal-dialog {
      .modal__content {
        .res__list {
          display: flex;
          flex-direction: row;
          overflow-y: auto;
          width: 100%;
          margin-bottom: 30px;

          .res__header {
            z-index: 5;
            grid-template-columns: 90px;
            grid-template-rows: 42px 157px 56px 73px 74px 69px;
            padding: 0 8px;
            height: fit-content;
            position: sticky;
            left: 0px;

            .col {
              text-align: center !important;
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

          .res__item {

            grid-template-columns: 165px;
            grid-template-rows: 42px 157px 56px 73px 74px 69px;
            padding: 0 15px;
            border-right: 1px solid #B8DDF1;

            &:last-child {
              border-right: none;
            }

            .col {
              justify-content: center !important;
              font-size: 14px;
              line-height: 24px;

              .donor__inf {
                display: flex;
                flex-direction: column;
                align-items: center;
                grid-template-columns: initial;
                grid-gap: initial;

                .avatar {
                  margin-bottom: 10px;
                }

                .title__wrap {
                  .donor__link {
                    display: flex;
                    align-items: center;
                    font-size: 14px;
                    line-height: 24px;

                    img {
                      margin-bottom: 5px;
                      margin-left: 0;
                    }

                    flex-direction: column-reverse;
                  }

                  .title {
                    font-size: 14px;
                    line-height: 24px;
                  }
                }
              }

            }
          }

        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .reservations {
    .reservation__wrapper {
      .res__item {
        position: relative;
        padding: 15px;

        .res__num-price {
          margin-bottom: 5px;

          .res__num, .res__price {
            font-size: 18px;
            line-height: 24px;
          }

          .res__price {
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
          }
        }

        .res__status {
          font-size: 14px;
          line-height: 24px;
          margin-bottom: 50px;
        }

        .btn__wrapper {
          .view__details {
            padding: 10px 20px;
            font-size: 14px;
            line-height: 24px;
          }
        }
      }
    }
  }
  .detail__modal {
    .uk-modal-dialog {
      .modal__content {
        .modal__header {
          flex-direction: column;

          .number {
            margin-bottom: 5px;
            font-size: 18px;
            line-height: 24px;
          }

          .status {
            font-size: 14px;
            line-height: 24px;
          }
        }

        .total {
          .total__title {
            margin-right: 10px;
            font-size: 14px;
            line-height: 24px;
          }

          .total__value {
            font-size: 14px;
            line-height: 24px;
          }
        }
      }
    }
  }
}
</style>
