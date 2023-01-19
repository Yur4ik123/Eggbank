<template>
  <div class="favorite">
    <div class="favorite__wrapper">
      <div class="favorites__list">
        <div class="favorite__item">
          <div class="donor__info">
            <div class="donor__img">
              <img src="/img/ord.png" width="60" height="60" alt="">
            </div>
            <div class="donor__title">
              <div class="title">
                Donor
              </div>
              <div class="number">
                <a href="">1613164103123</a>
              </div>
            </div>
          </div>
          <div class="btn__wrapper">
            <a href="" class="share__link btn" @click.prevent="share">Shere Link</a>
            <a href="" class="add__link btn">Add To Selection</a>
          </div>
        </div>
        <div class="favorite__item">
          <div class="donor__info">
            <div class="donor__img">
              <img src="/img/ord.png" width="60" height="60" alt="">
            </div>
            <div class="donor__title">
              <div class="title">
                Donor
              </div>
              <div class="number">
                <a href="">1613164103123</a>
              </div>
            </div>
          </div>
          <div class="btn__wrapper">
            <a href="" class="share__link btn" @click.prevent="share">Shere Link</a>
            <a href="" class="add__link btn">Add To Selection</a>
          </div>
        </div>
        <div class="favorite__item">
          <div class="donor__info">
            <div class="donor__img">
              <img src="/img/ord.png" width="60" height="60" alt="">
            </div>
            <div class="donor__title">
              <div class="title">
                Donor
              </div>
              <div class="number">
                <a href="">1613164103123</a>
              </div>
            </div>
          </div>
          <div class="btn__wrapper">
            <a href="" class="share__link btn" @click.prevent="share">Shere Link</a>
            <a href="" class="add__link btn">Add To Selection</a>
          </div>
        </div>
        <div class="favorite__item">
          <div class="donor__info">
            <div class="donor__img">
              <img src="/img/ord.png" width="60" height="60" alt="">
            </div>
            <div class="donor__title">
              <div class="title">
                Donor
              </div>
              <div class="number">
                <a href="">1613164103123</a>
              </div>
            </div>
          </div>
          <div class="btn__wrapper">
            <a href="" class="share__link btn" @click.prevent="share">Shere Link</a>
            <a href="" class="add__link btn">Add To Selection</a>
          </div>
        </div>
        <div class="favorite__item">
          <div class="donor__info">
            <div class="donor__img">
              <img src="/img/ord.png" width="60" height="60" alt="">
            </div>
            <div class="donor__title">
              <div class="title">
                Donor
              </div>
              <div class="number">
                <a href="">1613164103123</a>
              </div>
            </div>
          </div @click.prevent="share">
          <div class="btn__wrapper">
            <a href="" class="share__link btn">Shere Link</a>
            <a href="" class="add__link btn">Add To Selection</a>
          </div>
        </div>

      </div>
      <div class="favorites__sidebar">
        <div class="sidebar">
          <div class="sidebar__header">
            New Selection
          </div>
          <div class="selections__list">
            <div class="selection__item">
              1.Donor [nickname of the donor ]
            </div>
            <div class="selection__item">
              2.Donor [nickname of the donor ]
            </div>
            <div class="selection__item">
              3.Donor [nickname of the donor ]
            </div>
            <div class="selection__item">
              4.Donor [nickname of the donor ]
            </div>
            <div class="selection__item">
              5.Donor [nickname of the donor ]
            </div>
            <div class="selection__item">
              6.Donor [nickname of the donor ]
            </div>
          </div>
          <div class="btn__wrapper">
            <a href="" class="save__btn" @click.prevent="saveList">
              Save The Selection
            </a>
          </div>

        </div>
      </div>
    </div>
    <div class="save__modal favorite-modal uk-flex-top" ref="save__modal" id="save__modal" uk-modal>
      <div class="uk-modal-dialog uk-margin-auto-vertical">
        <button class="uk-modal-close">
          <img src="/img/close-modal.png" width="29" height="29" alt="">
        </button>
        <div class="modal__header">
          Save Donors List Selection
        </div>
        <div class="save__wrapper">
          <div class="save__list">
            <NuxtLink to="" class="save__item">
              1.Donor [ID of the donor]
            </NuxtLink>
            <NuxtLink to="" class="save__item">
              2.Donor [ID of the donor]
            </NuxtLink>
            <NuxtLink to="" class="save__item">
              3.Donor [ID of the donor]
            </NuxtLink>
            <NuxtLink to="" class="save__item">
              4.Donor [ID of the donor]
            </NuxtLink>
          </div>
          <div class="input__wrap">
            <div class="label">
              Create a name for the selection
            </div>
            <input type="text" class="input" placeholder="Selection #1122234234 23">
          </div>
          <div class="btns__wrapper">
            <a href="" class="save btn" @click.prevent="saved">Save The Selection</a>
            <a href="" class="cancel uk-modal-close btn">Cancel</a>
          </div>

        </div>
      </div>
    </div>
    <div class="saved__modal favorite-modal uk-flex-top" ref="saved__modal" id="saved__modal" uk-modal>
      <div class="uk-modal-dialog uk-margin-auto-vertical">
        <button class="uk-modal-close">
          <img src="/img/close-modal.png" width="29" height="29" alt="">
        </button>
        <div class="modal__header">
          Egg Donors List Selection
        </div>
        <div class="modal__subheader">
          Selection #1122234234 23
        </div>
        <div class="save__wrapper">
          <div class="success__wrapper">
            <img src="/img/subm.svg" width="80" height="80" alt="">
            <div class="success__title">
              Successfully saved
            </div>
          </div>

          <div class="input__wrap">
            <div class="label">
              Link for Sharing The Selection
            </div>
            <input type="text" class="input" placeholder="Selection #1122234234 23" disabled
                   value="https://a-eggbnk.com/dsklfjdl/sdfljksadfkl;/adfakdfpakdf;'adsflm/">
          </div>
          <div class="btns__wrapper">
            <a href="" class="save btn">Copy Link</a>
            <a href="" class="cancel uk-modal-close btn">Cancel</a>
          </div>

        </div>
      </div>
    </div>
    <div class="shared__modal favorite-modal uk-flex-top" ref="shared__modal" id="shared__modal" uk-modal>
      <div class="uk-modal-dialog uk-margin-auto-vertical">
        <button class="uk-modal-close">
          <img src="/img/close-modal.png" width="29" height="29" alt="">
        </button>
        <div class="modal__header">
          Share Link
        </div>
        <div class="save__wrapper">
          <div class="input__wrap">
            <div class="label">
              Donor [ID of the donor]
            </div>
            <input type="text" class="input" placeholder="Selection #1122234234 23" disabled
                   value="https://a-eggbnk.com/dsklfjdl/sdfljksadfkl;/adfakdfpakdf;'adsflm/">
          </div>
          <div class="btns__wrapper">
            <a href="" class="save btn">Copy Link</a>
            <a href="" class="cancel uk-modal-close btn">Cancel</a>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  methods: {
    saveList() {
      this.$UIkit.modal(this.$refs.save__modal).show();
    },
    saved() {
      this.$UIkit.modal(this.$refs.saved__modal).show();
    },
    share(){
      this.$UIkit.modal(this.$refs.shared__modal).show();
    }
  }
}
</script>

<style lang="scss" scoped>
.favorite-modal {
  .uk-modal-dialog {
    max-width: 700px !important;
    width: 100%;
    padding: 40px;
    border-radius: 12px;

    .uk-modal-close {
      position: absolute;
      top: 10px;
      right: 10px;
      background-color: transparent;
    }

    .modal__header {
      font-size: 22px;
      line-height: 30px;
      text-align: center;
      margin-bottom: 5px;
      text-transform: uppercase;
    }

    .modal__subheader {
      font-size: 18px;
      line-height: 36px;
      text-align: center;
      margin-bottom: 20px;
    }

    .save__wrapper {
      .success__wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 15px;

        img {
          margin-bottom: 15px;
        }

        .success__title {
          font-size: 18px;
          line-height: 30px;
          text-align: center;
          color: $green;
        }
      }

      .save__list {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 17px;

        .save__item {
          font-size: 18px;
          line-height: 36px;
          color: $green !important;
          transition: 0.3s;

          &:hover {
            color: $green-hover !important;
          }

        }
      }

      .input__wrap {
        margin-bottom: 25px;

        .label {
          text-align: center;
          font-size: 18px;
          line-height: 30px;
          margin-bottom: 5px;
        }

        .input {
          width: 100%;
          background: #FFFFFF;
          border: 1px solid #CDE4F0;
          border-radius: 12px;
          height: 60px;
          text-align: center;
          font-size: 18px;
          line-height: 30px;
          padding: 0 10px;
        }
      }

      .btns__wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 25px;

        .btn {
          position: relative;
          top: initial;
          right: initial;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #89CBC4;
          border-radius: 80px;
          font-size: 18px;
          line-height: 30px;
          transition: 0.3s;
          text-decoration: none !important;
        }

        .save {
          padding: 0 5px;
          background-color: $green;
          color: white !important;
          max-width: 186px;
          width: 100%;

          &:hover {
            background-color: $green-hover;
          }
        }

        .cancel {
          color: $green !important;
          padding: 0 60px;
        }
      }
    }
  }
}

.favorite__wrapper {
  display: grid;
  grid-template-columns: 1fr 387px;
  grid-gap: 20px;
  margin-bottom: 70px;

  .favorite__item {
    background: #FAFCFD;
    border: 1px solid #CDE4F0;
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: 1fr 363px;
    grid-gap: 20px;

    &:last-child {
      margin-bottom: 0;
    }


    .btn__wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .btn {
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #89CBC4;
        border-radius: 80px;
        transition: 0.3s;
        padding: 0 30px;
        font-size: 18px;
        line-height: 30px;
      }

      .share__link {

        color: white !important;
        background-color: $green;

        &:hover {
          background-color: $green-hover;
        }
      }

      .add__link {
        color: $green !important;

        &:hover {
          color: $green-hover !important;
          border-color: $green-hover !important;
        }

      }

    }

    .donor__info {
      display: grid;
      grid-template-columns: 60px 1fr;
      grid-gap: 10px;

      .donor__img {
        width: 60px;
        height: 60px;
        border-radius: 100%;
        overflow: hidden;

        img {
          width: 100%;
          object-fit: contain;
        }
      }

      .donor__title {
        align-self: center;

        .title {
          font-size: 18px;
          line-height: 24px;
          margin-bottom: 1px;
        }

        .number {
          a {
            font-size: 16px;
            line-height: 24px;
            color: $green !important;
            text-decoration: underline !important;

            &:hover {
              color: $green-hover;
            }
          }
        }
      }
    }


  }

  .favorites__sidebar {
    .sidebar {
      background: #FFFFFF;
      border: 1px solid #CDE4F0;
      border-radius: 12px;
      padding: 20px;

      .sidebar__header {
        text-align: center;
        font-size: 22px;
        line-height: 30px;
        margin-bottom: 20px;
      }

      .selections__list {
        background: #FAFCFD;
        border: 1px solid #CDE4F0;
        border-radius: 12px;
        padding: 15px;
        margin-bottom: 25px;

        .selection__item {
          font-size: 18px;
          line-height: 36px;
        }
      }

      .btn__wrapper {
        display: flex;
        justify-content: center;

        .save__btn {
          font-size: 18px;
          line-height: 30px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          color: white !important;
          background-color: $green;
          transition: 0.3s;
          border-radius: 80px;
          padding: 15px 30px;

          &:hover {
            background-color: $green-hover;
          }
        }
      }
    }
  }

}

@media screen and (max-width: 1100px) {
  .favorite__wrapper {
    .favorites__list {
      .favorite__item {
        grid-template-columns: 1fr;
        grid-gap: 20px;
      }
    }
  }
}

@media screen and (max-width: 992px) {
  .favorite__wrapper {
    grid-template-columns: 1fr 290px;

    .favorites__sidebar {
      .sidebar {
        padding: 15px;

        .sidebar__header {
          font-size: 14px;
          line-height: 24px;
          margin-bottom: 15px;
        }

        .selections__list {
          margin-bottom: 15px;

          .selection__item {
            font-size: 14px;
            line-height: 30px;
          }
        }

        .btn__wrapper {
          .save__btn {
            font-size: 14px;
            line-height: 24px;
            padding: 10px 47px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .favorite-modal {
    .uk-modal-dialog {
      padding: 15px 20px;

      .modal__header {
        font-size: 18px;
        line-height: 24px;
      }

      .save__wrapper {
        .save__list {
          .save__item {
            font-size: 14px;
            line-height: 30px;
          }
        }

        .input__wrap {
          .label {
            font-size: 14px;
            line-height: 24px;
          }

          .input {
            height: 44px;
          }
        }

        .btns__wrapper {
          column-gap: 10px;

          .btn {
            height: 44px;
            font-size: 14px;
            line-height: 24px;
            width: 100%;
            padding: 0 10px !important;
          }
        }
      }
    }
  }
  .favorite__wrapper {
    display: flex;
    flex-direction: column-reverse;
    grid-template-columns: initial;
    grid-gap: initial;

    .favorites__sidebar {
      margin-bottom: 20px;
    }

    .favorites__list {
      .favorite__item {
        padding: 12px;
        margin-bottom: 10px;

        .donor__info {
          .donor__title {
            .title {
              font-size: 14px;
              line-height: 24px;
            }

            .number {
              a {
                font-size: 14px;
                line-height: 24px;
              }
            }
          }
        }

        .btn__wrapper {
          justify-content: center;
          column-gap: 17px;

          .btn {
            height: 44px;
            width: 150px;
            padding: 5px;
            font-size: 14px;
            line-height: 24px;
          }
        }
      }
    }
  }
}
</style>
