<template>
  <div class="reservation">
    <div class="reservation__head">
      Reservation # 11231233
    </div>
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
      </div>
    </div>
    <div class="total__price">
      <span class="title">TOTAL:</span>
      <span class="price">$9,680.00</span>
    </div>
    <div class="note__part">
      <p>
        *Please, note that transportation cost is not included in the price. You are able to choose the courier company
        for shipment across the United States.If you are located outside of the United States, please contact us in
        order to check the possibility of shipping Frozen Donor Eggs to your country. For shipping oocytes worldwide, we
        normally use World Courier, Cryoport or ARKCryo services. Please contact us to check the possibility of
        transportation and its price.
      </p>
      <p></p>
      <h3>
        IMPORTANT NOTE:
      </h3>
      <p>


        Please, mention, that the prices set above include obligatory and additional medical tests for the Egg Donor
        that is set by the internal rules of ADONIS Egg Bank.In case you want selected Egg Donor to pass any additional
        medical test – it isn’t covered by the cost of the package and shall be paid additionally.

      </p>
    </div>
    <div class="form__wrapper">
      <form action="" @submit.prevent="submit">
        <div class="delivery__section">
          <div class="section__header">
            Delivery Conditions
          </div>
          <div class="cols-2">
            <div class="input__wrapper">
              <label for="" class="label">Country*:</label>
              <FormCountrySelect placeholder="Placeholder"/>
            </div>
            <FormInput label="State*:" placeholder="Placeholder"></FormInput>
          </div>
          <div class="switch__col">
            <div class="label">
              Have you already chosen a clinic where IVF will be performed?*
            </div>
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
          <div class="col">
            <FormInput label="Please enter the name of the clinic" placeholder="Placeholder"></FormInput>
          </div>
        </div>
        <div class="user__section">
          <div class="section__header">
            Personal info
          </div>
          <div class="switch__col">
            <div class="label">
              Have you already chosen a clinic where IVF will be performed?*
            </div>
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
          <div class="cols-2">
            <FormInput label="First Name*:" placeholder="Placeholder"/>
            <FormInput label="Last Name:" placeholder="Placeholder"/>
          </div>
          <div class="cols-2">
            <FormInput label="Email Address*:" placeholder="Placeholder"/>
            <FormInput label="Phone Number*:" placeholder="Placeholder"/>
          </div>
          <div class="birth__col">
            <FormBirth label="Date Of Birth* <span>(of the recipient of the donor’s oocytes)</span>"/>
          </div>
        </div>
        <div class="btn__wrapper">
          <button type="submit" class="submit__btn">Submit</button>
        </div>
      </form>
    </div>
    <div class="reservation__submit uk-flex-top" ref="reservation__submit" id="reservation__submit" uk-modal>
      <div class="uk-modal-dialog uk-margin-auto-vertical">
        <button class="uk-modal-close">
          <img src="/img/close-modal.png" width="29" height="29" alt="">
        </button>
        <div class="modal__content">
          <div class="modal__logo">
            <img src="/img/modal_logo.svg" width="153" height="41" alt="">
          </div>
          <div class="reservation__num">
            Reservation # 11231233
          </div>
          <div class="subm__status">
            Submitted Successfully
          </div>
          <div class="sumb__icon">
            <img src="/img/subm.svg" width="80" height="80" alt="">
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MinusIcon from '~/assets/img/minus.svg?inline'
import PlusIcon from '~/assets/img/plus.svg?inline'

export default {
  name: "reservation",
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
    submit() {
      this.$UIkit.modal(this.$refs.reservation__submit).show()
    }
  },
  components: {
    MinusIcon,
    PlusIcon,

  }
}
</script>

<style lang="scss" scoped>
.reservation {
  padding-top: 20px;

  .reservation__head {
    font-size: 18px;
    line-height: 24px;
    color: $green;
    margin-bottom: 15px;
  }

  .donors__wrapper {
    margin-bottom: 20px;

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
  }

  .total__price {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 18px;
    line-height: 30px;
    margin-bottom: 32px;

    .title {
      padding-right: 10px;
      margin-right: 10px;
      border-right: 1px solid #7DBDB6;

    }
  }

  .note__part {
    padding: 25px;
    background: #FAFCFD;
    border: 1px solid #CDE4F0;
    border-radius: 12px;
    @include default-text;
    margin-bottom: 50px;

    h3 {
      color: #89CBC4;
      margin-bottom: 10px;
    }
  }

  .form__wrapper {
    .delivery__section {
      margin-bottom: 20px;
    }

    .section__header {
      padding-bottom: 14px;
      margin-bottom: 30px;
      border-bottom: 1px solid #CDE4F0;
      font-size: 18px;
      line-height: 30px;
      color: $green;
    }

    .cols-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
    }

    .birth__col {
      max-width: 450px;
    }

    .btn__wrapper {
      margin-top: 15px;
    }

    .submit__btn {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 18px 100px;
      font-size: 18px;
      line-height: 24px;
      color: white !important;
      background-color: $green;
      transition: 0.3s;
      border-radius: 80px;

      &:hover {
        background-color: $green-hover;
      }
    }

    .switch__col {
      margin-bottom: 30px;
      display: flex;
      align-items: center;

      .label {
        font-size: 18px;
        line-height: 30px;
        margin-right: 25px;
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

    }
  }


}

.reservation__submit {
  .uk-modal-close {
    position: absolute;
    top: 12px;
    right: 12px;
    background-color: transparent;
  }

  .uk-modal-dialog {
    padding: 25px 25px 45px;
    background: #FFFFFF;
    border-radius: 12px;
    max-width: 520px !important;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .modal__logo {
      margin-bottom: 34px;
      text-align: center;
    }

    .subm__status {
      font-size: 18px;
      line-height: 30px;
      /* identical to box height, or 167% */

      text-align: center;
      margin-bottom: 15px;
      color: #89CBC4;
    }

    .sumb__icon {
      text-align: center;
    }

    .reservation__num {
      margin-bottom: 10px;
      font-size: 22px;
      line-height: 36px;
      /* identical to box height, or 164% */

      text-align: center;
      text-transform: uppercase;
    }
  }
}

@media screen and (max-width: 860px) {
  .reservation {
    max-width: calc(100vw - 45px);


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
  .reservation__submit {


    .uk-modal-dialog {
      .modal__logo {

      }

      .subm__status {
        font-size: 14px;
        line-height: 24px;
      }

      .sumb__icon {
        text-align: center;
      }

      .reservation__num {
        font-size: 18px;
        line-height: 36px;
      }
    }
  }
  .reservation {
    .note__part {
      h3 {
        font-size: 14px;
        line-height: 24px;
      }
    }

    .donors__wrapper {
      margin-bottom: 20px;
    }

    .total__price {
      font-size: 14px;
      line-height: 24px;
      margin-bottom: 20px;
    }

    .form__wrapper {
      .cols-2 {
        grid-template-columns: 1fr;
        grid-gap: 0;
      }

      .section__header {
        font-size: 14px;
        line-height: 24px;
        padding-bottom: 10px;
        margin-bottom: 10px;
      }

      .birth__col {
        max-width: 100%;
      }

      .submit__btn {
        width: 100%;
        font-size: 14px;
        line-height: 24px;
        padding: 10px;
      }

      .switch__col {
        flex-direction: column;
        align-items: flex-start;

        .label {
          font-size: 14px;
          line-height: 24px;
          margin-right: 0;
        }
      }
    }
  }
}
</style>
