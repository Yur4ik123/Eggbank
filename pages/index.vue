<template>
  <div class="index__page">
    <FirstScreen img="/img/main.png"/>
    <section class="why__eggbank">
      <img src="~/assets/img/Ellipse3.png" width="250" height="507" loading="lazy" alt="" class="abs__img">
      <div class="container">
        <h3 class="section__header">
          Why A.EggBank
        </h3>
        <div class="cols__wrapper">
          <div class="col__item safety">
            <div class="label">
              Safety
            </div>
            <ul class="doted__list">
              <li>
                Oocytes From Fully Screened And Tested Donors.
              </li>
              <li>
                Acompayning Documentation In Accordance With Your National Governmental Requirements (FDA, HEPA, etc.)
              </li>
            </ul>
            <div class="license">
              <div class="l__item">
                <img src="~/assets/img/fda.png" width="87" height="35" loading="lazy" alt="">
              </div>
              <div class="l__item">
                <img src="~/assets/img/hfea.png" width="101" height="39" loading="lazy" alt="">
              </div>
              <div class="l__item">
                <img src="~/assets/img/fmc.png" width="88" height="41" loading="lazy" alt="">
              </div>
            </div>

          </div>
          <div class="col__item quality">
            <div class="label">
              Quality
            </div>
            <ul class="doted__list">
              <li>
                Impressive Frozen Egg Sucсess Rates.
              </li>
            </ul>
            <div class="percentage__list">
              <div class="percentage__item">
                <div class="percent">
                  <span class="num">80%</span>
                </div>
                <div class="title">
                  Survival After Thawing
                </div>
              </div>
              <div class="percentage__item">
                <div class="percent">
                  <span class="num">74%</span>
                </div>
                <div class="title">
                  Blastulation
                </div>
              </div>
              <div class="percentage__item">
                <div class="percent">
                  <span class="num">75%</span>
                </div>
                <div class="title">
                  Pregnancy Rate
                </div>
              </div>
              <div class="percentage__item">
                <div class="percent">
                  <span class="num">55%</span>
                </div>
                <div class="title">
                  Life Birth Rate
                </div>
              </div>
            </div>


          </div>
          <div class="col__item guarantee">
            <div class="label">
              Guarantee
            </div>
            <ul class="doted__list">
              <li>
                We Guarantee At Least 1 Blastocyst From Each Pack Of 8 Oocites.
              </li>
              <li>
                If The Ordered Lot Of Eggs Fails, We Will Provide A New Egg Lot For Free.
              </li>
            </ul>
            <div class="percentage__list">
              <div class="percentage__item">
                <div class="percent">
                  <span class="num">100%</span>
                </div>
                <div class="title">
                  Guarantee Of Blastocyst Success
                </div>
              </div>
            </div>


          </div>
          <div class="col__item full__service">
            <div class="label">
              A Full-Service
            </div>
            <ul class="doted__list">
              <li>
                Personalized Approach
              </li>
            </ul>
            <div class="percentage__list">
              <div class="percentage__item">
                <div class="percent">
                  <span class="num">
                    <img src="~/assets/img/svg-gobbler(70).svg" width="32" height="32" alt="">
                  </span>
                </div>
                <div class="title">
                  Dedicated Project Management
                </div>
              </div>
              <div class="percentage__item">
                <div class="percent">
                  <span class="num">
<img src="~/assets/img/svg-gobbler(69).svg" width="32" height="32" alt="">
                  </span>
                </div>
                <div class="title">
                  Support & Assistance
                </div>
              </div>
              <div class="percentage__item">
                <div class="percent">
                  <span class="num">
                    <img src="~/assets/img/svg-gobbler(71).svg" width="32" height="32" alt="">
                  </span>
                </div>
                <div class="title">
                  Customization
                  To Your Processes
                </div>
              </div>
              <div class="percentage__item">
                <div class="percent">
                  <span class="num">
                    <img src="~/assets/img/svg-gobbler(72).svg" width="32" height="32" alt="">
                  </span>
                </div>
                <div class="title">
                  Attention To Your Requirements
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>

    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
<style lang="scss">
.why__eggbank {
  position: relative;
  z-index: 1;
  background: #CDE4F0;
  border-radius: 60px 60px 0 0;
  padding: 55px 0 215px;
  margin-bottom: -145px;

  .abs__img {
    position: absolute;
    left: 0;
    top: 69px;
  }

  .section__header {
    @include section-header;
  }

  .cols__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 25px 20px;

    .col__item {
      margin-top: 20px;
      position: relative;
      background: #FAFCFD;
      border-radius: 12px;
      padding: 42px 10px 25px 25px;

      .label {
        font-size: 22px;
        line-height: 36px;
        padding: 4px 16px;
        text-transform: uppercase;
        width: fit-content;
        color: white;
        position: absolute;
        left: 25px;
        top: 0;
        transform: translateY(-50%);
        background: $green;
        border-radius: 12px;

      }

      .doted__list {
        @include doted-list;

      }

      &.safety {
        .doted__list {
          margin-bottom: 38px !important;
        }
      }

      &.quality {
        .doted__list {
          margin-bottom: 15px !important;
        }
      }

      &.guarantee {
        .doted__list {
          margin-bottom: 15px !important;
        }

        .percentage__list {
          grid-template-columns: 1fr;

          .percentage__item {
            .percent {
              background-color: rgba($color: #B8DDF1, $alpha: 0.2);

              &:before {
                background-color: rgba($color: #B8DDF1, $alpha: 0.2);
              }

              &:after {
                background-color: #B8DDF1;
              }
            }
          }
        }
      }

      &.full__service {
        .doted__list {
          margin-bottom: 15px !important;
        }

        .percentage__list {
          .percentage__item {
            .percent {
              background-color: rgba($color: #E8BDD8, $alpha: 0.2);

              &:before {
                background-color: rgba($color: #E8BDD8, $alpha: 0.2);
              }

              &:after {
                background-color: #E8BDD8;
              }
            }
          }
        }
      }

      .percentage__list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 5px 15px;

        .percentage__item {
          display: grid;
          grid-template-columns: 82px 1fr;
          grid-gap: 10px;

          .title {
            font-size: 18px;
            line-height: 26px;
            color: black;
            align-self: center;
          }

          .percent {

            width: 82px;
            height: 82px;
            border-radius: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            color: white;
            font-size: 22px;
            line-height: 22px;
            text-transform: uppercase;
            background-color: rgba($color: #89CBC4, $alpha: 0.2);
            z-index: 4;

            .num {
              position: relative;
              z-index: 5;
            }

            &:before {
              position: absolute;
              top: 50%;
              left: 50%;
              content: '';
              transform: translate(-50%, -50%);
              width: 70px;
              height: 70px;
              border-radius: 100%;
              background-color: rgba($color: #89CBC4, $alpha: 0.2);
              z-index: 2;
            }

            &:after {
              position: absolute;
              top: 50%;
              left: 50%;
              content: '';
              transform: translate(-50%, -50%);
              width: 56px;
              height: 56px;
              border-radius: 100%;
              background-color: #89CBC4;
              z-index: 3;
            }
          }
        }
      }

      .license {
        display: flex;

        .l__item {
          padding-right: 20px;
          margin-right: 20px;
          border-right: 1px solid #CDE4F0;

          &:last-child {
            margin-right: 0;
            padding-right: 0;
            border-right: none;
          }
        }
      }

    }
  }
}

@media screen and (max-width: 992px) {
  .why__eggbank {
    .cols__wrapper {
      grid-template-columns: 1fr;
    }
  }
}

@media screen and (max-width: 768px) {
  .why__eggbank {
    padding: 35px 0 176px;
    border-radius: 20px 20px 0 0;

    .abs__img {
      display: none;
    }

    .cols__wrapper {
      grid-gap: 20px;

      .col__item {
        padding: 30px 10px;

        .label {
          padding: 3px 10px;
          font-size: 18px;
          line-height: 30px;
        }

        .doted__list {
          li {
            font-size: 14px;
            line-height: 24px;
            margin-bottom: 25px;
          }
        }

        .license {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 15px;
          padding: 0 15px;

          .l__item {
            margin-right: 0;
            padding-right: 15px;
            align-self: center;

            img {
              height: auto;
              object-fit: contain;
            }
          }
        }

        &.safety {
          .doted__list {
            margin-bottom: 15px !important;
          }
        }

        &.quality {
          .doted__list {
            margin-bottom: 5px !important;
          }
        }

        .percentage__list {
          grid-gap: 10px 12px;
          .percentage__item{
            grid-template-columns: 57px 1fr;
            grid-gap: 8px;
            .percent{
              width: 57px ;
              height: 57px;
              &:before{
                width: 49px ;
                height: 49px;
              }
              &:after{
                width: 39px ;
                height: 39px;
              }
              .num{
                font-size: 14px;
                line-height: 14px;
                img{
                  max-width: 25px;
                  height: auto;
                  object-fit: contain;
                }
              }

            }
            .title{
              font-size: 14px;
              line-height: 20px;
            }
          }
        }
      }
    }
  }

}
</style>
