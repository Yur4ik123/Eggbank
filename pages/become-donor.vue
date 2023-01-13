<template>
  <div class="become_donor">
    <PartialsBreadcrumbs/>
    <div class="first__screen">
      <div class="container">
        <div class="col">
          <h1 class="page__header">
            I want to become an Egg Donor!
          </h1>
          <div class="page__title">
            <p>
              At A.EggBank We Are Looking For The New Candidates Who Are Ready To Help Future Parents And Donate Their
              Eggs!
            </p>
            <p>
              We Are Ready To Support Your Desire For Donation And Provide Our Eggs Donors
            </p>
            <p>
              With High-Quality Medical Care And Support On Each Stage Of The Program.
            </p>
          </div>

        </div>
        <div class="col">
          <div class="img__wrapper">
            <img src="/img/become.png" width="545" height="483" alt="">
          </div>
        </div>

      </div>
    </div>
    <div class="why__section">
      <div class="container">
        <h2 class="section__header">
          Why To Choose A.EggBank For Egg Donation
        </h2>
        <div class="section__rows-wrapper">
          <div class="section__row">
            <div class="col title">
              <p>Medical care of highest level</p>
              <p>We have an amazing high qualified medical staff who will provide you with medical care during all egg
                donation program.
              </p>
            </div>
            <div class="col image">
              <img src="/img/w1.png" width="488" height="387" loading="lazy" alt="">
            </div>
          </div>
          <div class="section__row reverse">
            <div class="col title">
              <p>Coordination support</p>
              <p>A.EggBank has own Egg Donation Department with coordinators for your support and who takes care of you
                on each stage of the program: from the first application via this website to the end of program.
              </p>
            </div>
            <div class="col image">
              <img src="/img/w2.png" width="457" height="425" loading="lazy" alt="">
            </div>
          </div>
          <div class="section__row">
            <div class="col title">
              <p>Compensation</p>
              <p>
                We always provide our Egg Donors with compensation for the participation in egg donation program in the
                amount sufficient to cover all food necessity, transportation cost, inconveniences, mental and health
                issues that may arise during/after participation at the program. To find more about the amount – please,
                apply to our ADONIS Egg Bank coordinator via filling the application form below.
              </p>
            </div>
            <div class="col image">
              <img src="/img/w3.png" width="517" height="488" loading="lazy" alt="">
            </div>
          </div>
          <div class="section__row reverse">
            <div class="col title">
              <p>Egg Donors - Our Dear Partners</p>
              <p>
                And last but not the least – all our Egg Donors are our partners of highest value and importance! We are
                very interested to set with you a long-term relation and make your participation at the egg donation
                program at A.Egg.Bank full of joy and desire to come back again! We communicate with our Egg Donors with
                full respect and consider you as our dear partners.
              </p>
            </div>
            <div class="col image">
              <img src="/img/w4.png" width="522" height="419" loading="lazy" alt="">
            </div>
          </div>
        </div>

      </div>

    </div>
    <div class="requirement">
      <div class="container">
        <h2 class="section__header">
          Who can become an Egg Donor?
        </h2>
        <div class="cols__wrapper">
          <div class="col">
            <div class="img__wrapper">
              <img src="/img/req1.svg" width="74" height="74" alt="">
            </div>
            <div class="col__title">
              You a have at least one healthy born child
            </div>
          </div>
          <div class="col">
            <div class="img__wrapper">
              <img src="/img/req2.svg" width="74" height="74" alt="">
            </div>
            <div class="col__title">
              Age: from 18 till 30 years old
            </div>
          </div>
          <div class="col">
            <div class="img__wrapper">
              <img src="/img/req3.svg" width="74" height="74" alt="">
            </div>
            <div class="col__title">
              Don’t have any genetic diseases and bad habits
            </div>
          </div>
          <div class="col">
            <div class="img__wrapper">
              <img src="/img/req4.svg" width="74" height="74" alt="">
            </div>
            <div class="col__title">
              Good mental and physical health
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="steps">
      <div class="container">
        <h2 class="section__header">
          Step-By-Step Plan Of Egg Donation Program*
        </h2>
        <div class="steps__wrapper">
          <div class="step__item">
            <div class="num__wrapper">
              01
            </div>
            <div class="title__wrapper">
              Fill in an application form and send it via our website
            </div>
          </div>
          <div class="step__item">
            <div class="num__wrapper">
              02
            </div>
            <div class="title__wrapper">
              Our coordinator will get in touch with you and ask to provide more information about yourself and will be
              glad to answer all your questions
            </div>
          </div>
          <div class="step__item">
            <div class="num__wrapper">
              03
            </div>
            <div class="title__wrapper">
              First visit to the clinic – conclusion of agreement and passing of all necessary medical examination
            </div>
          </div>
          <div class="step__item">
            <div class="num__wrapper">
              04
            </div>
            <div class="title__wrapper">
              Second visit to the clinic – preparation for the participation at the egg donation program
            </div>
          </div>
          <div class="step__item">
            <div class="num__wrapper">
              05
            </div>
            <div class="title__wrapper">
              Egg stimulation and egg retrieval
            </div>
          </div>
          <div class="step__item">
            <div class="num__wrapper">
              06
            </div>
            <div class="title__wrapper">
              Receiving of the compensation right after the egg retrieval
            </div>
          </div>
        </div>
        <div class="footnote">
          <p>
            * Please, mention that step-by-step plan prescribed above is general one and can be changed under your
            individual program plan. All necessary information and details will be informed individually by your
            coordinator.

          </p>
          <p>
            In case you are interested, please, fill in the contact form and we will get in touch with you as soon as
            possible to start our cooperation!
          </p>
        </div>
      </div>

    </div>
    <div class="contact">
      <div class="container">
        <h2 class="section__header">
          Contact Form
        </h2>
        <div class="subheader">
          Write your message here
        </div>
        <div class="form__wrapper">
          <BecomeForm/>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "become-donor"
}
</script>

<style lang="scss" scoped>
.first__screen {
  margin-bottom: 40px;
  overflow-x: hidden;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }

  .page__header {
    @include page-header;
    margin-bottom: 20px;
    text-align: left;
  }

  .page__title {
    p {
      font-size: 22px;
      line-height: 36px;
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .img__wrapper {
    display: flex;
    justify-content: flex-end;

    img {
      max-width: 100%;
      object-fit: contain;
    }
  }
}

.why__section {
  padding: 50px 0 150px;
  margin-bottom: -100px;
  border-radius: 60px 60px 0 0;
  background-color: #CDE4F0;

  .section__header {
    @include section-header;
    margin-bottom: 0;
    text-transform: uppercase;
  }

  .section__rows-wrapper {
    .section__row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 70px;
      margin-bottom: -100px;

      &:last-child {
        margin-bottom: 0;
      }

      .title {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 2;
        max-width: 455px;
        padding: 100px 0;
      }

      .image {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 2;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &.reverse {
        .title {
          grid-column-start: 2;
          grid-column-end: 3;
        }

        .image {
          grid-column-start: 1;
          grid-column-end: 2;
        }
      }

      .col {
        @include default-text;
        align-self: center;
      }
    }
  }
}

.requirement {
  padding: 55px 0 140px;
  margin-bottom: -70px;
  border-radius: 60px 60px 0 0;
  position: relative;
  z-index: 5;
  background-color: white;

  .section__header {
    @include section-header;
    margin-bottom: 30px;
    text-transform: uppercase;
  }

  .cols__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;

    .col {
      display: flex;
      flex-direction: column;
      align-items: center;

      .img__wrapper {
        width: 136px;
        height: 136px;
        border-radius: 100%;
        background-color: $green;
        margin-bottom: 25px;
        display: flex;
        justify-content: center;
        align-items: center;

      }

      .col__title {
        text-align: center;
        font-size: 18px;
        line-height: 24px;
      }
    }
  }
}

.steps {
  padding: 55px 0 140px;
  margin-bottom: -70px;
  border-radius: 60px 60px 0 0;
  position: relative;
  z-index: 5;
  background-color: #CDE4F0;

  .section__header {
    @include section-header;
    margin-bottom: 40px;
    text-transform: uppercase;
  }

  .steps__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px 60px;
    margin-bottom: 40px;

    .step__item {
      display: grid;
      grid-template-columns: 130px 1fr;

      &:nth-child(odd) {
        .title__wrapper:after {
          content: '';
          width: 70px;
          height: 1px;
          border-bottom: 2px dashed #FFFFFF;
          position: absolute;
          top: 50%;
          right: 0;
          transform: translateX(100%);
        }
      }

      .num__wrapper {
        background-color: white;
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
      }

      .title__wrapper {
        border: 2px dashed #FFFFFF;
        border-radius: 12px;
        display: flex;
        align-items: center;
        margin-left: -60px;
        padding: 15px 20px 15px 80px;
        position: relative;
        z-index: 0;


      }
    }

  }

  .footnote {
    font-size: 18px;
    line-height: 30px;
    color: #5B676E;

    p {
      margin: 0;
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
  .why__section {
    .section__rows-wrapper {
      .section__row {
        grid-gap: 30px;
      }
    }
  }
}

@media screen and (max-width: 950px) {
  .first__screen {
    .container {
      grid-template-columns: 1fr;
    }

    .page__header {
      text-align: center;
    }

    .img__wrapper {
      margin: 0 auto;
      display: flex;
      justify-content: center;
    }
  }

}

@media screen and (max-width: 768px) {
  .first__screen {
    margin-bottom: 50px;

    .page__header {
      margin-bottom: 15px;
    }

    .page__title {
      p {
        font-size: 18px;
        line-height: 30px;
      }
    }
  }
  .why__section {
    border-radius: 12px 12px 0 0;
    padding-top: 35px;
  }
  .requirement {
    padding: 35px 0 100px;
    margin-bottom: -50px;
    border-radius: 12px 12px 0 0;

    .cols__wrapper {
      grid-template-columns: 1fr;
      grid-gap: 10px;

      .col {
        flex-direction: initial;
        display: grid;
        grid-template-columns: 90px 1fr;
        grid-gap: 15px;

        .img__wrapper {
          margin-bottom: 0;
          width: 90px;
          height: 90px;

          img {
            max-width: 50px;
            max-height: 50px;
          }
        }

        .col__title {
          font-size: 14px;
          line-height: 24px;
          text-align: start;
        }
      }
    }
  }
  .steps {
    padding: 35px 0 100px;
    margin-bottom: -50px;
    border-radius: 12px 12px 0 0;


    .steps__wrapper {
      grid-template-columns: 1fr;
      grid-gap: 20px;

      .step__item {
        grid-template-columns: 80px 1fr;

        .num__wrapper {
          width: 90px;
          height: 90px;
          font-size: 30px;
          line-height: 54px;
        }

        .title__wrapper {
          padding: 10px 10px 10px 75px;
          font-size: 14px;
          line-height: 24px;

          &:after {
            display: none !important;
          }
        }
      }
    }

    .footnote {
      font-size: 14px;
      line-height: 24px;
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

@media screen and (max-width: 640px) {
  .why__section {
    .section__rows-wrapper {
      .section__row {
        grid-template-columns: 1fr;
        grid-gap: 0;
        margin-bottom: 35px;

        .title {
          grid-column-start: 1;
          grid-column-end: 2;
          grid-row-start: 1;
          grid-row-end: 2;
          max-width: 100%;
          padding: 0;
        }

        .image {
          grid-column-start: 1;
          grid-column-end: 2;
          grid-row-start: 2;
          grid-row-end: 3;
        }

        &.reverse {
          .title {
            grid-column-start: 1;
            grid-column-end: 2;
          }

          .image {
            grid-column-start: 1;
            grid-column-end: 2;
          }
        }
      }
    }
  }
}
</style>
