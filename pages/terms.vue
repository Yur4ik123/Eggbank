<template>
  <div class="terms__page">
    <PartialsBreadcrumbs></PartialsBreadcrumbs>
    <div class="container">
      <h1 class="page__header">
        CONDITIONS OF THE DELIVERY
      </h1>
    </div>
    <div class="terms__wrapper">
      <div class="container">
        <div class="page__grid">
          <div class="sidebar__wrapper">
            <ul class="page__sidebar">
              <li class="active">
                <a href="" class="sidebar__link" @click.prevent="scrollTo('general')">
                  General Policy Of The Delivery
                </a>
              </li>
              <li class="">
                <a href="" class="sidebar__link" @click.prevent="scrollTo('covers')">
                  Who Covers Shipment Cost
                </a>
              </li>
              <li class="">
                <a href="" class="sidebar__link" @click.prevent="scrollTo('cost')">
                  The Cost Of Shipment
                </a>
              </li>
              <li class="">
                <a href="" class="sidebar__link" @click.prevent="scrollTo('logistic')">
                  Logistic Companies That We Work With And Recommend
                </a>
              </li>
              <li class="">
                <a href="" class="sidebar__link" @click.prevent="scrollTo('delivery')">
                  Terms of delivery
                </a>
              </li>
              <li class="">
                <a href="" class="sidebar__link" @click.prevent="scrollTo('info')">
                  Important Info
                </a>
              </li>
            </ul>
          </div>
          <div class="page__data">
            <h2 class="section" id="general">
              General policy of the delivery
            </h2>
            <p>
              Because of the legislation requirements and safety for the biological material, we make the shipment via
              reliable and respective logistic services and exclusively to the territory of the clinic where you want
              the shipment of selected donor’s
              eggs to be made.

            </p>
            <p>
              Prices include return delivery.*
            </p>
            <p></p>
            <h2 class="section" id="covers">
              Who covers shipment cost
            </h2>
            <p>
              Shipment cost isn’t included in the price of your order and shall be paid separately.
            </p>
            <p>
              In case you purchase 20 or more oocytes, from fully screened, FDA-eligible donors
              <a href="">A.EggBank covers the
                shipment cost in full.</a>
            </p>
            <p></p>
            <h2 class="section" id="cost">
              The cost of shipment
            </h2>
            <p>
              The cost of the shipment varies and highly depends on the place of location of your clinic to which the
              transportation will be made.
            </p>
            <p>
              The approximate shipment cost, for instance to USA – is around $3,000.
            </p>
            <p>
              These prices are approximate, your coordinator will confirm the estimated price when during the process of
              the preparation of the order.
            </p>
            <p>

            </p>
            <h2 class="section" id="logistic">
              Logistic companies that we work with and recommend
            </h2>
            <p>
              A.EggBank has a great experience with such companies as Cryoport, ArkCryo and
              World Courier. These companies provide a full range of logistic services including the rented dry shipper,
              temperature control system, door-to-door delivery, no x-ray scanning
              guaranteed, customs clearance support and insurance coverage (for international
              shipments).
            </p>
            <p>
              You can be sure that your donor’s eggs are fully safe and under the
              deepest control during all shipment procedures. As well as you can check its status and location anytime.
            </p>
            <p class="images">
              <span class="img__wrapper">
                   <img src="/img/term1.png"  alt="">
              </span>
              <span class="img__wrapper">
                   <img src="/img/term2.png"  alt="">
              </span>
              <span class="img__wrapper">
                   <img src="/img/term3.png"  alt="">
              </span>

            </p>
            <p>
              You can choose other logistic companies that provide shipment of the biological material.

            </p>
            <p>
              In case the shipping cost is covered by A.Egg Bank – we have the right to choose the logistic company to
              ship your order.
            </p>
            <p></p>
            <h2 class="section" id="delivery">
              Terms of delivery
            </h2>
            <p>
              Delivery terms highly depend on the chosen transportation company and the location of
              the clinic which will accept the donor’s oocytes.


            </p>
            <p>
              Your coordinator can provide you with information on the concrete deadlines after
              receiving your reservation and all information about the clinic where the
              transportation will be made and the selected logistic company.
            </p>
            <p>

            </p>
            <h2 class="section" id="info">
              Important info
            </h2>
            <p>
              Please, mention, that for now, we don’t ship donor’s eggs to NY state because of the local requirements.
            </p>

          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Terms",
  mounted() {
    window.addEventListener('scroll', () => {
      let scrollDistance = window.scrollY;
      if (window.innerWidth > 768) {
        document.querySelectorAll('.section').forEach((el, i) => {
          if (el.offsetTop - document.querySelector('.page__sidebar').clientHeight <= scrollDistance) {
            document.querySelectorAll('.page__sidebar li').forEach((el) => {
              if (el.classList.contains('active')) {
                el.classList.remove('active');
              }
            });
            document.querySelectorAll('.page__sidebar li')[i].classList.add('active');
          }
        });
      }
    });
  },
  methods:{
    scrollTo(id){
     document.getElementById(id).scrollIntoView({behavior: "smooth", block:'center'})
    }
  }
}
</script>

<style lang="scss" scoped>
.page__header {
  @include page-header;
}

.terms__wrapper {
  background: #CDE4F0;
  border-radius: 60px 60px 0 0;
  padding: 55px 0 70px;

  .page__grid {
    display: grid;
    grid-template-columns:284px 1fr;
    grid-gap: 40px;
  }

  .sidebar__wrapper {

  }

  .page__sidebar {
    height: fit-content;
    position: sticky;
    top: 100px;
    background: #FAFCFD;
    border-radius: 12px;
    overflow: hidden;

    li {
      padding: 0 15px 15px;

      &.active {
        background-color: #E1F0F8;

        .sidebar__link {
          border-top-color: transparent;
        }
      }

      &.active + li {
        .sidebar__link {
          border-top-color: transparent;
        }

      }

      &:first-child {
        .sidebar__link {
          border-top: none;
        }

      }

      .sidebar__link {
        padding-top: 15px;
        border-top: 1px solid #CDE4F0;
        display: block;
        font-size: 18px;
        line-height: 24px;

      }
    }
  }

  .page__data {
    @include default-text;
  }
}

@media screen and (max-width: 992px) {
  .terms__wrapper {
    border-radius: 12px 12px 0 0 ;
    padding-top: 15px;
    .page__grid {
      grid-template-columns: 1fr;

      .sidebar__wrapper {
        .page__sidebar {
          display: flex;
          flex-direction: column;
          padding: 15px !important;
          align-items: center;

          li {
            background-color: transparent !important;
            padding: 0;
            margin-bottom: 10px;

            .sidebar__link {
              padding-top: 0;
              border: none !important;
              color: #389188 !important;
              text-decoration: underline !important;
            }
          }
        }
      }
    }

  }
}

@media screen and (max-width: 768px) {
  .terms__wrapper {
    .page__grid {
      grid-template-columns: 1fr;

      .sidebar__wrapper {
        .page__sidebar {
          li {
            .sidebar__link {
              font-size: 14px;
              line-height: 24px;
              text-align: center;
            }
          }
        }
      }
      .page__data{
        .images{
          display: flex;
          justify-content: space-between;
          img{
            margin-right: 0;
            width: auto;
          }
          column-gap: 10px;
        }
      }
    }
  }
}
</style>
