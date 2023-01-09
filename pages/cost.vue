<template>
  <div class="cost__page">
    <PartialsBreadcrumbs/>
    <section class="first__screen">
      <div class="container">
        <div class="title__side">
          <h1 class="page__header">
            COST OF THE PREPARATION OF THE DONOR’S EGGS
          </h1>
          <h2 class="page__subheader">
            The cost highly depends on the eggs donor package that you choose, and which is better in your case
          </h2>

        </div>
        <div class="img__side">
          <img src="/img/cost.png" width="716" height="451" loading="lazy" alt="">
        </div>
      </div>
    </section>
    <section class="shipping">
      <div class="container">
        <h3 class="section__header">
          USA SHIPPING CONDITIONS
        </h3>

      </div>

      <div class="cols__wrapper">
        <div class="container">
          <div class="img__wrapper">
            <img src="/img/truck.svg" width="1920" height="317" alt="">
          </div>
          <div class="title__wrapper">
            <p>
              We strive to make family-building accessible to our patients and provide not only the best price but the
              guarantees.
              You can be certain you choose from an extensive and diverse selection of qualified FDA-eligible Egg Donors
              who have undergone comprehensive testing and screening.
            </p>
            <p>
              Our frozen donor eggs are stored in the United States and are ready to ship directly to your clinic.
            </p>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="packages">
          <img src="/img/pack.png" width="487" height="400" alt="" class="abs__img">
          <h3 class="section__header">
            OUR PACKAGES
          </h3>
          <div class="packages__cols">
            <div class="pack">
              <div class="pack__title">
                Basic Egg Package
              </div>
              <div class="pack__subtitle">
                From fully screened,
                FDA-eligible donors
              </div>
              <div class="num__head">
                Cryo donor’s oocytes:
              </div>
              <div class="num">
                8
              </div>
              <div class="num__head">
                Blastocyst guaranteed
              </div>
              <div class="num">
                1
              </div>
              <div class="num__head">
                Transportation
              </div>
              <div class="num">
                х
              </div>
              <div class="price">
                <div class="cost_count">
                  $ 9,680.00 *
                </div>
                <div class="cost_subcount">
                  inc TAX.
                </div>

              </div>
            </div>
            <div class="pack">
              <div class="pack__title">
                Premier Egg Package
              </div>
              <div class="pack__subtitle">
                From fully screened,
                FDA-eligible donors
              </div>
              <div class="num__head">
                Cryo donor’s oocytes:
              </div>
              <div class="num">
                14
              </div>
              <div class="num__head">
                Blastocyst guaranteed
              </div>
              <div class="num">
                2
              </div>
              <div class="num__head">
                Transportation
              </div>
              <div class="num">
                х
              </div>
              <div class="price">
                <div class="cost_count">
                  $ 15,400.00 *
                </div>
                <div class="cost_subcount">
                  inc TAX.
                </div>

              </div>
            </div>
          </div>

        </div>
        <div class="seo__header">
          <div class="header__content">
            Each additional egg From fully screened, FDA-eligible donors $ 1,090.00 * <span> inc TAX.</span>
          </div>
        </div>
        <div class="seo__content">
          <p>
            *Please, note that transportation cost is not included in the price. You are able to choose the courier
            company for shipment across the United States.
            If you are located outside of the United States, please contact us in order to check the possibility of
            shipping Frozen Donor Eggs to your country. For shipping oocytes worldwide, we normally use World Courier,
            Cryoport or ARKCryo services. Please contact us to check the possibility of transportation and its price.

          </p>
          <h4> IMPORTANT NOTE:</h4>
          <p>
            Please, mention, that the prices set above include obligatory and additional medical tests for the Egg Donor
            that is set by the internal rules of ADONIS Egg Bank.
            In case you want selected Egg Donor to pass any additional medical test – it isn’t covered by the cost of
            the
            package and shall be paid additionally.
          </p>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "Cost"
}
</script>

<style lang="scss" scoped>
.cost__page {

  .first__screen {
    .container {
      position: relative;

      .title__side {
        max-width: 565px;
        padding: 86px 0 115px;
        z-index: 1;
        position: relative;

        .page__header {
          font-size: 54px;
          line-height: 64px;
          color: black;
          margin-bottom: 37px;
        }

        .page__subheader {
          font-size: 22px;
          line-height: 36px;
          color: black;
          margin-top: 0;
        }
      }

      .img__side {
        z-index: 0;
        position: absolute;
        right: 0;
        bottom: 0;
        top: 0;
        left: 40%;
        display: flex;
        align-items: center;
      }
    }
  }

  .shipping {
    background: #CDE4F0;
    padding: 50px 0 300px;
    border-radius: 60px 60px 0 0;
    margin-bottom: -225px;
    overflow-x: hidden;
    .section__header {
      @include section-header;
      margin-bottom: 19px;
    }


    .cols__wrapper {
      margin-bottom: 55px;

      position: relative;
      overflow-x: hidden;

      .container {
        display: flex;
        justify-content: flex-end;
      }

      .title__wrapper {
        @include default-text;
        max-width: 600px;
        padding: 5px 0 77px;
        position: relative;

        &:after {
          content: '';
          height: 3px;
          width: 100vw;
          position: absolute;
          bottom: 0;
          left: -2px;
          background: black;
        }
      }

      .img__wrapper {
        position: relative;
        display: flex;
        align-items: flex-end;

        &:after {
          content: '';
          height: 2px;
          width: 100vw;
          position: absolute;
          bottom: 3px;
          right: 99%;
          background: black;
        }
      }
    }

    .packages {
      position: relative;
      z-index: 1;

      .abs__img {
        position: absolute;
        top: -50px;
        right: -50px;
        z-index: 0;
      }

      .section__header {
        margin-bottom: 23px;
      }

      .packages__cols {
        z-index: 2;
        position: relative;
        display: flex;
        justify-content: center;
        margin-bottom: 55px;

        .pack {
          margin-right: 20px;
          background: white;
          padding: 20px 15px 30px;
          border: 1px solid #CDE4F0;
          border-radius: 12px;
          max-width: 285px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;

          &:last-child {
            margin-right: 0;
          }

          .pack__title {
            font-size: 22px;
            line-height: 30px;
            text-align: center;
            color: $green;
            margin-bottom: 15px;
          }

          .pack__subtitle {
            max-width: 165px;
            font-size: 18px;
            line-height: 30px;
            text-align: center;
            margin-bottom: 15px;
            color: #979797;
          }

          .num__head {
            text-align: center;
            font-size: 18px;
            line-height: 30px;
            color: black;
            margin-bottom: 10px;
          }

          .num {

            background: #89CBC4;
            border-radius: 12px;
            width: 50px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 18px;
            line-height: 30px;
            margin-bottom: 24px;
          }

          .price {
            padding-top: 20px;
            border-top: 1px solid #CDE4F0;
            width: 100%;

            .cost_count {
              font-size: 22px;
              line-height: 30px;
              text-align: center;
              color: $green;
              margin-bottom: 5px;
            }

            .cost_subcount {
              font-size: 12px;
              line-height: 14px;
              text-align: center;
              color: $green;
            }
          }
        }

      }
    }

    .seo__header {
      text-align: center;
      background: #B6CFDC url("/img/border.png") no-repeat center/cover;
      padding: 29px 10px;
      margin-bottom: 30px;
      position: relative;
      text-transform: uppercase;
      border-radius: 12px;
      .header__content{
        font-size: 22px;
        line-height: 30px;
        z-index: 2;
        position: relative;
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


      span {
        font-size: 12px;
        line-height: 30px;

      }
    }

    .seo__content {
      @include default-text;
      margin-bottom: 70px;
    }
  }
}

@media screen and (max-width: 992px) {
  .cost__page {
    .first__screen {
      .container {
        .img__side {
          left: 50%;
        }
      }
    }

    .shipping {
      .cols__wrapper {
        .container {
          flex-direction: column-reverse;

          .img__wrapper, .title__wrapper {
            &:after {
              display: none;
            }

          }

          .img__wrapper {
            margin: 0 -15px;
          }

          .title__wrapper {
            max-width: 100%;
            padding-bottom: 0;
            margin-bottom: 40px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .cost__page {
    .first__screen {
      overflow-x: hidden;

      .container {
        .title__side {
          padding: 26px 0 0;
          max-width: 100%;

          .page__header {
            font-size: 30px;
            line-height: 30px;
            text-align: center;
            margin-bottom: 15px;
          }

          .page__subheader {
            font-size: 18px;
            line-height: 30px;
          }
        }

        .img__side {
          left: initial;
          top: initial;
          right: initial;
          bottom: initial;
          position: relative;
          margin-right: -50px;
        }
      }
    }

    .shipping {
      border-radius: 20px 20px 0 0;
      padding: 35px 0 160px;
      margin-bottom: -110px;

      .section__header {
        margin-bottom: 15px;
      }

      .cols__wrapper {
        .container {

        }
      }

      .packages {
        .abs__img {
          display: none;
        }

        .packages__cols {
          margin-bottom: 30px;

          .pack {
            margin-right: 10px;

            .pack__title {
              font-size: 18px;
              line-height: 24px;
              margin-bottom: 6px;
            }

            .pack__subtitle {
              font-size: 14px;
              line-height: 24px;
              margin-bottom: 6px;
            }

            .num__head {
              font-size: 14px;
              line-height: 24px;
            }

            .price {
              .cost_count {
                font-size: 18px;
                line-height: 24px;
              }

              .cost_subcount {
                font-size: 12px;
                line-height: 14px;
              }
            }

          }
        }
      }

    .seo__header{
      padding: 26px;
      .header__content{
        font-size: 18px;
        line-height: 30px;
      }
    }
    }
  }
}

</style>
