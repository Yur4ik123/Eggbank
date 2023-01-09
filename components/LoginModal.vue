<template>
  <div class="login__modal uk-flex-top" id="login" uk-modal>
    <div class="uk-modal-dialog uk-margin-auto-vertical">
      <button class="uk-modal-close">
        <img src="/img/close-modal.png" width="29" height="29" alt="">
      </button>
      <div class="modal__logo">
        <LogoIcon class="logo"/>
        <span>Data Base</span>
      </div>
      <div class="modal__subtitle">
        The First Step Towards Parenthood
      </div>
      <div class="modal__header">
        Sign in
      </div>
      <div class="modal__subheader">
        Please login and use all benefits of registered users
      </div>
      <client-only>
        <form action="" class="login__form" novalidate @submit.prevent="submit">
          <div class="input__wrapper" :class="{'invalid': $v.form.login.$error}">
            <div class="label">
              Email Address*:
            </div>
            <input class="input" type="email" v-model.trim="$v.form.login.$model">
          </div>
          <div class="input__wrapper" :class="{'invalid': $v.form.password.$error}">
            <div class="label">
              Password*:
            </div>
            <input class="input" type="password" v-model.trim="$v.form.password.$model">
          </div>
          <div class="forgot__pass">
            <a href="" class="forgot__pass-link">
              Forgot password?
            </a>
          </div>
          <div class="checkbox__wrapper">
            <label>
              <input class="uk-checkbox" type="checkbox" v-model="form.remember">
              Remember me
            </label>
          </div>
          <button type="submit" class="submit__btn" @click="$v.$reset">
            Login
          </button>

        </form>
      </client-only>
      <div class="modal__text">
        <div class="text__header">
          Haven't Account Yet?
        </div>
        <div class="text">
          Register to gain full access into our comprehensive donor profiles, including adulthood photos (upon
          submitting a photo consent form), family medical history, and personal essays. You‘ll also be able to
          "favorite" donors you like and comparetion donors for you can select the best one.
        </div>
      </div>
      <div class="reg__link-wrapper">
        <a href="" class="reg__link">
          For Registration Click Here
        </a>
      </div>
      <div class="modal__footer">
        <a href="" class="question__link blue__link">
          Questions? Contact A.EggBank Support Team
        </a>
        <div class="info">
          If you're a new donor who would like to apply, <a href="" class="blue__link">Click here</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogoIcon from '~/assets/img/logo.svg?inline'
import {required, email} from 'vuelidate/lib/validators'

export default {
  name: "LoginModal",
  data() {
    return {
      form: {
        login: '',
        password: '',
        remember: true
      },
    }
  },
  validations: {
    form: {
      login: {required, email},
      password: {required}
    }
  },
  methods: {
    submit() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        console.log(this.$v)
        return;
      }
    }
  },
  components: {
    LogoIcon
  }
}
</script>

<style lang="scss" scoped>
.login__modal {
  .uk-modal-dialog {
    max-width: 520px !important;
    width: 100%;
    background: #FFFFFF;
    border-radius: 12px;
    padding: 15px 25px;

    .uk-modal-close {
      background-color: transparent;
      position: absolute;
      top: 10px;
      right: 10px;
    }

    .modal__logo {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      line-height: 30px;
      margin-bottom: 10px;

      span {
        margin-top: 4px;
      }

      .logo {
        margin-right: 6px;
      }

    }

    .modal__subtitle {
      text-align: center;
      font-size: 16px;
      line-height: 22px;
      color: #E8BDD8;
      margin-bottom: 20px;
    }

    .modal__header {
      text-align: center;
      font-size: 54px;
      line-height: 64px;
      color: black;
      margin-bottom: 5px;
      text-transform: uppercase;
    }

    .modal__subheader {
      text-align: center;
      font-size: 18px;
      line-height: 30px;
      margin-bottom: 10px;
    }

    .login__form {
      @include input-wrapper;
      margin-bottom: 40px;

      .input__wrapper {

        margin: 0 auto 10px;
        max-width: 386px;

        .label {
          text-align: center;
        }
      }

      .forgot__pass-link {
        color: #389188 !important;
        font-size: 18px;
        line-height: 30px;
        text-decoration: underline;

        &:hover {
          text-decoration: none;
        }
      }

      .forgot__pass {
        text-align: center;
        margin-bottom: 10px;
      }

      .checkbox__wrapper {
        justify-content: center;
        margin-bottom: 20px;
      }

      .submit__btn {
        @include submit-btn;
        max-width: 386px;


      }
    }

    .modal__text {
      margin-bottom: 15px;

      .text__header {
        font-size: 22px;
        line-height: 30px;
        color: black;
        margin-bottom: 10px;
        text-align: center;
      }

      .text {
        font-size: 18px;
        line-height: 30px;
        color: black;
      }
    }

    .reg__link-wrapper {
      text-align: center;
      margin-bottom: 55px;

      .reg__link {
        font-size: 18px;
        line-height: 30px;
        color: #389188;
        text-decoration: underline;

        &:hover {
          text-decoration: none;
        }
      }

    }

    .blue__link {
      font-size: 18px;
      line-height: 30px;
      color: #389188 !important;
      text-decoration: underline;

      &:hover {
        text-decoration: none;
      }
    }

    .modal__footer {
      display: flex;
      flex-direction: column;
      align-items: center;

      .question__link {
        margin-bottom: 5px;

      }
    }
  }
}

@media screen and (max-width: 768px) {
  .login__modal {
    .uk-modal-dialog {
      .modal__subtitle {
        font-size: 14px;
        line-height: 14px;
        margin-bottom: 17px;
      }

      .modal__header {
        font-size: 30px;
        line-height: 36px;
        margin-bottom: 1px;
      }

      .modal__subheader {
        font-size: 14px;
        line-height: 24px;
        margin-bottom: 13px;
      }

      .login__form {
        margin-bottom: 25px;

        .forgot__pass {
          margin-bottom: 11px;

          .forgot__pass-link {
            font-size: 14px;
            line-height: 24px;
          }
        }

        .checkbox__wrapper {
          margin-bottom: 15px;
        }
      }

      .modal__text {
        .text__header {
          font-size: 18px;
          line-height: 30px;
          margin-bottom: 10px;
        }

        .text {
          font-size: 14px;
          line-height: 24px;
        }
      }

      .reg__link-wrapper {
        margin-bottom: 15px;

        .reg__link {
          font-size: 14px;
          line-height: 24px;
        }
      }

      .modal__footer {
        .question__link, .blue__link {
          font-size: 14px;
          line-height: 24px;
        }

        .info {
          text-align: center;
          font-size: 14px;
          line-height: 24px;
        }
      }
    }
  }
}
</style>

