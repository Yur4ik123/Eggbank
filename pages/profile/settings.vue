<template>
  <div class="settings">
    <div class="section__block">
      <div class="section__divider">
        Personal info
        <img src="/img/edit.svg" width="14" height="14" alt="">
      </div>
      <template v-if="!editing_data">
        <div class="user__data">
          <div class="data__row">
            <span class="label">Organization:</span>
            <span class="data">Horns & Hooves</span>
          </div>
          <div class="data__row">
        <span class="label">Website:
</span>
            <span class="data">Horns&Hooves.us</span>
          </div>
          <div class="data__row">
        <span class="label">Social media links:
</span>
            <span class="data">
Facebook.com/Horns&Hooves.us
</span>
          </div>
          <div class="data__row">
        <span class="label">First Name:
</span>
            <span class="data">Jony
</span>
          </div>
          <div class="data__row">
        <span class="label">Last Name:
</span>
            <span class="data">Doel
</span>
          </div>
          <div class="data__row">
        <span class="label">Position:
</span>
            <span class="data">Manager
</span>
          </div>
          <div class="data__row">
        <span class="label">Date Of Birth:
</span>
            <span class="data">May 14 1980
</span>
          </div>
          <div class="data__row">
        <span class="label">Email Address:
</span>
            <span class="data">Dr.Jonny22@gmail.com
</span>
          </div>
          <div class="data__row">
            <span class="label">Phone Number:</span>
            <span class="data">+12027953213</span>
          </div>

        </div>
        <a href="" @click.prevent="editing_data ? editing_data=false: editing_data=true" class="change__btn">Change</a>
      </template>
      <template v-else>
        <form class="edit__data-form">
          <div class="col">
            <FormInput label="First Name:" placeholder="Placeholder"/>
          </div>
          <div class="col">
            <FormInput label="Last Name:" placeholder="Placeholder"/>
          </div>
          <div class="col">

            <FormBirth/>

          </div>
          <div class="col">
            <FormInput label="Email Address:" placeholder="Placeholder"/>
          </div>
          <div class="col">
            <FormInput label="Phone Number:" placeholder="Placeholder"/>
          </div>
          <div class="btns__wrapper">
            <button type="submit" class="submit__btn">Confirm</button>
            <a href="" @click.prevent="editing_data ? editing_data=false: editing_data=true"
               class="change__btn">Cancel</a>
          </div>
        </form>
      </template>
    </div>
    <div class="section__block">
      <div class="section__divider">
        Password
        <img src="/img/edit.svg" width="14" height="14" alt="">
      </div>
      <form action="" class="change__password-form">
        <div class="row__wrapper" :class="{'editing': editing__pass}">
          <label class="label">Password:</label>
          <input class="input" type="password" :disabled="!editing__pass" v-model="password">
        </div>
        <div class="row__wrapper" :class="{'editing': editing__pass}" v-if="editing__pass">
          <label class="label">Password Confirmation:</label>
          <input class="input" type="password" v-model="password">
        </div>
        <a href="" class="change__btn" v-if="!editing__pass"
           @click.prevent="editing__pass ? editing__pass=false: editing__pass=true">Change</a>
        <div class="btns__wrapper" v-if="editing__pass">
          <button type="submit" class="submit__btn">Confirm</button>
          <a href="" @click.prevent="editing__pass ? editing__pass=false: editing__pass=true"
             class="change__btn">Cancel</a>
        </div>
      </form>

    </div>
  </div>
</template>

<script>
export default {
  name: "settings",
  data() {
    return {
      password: '123123123',
      editing_data: false,
      editing__pass: false,
    }
  }
}
</script>

<style lang="scss">
.settings {
  .section__block {
    margin-bottom: 50px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .section__divider {
    display: flex;
    align-items: center;
    padding-bottom: 22px;
    margin-bottom: 14px;
    border-bottom: 1px solid #CDE4F0;
    font-size: 18px;
    line-height: 30px;
    color: #89CBC4;

    img {
      margin-left: 10px;
    }
  }

  .user__data {
    margin-bottom: 25px;

    .data__row {
      display: grid;
      grid-template-columns: 148px 1fr;
      grid-gap: 40px;

      .label {
        font-size: 18px;
        line-height: 44px;
        color: #979797;
      }

      .data {
        font-size: 18px;
        line-height: 44px;
      }
    }
  }

  .edit__data-form {
    .col {
      max-width: 540px;
      margin-bottom: 10px;
    }

    .cols-3 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 20px;
    }

    .input__wrapper, .birth {
      display: grid;
      grid-template-columns: 130px 1fr;
      margin-bottom: 0;
      grid-gap: 13px;

      .birth__wrapper {
        .multiselect {
          margin-bottom: 0;
        }
      }

      .label {
        align-self: center;
      }

      .input {
        margin-bottom: 0;
      }
    }

    .btns__wrapper {
      display: flex;
    }
  }


  .change__password-form {
    .row__wrapper {
      display: grid;
      grid-template-columns: 148px 1fr 1fr;
      grid-gap: 40px;
      margin-bottom: 25px;

      &.editing {
        grid-template-columns: 195px 1fr;
        grid-gap: 15px;
        max-width: 592px;
      }

      .label {
        font-size: 18px;
        line-height: 30px;
        align-self: center;
      }

      .input {
        height: 60px;
        padding: 20px;
        background: #FFFFFF;
        border: 1px solid #CDE4F0;
        border-radius: 12px;
        font-size: 18px;
        line-height: 30px;
        font-family: Avenir, sans-serif;
      }
    }
  }

  .change__btn, .submit__btn {
    display: inline-flex;
    text-align: center;
    justify-content: center;
    padding: 15px 30px;
    color: #89CBC4 !important;
    border: 1px solid #89CBC4;
    border-radius: 80px;
    transition: 0.3s;
    background-color: white;
    font-size: 18px;
    line-height: 30px;

    &:hover {
      color: $green-hover !important;
      border-color: $green-hover;
    }
  }

  .submit__btn {
    color: white !important;
    background-color: $green;
    margin-right: 20px;

    &:hover {
      background-color: $green-hover;
    }
  }
}
</style>
