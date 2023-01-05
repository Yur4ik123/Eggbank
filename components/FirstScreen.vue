<template>
  <div class="first__screen">
    <div class="container">
      <div class="title__side">
        <h1 class="page__title">
          <span>Making The Dream</span>
          Of Childbirth Really Affordable
        </h1>
        <h2 class="page__subtitle">
          A.Egg Bank Is Here To Help You
        </h2>
        <PartialsGreenBtn title="Find a Donor"/>

      </div>
      <div class="img__side">
        <img :src="img" width="834" height="502"  alt="" loading="lazy">

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "FirstScreen",
  props: {
    img: {
      default: ''
    }

  }
}
</script>

<style lang="scss" scoped>
.first__screen {
  overflow-x: hidden;

  .container {

    display: flex;
    justify-content: flex-start;

    .title__side {
      display: flex;
      justify-content: flex-start;
      flex-basis: 50%;
      min-width: 50%;
      padding: 95px 0;
      flex-direction: column;

      .page__title {
        font-size: 54px;
        line-height: 64px;
        color: black;
        text-transform: uppercase;
        font-family: Avenir, sans-serif;
        margin-bottom: 16px;

        span {
          color: $green;
          display: block;
        }
      }

      .page__subtitle {
        margin-top: 0;
        font-family: Avenir, sans-serif;
        font-size: 22px;
        line-height: 36px;
        margin-bottom: 36px;

      }
    }

    .img__side {
      display: flex;
      justify-content: flex-start;
      flex-basis: 50vw;
      min-width: 50vw;

      img {
        max-width: 100%;
        object-fit: contain;
        height: auto;
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .first__screen {
    .container {
      position: relative;

      .title__side {
        flex-basis: 65%;
      }

      .img__side {
        flex-basis: initial;
        min-width: initial;
        right: -200px;
        left: 50%;
        position: absolute;


      }
    }
  }

}

@media screen and (max-width: 900px) {
  .first__screen {
    .container {
      position: relative;

      .title__side {
        flex-basis: 65%;
      }

      .img__side {
        right: -100px;
        top: 50%;
        transform: translateY(-50%);
        left: 50%;
        position: absolute;
      }
    }
  }

}

@media screen and (max-width: 700px) {
  .first__screen {
    .container {
      position: relative;
      flex-direction: column;

      .title__side {
        flex-basis: initial;
        min-width: 100%;
        padding-bottom: 0;
        padding-top: 30px;
        align-items: center;

        .page__title {
          font-size: 30px;
          line-height: 44px;
          text-align: center;
          margin-bottom: 10px;
        }

        .page__subtitle {
          font-size: 18px;
          line-height: 30px;
          text-align: center;
          margin-bottom: 20px;
        }
      }

      .img__side {
        padding-top: 20px;
        position: relative;
        right: initial;
        top: initial;
        transform: none;
        left: initial;
        margin-right: -75px;
      }
    }
  }

}
</style>
