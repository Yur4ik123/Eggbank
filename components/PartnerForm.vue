<template>
  <client-only>
    <form action="" class="partner_form default__form" novalidate>
      <div class="col">
        <FormInput label="Name of the organization*:" placeholder="Placeholder"></FormInput>
      </div>
      <div class="cols-2">
        <FormInput label="Website*:" placeholder="Placeholder"></FormInput>
        <FormInput label="Social media links:" placeholder="Placeholder"></FormInput>
      </div>
      <div class="form__subheader">
        Contact Person
      </div>
      <div class="cols-2">
        <FormInput label="First Name*:" placeholder="Placeholder"></FormInput>
        <FormInput label="Last Name:" placeholder="Placeholder"></FormInput>
      </div>
      <div class="cols-2">
        <FormInput label="Position:" placeholder="Placeholder"></FormInput>
        <FormInput label="Email Address*:" placeholder="Placeholder"></FormInput>
      </div>
      <div class="cols-2">
        <FormInput label="Phone Number*:" placeholder="Placeholder" type="tel"></FormInput>
      </div>
      <div class="form__subheader">
        Deteils
      </div>
      <div class="col uk-position-z-index">
        <FormSelect :options="questions" placeholder="How May We Help You?"/>
      </div>
      <div class="col">
        <FormTextarea placeholder="Write your message here" label="Message:"></FormTextarea>
      </div>
      <div class="cols-2 uk-position-z-index">
        <FormSelect :options="times" placeholder="Best Time To Reach You"/>
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
  name: "PartnerForm",
  data() {
    return {
      questions: ['Lorem ipsum.', 'Lorem ipsum dolor.', 'Lorem'],
      times: ['8:00-9:00', "9:00-10:00", "10:00-11:00"]
    }
  }
}
</script>

<style lang="scss" scoped>
@include default-form;


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

  .checkbox__wrapper {
    font-size: 14px;
    line-height: 24px;
  }

}
</style>
