<template>
  <div class="contact__page">
    <PartialsBreadcrumbs/>
    <div class="first__screen">
      <div class="container">
        <div class="page__title">
          <h1 class="page__header">
            Contact Us
          </h1>
          <div class="page__description">
            Thank you for your interest in ADONIS Egg Bank! We are always here to help you.
            Please leave us the message below and we`ll get in touch with you as soon as possible.
          </div>
        </div>
        <div class="img__wrapper">
          <img src="/img/contact.svg" width="830" height="434" loading="lazy" alt="">
        </div>
      </div>
    </div>
    <div class="contact">
      <img src="/img/cont_abs.png" width="189" height="466" alt="" class="abs__img" loading="lazy">
      <div class="container">
        <img src="/img/cont_abs2.png" width="273" height="324" alt="" class="abs__img-2" loading="lazy">
        <div class="contact__form-wrapper">
          <div class="form__header">
            Contact Form
          </div>
          <ContactForm/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "contact"
}
</script>

<style lang="scss" scoped>
.first__screen {


  .container {
    position: relative;
  }

  .page__title {
    max-width: 480px;
    position: relative;
    z-index: 2;
    padding: 80px 0 115px;

    .page__header {
      @include page-header;
      margin-bottom: 20px;
      text-align: left;
    }

    .page__description {
      font-size: 22px;
      line-height: 36px;
    }
  }

  .img__wrapper {
    position: absolute;
    z-index: 1;
    right: 0;
    bottom: 0;
    max-width: 70%;
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
      margin-bottom: 25px;
      text-transform: uppercase;
    }
  }
}

@media screen and (max-width: 768px) {
  .first__screen {
    margin-bottom: 50px;

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
      position: relative;
      right: initial;
      bottom: initial;
      max-width: 100%;

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
    }
  }
}

@media screen and (max-width: 576px) {
  .first__screen {
    .img__wrapper {
      margin-left: -50px;
    }
  }
}
</style>
