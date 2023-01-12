<template>
  <div class="licenses__page">
    <PartialsBreadcrumbs/>
    <div class="container">
      <h1 class="page__header">
        FDA-ELIGIBILITY OF THE EGG DONOR AND LICENSES OF A.EggBank
      </h1>
    </div>
    <div class="firs__screen">
      <img src="/img/lic_abs.png" width="495" height="335" loading="lazy" alt="" class="abs__img">
      <div class="container">
        <div class="screen__data">
          <h2 class="section__header">
            WHAT FDA-ELIGIBILITY OF THE EGG DONOR MEANS?
          </h2>
          <div class="screen__title">
            <p>
              For the oocytes of the Egg Donor to be transported and to be further used in the infertility treatment at
              any clinic located in USA – such Egg Donor shall obligatory pass necessary medical examination at the FDA
              certified Laboratory. Otherwise, unfortunately, donor’s eggs can’t be used in US clinic.

            </p>
            <p>
              Our Egg Donors to be FDA-eligible passes all necessary tests at the FDA Laboratory Viromed additionally to
              all tests passed at Ukrainian Lab
            </p>

          </div>
        </div>
        <div class="img__wrapper">
          <img src="/img/lic_f.svg" width="944" height="629" alt="" loading="lazy">
        </div>
      </div>

    </div>
    <div class="recommendation">
      <div class="container">
        <h2 class="section__header">
          HOW CAN I UNDERSTAND THAT THE EGG DONOR I WANT TO SELECT
          VIA A.EggBank WEBSITE IS FDA-ELIGIBLE?
        </h2>
        <div class="rec__wrapper">
          <div class="req__item">
            <div class="img__wrapper">
              <img src="/img/rec1.png" width="285" height="179" loading="lazy" alt="">
            </div>
            <div class="title">
              On each donor profile, you may find FDA icon ( <img src="/img/rec_icon1.svg" width="49" height="12"> )
              which means that Egg Donor passed all necessary medical
              tests at FDA certified lab and is an FDA-eligible Donor.

            </div>
          </div>
          <div class="req__item">
            <div class="img__wrapper">
              <img src="/img/rec2.png" width="285" height="185" loading="lazy" alt="">
            </div>
            <div class="title">
              The icon ( <img src="/img/rec_icon2.png" width="49" height="12"> ) means the donor doesn't have valid FDA
              tests at the moment, but if you would like to purchase
              oocytes from such a donor, just leave us your request and we will provide you with more information on the
              conditions and terms of testing this donor at FDA certified lab to make such a donor FDA-eligible.
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="eligible">
      <div class="container">
        <h2 class="section__header">
          WHY I NEED THE EGG DONOR TO BE FDA-ELIGIBLE?
        </h2>
        <div class="subheader">
          There are many grounds for it, including:
        </div>
        <div class="el__wrapper">
          <div class="el__item">
            <div class="image__wrapper">
              <img src="/img/el1.svg" width="90" height="90" alt="">
              <span class="num">01</span>
            </div>
            <div class="title">
              You need to use eggs of the Donor at the US clinic. Otherwise, it will be impossible to ship and use them
              on the territory of USA.
            </div>

          </div>
          <div class="el__item">
            <div class="image__wrapper">
              <img src="/img/el2.svg" width="90" height="90" alt="">
              <span class="num">02</span>
            </div>
            <div class="title">
              You don’t want to use Donor’s eggs in the US clinic but prefer for the Egg Donor to pass medical tests at
              the FDA certified Laboratory and others.
            </div>

          </div>
          <div class="el__item">
            <div class="image__wrapper">
              <img src="/img/el3.svg" width="90" height="90" alt="">
              <span class="num">03</span>
            </div>
            <div class="title">
              You want to create embryos and use them at ADONIS Medical Group of Companies in Ukraine. However, in case
              you want to have the possibility to transfer the remaining embryos from Ukraine to USA if you need or want
              to make such decision. Without FDA-eligibility of the Egg Donor it would be impossible to make such
              shipment.
            </div>

          </div>
        </div>
      </div>

    </div>
    <div class="california">
      <img src="/img/cer__abs.png" width="323" height="418" loading="lazy" alt="" class="abs__img">
      <div class="container">
        <div class="seo__header">
          <div class="header__content">
            <span class="img__wrap">
              <img src="/img/ca_img.png" width="56" height="56" alt="">
            </span>
            <span>
              CAN I USE DONOR’S EGGS IN CALIFORNIA STATE?
            </span>
          </div>
        </div>
        <div class="cols__wrapper">
          <div class="col">
            <p>
              Yes, you can use Donor’s eggs from A.EggBank at any clinic located in CA. A.EggBank received Tissue Bank
              License issued by California Department of Public Health and we can legally ship selected Donor’s eggs to
              your CA clinic.
            </p>
          </div>
          <div class="col">
            <div class="img__wrapper">
              <img src="/img/cert.png" width="693" height="456" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "licenses"
}
</script>

<style lang="scss" scoped>
.licenses__page {

  .page__header {
    @include page-header;
  }

  .firs__screen {
    padding-bottom: 100px;
    margin-bottom: -50px;
    position: relative;

    background: #CDE4F0;
    border-radius: 60px 60px 0 0;
    overflow-x: hidden;

    .abs__img {
      position: absolute;
      right: 0;
      top: 150px;
      z-index: 0;

    }

    .container {
      position: relative;
      z-index: 1;
    }

    .img__wrapper {
      position: absolute;
      top: 0;
      right: -130px;
      z-index: 2;
      bottom: 0;
    }

    .screen__data {
      padding: 100px 0;
      max-width: 520px;
      position: relative;
      z-index: 3;
    }

    .section__header {
      @include section-header;
      text-align: start;
      margin-bottom: 15px;
      line-height: 54px;
    }

    .screen__title {
      @include default-text;
    }


  }

  .recommendation {
    background-color: white;
    position: relative;
    padding: 50px 0 150px;
    margin-bottom: -80px;
    z-index: 1;
    border-radius: 60px 60px 0 0;

    .section__header {
      @include section-header;
      margin-bottom: 30px;
    }

    .rec__wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 60px;

      .req__item {
        .img__wrapper {
          margin-bottom: 15px;
        }

        .title {
          font-size: 18px;
          line-height: 30px;
          color: black;
        }

      }
    }
  }

  .eligible {
    padding: 55px 0 270px;
    margin-bottom: -200px;
    position: relative;
    z-index: 3;
    background: #CDE4F0;
    border-radius: 60px 60px 0 0;

    .section__header {
      @include section-header;
      margin-bottom: 10px;
    }

    .subheader {
      margin-bottom: 20px;
      font-size: 22px;
      line-height: 36px;
      text-align: center;
    }

    .el__wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 30px;

      .el__item {
        display: grid;
        grid-template-columns: 136px 1fr;
        grid-gap: 25px;

        .image__wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 100%;
          width: 136px;
          height: 136px;
          background-color: $green;
          position: relative;

          .num {
            position: absolute;
            top: -5px;
            right: 0;
            width: 48px;
            height: 48px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 100%;
            background-color: white;
            font-size: 22px;
            line-height: 36px;
          }
        }

        .title {
          font-size: 18px;
          line-height: 30px;
          align-self: center;
        }

        &:last-child {
          grid-column-start: 1;
          grid-column-end: 3;
        }
      }
    }
  }

  .california {
    padding: 70px 0;
    background-color: white;
    border-radius: 60px 60px 0 0;
    position: relative;
    z-index: 4;

    .abs__img {
      position: absolute;
      top: 100px;
      left: 0;
      z-index: 0;
    }

    .seo__header {
      text-align: center;
      background: #B6CFDC url("/img/border.png") no-repeat center/cover;
      padding: 29px 10px;
      margin-bottom: 40px;
      position: relative;
      text-transform: uppercase;
      border-radius: 12px;

      .header__content {
        font-size: 22px;
        line-height: 30px;
        z-index: 2;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        .img__wrap {
          margin-right: 13px;
          border-radius: 100%;
          overflow: hidden;
          width: 58px;
          height: 56px;
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
        background-color: #CDE4F0;
        z-index: 0;

      }
    }

    .cols__wrapper {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      grid-gap: 40px;
      position: relative;
      z-index: 2;

      .col {
        @include default-text;
        align-self: center;
      }
    }
  }
}

@media screen and (max-width: 1100px) {

  .licenses__page {
    .firs__screen {
      .abs__img {
        display: none;
      }

      .img__wrapper {
        margin-right: -200px;
      }
    }
  }
}

@media screen and (max-width: 992px) {
  .licenses__page {
    .eligible {
      .el__wrapper {
        grid-template-columns: 1fr;

        .el__item {
          &:last-child {
            grid-column-start: initial;
            grid-column-end: initial;
          }
        }
      }
    }

    .california {
      .abs__img {
        display: none;
      }
    }
  }
}

@media screen and (max-width: 880px) {

  .licenses__page {
    .firs__screen {
      padding: 35px 0 80px;
      margin-bottom: -50px;

      .screen__data {
        padding: 0;
        max-width: 100%;
      }

      .img__wrapper {
        position: relative;
        bottom: initial;
        top: initial;
        right: initial;
        margin: 0 -50px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .licenses__page {
    .firs__screen {
      border-radius: 12px 12px 0 0;

      .screen__data {
        .section__header {
          text-align: center;
        }
      }
    }

    .recommendation {
      padding: 36px 0 160px;
      margin-bottom: -110px;

      .section__header {
        margin-bottom: 25px;

      }

      .rec__wrapper {
        grid-template-columns: 1fr;
        grid-gap: 35px;

        .req__item {
          .img__wrapper {
            display: flex;
            justify-content: center;
          }

          .title {
            font-size: 14px;
            line-height: 24px;
          }
        }
      }
    }

    .eligible {
      padding: 35px 0 180px;
      margin-bottom: -130px;
      border-radius: 12px 12px 0 0;

      .subheader {
        margin-bottom: 30px;
        font-size: 18px;
        line-height: 30px;

      }

      .el__wrapper {
        grid-template-columns: 1fr;
        grid-gap: 20px;

        .el__item {
          grid-template-columns: 1fr;
          grid-gap: 20px;

          .image__wrapper {
            margin: 0 auto;
          }

          .title {
            text-align: center;
            font-size: 14px;
            line-height: 24px;
          }
        }
      }
    }

    .california {

      padding-top: 35px;
      border-radius: 12px 12px 0 0;

      .seo__header {
        padding: 26px;

        .header__content {
          font-size: 18px;
          line-height: 30px;
          display: flex;
          flex-direction: column;

          .img__wrap {
            margin-right: 0;
            margin-bottom: 15px;
          }
        }
      }

      .cols__wrapper {
        grid-template-columns: 1fr;
        grid-gap: 25px;
      }
    }
  }
}
</style>
