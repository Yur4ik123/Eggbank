<template>
  <client-only>
    <form action="" class="contact__form default__form" novalidate>
      <div class="cols-2">
        <FormInput label="First Name*:" placeholder="Placeholder"></FormInput>
        <FormInput label="Last Name:" placeholder="Placeholder"></FormInput>
      </div>
      <div class="cols-2">
        <FormInput label="Email Address*:" placeholder="Placeholder" type="email"></FormInput>
        <FormInput label="Phone Number*:" placeholder="Placeholder"></FormInput>

      </div>
      <div class="cols-2">
        <FormInput label="Password*:" placeholder="Placeholder" type="password"></FormInput>
        <FormInput label="Password Confirmation*:" placeholder="Placeholder" type="password"></FormInput>
      </div>
      <div class="checkbox__col">
        <div class="checkbox__wrapper">
          <label>
            <input class="uk-checkbox" type="checkbox">
            By checking this box, you agree with terms and conditions, privacy policy (that A.EggBank may send you
            emails promoting our services. You will be able to update your email preferences or unsubscribe at any time)
          </label>
        </div>
      </div>
      <div class="col col__mb  uk-flex uk-flex-center">
        <recaptcha />
      </div>
      <div class="submit__wrapper">
        <button type="submit" class="submit__btn">
          Create Account
        </button>
      </div>
    </form>
  </client-only>
</template>

<script>
export default {
  name: "RegistrationForm"
}
</script>

<style lang="scss" scoped>
@include default-form;
.contact__form{
  .col__mb{
    margin-bottom: 25px;
  }
}
.contact__form {
  .checkbox__wrapper {
    font-size: 18px;
    line-height: 30px;
    color: black;
    display: flex;
    align-items: center;
    user-select: none;

    .uk-radio:checked, .uk-checkbox:checked, .uk-checkbox:indeterminate {
      background: transparent;
      background-image: none;
    }

    label {
      cursor: pointer;
      padding-left: 30px;
      position: relative;
    }

    .uk-checkbox {
      width: 20px;
      height: 20px;
      border: 1px solid #89CBC4;
      border-radius: 2px;
      margin-right: 9px;
      position: absolute;
      left: 0;
      top: 7px;
    }

    .uk-checkbox:checked {
      background: white url("/img/check.svg") no-repeat center;

    }

  }

  @media screen and (max-width: 768px) {
    &.default__form {
      .checkbox__col {
        justify-content: center !important;
      }
    }
    .checkbox__wrapper {
      font-size: 14px;
      line-height: 24px;
    }
  }
}
</style>
