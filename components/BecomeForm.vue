<template>
  <no-ssr>
    <form action="" class="become__form" novalidate @submit.prevent="submit">
      <div class="cols-2">
        <FormInput :class="{'invalid': $v.first_name.$error}" v-model.trim="$v.first_name.$model" label="First Name:"
                   placeholder="Placeholder"/>
        <FormInput :class="{'invalid': $v.last_name.$error}" v-model.trim="$v.last_name.$model" label="Last Name:"
                   placeholder="Placeholder"/>
      </div>
      <div class="cols-2">
        <FormInput :class="{'invalid': $v.email.$error}" v-model.trim="$v.email.$model" label="First Name:"
                   placeholder="Placeholder" type="email"/>
        <FormInput :class="{'invalid': $v.phone.$error}" v-model.trim="$v.phone.$model" label="Phone Number:"
                   placeholder="Placeholder" type="tel"/>
      </div>
      <div class="cols-2">
        <div>
          <FormBirth></FormBirth>

        </div>
        <div class="cols-3">
          <FormInput :class="{'invalid': $v.height.$error}" v-model.trim="$v.height.$model" label="Height:"
          />
          <FormInput :class="{'invalid': $v.weight.$error}" v-model.trim="$v.weight.$model" label="Weight:"
          />

        </div>
      </div>
      <div class="col">
        <FormTextarea :class="{'invalid': $v.education.$error}" v-model.trim="$v.education.$model" label="Education:"
                      placeholder="Write your education details here"
        />
      </div>
      <div class="col__qty">
        <label class="label">
          Date Of Birth:
        </label>
        <FormSelect :options="qty_list" v-model="qty" placeholder="Qty"/>
      </div>
      <div class="cols-2" v-if="qty>0" v-for="i in +qty" :key="i">
        <FormBirth :label="`Date Of Birth ${+i}st`"/>
      </div>
      <div class="submit__wrapper">
        <button type="submit" class="submit__btn">
          Submit
        </button>
      </div>
    </form>
  </no-ssr>
</template>

<script>
import {required, email} from 'vuelidate/lib/validators'

export default {
  name: "BecomeForm",
  data() {
    return {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      height: '',
      weight: '',
      education: '',
      qty: '',
      qty_list: ['1', '2', '3', '4']
    }
  },
  validations: {

    first_name: {required},
    last_name: {required},
    email: {required, email},
    phone: {required},
    height: {required},
    weight: {required},
    education: {required},

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
}
</script>

<style lang="scss" scoped>
.become__form {
  .cols-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }

  .cols-3 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
  }

  .col__qty {
    max-width: 120px;
    margin-bottom: 25px;

    .label {
      display: block;
      font-size: 18px;
      line-height: 30px;
      margin-bottom: 5px;
    }
  }


  .submit__wrapper {
    display: flex;
    justify-content: center;

    .submit__btn {
      height: 60px;
      max-width: 330px;
      background-color: $green;
      transition: 0.3s;
      font-size: 18px;
      line-height: 30px;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      border-radius: 80px;

      &:hover {
        background-color: $green-hover;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .become__form {
    .cols-2 {
      grid-template-columns: 1fr;
      grid-gap: 0;
    }

    .cols-3 {
    }

    .col__qty {
      max-width: 120px;

      .label {

        font-size: 18px;
        line-height: 24px;

      }
    }


    .submit__wrapper {


      .submit__btn {
        height: 44px;
        font-size: 14px;
        line-height: 24px;
      }
    }
  }
}
</style>
