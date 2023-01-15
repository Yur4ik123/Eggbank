<template>
  <div class="partners__page">
    <PartialsBreadcrumbs/>
    <div class="container">
      <div class="first__screen">
        <div class="page__title">
          <h1 class="page__header">
            A.EggBank Patrnership
          </h1>
          <div class="page__description">
            A.EggBank Highly Interested To Establish Long-Term Relations With Our Partner And To Create Win-Win
            Cooperation
          </div>
        </div>
        <div class="img__wrapper">
          <picture>
            <source media="(max-width:768px )" srcset="/img/part_mob.svg">
            <img src="/img/part.png" width="847" height="605" alt="" loading="lazy">
          </picture>
        </div>
      </div>
    </div>
    <div class="for__professionals">
      <div class="container">
        <div class="img__wrapper">
          <img src="/img/prof.svg" width="520" height="611" loading="lazy" alt="">

        </div>
        <div class="prof__data">
          <h2 class="section__header">
            For Professionals
          </h2>
          <div class="section__subheader">
            Trusted & Professional Partnerships
          </div>
          <div class="section__content">
            <p>
              As the A.EggBank which is part of the international ADONIS Medical Group of Companies, we are always
              looking to establish a new partnership with well-established IVF centers or Doctors to fulfill the growing
              need for highest quolity egg donors.
            </p>
            <p>
              When you become one of our Partners, you can expect a large supply of frozen eggs from top quality donors
              that have undergone comprehensive screening and health assessments and Acompayning Documentation In
              Accordance With Your National Governmental Requirements in your country (FDA, HEPA, etc.)
            </p>

          </div>

        </div>
        <div class="btn__wrapper">
          <PartialsGreenBtn title="Become a Partner"></PartialsGreenBtn>
        </div>
      </div>
    </div>
    <div class="advantages">
      <div class="container">
        <h2 class="section__header">
          Advantages To Be With ADONIS Egg Bank
        </h2>
        <div class="rows__wrapper">
          <div class="step__item">
            <div class="num__wrapper">
              01
            </div>
            <div class="title__wrapper">
              <div class="row__head">
                ADONIS Egg Bank Platform
              </div>
              <div class="row__title">
                Our order system is very fast and easy to be made as we want to make each step of egg donor’s selection
                smooth and not-complicated for both Partner-clinic and patients.
              </div>
            </div>
          </div>
          <div class="step__item">
            <div class="num__wrapper">
              02
            </div>
            <div class="title__wrapper">
              <div class="row__head">
                FDA-eligible donors
              </div>
              <div class="row__title">
                We can propose your different solutions in case you prefer individual order or bulk order as well. In
                case your company operates in the USA, and you are interested in cooperation with us – we can provide
                you FDA-eligible donors (obligatory tests are performed at FDA Lab) and with genetic screening of more
                than 400 diseases to comply with your state requirements and patient’s wishes.
              </div>
            </div>
          </div>
          <div class="step__item">
            <div class="num__wrapper">
              03
            </div>
            <div class="title__wrapper">
              <div class="row__head">
                High-quality donor’s eggs
              </div>
              <div class="row__title">
                At ADONIS Egg Bank we are always ready to support your business and provide your patients with
                high-quality frozen donor’s eggs.
              </div>
            </div>
          </div>
        </div>
        <div class="seo__header">
          <div class="header__content">
              <span class="head">
              Are you interested?
              </span>
            <span class="title">
Please, fill in the contact form and we will get in touch with to start our partnership!
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="contact">
      <div class="container">
        <h2 class="section__header">
          Contact Form
        </h2>
        <div class="subheader">
          Please fill the form below
        </div>
        <div class="form__wrapper">
          <PartnerForm/>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Partners"
}
</script>

<style lang="scss" scoped>
.partners__page {

}

.first__screen {
  padding: 100px 0 135px;
  position: relative;
  overflow: hidden;
  .page__title {
    max-width: 500px;
    z-index: 1;
  }

  .page__header {
    font-size: 54px;
    line-height: 64px;
    margin-bottom: 20px;
  }

  .page__description {
    font-size: 22px;
    line-height: 36px;
  }

  .img__wrapper {
    position: absolute;
    top: 0;
    bottom: 50px;
    z-index: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 70%;
  }


}

.for__professionals {
  padding: 20px 0 80px;
  position: relative;
  z-index: 1;
  margin-bottom: -50px;
  border-radius: 60px 60px 0 0;
  background-color: #CDE4F0;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0 40px;

    .prof__data {
      align-self: center;

      .section__header {
        @include section-header;
        margin-bottom: 1px;
        text-align: left;
        text-transform: uppercase;
      }

      .section__subheader {
        font-size: 22px;
        line-height: 30px;
        margin-bottom: 25px;
      }

      .section__content {
        @include default-text;
        margin-bottom: 40px;
      }
    }

    .btn__wrapper {
      grid-column-start: 2;
      grid-column-end: 3;
    }
  }
}

.advantages {
  padding-top: 55px;
  margin-bottom: 55px;
  position: relative;
  z-index: 2;
  background-color: white;
  border-radius: 60px 60px 0 0;


  .section__header {
    @include section-header;
    text-transform: uppercase;
    margin-bottom: 25px;
  }

  .rows__wrapper {
    margin-bottom: 100px;

    .step__item {
      display: grid;
      grid-template-columns: 130px 1fr;
      margin-bottom: 50px;

      &:last-child {
        margin-bottom: 0;
      }

      .num__wrapper {
        background-color: $green;
        width: 136px;
        height: 136px;
        border-radius: 100%;
        margin: -9px -9px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 36px;
        line-height: 54px;
        position: relative;
        z-index: 1;
        align-self: center;
        color: white;
      }

      .title__wrapper {
        border: 2px dashed $green;
        border-radius: 12px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-left: -60px;
        padding: 15px 20px 15px 80px;
        position: relative;
        z-index: 0;


        .row__head {
          color: $green;
          font-size: 22px;
          line-height: 30px;

        }

        .row__title {
          font-size: 18px;
          line-height: 30px;
        }


      }
    }
  }

  .seo__header {
    text-align: center;
    background: #B6CFDC url("/img/border.png") no-repeat center/cover;
    padding: 29px 10px;
    margin-bottom: 40px;
    position: relative;
    border-radius: 12px;

    .header__content {

      z-index: 2;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .head {
        font-size: 36px;
        line-height: 54px;
        text-transform: uppercase;
      }

      .title {
        font-size: 22px;
        line-height: 30px;
      }
    }

    &:after {
      content: '';
      position: absolute;
      top: 10px;
      right: 10px;
      left: 10px;
      bottom: 10px;
      border-radius: 5px;
      background-color: white;
      z-index: 0;

    }
  }


}

.contact {
  padding: 55px 0 50px;

  border-radius: 60px 60px 0 0;
  position: relative;
  z-index: 6;
  background-color: white;

  .section__header {
    @include section-header;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  .subheader {
    margin-bottom: 30px;
    font-size: 22px;
    line-height: 36px;
    text-align: center;
  }

  .form__wrapper {
    max-width: 800px;
    margin: 0 auto;
  }
}

@media screen and (max-width: 1100px) {
  .first__screen {


    .img__wrapper {
      margin-right: -100px;
    }
  }
}

@media screen and (max-width: 768px) {
  .first__screen {
    padding: 10px 0 20px;

    .img__wrapper {
      position: relative;
      top: initial;
      right: initial;
      bottom: initial;
      max-width: 100%;
      margin: 0;
    }

    .page__title {
      margin-bottom: 10px;
      max-width: 100%;

      .page__header {
        text-align: center;
        font-size: 30px;
        line-height: 36px;
        margin-bottom: 15px;

      }

      .page__description {
        font-size: 18px;
        line-height: 30px;
      }
    }
  }
  .for__professionals {
    padding: 35px 0 90px;
    margin-bottom: -40px;
    border-radius: 12px 12px 0 0;

    .container {
      grid-gap: 10px;
      grid-template-columns: 1fr;

      .prof__data {
        margin-bottom: 10px;
        grid-row-start: 1;
        grid-row-end: 2;

        .section__header {
          text-align: center;
          margin-bottom: 15px;
        }

        .section__subheader {
          text-align: center;
          margin-bottom: 15px;
          font-size: 18px;
          line-height: 30px;
        }
      }

      .img__wrapper {
        grid-row-start: 2;
        grid-row-end: 3;
        display: flex;
        justify-content: center;
      }

      .btn__wrapper {
        grid-row-start: 3;
        grid-row-end: 4;
        grid-column-start: 1;
        grid-column-end: 2;
        display: flex;
        justify-content: center;
      }
    }
  }
  .advantages {
    padding: 35px 0 0;
    margin-bottom: 50px;
    border-radius: 12px 12px 0 0;

    .section__header {
      margin-bottom: 20px;
    }

    .rows__wrapper {
      margin-bottom: 30px;

      .step__item {
        grid-template-columns: 80px 1fr;

        .num__wrapper {
          width: 90px;
          height: 90px;
          font-size: 30px;
          line-height: 54px;
        }

        .title__wrapper {
          padding: 10px 10px 10px 55px;
          font-size: 14px;
          line-height: 24px;
          margin-left: -45px;

          .row__head {
            font-size: 18px;
            line-height: 30px;
            color: #389188;
          }

          .row__title {
            font-size: 14px;
            line-height: 24px;
          }

          &:after {
            display: none !important;
          }
        }
      }
    }

    .seo__header {
      padding: 26px;

      .header__content {

        .head {
          font-size: 30px;
          line-height: 36px;
        }

        .title {
          font-size: 18px;
          line-height: 30px;
        }
      }
    }
  }
  .contact {
    padding: 35px 0 50px;
    border-radius: 12px 12px 0 0;

    .section__header {
      margin-bottom: 15px;
    }

    .subheader {
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 36px;
    }
  }
}

</style>
