<template>
  <div class="selection">
    <div class="selections__list">
      <div class="selection__item">
        <div class="selection__header">
          <span class="title">
           1. Selection #112223423423
          </span>
          <span class="icon">
            <a href="" class="remove__item"> <img src="/img/remove.svg" width="20" height="20" alt=""></a>
          </span>
        </div>
        <div class="items">
          <div class="item">
            <div class="title">
              1.Donor [6464153132]
            </div>
            <div class="view">
              <NuxtLink to=""><img src="/img/f4.svg" width="22" height="22" alt=""></NuxtLink>
            </div>
          </div>
          <div class="item">
            <div class="title">
              2.Donor [6464153132]
            </div>
            <div class="view">
              <NuxtLink to=""><img src="/img/f4.svg" width="22" height="22" alt=""></NuxtLink>
            </div>
          </div>
          <div class="item">
            <div class="title">
              3.Donor [6464153132]
            </div>
            <div class="view">
              <NuxtLink to=""><img src="/img/f4.svg" width="22" height="22" alt=""></NuxtLink>
            </div>
          </div>
          <div class="item">
            <div class="title">
              4.Donor [6464153132]
            </div>
            <div class="view">
              <NuxtLink to=""><img src="/img/f4.svg" width="22" height="22" alt=""></NuxtLink>
            </div>
          </div>
        </div>
        <div class="btn__wrapper">
          <a href="" class="share__btn" @click.prevent="shared">Share Link</a>
        </div>
      </div>
      <div class="selection__item">
        <div class="selection__header">
          <span class="title">
           1. Selection #112223423423
          </span>
          <span class="icon">
            <a href="" class="remove__item"> <img src="/img/remove.svg" width="20" height="20" alt=""></a>
          </span>
        </div>
        <div class="items">
          <div class="item">
            <div class="title">
              1.Donor [6464153132]
            </div>
            <div class="view">
              <NuxtLink to=""><img src="/img/f4.svg" width="22" height="22" alt=""></NuxtLink>
            </div>
          </div>
          <div class="item">
            <div class="title">
              2.Donor [6464153132]
            </div>
            <div class="view">
              <NuxtLink to=""><img src="/img/f4.svg" width="22" height="22" alt=""></NuxtLink>
            </div>
          </div>
          <div class="item">
            <div class="title">
              3.Donor [6464153132]
            </div>
            <div class="view">
              <NuxtLink to=""><img src="/img/f4.svg" width="22" height="22" alt=""></NuxtLink>
            </div>
          </div>
          <div class="item">
            <div class="title">
              4.Donor [6464153132]
            </div>
            <div class="view">
              <NuxtLink to=""><img src="/img/f4.svg" width="22" height="22" alt=""></NuxtLink>
            </div>
          </div>
        </div>
        <div class="btn__wrapper">
          <a href="" class="share__btn" @click.prevent="shared">Share Link</a>
        </div>
      </div>
      <div class="selection__item">
        <div class="selection__header">
          <span class="title">
           1. Selection #112223423423
          </span>
          <span class="icon">
            <a href="" class="remove__item"> <img src="/img/remove.svg" width="20" height="20" alt=""></a>
          </span>
        </div>
        <div class="items">
          <div class="item">
            <div class="title">
              1.Donor [6464153132]
            </div>
            <div class="view">
              <NuxtLink to=""><img src="/img/f4.svg" width="22" height="22" alt=""></NuxtLink>
            </div>
          </div>
          <div class="item">
            <div class="title">
              2.Donor [6464153132]
            </div>
            <div class="view">
              <NuxtLink to=""><img src="/img/f4.svg" width="22" height="22" alt=""></NuxtLink>
            </div>
          </div>
          <div class="item">
            <div class="title">
              3.Donor [6464153132]
            </div>
            <div class="view">
              <NuxtLink to=""><img src="/img/f4.svg" width="22" height="22" alt=""></NuxtLink>
            </div>
          </div>
          <div class="item">
            <div class="title">
              4.Donor [6464153132]
            </div>
            <div class="view">
              <NuxtLink to=""><img src="/img/f4.svg" width="22" height="22" alt=""></NuxtLink>
            </div>
          </div>
        </div>
        <div class="btn__wrapper">
          <a href="" class="share__btn" @click.prevent="shared">Share Link</a>
        </div>
      </div>
    </div>
    <div class="shared favorite-modal uk-flex-top" ref="shared" id="shared" uk-modal>
      <div class="uk-modal-dialog uk-margin-auto-vertical">
        <button class="uk-modal-close">
          <img src="/img/close-modal.png" width="29" height="29" alt="">
        </button>
        <div class="modal__header">
          Share Link for List Egg Donors
        </div>
        <div class="modal__subheader">
          For Anna Maria
        </div>
        <div class="save__wrapper">
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

  </div>
</template>

<script>
export default {
  name: "my-selections",
  methods: {
    shared() {
      this.$UIkit.modal(this.$refs.shared).show()
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
      margin-bottom: 17px;
      color: $green;
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

.selection {
  margin-bottom: 70px;

  .selections__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;

    .selection__item {
      border: 1px solid #CDE4F0;
      border-radius: 12px;
      padding-bottom: 25px;

      .selection__header {
        background: #FAFCFD;
        padding: 15px 20px;
        font-size: 22px;
        line-height: 30px;
        color: $green;
        margin-bottom: 18px;
        border-bottom: 1px solid #CDE4F0;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .items {
        padding: 0 20px;
        margin-bottom: 25px;

        .item {
          display: flex;
          align-items: center;

          .title {
            font-size: 18px;
            line-height: 36px;
            margin-right: 10px;
          }

          .view {
            img {

            }
          }
        }
      }

      .btn__wrapper {
        padding: 0 20px;
        display: flex;
        justify-content: center;

        .share__btn {
          height: 60px;
          max-width: 212px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          line-height: 30px;
          color: white !important;
          background-color: $green;
          transition: 0.3s;
          border-radius: 80px;

          &:hover {
            background-color: $green-hover;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 992px) {
  .selection {
    .selections__list {
      grid-template-columns: 1fr 1fr;
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
  .selection {
    .selections__list {
      .selection__item {
        .selection__header {
          padding: 7px 25px;
          margin-bottom: 15px;
          font-size: 18px;
          line-height: 30px;

        }

        .items {
          padding: 0 15px;
          margin-bottom: 15px;

          .item {
            .title {
              font-size: 14px;
              line-height: 30px;
            }
          }
        }

        .btn__wrapper {
          padding: 0 15px;

          .share__btn {
            font-size: 14px;
            line-height: 24px;
            height: 44px;
            max-width: 175px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 550px) {
  .selection {
    .selections__list {
      grid-template-columns: 1fr;
    }
  }
}
</style>
