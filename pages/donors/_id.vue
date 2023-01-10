<template>
  <div class="donor__page">
    <PartialsBreadcrumbs></PartialsBreadcrumbs>
    <div class="container">
      <div class="page__nav">
        <a href="" class="nav__links">
          About the donor
        </a>
        <a href="" class="nav__links">
          Personal Information
        </a>
        <a href="" class="nav__links">
          Other detheils
        </a>
        <a href="" class="nav__links">
          Medical information
        </a>

      </div>
      <div class="page__grid">
        <div class="main__info">
          <CategoryDonorGallery></CategoryDonorGallery>
          <div class="donor__title">
            <div class="donor__id">
              Donor id326338
            </div>
            <div class="params__row">
              <div class="param__title">
                Donor Identity
              </div>
              <div class="param__data">
                ID Release/Non-ID Release
              </div>
            </div>
            <div class="params__row">
              <div class="param__title">
                Race
              </div>
              <div class="param__data">
                ID Release/Non-ID Release
              </div>
            </div>
            <div class="params__row">
              <div class="param__title">
                Ethnic Origin
              </div>
              <div class="param__data">
                Middle Eastern
              </div>
            </div>
            <div class="params__row">
              <div class="param__title">
                Natural Eye colour
              </div>
              <div class="param__data">
                Blue
              </div>
            </div>
            <div class="params__row">
              <div class="param__title">
                Natural Hair colour
              </div>
              <div class="param__data">
                Medium brown hair
              </div>
            </div>
            <div class="params__row">
              <div class="param__title">
                Height
              </div>
              <div class="param__data">
                167cm
              </div>
            </div>
            <div class="params__row">
              <div class="param__title">
                Weight
              </div>
              <div class="param__data">
                56 kg
              </div>
            </div>
            <div class="params__row">
              <div class="param__title">
                Education
              </div>
              <div class="param__data">
                specialized secondary
              </div>
            </div>
            <div class="viewed__count">
              <img src="/img/eye.svg" width="22" height="22" alt="">
              total viewed 5 times
            </div>
          </div>

        </div>
        <div class="buy__block">
          <div class="block__wrapper">
            <div class="block__part">
              <div class="part__header">
                Stock Availability ***
              </div>
              <div class="part__subheader">
                Packages
              </div>
              <div class="packages">
                <div class="pack">
                  <div class="checkbox__wrapper">
                    <label>
                      <input class="uk-checkbox" type="radio" v-model="pack" value="0">
                      Basic Egg Package**
                    </label>
                  </div>
                  <div class="short__desc">
                    8 cryo donor’s oocytes*
                  </div>
                  <div class="gar">
                    (1 blastocyst guaranteed)
                  </div>
                  <div class="price">
                    <div class="price__wrap">
                      $ 9,680.00 *
                    </div>
                    <span class="tax">
                        inc TAX.
                    </span>

                  </div>

                </div>
                <div class="pack">
                  <div class="checkbox__wrapper">
                    <label>
                      <input class="uk-checkbox" type="radio" v-model="pack" value="1">
                      Premier Egg Package**

                    </label>
                  </div>
                  <div class="short__desc">
                    14 cryo donor’s oocytes

                  </div>
                  <div class="gar">
                    (2 blastocyst guaranteed
                  </div>
                  <div class="price">
                    <div class="price__wrap">
                      $ 15,400.00 *
                    </div>
                    <span class="tax">
                        inc TAX.
                    </span>

                  </div>
                </div>

              </div>

            </div>
            <div class="block__part">
              <div class="part__header">
                Options
              </div>
              <div class="part__subheader">
                Upon Request
              </div>
              <div class="opt__cols">
                <div class="col">
                  Each Additional Oocyte
                </div>
                <div class="col cost__coll ">
                  <div class="cost">$ 1,090.00 *</div>
                  <div class="tax">
                    inc TAX.
                  </div>
                </div>
              </div>
              <div class="opt__cols">
                <div class="col green">
                  Fresh sycle oocite*
                </div>
                <div class="col green end">
                  Available
                </div>
              </div>
              <PartialsAvailability statys="now"/>
              <a href="" class="reservation__btn">
                Reservation
              </a>
              <div class="read__it-first">
                <div class="head">
                  Read it first
                </div>
                <NuxtLink to="" class="nav__to">
                  *Cost and payment conditions

                </NuxtLink>
                <NuxtLink to="" class="nav__to">
                  **Delivery conditions
                </NuxtLink>
                <NuxtLink to="" class="nav__to">
                  ***About series of steps of Donor’s selection
                </NuxtLink>
              </div>
              <div class="question__block">
                <div class="num__row">
                  <span>Questions?</span>
                  <a href="tel:+10000000000">+1 NXX-NXX-XXXX</a>
                </div>
                <div class="schedule">
                  <span class="icon">
                      <img src="/img/clock.svg" width="20" height="20" alt="">
                  </span>
                  Mon - Fri: 9am - 9pm (EST)
                </div>
                <div class="write__us-wrapper">
                  <a href="" class="write__us-btn">Write us now</a>
                </div>
              </div>
            </div>
          </div>
          <div class="block__wrapper">
            <div class="block__head">
              Reservation List
            </div>
            <div class="qty__wrapper">
              <div class="qty__header">
                Donor's Cryo Oocyte, qty
              </div>
              <div class="qty__input-wrapper">
                <a class="qty__btn minus" @click.prevent="minusQty">
                  <MinusIcon/>
                </a>
                <input type="number" class="qty" v-model="qty">
                <a class="qty__btn plus" @click.prevent="plusQty">
                  <PlusIcon/>
                </a>
              </div>
              <div class="av__req">
                Availability Request
              </div>
              <div class="fresh__wrapper">
                <label>
                  Fresh sycle oocite
                  <input
                    :class="{'active':fresh}"
                    v-model="fresh"
                    class="uk-checkbox"
                    type="checkbox">
                </label>

              </div>
              <PartialsAvailability status="request"/>
              <a href="" class="reservation__btn">
                Reservation
              </a>
              <div class="question__block">
                <div class="num__row">
                  <span>Questions?</span>
                  <a href="tel:+10000000000">+1 NXX-NXX-XXXX</a>
                </div>
                <div class="schedule">
                  <span class="icon">
                      <img src="/img/clock.svg" width="20" height="20" alt="">
                  </span>
                  Mon - Fri: 9am - 9pm (EST)
                </div>
                <div class="write__us-wrapper">
                  <a href="" class="write__us-btn">Write us now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="third__part">
          <div class="personal__info">
            <div class="personal__info-head">
              Personal Information / Profile Information
            </div>
            <div class="information__accordion-wrapper">
              <ul uk-accordion class="information__accordion">
                <li class="accordion__item">
                  <a class="uk-accordion-title" href="#">
                    Physical characteristics
                  </a>
                  <div class="uk-accordion-content">
                    <div class="physical__table">
                      <div class="table__row">
                        <div class="col title">
                          Race
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood photos (upon submitting a photo consent form), family medical history

                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Ethnic Origin
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Age
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Skin colour
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Face shape
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Hair type
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Hair colour
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Forehead
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Eyes shape
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                </li>
                <li class="accordion__item">
                  <a class="uk-accordion-title" href="#">
                    Other details
                  </a>
                  <div class="uk-accordion-content">
                    <div class="physical__table">
                      <div class="table__row">
                        <div class="col title">
                          Race
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood photos (upon submitting a photo consent form), family medical history

                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Ethnic Origin
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Age
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Skin colour
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Face shape
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Hair type
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Hair colour
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Forehead
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Eyes shape
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                </li>
                <li class="accordion__item">
                  <a class="uk-accordion-title" href="#">
                    Medical information
                  </a>
                  <div class="uk-accordion-content">
                    <div class="physical__table">
                      <div class="table__row">
                        <div class="col title">
                          Race
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood photos (upon submitting a photo consent form), family medical history

                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Ethnic Origin
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Age
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Skin colour
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Face shape
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Hair type
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Hair colour
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Forehead
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>
                      <div class="table__row">
                        <div class="col title">
                          Eyes shape
                        </div>
                        <div class="col description">
                          <p>
                            Register to gain full access into our comprehensive donor profiles, including adulthood photos (upon submitting a photo consent form), family medical history
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import MinusIcon from '~/assets/img/minus.svg?inline'
import PlusIcon from '~/assets/img/plus.svg?inline'

export default {
  name: "Donor",
  data() {
    return {
      pack: 0,
      qty: 0,
      fresh: true,
      availability: 'now' //'request'
    }
  },
  methods: {
    minusQty() {
      this.qty > 0 ? this.qty-- : false

    },
    plusQty() {
      this.qty++;
    }
  },
  components: {
    MinusIcon,
    PlusIcon
  }
}
</script>

<style lang="scss" scoped>
.page__nav {
  padding: 20px 25px;
  background: #CDE4F0;
  border: 1px solid #C3DAE7;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 19px;
  position: sticky;
  top: 90px;
  z-index: 5;

  .nav__links {
    font-size: 16px;
    line-height: 22px;
    color: black !important;
    transition: 0.3s;

    &:hover {
      color: $green !important;;
    }
  }
}

.page__grid {
  display: grid;
  grid-template-columns: 1fr 285px;
  grid-gap: 20px;
  grid-auto-rows: auto;
  grid-template-rows: (5, 1fr);

  .main__info {
    display: grid;
    grid-template-columns: 1fr 270px;
    grid-gap: 20px;
    height: fit-content;
    grid-row-start: 1;
    grid-row-end: 2;

    .donor__images {

    }

    .donor__title {
      .donor__id {
        font-size: 22px;
        line-height: 30px;
        margin-bottom: 10px;
      }

      .params__row {
        margin-bottom: 10px;

        .param__title {
          font-size: 16px;
          line-height: 20px;
          color: $green;

        }

        .param__data {
          font-size: 18px;
          line-height: 20px;
          color: black;
        }
      }

      .viewed__count {
        margin-top: 22px;
        padding-top: 27px;
        border-top: 1px solid #CDE4F0;
        display: flex;
        align-items: center;
        font-size: 16px;
        line-height: 20px;
        color: #979797;
        margin-bottom: 20px;

        img {
          margin-right: 12px;
        }
      }
    }
  }

  .buy__block {
    grid-row-start: 1;
    grid-row-end: 5;
    grid-column-start: 2;
    grid-column-end: 3;

    .block__wrapper {
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }

      padding: 15px;
      background: #FFFFFF;
      border: 1px solid #CDE4F0;
      border-radius: 12px;
      height: fit-content;

      .block__part {
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-bottom: 1px solid #CDE4F0;

        &:last-child {
          border: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }

        .part__header {
          font-size: 22px;
          line-height: 30px;
          margin-bottom: 1px;
          text-align: center;
        }

        .part__subheader {
          color: #979797;
          font-size: 16px;
          line-height: 30px;
          text-align: center;
          margin-bottom: 10px;
        }

        .packages {
          @include input-wrapper;

          .pack {
            margin-bottom: 20px;
            padding-bottom: 20px;
            border-bottom: 1px solid #CDE4F0;

            &:last-child {
              margin-bottom: 0;
              padding-bottom: 0;
              border: none;
            }

            .checkbox__wrapper {
              label {
                color: $green;

                font-size: 16px;
                line-height: 30px;

                .uk-checkbox {
                  margin-right: 8px;
                }
              }
            }

            .short__desc, .gar {

              font-size: 16px;
              line-height: 30px;

            }

            .gar {
              color: #979797;
            }

            .price, .gar, .short__desc {
              margin-left: 32px;
            }

            .price {
              display: flex;
              align-items: center;
              margin-top: 13px;

              .price__wrap {
                height: 34px;
                padding: 2px 10px;
                background: $green;
                border-radius: 12px;
                font-size: 16px;
                line-height: 30px;
                color: white;
                margin-right: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
              }


            }


          }


        }

        .tax {
          font-size: 12px;
          line-height: 30px;
          color: $green;
        }

        .opt__cols {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          grid-gap: 3px;
          margin-bottom: 10px;

          .col {
            font-size: 16px;
            line-height: 30px;
            color: black;

            &.green {
              color: $green;
            }

            &.end {
              text-align: end;
            }
          }

          .col.cost__coll {
            justify-self: end;

            .cost {
              height: 34px;
              padding: 2px 10px;
              background: $green;
              border-radius: 12px;
              font-size: 16px;
              line-height: 30px;
              color: white;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 5px;
            }

            .tax {
              text-align: end;
            }

          }


        }


        .read__it-first {
          margin-top: 50px;

          display: flex;
          flex-direction: column;
          align-items: center;

          .head {
            font-size: 22px;
            line-height: 30px;
            margin-bottom: 15px;
            color: $green;
          }

          .nav__to {
            font-size: 16px;
            line-height: 20px;
            text-align: center;
            color: $green !important;
            text-decoration: underline !important;
            transition: 0.3s;
            margin-bottom: 15px;

            &:hover {
              text-decoration: none !important;
              color: $green-hover !important;
            }
          }
        }


      }

      .question__block {
        padding-top: 10px;
        border-top: 1px solid #CDE4F0;
        margin-top: 25px;

        .num__row {
          margin-bottom: 7px;
          display: flex;
          align-items: center;
          font-size: 16px;
          line-height: 22px;

          span {

            color: black;
            margin-right: 10px;
          }

          a {
            color: $green !important;;
            text-decoration: underline !important;
            transition: 0.3s;

            &:hover {
              text-decoration: none !important;
              color: $green-hover !important;
            }

          }
        }

        .schedule {
          margin-bottom: 11px;
          display: flex;
          align-items: center;
          font-size: 16px;
          line-height: 22px;

          .icon {
            margin-right: 10px;
            border-radius: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: $green;
            width: 34px;
            height: 34px;
          }
        }

        .write__us-wrapper {
          text-align: center;

          .write__us-btn {
            color: $green !important;
            text-decoration: underline !important;
            transition: 0.3s;
            font-size: 16px;
            line-height: 22px;

            &:hover {
              color: $green-hover !important;
              text-decoration: none !important;
            }

          }
        }
      }
    }

    .reservation__btn {
      background: $green;
      border-radius: 80px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      color: white !important;
      transition: 0.3s;

      &:hover {
        background: $green-hover !important;
      }

    }

    .block__head {
      padding: 15px;
      background: #CDE4F0;
      border-radius: 12px;
      margin: -15px -15px 20px;
      text-align: center;
      font-size: 22px;
      line-height: 30px;
    }

    .qty__wrapper {
      .qty__header {
        font-size: 18px;
        line-height: 30px;
        text-align: center;
        margin-bottom: 14px;
      }

      .qty__input-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 24px;

        .qty__btn {
          padding: 10px;
          cursor: pointer;

          svg {
            path {
              transition: 0.3s;
            }
          }

          &:hover {
            svg {
              path {
                fill: $green-hover;
              }
            }
          }

        }

        input {
          background-color: white;
          width: 75px;
          height: 60px;
          text-align: center;
          font-family: Avenir, sans-serif;
          font-size: 18px;
          line-height: 30px;
          border: 1px solid #CDE4F0;
          border-radius: 12px;
        }
      }

      .av__req {
        font-size: 18px;
        line-height: 30px;
        margin-bottom: 17px;
        color: $green;
        text-align: center;

      }

      .fresh__wrapper {
        margin-bottom: 20px;

        label {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 18px;
          line-height: 30px;
          color: black;

          .uk-checkbox {
            margin-left: 12px;
            width: 64px;
            height: 32px;
            background: #8C9097;
            border-radius: 100px;
            position: relative;

            &:focus {
              border-color: transparent;
            }

            &:after {
              transition: 0.5s;
              position: absolute;
              content: ' ';
              top: 50%;
              transform: translate(0, -50%);
              left: 1px;
              width: 29px;
              height: 29px;
              background-color: white;
              border-radius: 100%;
            }
          }

          .uk-checkbox.active {
            background: $green;

            &:after {
              transform: translate(31px, -50%);
            }
          }

        }


      }
    }
  }

  .third__part {
    grid-row-start: 2;
    grid-row-end: auto;

    .personal__info {
      .personal__info-head {
        font-size: 22px;
        line-height: 30px;
        margin-bottom: 15px;
      }

      .information__accordion-wrapper {
        .information__accordion {
          margin-bottom: 40px;
          .accordion__item {
            border: 1px solid #CDE4F0;
            border-top: none;

            border-radius: 12px;
            .uk-accordion-title {
              padding: 15px 25px;
              background: #CDE4F0;
              border: 1px solid #C3DAE7;
              border-radius: 12px;

              &:before {
                background-image: url("/img/acc__arr.svg");
                transition: 0.3s;
              }

            }

            &.uk-open {
              .uk-accordion-title {
                &:before {
                  transform: rotateX(180deg);
                }
              }
            }
          }

          .uk-accordion-content {
            margin-top: 0;
            .physical__table{

              .table__row{
                display: grid;
                grid-template-columns: 180px 1fr;
                border-bottom: 1px solid #CDE4F0;
                &:last-child{
                  border: none;
                }
                .col{
                  padding: 5px 25px;
                }
                .title{
                  display: flex;
                  align-items: center;
                  font-size: 18px;
                  line-height: 30px;
                  color: $green;
                  border-right: 1px solid #CDE4F0;
                }
                .description{
                  @include default-text;
                }
              }
            }
          }
        }
      }
    }
  }

}
</style>
