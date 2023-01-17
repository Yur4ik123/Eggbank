<template>
  <div class="donors">
    <div class="donors__wrapper">
      <div class="donors__header ">
        <div class="col">№</div>
        <div class="col" style="text-align: left">Donor</div>
        <div class="col">
          Cryo
          Оocytes
        </div>
        <div class="col">
          Additional Oocite
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
      <div class="donors__list">
        <div class="donor__item">

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
            <div class="qty__input-wrapper">
              <a class="qty__btn minus" @click.prevent="minusQty">
                <MinusIcon/>
              </a>
              <input type="number" class="qty" v-model="qty">
              <a class="qty__btn plus" @click.prevent="plusQty">
                <PlusIcon/>
              </a>
            </div>
          </div>
          <div class="col">
            <div class="switch__wrapper">
              <label>
            <span>
              No
            </span>
                <input
                  :class="{'active':active}"
                  v-model="active"
                  class="uk-checkbox"
                  type="checkbox">
                <span>
              Yes
            </span>
              </label>

            </div>
          </div>
          <div class="col">$9,680.00</div>
          <div class="col" style="padding: 0; margin-bottom: 5px;">
            <img src="/img/remove.svg" width="20" height="20" alt="">
          </div>
        </div>
        <div class="donor__item">

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
                  <span> Donor Identity</span>
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
            <div class="qty__input-wrapper">
              <a class="qty__btn minus" @click.prevent="minusQty">
                <MinusIcon/>
              </a>
              <input type="number" class="qty" v-model="qty">
              <a class="qty__btn plus" @click.prevent="plusQty">
                <PlusIcon/>
              </a>
            </div>
          </div>
          <div class="col">
            <div class="switch__wrapper">
              <label>
            <span>
              No
            </span>
                <input
                  :class="{'active':active}"
                  v-model="active"
                  class="uk-checkbox"
                  type="checkbox">
                <span>
              Yes
            </span>
              </label>

            </div>
          </div>
          <div class="col">$9,680.00</div>
          <div class="col" style="padding: 0; margin-bottom: 5px;">
            <img src="/img/remove.svg" width="20" height="20" alt="">
          </div>
        </div>
        <div class="donor__item">

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
                  <span> Donor Identity</span>
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
            <div class="qty__input-wrapper">
              <a class="qty__btn minus" @click.prevent="minusQty">
                <MinusIcon/>
              </a>
              <input type="number" class="qty" v-model="qty">
              <a class="qty__btn plus" @click.prevent="plusQty">
                <PlusIcon/>
              </a>
            </div>
          </div>
          <div class="col">
            <div class="switch__wrapper">
              <label>
            <span>
              No
            </span>
                <input
                  :class="{'active':active}"
                  v-model="active"
                  class="uk-checkbox"
                  type="checkbox">
                <span>
              Yes
            </span>
              </label>

            </div>
          </div>
          <div class="col">$9,680.00</div>
          <div class="col" style="padding: 0; margin-bottom: 5px;">
            <img src="/img/remove.svg" width="20" height="20" alt="">
          </div>
        </div>
        <div class="donor__item">

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
            <div class="qty__input-wrapper">
              <a class="qty__btn minus" @click.prevent="minusQty">
                <MinusIcon/>
              </a>
              <input type="number" class="qty" v-model="qty">
              <a class="qty__btn plus" @click.prevent="plusQty">
                <PlusIcon/>
              </a>
            </div>
          </div>
          <div class="col">
            <div class="switch__wrapper">
              <label>
            <span>
              No
            </span>
                <input
                  :class="{'active':active}"
                  v-model="active"
                  class="uk-checkbox"
                  type="checkbox">
                <span>
              Yes
            </span>
              </label>

            </div>
          </div>
          <div class="col">$9,680.00</div>
          <div class="col" style="padding: 0; margin-bottom: 5px;">
            <img src="/img/remove.svg" width="20" height="20" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="btn__wrapper">
      <a href="" class="finish__reserv">
        <span class="title">
          Finish The Reservation
        </span>
        <span class="count">
          Selected (1)
        </span>

      </a>

    </div>

  </div>
</template>

<script>
import MinusIcon from '~/assets/img/minus.svg?inline'
import PlusIcon from '~/assets/img/plus.svg?inline'

export default {
  name: "index",
  data() {
    return {
      pack: 0,
      qty: 0,
      active: false

    }
  },
  methods: {
    minusQty() {
      this.qty > 0 ? this.qty-- : false

    },
    plusQty() {
      this.qty++;
    },
    reservation() {
      this.$UIkit.modal(document.getElementById('order__modal')).show();

    }
  },
  components: {
    MinusIcon,
    PlusIcon,

  }
}
</script>

<style lang="scss" scoped>
.donors {
  .donors__header {
    padding: 13px 0;
    background: #89CBC4;
    border: 1px solid #A0BAC8;
    border-radius: 12px;
    display: grid;
    grid-template-columns: 53px 1fr 80px 148px 154px 153px;
    margin-bottom: 15px;

    .col {
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-right: 1px solid #7DBDB6;
      padding: 0 7px;
      font-size: 16px;
      line-height: 18px;
      color: white;
      text-align: center;

      &:last-child {
        border-right: none;
      }
    }
  }

  .donors__list {
    margin-bottom: 60px;

    .donor__item {
      margin-bottom: 10px;
      display: grid;
      grid-template-columns: 53px 1fr 80px 148px 154px 133px 20px;

    }

    .col {
      padding: 0 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      line-height: 30px;

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

      .switch__wrapper {
        label {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 16px;
          line-height: 24px;
          color: #979797;

          .uk-checkbox {
            margin: 0 7px;
            width: 64px;
            height: 32px;
            background: #8C9097;
            border-radius: 100px;
            position: relative;

            &:focus {
              border-color: transparent;
            }

            &:after {
              transition: 0.5s;
              position: absolute;
              content: ' ';
              top: 50%;
              transform: translate(0, -50%);
              left: 1px;
              width: 29px;
              height: 29px;
              background-color: white;
              border-radius: 100%;
              border: 1px solid #75B5AE;
            }
          }

          .uk-checkbox.active {
            background: $green;

            &:after {
              transform: translate(31px, -50%);
            }
          }

        }
      }

      .qty__input-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;

        .qty__btn {
          padding: 7px;
          cursor: pointer;
          display: flex;
          align-items: center;

          svg {
            width: 20px;

            path {
              transition: 0.3s;
            }
          }

          &:hover {
            svg {
              path {
                fill: $green-hover;
              }
            }
          }

        }

        input {
          background-color: white;
          width: 58px;
          height: 40px;
          text-align: center;
          font-family: Avenir, sans-serif;
          font-size: 18px;
          line-height: 30px;
          border: 1px solid #CDE4F0;
          border-radius: 12px;
        }
      }
    }
  }

  .btn__wrapper {
    display: flex;
    justify-content: center;

    .finish__reserv {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      padding: 8px 40px;
      background-color: $green;
      transition: 0.3s;
      border-radius: 80px;

      &:hover {
        background-color: $green-hover;
      }

      .title {
        font-size: 18px;
        line-height: 24px;
        color: white;
      }

      .count {
        color: #51837E;
      }

    }
  }
}

@media screen and (max-width: 860px) {
  .donors {
    max-width: calc(100vw - 30px);
    overflow: hidden;

    .donors__wrapper {
      display: flex;
      flex-direction: row;
      overflow-y: auto;
      width: 100%;
      margin-bottom: 30px;

      .donors__header {
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

      .donors__list {
        margin-bottom: 0;
        display: flex;
        flex-direction: row;

        .donor__item {
          grid-template-columns: 165px;
          grid-template-rows: 42px 157px 56px 73px 74px 39px 30px;
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

@media screen and (max-width: 768px) {
  .donors {
    .btn__wrapper {
      .finish__reserv {
        padding: 8px 15px;

        .title, .count {
          font-size: 14px;
          line-height: 18px;
        }
      }
    }
  }
}

</style>
