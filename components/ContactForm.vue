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
      <div class="col ">
        <FormSelect :options="questions" placeholder="How May We Help You?"/>
      </div>
      <div class="cols-2">
        <FormSelect :options="times" placeholder="Best Time To Reach You"/>
        <FormSelect :options="contact_methods" placeholder="Best Method Of Contact"/>
      </div>


      <div class="checkbox__col">
        <div class="checkbox__wrapper">
          <label>
            <input class="uk-checkbox" type="checkbox">
            I Agree with privacy policy
          </label>
        </div>
      </div>
      <div class="submit__wrapper">
        <button type="submit" class="submit__btn">
          Submit
        </button>
      </div>
    </form>
  </client-only>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      questions: ['Lorem ipsum.', 'Lorem ipsum dolor.', 'Lorem'],
      times: ['8:00-9:00', "9:00-10:00", "10:00-11:00"],
      contact_methods: ['Telegram', "Viber", "Facebook"],
    }
  }
}
</script>

<style lang="scss" scoped>
@include default-form;
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
    }

    .uk-checkbox {
      width: 20px;
      height: 20px;
      border: 1px solid #89CBC4;
      border-radius: 2px;
      margin-right: 9px;
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
