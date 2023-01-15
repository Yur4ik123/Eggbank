<template>
  <div class="registration__page">
    <PartialsBreadcrumbs/>
    <div class="first__screen">
      <div class="container">
        <div class="page__title">
          <h1 class="page__header">
            A.EggBank DATA BASE REGISTRATION
          </h1>
          <div class="page__description">
            This is registration for new users of our data base
            <br>
            If you already have an account <a href="#login" uk-toggle>click here to Login</a>
          </div>
        </div>
        <div class="img__wrapper">
          <img src="/img/registr.svg" width="601" height="396" loading="lazy" alt="">
        </div>
      </div>
    </div>
    <div class="contact">
      <img src="/img/cont_abs.png" width="189" height="466" alt="" class="abs__img" loading="lazy">
      <div class="container">
        <img src="/img/cont_abs2.png" width="273" height="324" alt="" class="abs__img-2" loading="lazy">
        <div class="contact__form-wrapper">
          <div class="form__header">
            Register for Donor Database Access
          </div>
          <div class="form__description">
            Please complete the following information to create your Donor Database account.
            <br>
            You will be given <a href="">Preview Access for 30 days.</a>

          </div>
          <RegistrationForm/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "registration"
}
</script>

<style lang="scss" scoped>
.first__screen {
  .container {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .page__title {
    position: relative;
    z-index: 2;
    padding: 80px 0 115px;
    max-width: 530px;

    .page__header {
      @include page-header;
      margin-bottom: 20px;
      text-align: left;
      text-transform: initial;
    }

    .page__description {
      font-size: 22px;
      line-height: 36px;

      a {
        text-decoration: underline !important;
        color: $green !important;
        transition: 0.3s;

        &:hover {
          text-decoration: none !important;
          color: $green-hover !important;
        }
      }
    }
  }

  .img__wrapper {
    align-self: center;

  }
}

.contact {
  padding: 55px 0 70px;
  background: #CDE4F0;
  border-radius: 60px 60px 0 0;

  position: relative;

  .abs__img {
    position: absolute;
    left: 0;
    top: 100px;
    z-index: 0;
  }

  .container {
    display: flex;
    justify-content: center;
    z-index: 1;
    position: relative;

    .abs__img-2 {
      top: 250px;
      right: 0;
      z-index: 0;
      position: absolute;

    }
  }

  .contact__form-wrapper {
    z-index: 1;
    position: relative;
    max-width: 892px;
    background: #FAFCFD;
    border: 1px solid #CDE4F0;
    border-radius: 12px;
    width: 100%;
    padding: 40px 40px 70px;

    .form__header {
      font-size: 36px;
      line-height: 54px;
      text-align: center;
      margin-bottom: 15px;
      text-transform: uppercase;
    }

    .form__description {
      font-size: 18px;
      line-height: 30px;
      text-align: center;
      margin-bottom: 25px;

      a {
        text-decoration: underline !important;

      }
    }
  }
}

@media screen and (max-width: 768px) {
  .first__screen {
    margin-bottom: 50px;

    .container {
      grid-template-columns: 1fr;
      grid-gap: 10px;
    }

    .page__title {
      max-width: 100%;
      padding: 10px 0 0;

      .page__header {
        text-align: center;
        margin-bottom: 15px;
      }

      .page__description {
        font-size: 18px;
        line-height: 30px;
      }
    }

    .img__wrapper {
    }

  }
  .contact {
    background: white;
    padding: 0 0 50px;

    .abs__img {
      display: none;
    }

    .container {
      .abs__img-2 {
        display: none;
      }
    }

    .contact__form-wrapper {
      border: none;
      background: white;
      padding: 0;

      .form__header {
        margin-bottom: 26px;
        font-size: 30px;
        line-height: 36px;
      }

      .form__description {
        font-size: 14px;
        line-height: 24px;
      }
    }
  }
}

@media screen and (max-width: 576px) {
  .first__screen {
    .img__wrapper {

    }
  }
}
</style>
