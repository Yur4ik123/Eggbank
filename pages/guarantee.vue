<template>
  <div class="guarantee__page">
    <PartialsBreadcrumbs/>
    <div class="first__screen">
      <div class="container">
        <div class="page__title">
          <h1 class="page__header">
            Our Guarantee
          </h1>
          <div class="page__description">
            Advanced technology embryology, state-of-the-art laboratory equipment and certified culture media, strict
            SOPs, protocols daily measuring and controlling laboratory parameters, 24-hour video control, “double
            control system” - we are confident about the egg quality and provide Guarantees, not just survival, but one
            or more blastocyst embryos.

          </div>
        </div>
        <div class="page__image">
          <img src="/img/guarantee.svg" width="567" height="445" alt="" loading="lazy">
        </div>
      </div>
    </div>
    <div class="rates">
      <div class="container">
        <h2 class="section__header">
          Our Success Rates
        </h2>
        <div class="rates__list">
          <div class="rate__item">
            <div class="diagram__wrapper">
              <PartialsDiagram
                percent="80"
              />
            </div>
            <div class="title">
              Survival After Thawing
            </div>

          </div>
          <div class="rate__item">
            <div class="diagram__wrapper">
              <PartialsDiagram
                percent="74"
              />
            </div>
            <div class="title">
              Blastulation
            </div>

          </div>
          <div class="rate__item">
            <div class="diagram__wrapper">
              <PartialsDiagram
                percent="75"
              />
            </div>
            <div class="title">
              Pregnancy Rate
            </div>

          </div>
          <div class="rate__item">
            <div class="diagram__wrapper">
              <PartialsDiagram
                percent="55"
              />
            </div>
            <div class="title">
              Life Birth Rate
            </div>

          </div>

        </div>
        <div class="footnote">
          *Normal PGT, Karyotype, Spermogram
        </div>
        <div class="rates__title">
          As Egg survival is not the best indicator of egg quality and therefore we take the additional step of
          guaranteeing a usable quality blastocyst.
          We guarantee at least one or more blastocyst will be available for transfer, freezing, or biopsy. If the
          guarantee is not satisfied then we will provide a new egg lot for free….)

        </div>
        <div class="btn__wrapper ">
          <PartialsGreenBtn title="Find a Donor"/>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "guarantee"
}
</script>

<style lang="scss" scoped>
.first__screen {
  .container {
    display: grid;
    grid-template-columns: 1.3fr 1fr;

    .page__title {
      padding: 70px 0 120px;

      .page__header {
        @include page-header;
        margin-bottom: 21px;
        text-transform: initial;
        text-align: left;

      }

      .page__description {
        font-size: 22px;
        line-height: 36px;
        color: black;
      }
    }

    .page__image {
      align-self: center;
      justify-self: center;
    }
  }
}

.rates {
  padding: 55px 0 80px;
  border-radius: 60px 60px 0 0;
  background-color: #CDE4F0;

  .section__header {
    @include section-header;
    margin-bottom: 25px;
    text-transform: uppercase;
  }

  .rates__list {
    margin-bottom: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;

    .rate__item {
      justify-self: center;

      .diagram__wrapper {
        width: 190px;
        height: 190px;
        position: relative;
        margin-bottom: 20px;

      }

      .title {
        font-size: 22px;
        line-height: 24px;
        text-align: center;
      }
    }
  }

  .footnote {
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 54px;
    text-align: center;
    color: #979797;
  }

  .rates__title {
    margin-bottom: 30px;
    font-size: 18px;
    line-height: 30px;
  }

  .btn__wrapper {
    display: flex;
    justify-content: center;
  }
}

@media screen and (max-width: 992px) {
  .rates {
    .rates__list {
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
    }
  }
}

@media screen and (max-width: 768px) {
  .first__screen {
    margin-bottom: 30px;

    .container {
      grid-template-columns: 1fr;

      .page__title {
        padding: 10px 0 0;

        .page__header {
          margin-bottom: 15px;
        }

        .page__description {
          font-size: 18px;
          line-height: 30px;
        }
      }

    }
  }
  .rates {
    padding: 35px 0 50px;
    border-radius: 12px 12px 0 0;

    .section__header {
      margin-bottom: 20px;
    }

    .rates__list {
      margin-bottom: 10px;

      .rate__item {
        .diagram__wrapper {
          margin-bottom: 15px;
          width: 162px;
          height: 162px;
        }

        .title {
          font-size: 14px;
          line-height: 24px;
        }
      }
    }

    .footnote, .rates__title {
      margin-bottom: 25px;
      font-size: 14px;
      line-height: 30px;
    }

  }
}

</style>
